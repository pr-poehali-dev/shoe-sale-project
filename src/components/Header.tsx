import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gaming-green to-gaming-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Kainer Client</h1>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-green transition-colors"
            >
              Функции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-green transition-colors"
            >
              Скачать
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-green transition-colors"
            >
              Поддержка
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-green transition-colors"
            >
              Сообщество
            </a>
          </nav>

          {/* Иконки */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gaming-green transition-colors">
              <Icon name="Settings" size={20} />
            </button>
            <button className="text-gray-700 hover:text-gaming-green transition-colors relative">
              <Icon name="Download" size={20} />
            </button>
            <button className="text-gray-700 hover:text-gaming-green transition-colors">
              <Icon name="User" size={20} />
            </button>

            {/* Мобильное меню */}
            <button
              className="md:hidden text-gray-700 hover:text-gaming-green transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-700 hover:text-gaming-green transition-colors py-2"
              >
                Функции
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gaming-green transition-colors py-2"
              >
                Скачать
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gaming-green transition-colors py-2"
              >
                Поддержка
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gaming-green transition-colors py-2"
              >
                Сообщество
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
