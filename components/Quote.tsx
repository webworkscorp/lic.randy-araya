
import React from 'react';
import { useReveal } from '../useReveal';

const Quote: React.FC = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-40 bg-gray-dark/30 overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center px-6 lg:px-10">
        <span className="reveal material-symbols-outlined text-gold text-5xl mb-12 opacity-50 block">format_quote</span>
        <h3 className="reveal delay-100 font-serif text-3xl md:text-5xl font-light italic leading-snug text-gray-200">
          "Un proceso legal bien llevado empieza con claridad, orden y seguimiento real."
        </h3>
        <div className="reveal delay-300 luxury-line w-32 mx-auto mt-16 opacity-60"></div>
      </div>
    </section>
  );
};

export default Quote;
