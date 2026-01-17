
import React from 'react';
import { useReveal } from '../useReveal';

const STEPS = [
  { name: 'Análisis', detail: 'Revisión del caso, documentos y situación actual.' },
  { name: 'Ruta', detail: 'Definición de los pasos a seguir y las posibles alternativas.' },
  { name: 'Gestión', detail: 'Tramitación directa y representación legal cuando es necesario.' },
  { name: 'Seguimiento', detail: 'Revisión continua del avance y estado del proceso.' },
  { name: 'Comunicación', detail: 'Información clara y oportuna en cada etapa.' }
];

const Methodology: React.FC = () => {
  const ref = useReveal();

  return (
    <section id="metodo" ref={ref} className="py-40 bg-black-pure relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-32 text-center space-y-6">
          <h2 className="font-serif text-5xl italic">Forma de Trabajo</h2>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px]">Un proceso claro y ordenado</p>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto">Cada caso se atiende con una estructura sencilla que permite avanzar con control y comunicación constante:</p>
        </div>
        
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className={`reveal delay-${idx * 100} space-y-8`}>
              <div className="text-gold font-serif text-xl italic border-b border-gold pb-4">
                {step.name}
              </div>
              <p className="text-gray-300 text-[10px] font-light leading-loose uppercase tracking-widest">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
