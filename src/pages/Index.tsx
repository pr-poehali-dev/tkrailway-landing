import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CalculatorSection } from '@/components/sections/CalculatorSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { TariffModal } from '@/components/modals/TariffModal';
import { russianCities, sverdlovskRegion, tyumenRegion, chelyabinskRegion, permRegion, liftingServices } from '@/data/priceData';

function Index() {
  const [calculator, setCalculator] = useState({
    service: '',
    region: '',
    destination: '',
    weight: '',
    volume: '',
    liftingType: '',
    floor: '',
    hasElevator: undefined as boolean | undefined,
    itemType: '',
    result: null as number | null
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
    if (calculator.service === 'delivery') {
      if (!calculator.region || !calculator.destination || !calculator.weight) {
        return;
      }
      
      let regionData;
      switch (calculator.region) {
        case 'russia':
          regionData = russianCities;
          break;
        case 'sverdlovsk':
          regionData = sverdlovskRegion;
          break;
        case 'tyumen':
          regionData = tyumenRegion;
          break;
        case 'chelyabinsk':
          regionData = chelyabinskRegion;
          break;
        case 'perm':
          regionData = permRegion;
          break;
        default:
          return;
      }
      
      const destinationData = regionData[calculator.destination as keyof typeof regionData];
      if (!destinationData) return;
      
      const weight = parseFloat(calculator.weight) || 1;
      const volume = parseFloat(calculator.volume) || 0;
      
      let price = 0;
      
      if ('price' in destinationData) {
        if (calculator.region === 'russia') {
          const russianData = destinationData as { price: number; volume: number };
          const weightFactor = Math.max(1, Math.ceil(weight / 10));
          const volumeFactor = volume > russianData.volume ? Math.ceil((volume - russianData.volume) / 5) : 0;
          price = russianData.price * weightFactor + volumeFactor * 500;
        } else {
          price = destinationData.price;
          if (weight > 300) {
            price += (weight - 300) * 5;
          }
          if (volume > 1) {
            price += (volume - 1) * 300;
          }
        }
      } else if ('distance' in destinationData) {
        const sverdlovskData = destinationData as { distance: number; price: number };
        price = sverdlovskData.price;
        if (weight > 1500) {
          price += (weight - 1500) * 2;
        }
      }
      
      setCalculator(prev => ({ ...prev, result: Math.round(price) }));
      
    } else if (calculator.service === 'lifting') {
      if (!calculator.itemType || !calculator.floor) {
        return;
      }
      
      const itemType = calculator.itemType as keyof typeof liftingServices;
      const services = liftingServices[itemType];
      
      if (!services) return;
      
      let price = 0;
      
      if (calculator.itemType === 'smallItems') {
        const weight = parseFloat(calculator.weight) || 0;
        price = Math.max(services.minimum, weight * services.perKg);
      } else {
        const floor = calculator.floor;
        
        if (floor === 'private') {
          price = services.privateHouse.base;
        } else if (floor === '1') {
          if (calculator.hasElevator !== false && 'withElevator' in services) {
            price = services.withElevator.base;
          } else {
            price = services.withoutElevator[1].price;
          }
        } else {
          const floorNum = floor === '5' ? 5 : parseInt(floor);
          
          if (calculator.hasElevator === true && 'withElevator' in services) {
            price = services.withElevator.base;
          } else {
            const floorData = services.withoutElevator[floorNum as keyof typeof services.withoutElevator];
            if (typeof floorData === 'object' && 'price' in floorData) {
              price = floorData.price;
            }
          }
        }
        
        if (calculator.itemType === 'softFurniture') {
          price += services.cornerSofa || 0;
        }
      }
      
      setCalculator(prev => ({ ...prev, result: Math.round(price) }));
    }
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

      <FAQSection />

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