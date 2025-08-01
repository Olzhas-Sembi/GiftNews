import { NewsItem } from '../types';

export const generateTestNews = (): NewsItem[] => {
  return [
    {
      id: 1,
      title: "🎁 Новый NFT проект с уникальными подарками",
      content: "Откройте для себя эксклюзивную коллекцию NFT с редкими подарками и бонусами для участников.",
      content_html: "<p>Откройте для себя эксклюзивную коллекцию NFT с редкими подарками и бонусами для участников.</p>",
      link: "#",
      publish_date: new Date().toISOString(),
      category: "gifts",
      icon: "🎁",
      background_image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400",
      reading_time: 3,
      views_count: 1250
    },
    {
      id: 2,
      title: "₿ Bitcoin достиг нового максимума",
      content: "Криптовалюта показывает рекордный рост на фоне институционального интереса.",
      content_html: "<p>Криптовалюта показывает рекордный рост на фоне институционального интереса.</p>",
      link: "#",
      publish_date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      category: "crypto",
      icon: "₿",
      gradient_start: "#4ecdc4",
      gradient_end: "#44a08d",
      reading_time: 5,
      views_count: 2100
    },
    {
      id: 3,
      title: "💻 Искусственный интеллект в 2024 году",
      content: "Обзор последних достижений в области машинного обучения и нейронных сетей.",
      content_html: "<p>Обзор последних достижений в области машинного обучения и нейронных сетей.</p>",
      link: "#",
      publish_date: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      category: "tech",
      icon: "🤖",
      background_color: "#45b7d1",
      reading_time: 7,
      views_count: 890
    },
    {
      id: 4,
      title: "👥 Сообщество разработчиков растет",
      content: "Новые участники присоединяются к нашему сообществу разработчиков и делятся опытом.",
      content_html: "<p>Новые участники присоединяются к нашему сообществу разработчиков и делятся опытом.</p>",
      link: "#",
      publish_date: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      category: "community",
      icon: "👥",
      gradient_start: "#96ceb4",
      gradient_end: "#feca57",
      reading_time: 4,
      views_count: 567
    },
    {
      id: 5,
      title: "🖼️ Редкие NFT коллекции",
      content: "Откройте для себя уникальные цифровые произведения искусства и редкие NFT токены.",
      content_html: "<p>Откройте для себя уникальные цифровые произведения искусства и редкие NFT токены.</p>",
      link: "#",
      publish_date: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      category: "nft",
      icon: "🖼️",
      background_image: "https://images.unsplash.com/photo-1626785774573-4b7992134866?w=400",
      reading_time: 6,
      views_count: 1340
    },
    {
      id: 6,
      title: "📰 Общие новости технологий",
      content: "Последние новости из мира технологий и инноваций, которые изменят наше будущее.",
      content_html: "<p>Последние новости из мира технологий и инноваций, которые изменят наше будущее.</p>",
      link: "#",
      publish_date: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      category: "news",
      icon: "📰",
      reading_time: 8,
      views_count: 756
    }
  ];
}; 