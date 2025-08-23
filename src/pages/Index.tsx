import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [calculator, setCalculator] = useState({
    service: '',
    destination: '',
    weight: '',
    volume: '',
    result: null
  });

  const [showTariffModal, setShowTariffModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceTariff = (service: string) => {
    setSelectedService(service);
    setShowTariffModal(true);
  };

  const calculatePrice = () => {
    if (!calculator.service || !calculator.destination || !calculator.weight) {
      return;
    }
    
    const baseRates = {
      'railway': { 'Москва': 1090, 'СПб': 1140, 'Новосибирск': 1790, 'Челябинск': 900, 'Тюмень': 1030 },
      'auto': { 'Челябинск': 500, 'Тюмень': 800, 'Пермь': 600, 'Курган': 450 },
      'loaders': 200
    };
    
    let price = 0;
    const weight = parseFloat(calculator.weight) || 1;
    
    if (calculator.service === 'loaders') {
      price = baseRates.loaders * weight;
    } else {
      const rate = baseRates[calculator.service as keyof typeof baseRates]?.[calculator.destination as keyof (typeof baseRates)['railway']] || 1000;
      price = rate * Math.max(1, Math.ceil(weight / 10));
    }
    
    setCalculator(prev => ({ ...prev, result: price }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-[#1E40AF]" />
              <h1 className="text-2xl font-bold text-[#1E40AF]">ТК РЕИЛВЕЙ</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-[#374151] hover:text-[#1E40AF] transition-colors font-medium">Услуги</a>
              <a href="#calculator" className="text-[#374151] hover:text-[#1E40AF] transition-colors font-medium">Тарифы</a>
              <a href="#contacts" className="text-[#374151] hover:text-[#1E40AF] transition-colors font-medium">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              🚛 Доставка по всей России
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" itemProp="name">
              Доставка грузов по России —
              <span className="block text-[#F97316]">быстро, надежно, выгодно</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              ЖД перевозки в багажных вагонах, автоперевозки по Уралу, услуги грузчиков. Прозрачные тарифы и расчет онлайн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8" onClick={() => scrollToSection('calculator')}>
                Рассчитать стоимость за 1 минуту
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E40AF]" onClick={() => scrollToSection('services')}>
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр транспортных услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-[#1E40AF]/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[#1E40AF] transition-colors">
                  <Icon name="Train" size={32} className="text-[#1E40AF] group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#374151]">
                  ЖД Перевозки по РФ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Доставка в составе пассажирских поездов. Из Екатеринбурга в любой город России.
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• По расписанию поездов</li>
                  <li>• Максимальная сохранность</li>
                  <li>• Широкая география</li>
                </ul>
                <Button className="bg-[#1E40AF] hover:bg-[#1E3A8A] w-full" onClick={() => handleServiceTariff('railway')}>
                  Узнать тарифы
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-[#DC2626]/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                  <Icon name="Truck" size={32} className="text-[#DC2626] group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#374151]">
                  Автоперевозки по Уралу
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  По Свердловской, Челябинской, Тюменской областям и Пермскому краю.
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• Быстрая доставка</li>
                  <li>• Гибкие маршруты</li>
                  <li>• Выгодные тарифы</li>
                </ul>
                <Button className="bg-[#DC2626] hover:bg-[#B91C1C] w-full" onClick={() => handleServiceTariff('auto')}>
                  Узнать тарифы
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-[#F97316]/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
                  <Icon name="Users" size={32} className="text-[#F97316] group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#374151]">
                  Услуги грузчиков
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Профессиональный подъем мебели и грузов на этажи, занос в частные дома.
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• Опытные грузчики</li>
                  <li>• Подъем без лифта</li>
                  <li>• Бережная работа</li>
                </ul>
                <Button className="bg-[#F97316] hover:bg-[#EA580C] w-full" onClick={() => handleServiceTariff('loaders')}>
                  Узнать тарифы
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-4 bg-white" role="main">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
              Рассчитайте стоимость доставки онлайн
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите точную стоимость за несколько кликов
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">Выберите услугу</label>
                    <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, service: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Тип доставки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="railway">ЖД Перевозка</SelectItem>
                        <SelectItem value="auto">Автоперевозка</SelectItem>
                        <SelectItem value="loaders">Грузчики</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">Куда доставить</label>
                    <Select onValueChange={(value) => setCalculator(prev => ({ ...prev, destination: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Город назначения" />
                      </SelectTrigger>
                      <SelectContent>
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
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">Вес груза (кг)</label>
                    <Input 
                      type="number" 
                      placeholder="100"
                      value={calculator.weight}
                      onChange={(e) => setCalculator(prev => ({ ...prev, weight: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">Объем груза (м³)</label>
                    <Input 
                      type="number" 
                      placeholder="1.5"
                      value={calculator.volume}
                      onChange={(e) => setCalculator(prev => ({ ...prev, volume: e.target.value }))}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={calculatePrice}
                  size="lg" 
                  className="bg-[#DC2626] hover:bg-[#B91C1C] w-full"
                >
                  Рассчитать стоимость
                </Button>
                
                {calculator.result && (
                  <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Ориентировочная стоимость</h3>
                      <p className="text-3xl font-bold text-green-600">{calculator.result.toLocaleString()} ₽</p>
                      <p className="text-sm text-green-700 mt-2">*Окончательная стоимость уточняется при оформлении заявки</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-gray-50" itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Оставьте заявку или свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl text-[#374151]">Отправить заявку</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <form role="form" aria-label="Форма обратной связи">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2" htmlFor="name">Ваше имя *</label>
                    <Input id="name" name="name" placeholder="Введите ваше имя" required aria-required="true" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2" htmlFor="phone">Телефон *</label>
                    <Input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required aria-required="true" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2" htmlFor="email">Email</label>
                    <Input id="email" name="email" type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2" htmlFor="message">Сообщение</label>
                    <Textarea id="message" name="message" placeholder="Опишите ваш груз и требования к доставке" rows={4} />
                  </div>
                  <Button type="submit" className="bg-[#DC2626] hover:bg-[#B91C1C] w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#374151] mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4" itemProp="telephone">
                    <div className="p-3 bg-[#1E40AF]/10 rounded-full">
                      <Icon name="Phone" size={20} className="text-[#1E40AF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#374151]">Телефон</p>
                      <a href="tel:+79920237711" className="text-gray-600 hover:text-[#1E40AF] transition-colors">8-992-023-77-11</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4" itemProp="email">
                    <div className="p-3 bg-[#DC2626]/10 rounded-full">
                      <Icon name="Mail" size={20} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#374151]">Email</p>
                      <a href="mailto:logist@meb96.ru" className="text-gray-600 hover:text-[#DC2626] transition-colors">logist@meb96.ru</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <div className="p-3 bg-[#F97316]/10 rounded-full mt-1">
                      <Icon name="MapPin" size={20} className="text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#374151]">Адрес</p>
                      <address className="text-gray-600 not-italic">
                        <span itemProp="postalCode">620141</span>, <span itemProp="addressRegion">Свердловская обл.</span>,<br />
                        <span itemProp="addressLocality">г. Березовский</span>, <span itemProp="streetAddress">ул. Западная Промзона, 20 склад 25</span>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#374151] mb-4">Преимущества работы с нами</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={16} className="text-green-600" />
                    <span className="text-gray-600">Доставка по расписанию</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={16} className="text-green-600" />
                    <span className="text-gray-600">Максимальная сохранность груза</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={16} className="text-green-600" />
                    <span className="text-gray-600">Широкая география доставки</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Calculator" size={16} className="text-green-600" />
                    <span className="text-gray-600">Прозрачные тарифы</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Footer */}
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

      {/* Tariff Modal */}
      {showTariffModal && (
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
                  onClick={() => setShowTariffModal(false)}
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
                  onClick={() => {
                    setShowTariffModal(false);
                    scrollToSection('contacts');
                  }}
                >
                  Заказать услугу
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;