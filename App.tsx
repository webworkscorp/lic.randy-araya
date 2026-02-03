
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import WhyChooseUs from './components/WhyChooseUs';
import PracticeAreas from './components/PracticeAreas';
import Methodology from './components/Methodology';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('consulta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection-gold w-full overflow-x-hidden">
      <div className="w-full flex flex-col items-center">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Hero onCtaClick={scrollToContact} />
          <Quote />
          <WhyChooseUs />
          <PracticeAreas onDetailClick={scrollToContact} />
          <Methodology />
          <ContactCTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default App;
