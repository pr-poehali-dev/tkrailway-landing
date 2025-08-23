import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { russianCities, sverdlovskRegion, tyumenRegion, chelyabinskRegion, permRegion } from '@/data/priceData';

interface CalculatorState {
  service: string;
  region: string;
  destination: string;
  weight: string;
  volume: string;
  liftingType?: string;
  floor?: string;
  hasElevator?: boolean;
  itemType?: string;
  result: number | null;
}

interface CalculatorSectionProps {
  calculator: CalculatorState;
  setCalculator: React.Dispatch<React.SetStateAction<CalculatorState>>;
  onCalculate: () => void;
}

export function CalculatorSection({ calculator, setCalculator, onCalculate }: CalculatorSectionProps) {
  const getDestinationOptions = () => {
    switch (calculator.region) {
      case 'russia':
        return Object.keys(russianCities).filter(city => city !== 'Екатеринбург');
      case 'sverdlovsk':
        return Object.keys(sverdlovskRegion).filter(city => city !== 'Екатеринбург');
      case 'tyumen':
        return Object.keys(tyumenRegion);
      case 'chelyabinsk':
        return Object.keys(chelyabinskRegion);
      case 'perm':
        return Object.keys(permRegion);
      default:
        return [];
    }
  };

  return (
    <section id="calculator" className="py-12 md:py-24 px-4 bg-gradient-to-b from-white to-primary-50/30" role="main">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <div className="inline-block">
            <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">РАСЧЁТ СТОИМОСТИ</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-primary-800 mb-6 md:mb-8 leading-tight">
            <span className="text-accent-500">Калькулятор</span> стоимости
          </h2>
          <p className="text-lg md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Рассчитайте предварительную стоимость доставки вашего груза
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto p-4 md:p-10 shadow-strong rounded-3xl bg-white/95 backdrop-blur-sm border-0 animate-slide-up">
          <CardContent className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:col-span-2">
                <label className="block text-lg font-semibold text-primary-800 mb-3">Выберите услугу</label>
                <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, service: value, region: '', destination: '', result: null }))}>
                  <SelectTrigger className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                    <SelectValue placeholder="Тип услуги" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="delivery">Доставка груза</SelectItem>
                    <SelectItem value="lifting">Подъем/спуск груза</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {calculator.service === 'delivery' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Регион доставки</label>
                    <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, region: value, destination: '', result: null }))}>
                      <SelectTrigger className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                        <SelectValue placeholder="Выберите регион" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="russia">По России</SelectItem>
                        <SelectItem value="sverdlovsk">Свердловская область</SelectItem>
                        <SelectItem value="tyumen">Тюменская область</SelectItem>
                        <SelectItem value="chelyabinsk">Челябинская область</SelectItem>
                        <SelectItem value="perm">Пермский край</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Пункт назначения</label>
                    <Select 
                      onValueChange={(value) => setCalculator(prev => ({ ...prev, destination: value, result: null }))}
                      disabled={!calculator.region}
                    >
                      <SelectTrigger className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl max-h-60">
                        {getDestinationOptions().map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Вес груза (кг)</label>
                    <Input 
                      type="number" 
                      placeholder="100"
                      value={calculator.weight}
                      onChange={(e) => setCalculator(prev => ({ ...prev, weight: e.target.value, result: null }))}
                      className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Объем груза (м³)</label>
                    <Input 
                      type="number" 
                      step="0.1"
                      placeholder="1.5"
                      value={calculator.volume}
                      onChange={(e) => setCalculator(prev => ({ ...prev, volume: e.target.value, result: null }))}
                      className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white"
                    />
                  </div>
                </div>
              </>
            )}

            {calculator.service === 'lifting' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Тип груза</label>
                    <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, itemType: value, result: null }))}>
                      <SelectTrigger className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                        <SelectValue placeholder="Выберите тип груза" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="furniture">Корпусная мебель, бытовая техника</SelectItem>
                        <SelectItem value="softFurniture">Мягкая мебель</SelectItem>
                        <SelectItem value="kitchen">Кухни, столешницы</SelectItem>
                        <SelectItem value="smallItems">Мелкогабаритный груз</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Этаж</label>
                    <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, floor: value, result: null }))}>
                      <SelectTrigger className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                        <SelectValue placeholder="Выберите этаж" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="1">1 этаж</SelectItem>
                        <SelectItem value="2">2 этаж</SelectItem>
                        <SelectItem value="3">3 этаж</SelectItem>
                        <SelectItem value="4">4 этаж</SelectItem>
                        <SelectItem value="5">5 этаж и выше</SelectItem>
                        <SelectItem value="private">Частный дом</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {calculator.floor !== 'private' && calculator.floor !== '1' && calculator.floor && (
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Наличие лифта</label>
                    <div className="flex gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="elevator"
                          checked={calculator.hasElevator === true}
                          onChange={() => setCalculator(prev => ({ ...prev, hasElevator: true, result: null }))}
                          className="mr-2 w-4 h-4 text-primary-600"
                        />
                        <span className="text-base md:text-lg">Есть лифт</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="elevator"
                          checked={calculator.hasElevator === false}
                          onChange={() => setCalculator(prev => ({ ...prev, hasElevator: false, result: null }))}
                          className="mr-2 w-4 h-4 text-primary-600"
                        />
                        <span className="text-base md:text-lg">Нет лифта</span>
                      </label>
                    </div>
                  </div>
                )}

                {calculator.itemType === 'smallItems' && (
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-primary-800 mb-3">Вес груза (кг)</label>
                    <Input 
                      type="number" 
                      placeholder="50"
                      value={calculator.weight}
                      onChange={(e) => setCalculator(prev => ({ ...prev, weight: e.target.value, result: null }))}
                      className="h-12 md:h-14 text-base md:text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white"
                    />
                  </div>
                )}
              </>
            )}
            
            <div className="text-center pt-4">
              <Button 
                onClick={onCalculate}
                className="bg-primary-600 hover:bg-primary-700 px-8 md:px-16 py-4 md:py-6 text-lg md:text-xl font-bold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Calculator" className="mr-3 md:mr-4" size={20} />
                <span className="hidden sm:inline">Рассчитать стоимость</span>
                <span className="sm:hidden">Рассчитать</span>
              </Button>
            </div>
            
            {calculator.result && (
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 md:p-8 rounded-2xl border border-primary-200">
                <h3 className="text-xl md:text-2xl font-bold text-primary-800 mb-4 md:mb-6 text-center">
                  Предварительная стоимость:
                </h3>
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-black text-primary-600 mb-3">
                    {calculator.result.toLocaleString()} ₽
                  </div>
                  <p className="text-sm md:text-lg text-secondary-600 font-medium">
                    *Точную стоимость уточняйте у менеджера
                  </p>
                  <p className="text-xs md:text-sm text-secondary-500 mt-2">
                    Окончательная стоимость может отличаться в зависимости от дополнительных условий
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}