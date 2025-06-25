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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">К</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Кубомастер</h1>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Мужская
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Женская
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Детская
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Акции
            </a>
          </nav>

          {/* Иконки */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900 transition-colors relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-sale text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <Icon name="User" size={20} />
            </button>

            {/* Мобильное меню */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
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
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Мужская
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Женская
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Детская
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Акции
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
