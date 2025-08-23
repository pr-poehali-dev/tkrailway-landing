import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TariffModalProps {
  showTariffModal: boolean;
  selectedService: string;
  onClose: () => void;
  onOrderService: () => void;
}

export function TariffModal({ showTariffModal, selectedService, onClose, onOrderService }: TariffModalProps) {
  if (!showTariffModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#374151]">
              Тарифы на {selectedService === 'railway' ? 'ЖД перевозки' : 
                        selectedService === 'auto' ? 'автоперевозки' : 
                        'услуги грузчиков'}
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
        <div className="p-6">
          {selectedService === 'railway' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ЖД перевозки из Екатеринбурга</h3>
              <div className="grid gap-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Москва</span>
                  <span className="font-semibold">от 1090 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Санкт-Петербург</span>
                  <span className="font-semibold">от 1140 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Новосибирск</span>
                  <span className="font-semibold">от 1790 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Челябинск</span>
                  <span className="font-semibold">от 900 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Тюмень</span>
                  <span className="font-semibold">от 1030 ₽</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">*Цены указаны за 10 кг груза</p>
            </div>
          )}
          
          {selectedService === 'auto' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Автоперевозки из Екатеринбурга</h3>
              <div className="grid gap-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Челябинск</span>
                  <span className="font-semibold">от 500 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Тюмень</span>
                  <span className="font-semibold">от 800 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Пермь</span>
                  <span className="font-semibold">от 600 ₽</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Курган</span>
                  <span className="font-semibold">от 450 ₽</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">*Цены указаны за 10 кг груза</p>
            </div>
          )}
          
          {selectedService === 'loaders' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Услуги грузчиков</h3>
              <div className="grid gap-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Подъем на этаж (с лифтом)</span>
                  <span className="font-semibold">150 ₽/час</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Подъем на этаж (без лифта)</span>
                  <span className="font-semibold">200 ₽/час</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Подъем тяжелой мебели</span>
                  <span className="font-semibold">250 ₽/час</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Сборка/разборка</span>
                  <span className="font-semibold">300 ₽/час</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">*Минимальный заказ 2 часа</p>
            </div>
          )}
          
          <div className="mt-6 pt-4 border-t">
            <Button 
              className="bg-[#DC2626] hover:bg-[#B91C1C] w-full"
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