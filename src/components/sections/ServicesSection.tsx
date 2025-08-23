import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServicesSectionProps {
  onServiceTariff: (service: string) => void;
}

export function ServicesSection({ onServiceTariff }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">ТРАНСПОРТНЫЕ РЕШЕНИЯ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-800 mb-8 leading-tight">
            Наши <span className="text-accent-500">услуги</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Полный спектр транспортных услуг для вашего бизнеса
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          <Card className="group p-8 hover:shadow-strong transition-all duration-500 border-0 bg-white rounded-2xl transform hover:scale-105 hover:-translate-y-2 shadow-soft">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary-100 rounded-2xl group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <Icon name="Train" size={36} className="text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 ml-4 group-hover:text-primary-600 transition-colors">
                  ЖД перевозки
                </h3>
              </div>
              <p className="text-secondary-600 mb-6 text-lg leading-relaxed">
                Доставка грузов в багажных вагонах по всей России. Надёжно и экономично.
              </p>
              <ul className="space-y-3 text-secondary-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  До 200 тонн за рейс
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Все регионы России
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Страхование груза
                </li>
              </ul>
              <Button className="bg-primary-500 hover:bg-primary-600 w-full rounded-xl" onClick={() => onServiceTariff('railway')}>
                Узнать тарифы
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group p-8 hover:shadow-strong transition-all duration-500 border-0 bg-white rounded-2xl transform hover:scale-105 hover:-translate-y-2 shadow-soft">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-accent-100 rounded-2xl group-hover:bg-accent-500 group-hover:scale-110 transition-all duration-300">
                  <Icon name="Truck" size={36} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 ml-4 group-hover:text-accent-600 transition-colors">
                  Автоперевозки
                </h3>
              </div>
              <p className="text-secondary-600 mb-6 text-lg leading-relaxed">
                Доставка по Уралу: Свердловская, Челябинская, Тюменская области, Пермский край.
              </p>
              <ul className="space-y-3 text-secondary-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Быстрая доставка
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Различные типы грузов
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Доставка до двери
                </li>
              </ul>
              <Button className="bg-accent-500 hover:bg-accent-600 w-full rounded-xl" onClick={() => onServiceTariff('auto')}>
                Узнать тарифы
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group p-8 hover:shadow-strong transition-all duration-500 border-0 bg-white rounded-2xl transform hover:scale-105 hover:-translate-y-2 shadow-soft">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-secondary-100 rounded-2xl group-hover:bg-secondary-600 group-hover:scale-110 transition-all duration-300">
                  <Icon name="Users" size={36} className="text-secondary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 ml-4 group-hover:text-secondary-600 transition-colors">
                  Услуги грузчиков
                </h3>
              </div>
              <p className="text-secondary-600 mb-6 text-lg leading-relaxed">
                Подъём грузов на этажи, занос в частные дома. Профессиональные грузчики.
              </p>
              <ul className="space-y-3 text-secondary-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Опытные специалисты
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Бережное обращение
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-3"></div>
                  Доступные цены
                </li>
              </ul>
              <Button className="bg-secondary-600 hover:bg-secondary-700 w-full rounded-xl" onClick={() => onServiceTariff('loaders')}>
                Узнать тарифы
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}