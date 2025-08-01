# 📱 Настройка Telegram Mini App

## 🚀 Быстрая настройка (5 минут)

### 1. Создание Telegram бота

1. Напишите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Введите название бота: `Gift Propaganda News`
4. Введите username: `giftpropaganda_news_bot`
5. Сохраните токен бота

### 2. Создание Mini App

1. Отправьте @BotFather команду `/newapp`
2. Выберите вашего бота из списка
3. Введите название Mini App: `Gift Propaganda`
4. Добавьте описание: `Новости о подарках, криптовалютах и NFT`
5. Добавьте ссылку на ваш деплой:
   ```
   https://your-username.github.io/giftpropaganda-mini-app
   ```

### 3. Получение ссылки Mini App

После настройки вы получите ссылку вида:
```
https://t.me/giftpropaganda_news_bot/giftpropaganda
```

## 🔧 Техническая настройка

### 1. Деплой приложения

#### GitHub Pages:
```bash
# Установка gh-pages
npm install --save-dev gh-pages

# Обновите homepage в package.json
"homepage": "https://your-username.github.io/giftpropaganda-mini-app"

# Деплой
npm run deploy
```

#### Vercel (Рекомендуется):
```bash
# Установка Vercel CLI
npm install -g vercel

# Деплой
vercel
```

### 2. Настройка HTTPS

Telegram Mini Apps требуют HTTPS. Убедитесь, что ваш хостинг поддерживает SSL.

### 3. Настройка CORS

Добавьте в ваш backend сервер CORS заголовки:
```python
# Для FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене укажите конкретные домены
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 📱 Интеграция с Telegram

### 1. Инициализация Mini App

Приложение автоматически инициализируется при загрузке:
```typescript
useEffect(() => {
  TelegramWebApp.init();
  TelegramWebApp.expand();
}, []);
```

### 2. Использование Telegram функций

```typescript
// Haptic feedback
TelegramWebApp.triggerHapticFeedback('impact');

// Показ попапа
TelegramWebApp.showAlert('Сообщение');

// Открытие ссылки
TelegramWebApp.openLink('https://example.com');

// Получение данных пользователя
const user = TelegramWebApp.getUserData();
```

### 3. Настройка кнопок

```typescript
// Main Button
TelegramWebApp.setMainButton('Открыть новости', () => {
  // Действие при нажатии
});

// Back Button
TelegramWebApp.setBackButton(() => {
  TelegramWebApp.close();
});
```

## 🎨 Кастомизация

### 1. Настройка темы

Приложение автоматически адаптируется под тему Telegram:
```typescript
const theme = TelegramWebApp.getThemeParams();
// Используйте theme.bg_color, theme.text_color и т.д.
```

### 2. Адаптация под платформу

```typescript
const platform = TelegramWebApp.getPlatform();
// 'ios', 'android', 'macos', 'tdesktop', 'weba', 'unigram', 'unknown'
```

## 🔗 Полезные ссылки

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [Telegram Web App API](https://core.telegram.org/bots/webapps#initializing-mini-apps)
- [BotFather Commands](https://core.telegram.org/bots#botfather-commands)

## 🆘 Решение проблем

### Mini App не открывается
1. Проверьте, что ссылка корректная
2. Убедитесь, что сайт доступен по HTTPS
3. Проверьте консоль браузера на ошибки
4. Убедитесь, что бот не заблокирован

### Проблемы с API
1. Проверьте CORS настройки
2. Убедитесь, что backend сервер запущен
3. Проверьте логи в консоли браузера

### Проблемы с темой
1. Проверьте, что используются CSS переменные Telegram
2. Убедитесь, что тема корректно применяется
3. Проверьте поддержку темной/светлой темы

## 📋 Чек-лист

- [ ] Создан Telegram бот
- [ ] Настроен Mini App через @BotFather
- [ ] Приложение задеплоено на HTTPS
- [ ] Настроены CORS заголовки
- [ ] Протестирована интеграция с Telegram
- [ ] Проверена работа в разных темах
- [ ] Протестированы все функции Mini App
- [ ] Получена рабочая ссылка Mini App

## 🎯 Результат

После настройки у вас будет:
- Рабочий Telegram Mini App
- Ссылка для открытия в Telegram
- Полная интеграция с Telegram API
- Адаптивный дизайн под тему Telegram
- Haptic feedback и нативные функции 