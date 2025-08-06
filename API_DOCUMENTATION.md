# API Documentation - Gift Propaganda News

## Общая информация

Все API эндпоинты возвращают данные в формате JSON. Базовый URL: `http://localhost:8000`

## Эндпоинты

### 1. Получение списка новостей

**GET** `/news/`

**Параметры запроса:**
- `category` (опционально) - фильтр по категории (например: "gifts", "crypto", "nft")
- `limit` (опционально) - количество новостей (по умолчанию 50, максимум 100)
- `offset` (опционально) - смещение для пагинации (по умолчанию 0)

**Пример запроса:**
```
GET /news/?category=gifts&limit=10&offset=0
```

**Пример ответа:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "🔼Торговый объем растёт!❤️Portals - 380 456❤️🥈Tonnel - 358 995❤️💸MRKT - 138 946❤️🏴‍☠️Fragment - 2 293",
      "content": "🔼Торговый объем растёт!❤️Portals - 380 456❤️🥈Tonnel - 358 995❤️💸MRKT - 138 946❤️🏴‍☠️Fragment - 2 293❤️🧝OTC ELF - 1 376❤️🎁Торговый объем увеличивается благодаря активным торгам новыми подарками от Снуп Дога!🙋Прирост новых пользователей так же вырос - 3 572 человека за сутки!",
      "content_html": "<p>🔼Торговый объем растёт!❤️Portals - 380 456❤️🥈Tonnel - 358 995❤️💸MRKT - 138 946❤️🏴‍☠️Fragment - 2 293❤️🧝OTC ELF - 1 376❤️🎁Торговый объем увеличивается благодаря активным торгам новыми подарками от Снуп Дога!🙋Прирост новых пользователей так же вырос - 3 572 человека за сутки!</p>",
      "link": "https://t.me/gift_newstg",
      "publish_date": "2025-08-06T06:14:18.910926",
      "category": "gifts",
      "media": [
        {
          "type": "photo",
          "url": "https://example.com/image.jpg",
          "thumbnail": "https://example.com/thumb.jpg",
          "width": 800,
          "height": 600
        }
      ],
      "reading_time": 2,
      "views_count": 150,
      "author": "Gift News",
      "source_name": "Gift News TG",
      "source_url": "https://t.me/gift_newstg",
      "source": {
        "id": 1,
        "name": "Gift News TG",
        "url": "https://t.me/gift_newstg",
        "source_type": "telegram",
        "category": "gifts",
        "is_active": true
      }
    },
    {
      "id": 2,
      "title": "💎Подарки меняются на эмодзи!✉️Если скопировать ссылку любого telegram подарка и вставить в поиск браузера - вместо подарка будет отображаться эмодзи из пака",
      "content": "💎Подарки меняются на эмодзи!✉️Если скопировать ссылку любого telegram подарка и вставить в поиск браузера - вместо подарка будет отображаться эмодзи из пака - News Emoji🔁У разных подарков модельки меняются на разные эмодзи!",
      "content_html": "<p>💎Подарки меняются на эмодзи!✉️Если скопировать ссылку любого telegram подарка и вставить в поиск браузера - вместо подарка будет отображаться эмодзи из пака - News Emoji🔁У разных подарков модельки меняются на разные эмодзи!</p>",
      "link": "https://t.me/gift_newstg",
      "publish_date": "2025-08-06T06:14:18.911039",
      "category": "gifts",
      "media": [],
      "reading_time": 1,
      "views_count": 89,
      "author": "Gift News",
      "source_name": "Gift News TG",
      "source_url": "https://t.me/gift_newstg",
      "source": {
        "id": 1,
        "name": "Gift News TG",
        "url": "https://t.me/gift_newstg",
        "source_type": "telegram",
        "category": "gifts",
        "is_active": true
      }
    }
  ],
  "total": 150,
  "page": 1,
  "pages": 15
}
```

### 2. Получение конкретной новости

**GET** `/news/{news_id}`

**Параметры пути:**
- `news_id` - ID новости (целое число)

**Пример запроса:**
```
GET /news/1
```

**Пример ответа:**
```json
{
  "id": 1,
  "title": "🔼Торговый объем растёт!❤️Portals - 380 456❤️🥈Tonnel - 358 995❤️💸MRKT - 138 946❤️🏴‍☠️Fragment - 2 293",
  "content": "🔼Торговый объем растёт!❤️Portals - 380 456❤️🥈Tonnel - 358 995❤️💸MRKT - 138 946❤️🏴‍☠️Fragment - 2 293❤️🧝OTC ELF - 1 376❤️🎁Торговый объем увеличивается благодаря активным торгам новыми подарками от Снуп Дога!🙋Прирост новых пользователей так же вырос - 3 572 человека за сутки!",
  "content_html": "<p>🔼Торговый объем растёт!❤️Portals - 380 456❤️🥈Tonnel - 358 995❤️💸MRKT - 138 946❤️🏴‍☠️Fragment - 2 293❤️🧝OTC ELF - 1 376❤️🎁Торговый объем увеличивается благодаря активным торгам новыми подарками от Снуп Дога!🙋Прирост новых пользователей так же вырос - 3 572 человека за сутки!</p>",
  "link": "https://t.me/gift_newstg",
  "publish_date": "2025-08-06T06:14:18.910926",
  "category": "gifts",
  "media": [
    {
      "type": "photo",
      "url": "https://example.com/image.jpg",
      "thumbnail": "https://example.com/thumb.jpg",
      "width": 800,
      "height": 600
    },
    {
      "type": "video",
      "url": "https://example.com/video.mp4",
      "thumbnail": "https://example.com/video_thumb.jpg",
      "width": 1280,
      "height": 720
    }
  ],
  "reading_time": 2,
  "views_count": 151,
  "author": "Gift News",
  "source_name": "Gift News TG",
  "source_url": "https://t.me/gift_newstg",
  "source": {
    "id": 1,
    "name": "Gift News TG",
    "url": "https://t.me/gift_newstg",
    "source_type": "telegram",
    "category": "gifts",
    "is_active": true
  }
}
```

### 3. Получение списка категорий

**GET** `/categories/`

**Пример запроса:**
```
GET /categories/
```

**Пример ответа:**
```json
{
  "categories": [
    "gifts",
    "crypto",
    "nft",
    "general",
    "trading",
    "defi"
  ]
}
```

### 4. Получение статистики

**GET** `/stats/`

**Пример запроса:**
```
GET /stats/
```

**Пример ответа:**
```json
{
  "total_news": 1250,
  "categories": {
    "gifts": 450,
    "crypto": 300,
    "nft": 200,
    "general": 150,
    "trading": 100,
    "defi": 50
  },
  "last_updated": "2025-08-06T10:30:00.000000"
}
```

## Telegram Bot API

### 5. Webhook для Telegram

**POST** `/webhook`

**Пример запроса:**
```json
{
  "update_id": 123456789,
  "message": {
    "message_id": 123,
    "from": {
      "id": 987654321,
      "first_name": "User",
      "username": "username"
    },
    "chat": {
      "id": 987654321,
      "type": "private"
    },
    "date": 1640995200,
    "text": "/start"
  }
}
```

**Пример ответа:**
```json
{
  "status": "ok"
}
```

### 6. Информация о боте

**GET** `/bot-info`

**Пример запроса:**
```
GET /bot-info
```

**Пример ответа:**
```json
{
  "status": "ok",
  "bot_info": {
    "id": 123456789,
    "is_bot": true,
    "first_name": "Gift Propaganda News Bot",
    "username": "gift_propaganda_bot",
    "can_join_groups": true,
    "can_read_all_group_messages": false,
    "supports_inline_queries": false
  },
  "webhook_url": "gift_propaganda_bot bot"
}
```

### 7. Отправка новостей в чат

**POST** `/send-news`

**Параметры запроса:**
- `chat_id` - ID чата (целое число)
- `news_id` (опционально) - ID конкретной новости

**Пример запроса:**
```
POST /send-news?chat_id=987654321&news_id=1
```

**Пример ответа:**
```json
{
  "status": "ok",
  "chat_id": 987654321,
  "news_id": 1
}
```

## Коды ошибок

- `200` - Успешный запрос
- `404` - Новость не найдена
- `500` - Внутренняя ошибка сервера

## Примеры использования

### Получение последних новостей о подарках:
```
GET /news/?category=gifts&limit=5
```

### Получение новостей с пагинацией:
```
GET /news/?limit=20&offset=40
```

### Получение всех новостей:
```
GET /news/?limit=100
```

### Получение новостей по категории NFT:
```
GET /news/?category=nft&limit=10
```

## Структура данных

### NewsItemResponse
- `id` - Уникальный идентификатор новости
- `title` - Заголовок новости
- `content` - Текстовое содержимое
- `content_html` - HTML содержимое
- `link` - Ссылка на оригинальную новость
- `publish_date` - Дата публикации (ISO формат)
- `category` - Категория новости
- `media` - Массив медиа файлов
- `reading_time` - Время чтения в минутах
- `views_count` - Количество просмотров
- `author` - Автор новости
- `source_name` - Название источника
- `source_url` - URL источника
- `source` - Полная информация об источнике

### MediaItem
- `type` - Тип медиа (photo, video, document)
- `url` - URL медиа файла
- `thumbnail` - URL превью
- `width` - Ширина (для изображений/видео)
- `height` - Высота (для изображений/видео)

### NewsSourceResponse
- `id` - ID источника
- `name` - Название источника
- `url` - URL источника
- `source_type` - Тип источника (telegram, rss, etc.)
- `category` - Категория источника
- `is_active` - Активен ли источник 