import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-sale-bg text-sale px-4 py-2 rounded-full">
              <Icon name="Zap" size={16} />
              <span className="font-semibold">Мега распродажа до 50%!</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Стильная обувь для
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                каждого дня
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Откройте для себя премиальную коллекцию обуви от ведущих брендов.
              Комфорт, качество и стиль в каждой паре.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <Icon name="ShoppingBag" size={20} />
                <span>Смотреть каталог</span>
              </button>

              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Смотреть видео</span>
              </button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Моделей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Брендов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Довольных</div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Стильные кроссовки"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Акционная плашка */}
            <div className="absolute top-4 right-4 bg-sale text-white px-4 py-2 rounded-full font-bold shadow-lg">
              -50%
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
