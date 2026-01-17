
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black-pure pt-24">
      {/* Background Image - Smooth fade-in */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-hero-reveal"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/TrnWZCC.jpeg')",
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-black-pure/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-pure/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 py-12 lg:py-24">
          <div className="space-y-6 mb-10">
            {/* Top Label - Metallic Shine Reveal */}
            <div className="flex items-center gap-4 animate-text-reveal" style={{ animationDelay: '400ms' }}>
               <div className="h-[1px] bg-gold/60 animate-line-reveal" style={{ animationDelay: '800ms' }}></div>
               <span className="text-metallic tracking-[0.6em] text-xs lg:text-sm uppercase font-bold">
                 Asesoría Legal Clara
               </span>
            </div>
            
            {/* Main Name - Metallic Gold with adjusted leading to prevent clipping */}
            <h2 className="font-serif text-[18vw] sm:text-[12vw] lg:text-[8.5rem] leading-[0.95] tracking-tight-logo italic font-black animate-text-reveal" style={{ animationDelay: '600ms' }}>
              <span className="text-metallic pb-2">Randy</span><br/>
              <span className="text-metallic">Araya</span>
            </h2>
            
            {/* Professional Subtitle - Abogado */}
            <p className="font-brand text-xl lg:text-2xl tracking-[0.7em] text-gold/80 mt-2 ml-2 uppercase animate-text-reveal" style={{ animationDelay: '800ms' }}>
              Abogado
            </p>
          </div>
          
          <div className="max-w-xl ml-2 space-y-12 animate-text-reveal" style={{ animationDelay: '1000ms' }}>
            <div className="space-y-6">
              <p className="text-lg text-white font-light leading-relaxed drop-shadow-md opacity-90">
                Cada caso se trabaja de forma directa, ordenada y responsable. La prioridad es que la persona entienda su situación, sepa qué opciones tiene y cuente con una guía clara sobre qué hacer y cómo hacerlo.
              </p>
            </div>
            
            <button 
              onClick={onCtaClick}
              className="flex items-center justify-center px-10 py-5 bg-gold border border-gold hover:bg-white hover:border-white transition-all duration-500 shadow-2xl group"
            >
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-[0.4em] text-[11px] font-bold text-black-pure">
                  AGENDAR CONSULTA
                </span>
                <span className="material-symbols-outlined text-black-pure text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  arrow_outward
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
