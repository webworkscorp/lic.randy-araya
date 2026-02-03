
import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-white overflow-hidden relative">
      <div className="max-w-[1000px] mx-auto text-center px-8 lg:px-20">
        <div className="flex justify-center mb-12">
          <div className="h-12 w-[1px] bg-gray-border"></div>
        </div>
        
        <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-snug text-black-pure/80 italic">
          "Trabajamos con honestidad para que sus cuentas estén siempre claras."
        </h3>
        
        <div className="mt-12 flex items-center justify-center gap-4">
           <span className="font-sans text-[8px] tracking-[0.6em] text-teal-firm uppercase font-bold">Transparencia Real</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
