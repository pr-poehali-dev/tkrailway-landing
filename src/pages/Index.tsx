import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CalculatorSection } from '@/components/sections/CalculatorSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { TariffModal } from '@/components/modals/TariffModal';

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

  const handleOrderService = () => {
    setShowTariffModal(false);
    scrollToSection('contacts');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        onCalculatorClick={() => scrollToSection('calculator')}
        onServicesClick={() => scrollToSection('services')}
      />

      <ServicesSection
        onServiceTariff={handleServiceTariff}
      />

      <CalculatorSection
        calculator={calculator}
        setCalculator={setCalculator}
        onCalculate={calculatePrice}
      />

      <ContactsSection />

      <Footer />

      <TariffModal
        showTariffModal={showTariffModal}
        selectedService={selectedService}
        onClose={() => setShowTariffModal(false)}
        onOrderService={handleOrderService}
      />
    </div>
  );
}

export default Index;