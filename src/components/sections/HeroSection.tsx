import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onCalculatorClick: () => void;
  onServicesClick: () => void;
}

export function HeroSection({ onCalculatorClick, onServicesClick }: HeroSectionProps) {
  return (
    <section className="py-24 px-4 relative overflow-hidden animate-fade-in" itemScope itemType="https://schema.org/Organization">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/71d0be27-238e-4eb2-a1db-e2f973bd7a4f.png')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-2 text-lg font-medium">
            🚛 Доставка по всей России
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight animate-slide-up" itemProp="name">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Доставка грузов</span>
            <span className="block text-accent-400 drop-shadow-lg">по России</span>
            <span className="block text-2xl md:text-4xl font-medium mt-4 text-blue-100">быстро • надежно • выгодно</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Железнодорожные перевозки в багажных вагонах и автодоставка по Уралу.<br className="hidden md:block" /> 
            Прозрачные тарифы, профессиональные грузчики, быстрый расчёт стоимости.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-strong hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={onCalculatorClick}>
              <Icon name="Calculator" className="mr-3" size={24} />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-12 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105" onClick={onServicesClick}>
              <Icon name="Phone" className="mr-3" size={24} />
              8-992-023-77-11
            </Button>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black text-accent-400 mb-3 group-hover:text-accent-300 transition-colors">1090₽</div>
                <div className="text-blue-100 font-medium text-lg">за тонну ЖД до Москвы</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black text-accent-400 mb-3 group-hover:text-accent-300 transition-colors">24 часа</div>
                <div className="text-blue-100 font-medium text-lg">среднее время доставки</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black text-accent-400 mb-3 group-hover:text-accent-300 transition-colors">100%</div>
                <div className="text-blue-100 font-medium text-lg">гарантия сохранности</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}