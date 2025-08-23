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

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 relative overflow-hidden animate-fade-in" itemScope itemType="https://schema.org/Organization">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
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
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-strong hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => scrollToSection('calculator')}>
                <Icon name="Calculator" className="mr-3" size={24} />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-12 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105" onClick={() => scrollToSection('services')}>
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

      {/* Services Section */}
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
                <Button className="bg-primary-500 hover:bg-primary-600 w-full rounded-xl" onClick={() => handleServiceTariff('railway')}>
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
                <Button className="bg-accent-500 hover:bg-accent-600 w-full rounded-xl" onClick={() => handleServiceTariff('auto')}>
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
                <Button className="bg-secondary-600 hover:bg-secondary-700 w-full rounded-xl" onClick={() => handleServiceTariff('loaders')}>
                  Узнать тарифы
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
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
                  onClick={calculatePrice}
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