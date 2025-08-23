import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 'pricing',
    question: 'Как формируется стоимость доставки?',
    answer: 'Стоимость зависит от веса груза, направления доставки, габаритов и дополнительных услуг. Минимальная стоимость указана в прайс-листе. Для точного расчета используйте калькулятор на сайте или свяжитесь с менеджером.',
    category: 'pricing'
  },
  {
    id: 'delivery-time',
    question: 'Сроки доставки по России?',
    answer: 'ЖД доставка: 3-7 дней в зависимости от направления. Автодоставка: 1-3 дня для близлежащих регионов. Точные сроки уточняйте у менеджера при оформлении заказа.',
    category: 'delivery'
  },
  {
    id: 'packaging',
    question: 'Нужно ли упаковывать груз?',
    answer: 'Да, груз должен быть надежно упакован. Мы предоставляем услуги упаковки: стрейч-пленка, гофрокартон, деревянная обрешетка. Хрупкие предметы упаковываются в пузырчатую пленку.',
    category: 'delivery'
  },
  {
    id: 'payment',
    question: 'Какие способы оплаты доступны?',
    answer: 'Принимаем оплату: наличными при получении, банковским переводом, картой онлайн. Для юридических лиц работаем по безналичному расчету с НДС.',
    category: 'payment'
  },
  {
    id: 'insurance',
    question: 'Застрахован ли груз при перевозке?',
    answer: 'Да, все грузы застрахованы на сумму до 100 000 рублей бесплатно. При необходимости можно оформить дополнительную страховку на полную стоимость груза.',
    category: 'delivery'
  },
  {
    id: 'weight-limits',
    question: 'Есть ли ограничения по весу и габаритам?',
    answer: 'ЖД перевозки: до 20 тонн, габариты до 12м длина. Автоперевозки: до 5 тонн, стандартные габариты фуры. Негабаритные грузы перевозим спецтранспортом.',
    category: 'delivery'
  },
  {
    id: 'tracking',
    question: 'Можно ли отследить груз в пути?',
    answer: 'Да, предоставляем трек-номер для отслеживания. По номеру можете узнать текущее местоположение груза и примерное время прибытия.',
    category: 'delivery'
  },
  {
    id: 'loading-help',
    question: 'Поможете с погрузкой/выгрузкой?',
    answer: 'Да, предоставляем услуги грузчиков. Стоимость подъема на этаж указана в прайсе. Также помогаем с разборкой/сборкой мебели.',
    category: 'services'
  },
  {
    id: 'documents',
    question: 'Какие документы нужны для отправки?',
    answer: 'Для физлиц: паспорт отправителя и получателя. Для юрлиц: договор, накладная, счет-фактура. Документы можем оформить в офисе.',
    category: 'documents'
  },
  {
    id: 'regions',
    question: 'В какие регионы доставляете?',
    answer: 'Доставляем по всей России. Основные направления: Москва, СПб, Сибирь, Урал, Поволжье. Полный список городов в прайс-листе на сайте.',
    category: 'delivery'
  }
];

const categories = {
  pricing: { name: 'Цены и тарифы', icon: 'DollarSign' },
  delivery: { name: 'Доставка', icon: 'Truck' },
  payment: { name: 'Оплата', icon: 'CreditCard' },
  services: { name: 'Услуги', icon: 'Package' },
  documents: { name: 'Документы', icon: 'FileText' }
};

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#374151] mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#DC2626] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Все вопросы
          </button>
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                activeCategory === key
                  ? 'bg-[#DC2626] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span className="hidden md:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.map((item) => (
            <Card key={item.id} className="border border-gray-200">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-semibold text-[#374151] pr-4">
                    {item.question}
                  </h3>
                  <Icon 
                    name={openItems.has(item.id) ? 'ChevronUp' : 'ChevronDown'} 
                    size={20} 
                    className="text-gray-500 flex-shrink-0"
                  />
                </div>
              </button>
              {openItems.has(item.id) && (
                <CardContent className="pt-0 px-4 md:px-6 pb-4 md:pb-6">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        item.category === 'pricing' ? 'bg-green-100 text-green-800' :
                        item.category === 'delivery' ? 'bg-blue-100 text-blue-800' :
                        item.category === 'payment' ? 'bg-purple-100 text-purple-800' :
                        item.category === 'services' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        <Icon name={categories[item.category as keyof typeof categories].icon as any} size={12} />
                        {categories[item.category as keyof typeof categories].name}
                      </span>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#374151] mb-2">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-gray-600 mb-4">
            Свяжитесь с нашим менеджером для получения подробной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+79920237711"
              className="flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white rounded-lg hover:bg-[#B91C1C] transition-colors"
            >
              <Icon name="Phone" size={18} />
              8-992-023-77-11
            </a>
            <a
              href="mailto:logist@meb96.ru"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Icon name="Mail" size={18} />
              logist@meb96.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}