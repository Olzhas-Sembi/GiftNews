import axios from 'axios';
import { NewsItem } from '../types';

// Конфигурация API
const API_CONFIG = {
  LOCAL: 'http://localhost:8000/api/news/',
  LOCAL_PROD: 'http://localhost:8001/api/news/',
  PROD: 'https://giftpropaganda.onrender.com/api/news/',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
};

// Состояние API
let currentAPI = API_CONFIG.PROD;
let apiHealth = {
  local: false,
  prod: false
};

// Кэш для хранения данных
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут

// Функция для получения данных из кэша
const getFromCache = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

// Функция для сохранения данных в кэш
const setCache = (key: string, data: any) => {
  cache.set(key, { data, timestamp: Date.now() });
};

// Функция для задержки
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Функция для проверки здоровья API
const checkAPIHealth = async (url: string): Promise<boolean> => {
  try {
    const response = await axios.get(url + '?limit=1', {
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return response.status === 200;
  } catch {
    return false;
  }
};

// Функция для инициализации API
const initializeAPI = async () => {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    try {
      const localHealth = await checkAPIHealth(API_CONFIG.LOCAL);
      apiHealth.local = localHealth;

      if (localHealth) {
        currentAPI = API_CONFIG.LOCAL;
      } else {
        const prodHealth = await checkAPIHealth(API_CONFIG.PROD);
        apiHealth.prod = prodHealth;

        if (prodHealth) {
          currentAPI = API_CONFIG.PROD;
        } else {
          currentAPI = API_CONFIG.LOCAL;
        }
      }
    } catch (error: any) {
      currentAPI = API_CONFIG.LOCAL;
    }
  } else {
    const prodHealth = await checkAPIHealth(API_CONFIG.PROD);
    apiHealth.prod = prodHealth;
    currentAPI = API_CONFIG.PROD;
  }
};

// Функция для выполнения запроса с retry
const executeWithRetry = async <T>(
  requestFn: () => Promise<T>,
  retries: number = API_CONFIG.RETRY_ATTEMPTS
): Promise<T> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await requestFn();
    } catch (error: any) {
      if (attempt === retries) {
        throw error;
      }
      
      if (currentAPI === API_CONFIG.LOCAL && apiHealth.prod) {
        currentAPI = API_CONFIG.PROD;
      } else if (currentAPI === API_CONFIG.PROD && apiHealth.local) {
        currentAPI = API_CONFIG.LOCAL;
      }
      
      await delay(API_CONFIG.RETRY_DELAY * attempt);
    }
  }
  
  throw new Error('Все попытки запроса не удались');
};

export interface NewsResponse {
  status?: string;
  data: NewsItem[];
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
  pages?: number;
}

export const fetchNews = async (
  category?: string, 
  page: number = 1, 
  limit: number = 20,
  useCache: boolean = true
): Promise<NewsResponse> => {
  try {
    const cacheKey = `news_${category || 'all'}_${page}_${limit}`;
    
    if (useCache) {
      const cachedData = getFromCache(cacheKey);
      if (cachedData) {
        return cachedData;
      }
    }

    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    params.append('limit', limit.toString());
    params.append('offset', ((page - 1) * limit).toString());

    const url = `${currentAPI}?${params.toString()}`;

    const response = await executeWithRetry(async () => {
      return await axios.get<NewsResponse>(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        },
        timeout: API_CONFIG.TIMEOUT
      });
    });

    if (useCache) {
      setCache(cacheKey, response.data);
    }
    
    return response.data;
  } catch (error: any) {
    const fallbackData: NewsResponse = {
      data: [
        {
          id: 1,
          title: "📰 Новости временно недоступны",
          content: "Мы работаем над восстановлением сервиса. Попробуйте позже.",
          content_html: "<p>Мы работаем над восстановлением сервиса. Попробуйте позже.</p>",
          link: "#",
          publish_date: new Date().toISOString(),
          category: "general",
          media: []
        }
      ],
      total: 1,
      page: 1,
      pages: 1
    };

    return fallbackData;
  }
};

export const fetchNewsById = async (id: number): Promise<NewsItem> => {
  try {
    const cacheKey = `news_item_${id}`;
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    const url = `${currentAPI}${id}`;
    
    const response = await executeWithRetry(async () => {
      return await axios.get<NewsItem>(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: API_CONFIG.TIMEOUT
      });

    });

    setCache(cacheKey, response.data);
    return response.data;
  } catch (error: any) {
    throw new Error('Не удалось загрузить новость');
  }
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const cacheKey = 'categories';
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    const response = await executeWithRetry(async () => {
      return await axios.get<{status: string, data: string[]}>(`${currentAPI}categories/`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: API_CONFIG.TIMEOUT
      });
    });

    const categories = response.data.data || ['gifts', 'crypto', 'tech', 'community', 'gaming'];
    setCache(cacheKey, categories);
    return categories;
  } catch (error) {
    return ['gifts', 'crypto', 'tech', 'community', 'gaming'];
  }
};

export const clearCache = () => {
  cache.clear();
};

export const getAPIStatus = () => ({
  currentAPI,
  apiHealth,
  cacheSize: cache.size
});

if (typeof window !== 'undefined') {
  initializeAPI();
}
