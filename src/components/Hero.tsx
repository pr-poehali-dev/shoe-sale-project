import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gaming-green-bg text-gaming-green px-4 py-2 rounded-full">
              <Icon name="Zap" size={16} />
              <span className="font-semibold">Новая версия 2.0 доступна!</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Доминируй в
              <span className="bg-gradient-to-r from-gaming-green to-gaming-blue bg-clip-text text-transparent">
                Minecraft PvP
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Мощный чит-клиент с расширенными возможностями для Minecraft.
              Killaura, Fly, ESP и более 50 модулей для полного контроля игры.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gaming-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-gaming-green-dark transition-colors flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Скачать клиент</span>
              </button>

              <button className="border-2 border-gaming-green text-gaming-green px-8 py-4 rounded-lg font-semibold hover:bg-gaming-green hover:text-white transition-colors flex items-center justify-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Посмотреть демо</span>
              </button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-green">50+</div>
                <div className="text-sm text-gray-400">Модулей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-blue">24/7</div>
                <div className="text-sm text-gray-400">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-purple">
                  10K+
                </div>
                <div className="text-sm text-gray-400">Пользователей</div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Kainer Client Interface"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Акционная плашка */}
            <div className="absolute top-4 right-4 bg-gaming-green text-white px-4 py-2 rounded-full font-bold shadow-lg">
              v2.0
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gaming-green/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gaming-blue/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
