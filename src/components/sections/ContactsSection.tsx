import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export function ContactsSection() {
  return (
    <section id="contacts" className="py-12 md:py-20 px-4 bg-gray-50" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#374151] mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь с нами удобным способом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* AI Agent Widget */}
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl text-[#374151]"></CardTitle>
              <p className="text-sm text-gray-600 mt-2 font-semibold">Задайте вопрос о доставке или сделаю расчет прямо .</p>
            </CardHeader>
            <CardContent className="px-0">
              <div className="w-full h-96 rounded-lg overflow-hidden border">
                <iframe 
                  allow="microphone;autoplay"
                  style={{ width: '100%', height: '100%' }}
                  src="https://functions.pro-talk.ru/api/v1.0/chatgpt_widget_dialog_api?record_id=recw5raC8WUIi7BSO&promt_id=33318&lang=ru&fullscreen=0&voice=1&file=1&circle=1"
                  title="ИИ помощник"
                />
              </div>
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
  );
}