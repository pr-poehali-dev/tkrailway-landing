import { useState } from 'react';
import Icon from '@/components/ui/icon';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://cdn.poehali.dev/files/b96bb81d-9143-4759-9a42-23d0ec0770e1.jpeg" 
              alt="ТК РЕИЛВЕЙ - Транспортная компания Екатеринбург логотип" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-contain bg-white"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-black text-primary-800">РЕИЛВЕЙ</h1>
              <p className="text-xs md:text-sm text-secondary-600 font-medium -mt-1">Транспортная компания</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-10">
            <a href="#services" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-base lg:text-lg">Услуги</a>
            <a href="#calculator" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-base lg:text-lg">Калькулятор</a>
            <a href="#faq" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-base lg:text-lg">FAQ</a>
            <a href="#contacts" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-base lg:text-lg">Контакты</a>
          </nav>

          <button 
            className="md:hidden p-2 text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <a 
                href="#services" 
                className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#calculator" 
                className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Калькулятор
              </a>
              <a 
                href="#faq" 
                className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contacts" 
                className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}