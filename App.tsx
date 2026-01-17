
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import PracticeAreas from './components/PracticeAreas';
import Methodology from './components/Methodology';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

const App: React.FC = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('consulta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black-pure selection-gold">
      <Header onContactClick={scrollToContact} />
      
      <main>
        <Hero onCtaClick={scrollToContact} />
        <Quote />
        <PracticeAreas onDetailClick={scrollToContact} />
        <Methodology />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
