# 🚀 Руководство по деплою Telegram Mini App

## Быстрый старт (5 минут)

### 1. Создание репозитория на GitHub

1. Перейдите на [GitHub](https://github.com)
2. Нажмите "New repository"
3. Название: `giftpropaganda-mini-app`
4. Сделайте репозиторий публичным
5. Нажмите "Create repository"

### 2. Загрузка кода

```bash
# Клонируйте репозиторий
git clone https://github.com/your-username/giftpropaganda-mini-app.git
cd giftpropaganda-mini-app

# Скопируйте файлы проекта в папку
# (скопируйте все файлы из giftpropaganda-frontend/)

# Обновите homepage в package.json
# Замените "your-username" на ваше имя пользователя GitHub
```

### 3. Установка зависимостей

```bash
npm install
npm install --save-dev gh-pages
```

### 4. Деплой

```bash
# Добавьте файлы в git
git add .
git commit -m "Initial commit"
git push origin main

# Деплой на GitHub Pages
npm run deploy
```

### 5. Настройка GitHub Pages

1. Перейдите в Settings репозитория
2. В разделе "Pages":
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"
3. Нажмите "Save"

### 6. Получение ссылки

Ваше приложение будет доступно по адресу:
```
https://your-username.github.io/giftpropaganda-mini-app
```

## 📱 Настройка Telegram Bot

### 1. Создание бота

1. Напишите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Введите название бота: `Gift Propaganda News`
4. Введите username: `giftpropaganda_news_bot`
5. Сохраните токен бота

### 2. Создание Mini App

1. Отправьте @BotFather команду `/newapp`
2. Выберите вашего бота
3. Введите название Mini App: `Gift Propaganda`
4. Добавьте описание: `Новости о подарках, криптовалютах и NFT`
5. Добавьте ссылку на деплой:
   ```
   https://your-username.github.io/giftpropaganda-mini-app
   ```

### 3. Получение ссылки Mini App

После настройки вы получите ссылку:
```
https://t.me/giftpropaganda_news_bot/giftpropaganda
```

## 🔧 Альтернативные платформы

### Vercel (Рекомендуется)

```bash
# Установка Vercel CLI
npm install -g vercel

# Деплой
vercel

# Следуйте инструкциям в терминале
```

### Netlify

1. Зарегистрируйтесь на [Netlify](https://netlify.com)
2. Нажмите "New site from Git"
3. Подключите GitHub репозиторий
4. Настройте:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Нажмите "Deploy site"

## 🛠 Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Откройте http://localhost:3000
```

## 📋 Чек-лист деплоя

- [ ] Создан репозиторий на GitHub
- [ ] Обновлен `homepage` в `package.json`
- [ ] Установлены зависимости
- [ ] Выполнен деплой: `npm run deploy`
- [ ] Настроены GitHub Pages
- [ ] Приложение доступно по ссылке
- [ ] Создан Telegram бот
- [ ] Настроен Mini App
- [ ] Получена ссылка Mini App

## 🔗 Полезные ссылки

- [GitHub Pages](https://pages.github.com/)
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)

## 🆘 Решение проблем

### Ошибка 404 на GitHub Pages
- Убедитесь, что branch `gh-pages` создан
- Проверьте настройки в Settings > Pages

### Mini App не открывается
- Проверьте, что ссылка корректная
- Убедитесь, что сайт доступен по HTTPS
- Проверьте консоль браузера на ошибки

### Проблемы с API
- Убедитесь, что backend сервер запущен
- Проверьте CORS настройки
- Проверьте логи в консоли браузера 