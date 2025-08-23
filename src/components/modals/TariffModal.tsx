import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { russianCities } from '@/data/priceData';

interface TariffModalProps {
  showTariffModal: boolean;
  selectedService: string;
  onClose: () => void;
  onOrderService: () => void;
}

export function TariffModal({ showTariffModal, selectedService, onClose, onOrderService }: TariffModalProps) {
  if (!showTariffModal) return null;

  const popularCities = [
    'Москва', 'Санкт-Петербург', 'Новосибирск', 'Челябинск', 'Тюмень', 
    'Пермь', 'Уфа', 'Омск', 'Казань', 'Самара', 'Краснодар', 'Иркутск', 
    'Хабаровск', 'Владивосток', 'Сургут', 'Новый Уренгой'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 md:p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-[#374151]">
              Тарифы транспортной компании «Реилвей»
            </h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
            >
              <Icon name="X" size={24} />
            </Button>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Доставка по России из Екатеринбурга</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {popularCities.map(city => (
                  <div key={city} className="flex justify-between p-3 bg-gray-50 rounded text-sm md:text-base">
                    <span>{city}</span>
                    <span className="font-semibold">от {russianCities[city as keyof typeof russianCities]?.price || '---'} ₽</span>
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-3">*Минимальная стоимость доставки за место. Точную стоимость уточняйте у менеджера.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги подъема/спуска груза</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Корпусная мебель, техника:</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>С лифтом</span>
                      <span className="font-semibold">от 800 ₽</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>Без лифта (2 этаж)</span>
                      <span className="font-semibold">от 1000 ₽</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>Без лифта (3 этаж)</span>
                      <span className="font-semibold">от 1200 ₽</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Мягкая мебель:</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>С лифтом</span>
                      <span className="font-semibold">от 1000 ₽</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>Без лифта (2 этаж)</span>
                      <span className="font-semibold">от 1200 ₽</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Мелкогабаритный груз:</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>За кг</span>
                      <span className="font-semibold">3 ₽</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>Минимум</span>
                      <span className="font-semibold">100 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-3">*Цены за одну позицию. За каждую дополнительную позицию +300 ₽</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Реквизиты компании:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>ИП:</strong> Иванов Александр Александрович</p>
                <p><strong>ИНН:</strong> 450701150889</p>
                <p><strong>Телефон:</strong> 8-992-023-77-11</p>
                <p><strong>Email:</strong> logist@meb96.ru</p>
                <p><strong>Адрес:</strong> 620141, Свердловская обл., г. Березовский, ул. Западная Промзона, 20, склад 25</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <Button 
              className="bg-[#DC2626] hover:bg-[#B91C1C] w-full text-sm md:text-base py-3"
              onClick={onOrderService}
            >
              Заказать услугу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}