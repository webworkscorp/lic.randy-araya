
import React from 'react';

const AREAS = [
  { 
    title: 'SICOP & Licitaciones', 
    desc: 'Le ayudamos a ganar contratos con el estado gestionando toda la plataforma de inicio a fin para que usted no se preocupe por trámites.',
    label: 'Contratación'
  },
  { 
    title: 'Asesoría Tributaria', 
    desc: 'Planeamos sus impuestos de forma inteligente para que pague lo justo, cumpla con la ley y evite multas innecesarias.',
    label: 'Impuestos'
  },
  { 
    title: 'Gestión de Tesorería', 
    desc: 'Cuidamos su flujo de caja para que siempre tenga dinero disponible para sus gastos operativos y metas de crecimiento.',
    label: 'Efectivo'
  },
  { 
    title: 'Viabilidad Financiera', 
    desc: 'Estudiamos sus nuevas ideas de negocio para asegurar que la inversión que planea hacer realmente valga la pena y dé frutos.',
    label: 'Inversión'
  },
  { 
    title: 'Contabilidad a medida', 
    desc: 'Llevamos sus libros al día con un sistema sencillo que le permite saber exactamente dónde está parado su negocio hoy mismo.',
    label: 'Control'
  }
];

interface PracticeAreasProps {
  onDetailClick?: () => void;
}

const PracticeAreas: React.FC<PracticeAreasProps> = ({ onDetailClick }) => {
  return (
    <section id="areas" className="py-24 lg:py-40 px-8 lg:px-20 max-w-[1900px] mx-auto bg-white">
      <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
        <div className="lg:col-span-5">
          <span className="text-teal-firm tracking-[0.6em] text-[9px] uppercase font-bold font-sans mb-6 block">Soluciones</span>
          <h2 className="font-brand text-5xl lg:text-7xl font-bold text-black-pure leading-[0.9] uppercase">
            Nuestros <br/><span className="text-gold italic">Servicios</span>
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-end">
          <p className="text-xl text-black-pure/50 font-serif max-w-xl leading-relaxed italic">
            Respuestas directas y honestas para que su empresa funcione con total libertad financiera.
          </p>
        </div>
      </div>
      
      <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-24">
        {AREAS.map((area, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col border-t border-gray-border pt-10 transition-all duration-700 hover:border-teal-firm"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="font-sans text-[8px] tracking-[0.4em] text-gold font-bold uppercase">
                {area.label}
              </span>
            </div>
            
            <h4 className="font-brand text-2xl lg:text-3xl mb-6 text-black-pure font-bold leading-tight uppercase tracking-tight group-hover:text-teal-firm transition-colors">
              {area.title}
            </h4>
            
            <p className="text-black-pure/50 font-serif text-lg mb-10 leading-relaxed max-w-sm">
              {area.desc}
            </p>
            
            <div className="mt-auto">
              <button 
                onClick={onDetailClick}
                className="group/btn flex items-center gap-4 font-sans text-[9px] uppercase tracking-[0.3em] font-bold text-black-pure/40 hover:text-black-pure transition-all"
              >
                 Consultar detalles
                 <span className="w-8 h-[1px] bg-black-pure/10 group-hover/btn:w-12 group-hover/btn:bg-teal-firm transition-all duration-500"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
