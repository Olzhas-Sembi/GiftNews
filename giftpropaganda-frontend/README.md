# 🎁 GiftNews - Telegram Mini App

Telegram Mini App для новостей о подарках, криптовалютах и NFT с динамическими стилями и красивым дизайном.

## 🚀 Деплой на GitHub Pages

### 📍 Ссылка на приложение:
```
https://rustembekov.github.io/GiftNews
```

### 📱 Telegram Mini App:
```
https://t.me/GiftPropagandaBot/giftnews
```

## 🎯 Особенности

### ✨ Динамические стили
- Каждая новость имеет свой уникальный фон и иконку
- Поддержка градиентов, изображений и цветов из API
- Адаптивные цвета текста для лучшей читаемости
- Fallback система для отсутствующих данных

### 📱 Telegram Web App интеграция
- Полная поддержка Telegram Mini App API
- Haptic feedback (вибрация)
- Адаптация под тему Telegram
- Нативные попапы и алерты
- Поддержка всех платформ (iOS, Android, Desktop)

### 🎨 Современный дизайн
- Стеклянные эффекты (backdrop-filter)
- Плавные анимации и переходы
- Responsive дизайн
- Оптимизация для мобильных устройств

## 🛠 Технологии

- **Frontend**: React 19, TypeScript, Styled Components
- **API**: Axios с кэшированием и retry логикой
- **Telegram**: Web App API
- **Деплой**: GitHub Pages
- **Сборка**: Create React App

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Header.tsx      # Заголовок с поиском и категориями
│   ├── NewsCard.tsx    # Карточка новости с динамическими стилями
│   ├── FeaturedNewsCard.tsx # Премиум карточка для первых новостей
│   ├── NewsModal.tsx   # Модальное окно с полным описанием
│   ├── MediaViewer.tsx # Просмотр медиа файлов
│   └── SearchBar.tsx   # Поиск по новостям
├── hooks/              # Custom hooks
│   └── useNews.ts      # Логика загрузки новостей
├── api/                # API интеграция
│   └── news.ts         # API клиент с кэшированием
├── types/              # TypeScript типы
│   └── index.ts        # Интерфейсы для данных
├── utils/              # Утилиты
│   ├── formatters.ts   # Форматирование дат и текста
│   ├── newsStyles.ts   # Логика динамических стилей
│   └── testData.ts     # Тестовые данные
├── constants/          # Константы
│   └── index.ts        # Категории и настройки
└── telegram/           # Telegram Web App интеграция
    ├── TelegramWebApp.ts # Основной класс интеграции
    └── telegram-webapp.d.ts # TypeScript типы
```

## 🚀 Быстрый старт

### 1. Клонирование репозитория
```bash
git clone https://github.com/rustembekov/GiftNews.git
cd GiftNews
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Запуск в режиме разработки
```bash
npm start
```

### 4. Сборка для продакшена
```bash
npm run build
```

### 5. Деплой на GitHub Pages
```bash
npm run deploy
```

## 📱 Настройка Telegram Mini App

### 1. Создание бота
1. Напишите [@BotFather](https://t.me/BotFather)
2. Отправьте `/newbot`
3. Название: `GiftNews`
4. Username: `giftnews_bot`

### 2. Создание Mini App
1. Отправьте `/newapp`
2. Выберите вашего бота
3. Название: `GiftNews`
4. Описание: `Новости о подарках, криптовалютах и NFT`

### 3. Получение ссылки
После настройки получите ссылку:
```
https://t.me/giftnews_bot/giftnews
```

## 🎨 Динамические стили

### Поддерживаемые типы фонов:
- **background_image** - изображение с градиентным наложением
- **background_color** - сплошной цвет
- **gradient_start/end** - градиентный фон
- **Fallback** - градиенты по категориям

### Иконки:
- **API иконка** - из данных новости
- **Категорийная иконка** - по умолчанию
- **Fallback иконка** - 📰

### Категории:
- 🎁 **gifts** - подарки
- ₿ **crypto** - криптовалюты
- 💻 **tech** - технологии
- 👥 **community** - сообщество
- 🖼️ **nft** - NFT

## 🔧 API интеграция

### Endpoints:
- `GET /api/news/` - список новостей
- `GET /api/news/{id}` - детали новости
- `GET /api/categories/` - категории

### Особенности:
- Автоматическое кэширование (5 минут)
- Retry логика (3 попытки)
- Fallback на тестовые данные
- Подробное логирование запросов

## 📊 Логирование

Приложение ведет подробные логи:
- API запросы и ответы
- Telegram Web App инициализация
- Пользовательские действия
- Ошибки и предупреждения

## 🎯 Функции

### Основные:
- ✅ Просмотр новостей по категориям
- ✅ Поиск по заголовкам и содержанию
- ✅ Динамические стили для каждой новости
- ✅ Модальные окна с полным описанием
- ✅ Просмотр медиа файлов
- ✅ Пагинация (загрузка дополнительных новостей)

### Telegram интеграция:
- ✅ Haptic feedback
- ✅ Нативные попапы
- ✅ Адаптация под тему
- ✅ Открытие ссылок в Telegram
- ✅ Получение данных пользователя

## 🚀 Деплой

### GitHub Pages:
```bash
npm run deploy
```

### Vercel (рекомендуется):
```bash
npm install -g vercel
vercel
```

### Netlify:
1. Подключите GitHub репозиторий
2. Build command: `npm run build`
3. Publish directory: `build`

## 📈 Производительность

- **Размер сборки**: ~100KB (gzipped)
- **Время загрузки**: <2 секунды
- **Кэширование**: 5 минут
- **Retry**: 3 попытки
- **Timeout**: 10 секунд

## 🔗 Полезные ссылки

- [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)

## 📄 Лицензия

MIT License

## 🤝 Поддержка

Если у вас есть вопросы или предложения:
1. Создайте Issue в репозитории
2. Проверьте логи в консоли браузера
3. Убедитесь, что backend сервер запущен

---

**GiftNews** - современный Telegram Mini App для новостей! 🎉
