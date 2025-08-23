import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface CalculatorState {
  service: string;
  destination: string;
  weight: string;
  volume: string;
  result: number | null;
}

interface CalculatorSectionProps {
  calculator: CalculatorState;
  setCalculator: React.Dispatch<React.SetStateAction<CalculatorState>>;
  onCalculate: () => void;
}

export function CalculatorSection({ calculator, setCalculator, onCalculate }: CalculatorSectionProps) {
  return (
    <section id="calculator" className="py-24 px-4 bg-gradient-to-b from-white to-primary-50/30" role="main">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block">
            <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">РАСЧЁТ СТОИМОСТИ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-800 mb-8 leading-tight">
            <span className="text-accent-500">Калькулятор</span> стоимости
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Рассчитайте предварительную стоимость доставки вашего груза
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto p-10 shadow-strong rounded-3xl bg-white/95 backdrop-blur-sm border-0 animate-slide-up">
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-primary-800 mb-3">Выберите услугу</label>
                <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, service: value }))}>
                  <SelectTrigger className="h-14 text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                    <SelectValue placeholder="Тип доставки" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="railway">ЖД Перевозка</SelectItem>
                    <SelectItem value="auto">Автоперевозка</SelectItem>
                    <SelectItem value="loaders">Грузчики</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-primary-800 mb-3">Куда доставить</label>
                <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, destination: value }))}>
                  <SelectTrigger className="h-14 text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white">
                    <SelectValue placeholder="Город назначения" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {calculator.service === 'railway' && (
                      <>
                        <SelectItem value="Москва">Москва</SelectItem>
                        <SelectItem value="СПб">Санкт-Петербург</SelectItem>
                        <SelectItem value="Новосибирск">Новосибирск</SelectItem>
                        <SelectItem value="Челябинск">Челябинск</SelectItem>
                        <SelectItem value="Тюмень">Тюмень</SelectItem>
                      </>
                    )}
                    {calculator.service === 'auto' && (
                      <>
                        <SelectItem value="Челябинск">Челябинск</SelectItem>
                        <SelectItem value="Тюмень">Тюмень</SelectItem>
                        <SelectItem value="Пермь">Пермь</SelectItem>
                        <SelectItem value="Курган">Курган</SelectItem>
                      </>
                    )}
                    {calculator.service === 'loaders' && (
                      <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-primary-800 mb-3">Вес груза (кг)</label>
                <Input 
                  type="number" 
                  placeholder="100"
                  value={calculator.weight}
                  onChange={(e) => setCalculator(prev => ({ ...prev, weight: e.target.value }))}
                  className="h-14 text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white"
                />
              </div>
              
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-primary-800 mb-3">Объем груза (м³)</label>
                <Input 
                  type="number" 
                  placeholder="1.5"
                  value={calculator.volume}
                  onChange={(e) => setCalculator(prev => ({ ...prev, volume: e.target.value }))}
                  className="h-14 text-lg rounded-xl border-2 border-primary-200 focus:border-primary-500 bg-white"
                />
              </div>
            </div>
            
            <div className="text-center pt-4">
              <Button 
                onClick={onCalculate}
                className="bg-primary-600 hover:bg-primary-700 px-16 py-6 text-xl font-bold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Calculator" className="mr-4" size={24} />
                Рассчитать стоимость
              </Button>
            </div>
            
            {calculator.result && (
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-200">
                <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">Предварительная стоимость:</h3>
                <div className="text-center">
                  <div className="text-5xl font-black text-primary-600 mb-3">{calculator.result.toLocaleString()} ₽</div>
                  <p className="text-lg text-secondary-600 font-medium">*Точную стоимость уточняйте у менеджера</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}