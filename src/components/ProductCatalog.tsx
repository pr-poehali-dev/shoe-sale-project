import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const modules = [
    {
      id: "1",
      name: "Killaura",
      description: "Автоматическая атака ближайших врагов",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Боевые",
      rating: 4.9,
      compatibility: "1.8-1.20",
    },
    {
      id: "2",
      name: "Fly",
      description: "Полёт в режиме выживания",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Движение",
      rating: 4.8,
      compatibility: "1.8-1.20",
    },
    {
      id: "3",
      name: "ESP",
      description: "Подсветка игроков через стены",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Визуальные",
      rating: 4.7,
      compatibility: "1.8-1.20",
    },
    {
      id: "4",
      name: "Speed",
      description: "Увеличение скорости передвижения",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Движение",
      rating: 4.6,
      compatibility: "1.8-1.20",
    },
    {
      id: "5",
      name: "NoFall",
      description: "Отключение урона от падения",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Защита",
      rating: 4.5,
      compatibility: "1.8-1.20",
    },
    {
      id: "6",
      name: "Xray",
      description: "Просвечивание блоков для поиска руд",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Утилиты",
      rating: 4.4,
      compatibility: "1.8-1.20",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-gaming-green-bg text-gaming-green px-4 py-2 rounded-full">
            <span className="font-semibold">🎮 Все модули активны</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Мощные модули</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Получите преимущество с нашими передовыми читами для Minecraft
          </p>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ProductCard key={module.id} {...module} />
          ))}
        </div>

        {/* Кнопка показать больше */}
        <div className="text-center mt-12">
          <button className="bg-gaming-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-gaming-green-dark transition-colors">
            Показать все модули
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
