import Icon from '@/components/ui/icon';

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-xl">
              <Icon name="Truck" size={28} className="text-primary-600" />
            </div>
            <h1 className="text-2xl font-black text-primary-800">ТК РЕИЛВЕЙ</h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg">Услуги</a>
            <a href="#calculator" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg">Тарифы</a>
            <a href="#contacts" className="text-secondary-700 hover:text-primary-600 transition-colors font-semibold text-lg">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
}