import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="py-12 px-4 bg-[#374151] text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={24} className="text-[#DC2626]" />
                <h3 className="font-bold text-xl">ТК РЕИЛВЕЙ</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Надежная доставка грузов по России из Екатеринбурга
              </p>
              <p className="text-sm text-gray-400">ИНН: 450701150889</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">ЖД перевозки</a></li>
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">Автоперевозки</a></li>
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">Грузчики</a></li>
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">Складские услуги</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">Отслеживание</a></li>
                <li><a href="#" className="hover:text-[#DC2626] transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-300">
                <li>8-992-023-77-11</li>
                <li>logist@meb96.ru</li>
                <li className="text-sm">г. Березовский,<br />ул. Западная Промзона, 20</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ТК РЕИЛВЕЙ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}