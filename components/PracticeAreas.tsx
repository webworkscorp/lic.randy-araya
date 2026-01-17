
import React from 'react';
import { useReveal } from '../useReveal';

const AREAS = [
  { 
    id: '01', 
    title: 'Derecho Administrativo', 
    short: 'Trámites, recursos y gestiones ante instituciones públicas.',
    desc: 'Acompañamiento en situaciones con entidades del Estado, reclamos, procesos formales y conflictos que requieren manejo cuidadoso y conocimiento de los procedimientos.' 
  },
  { 
    id: '02', 
    title: 'Derecho Civil', 
    short: 'Contratos, conflictos patrimoniales y representación en procesos judiciales.',
    desc: 'Asesoría en relaciones legales entre personas, obligaciones, responsabilidades y defensa en procesos civiles.' 
  },
  { 
    id: '03', 
    title: 'Derecho Agrario', 
    short: 'Asuntos relacionados con tierras, posesión y uso de terrenos.',
    desc: 'Atención de casos vinculados con propiedad rural, tenencia, límites y conflictos sobre tierras.' 
  },
  { 
    id: '04', 
    title: 'Bienes Inmuebles', 
    short: 'Acompañamiento legal en temas de propiedad y registro.',
    desc: 'Apoyo en compra, ordenamiento, protección y defensa legal de bienes inmuebles.' 
  }
];

interface PracticeAreasProps {
  onDetailClick?: () => void;
}

const PracticeAreas: React.FC<PracticeAreasProps> = ({ onDetailClick }) => {
  const ref = useReveal();

  return (
    <section id="areas" ref={ref} className="py-40 px-6 lg:px-10 max-w-[1600px] mx-auto overflow-hidden">
      <div className="reveal flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gold/10 pb-12">
        <div className="space-y-4">
          <span className="text-gold tracking-[0.4em] text-[10px] uppercase">Especialización</span>
          <h2 className="font-serif text-5xl lg:text-6xl italic">Áreas de Práctica</h2>
        </div>
        <p className="text-gray-500 tracking-widest text-[10px] uppercase mt-4 md:mt-0">Soluciones de Alto Impacto</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gold/10">
        {AREAS.map((area, idx) => (
          <div 
            key={area.id} 
            className={`reveal delay-${(idx + 1) * 100} p-12 lg:p-16 border-r border-b border-gold/10 group hover:bg-gold/5 transition-all duration-700 relative overflow-hidden`}
          >
            <span className="text-gold/20 text-6xl lg:text-7xl font-serif mb-12 block group-hover:text-gold/40 transition-colors">
              {area.id}
            </span>
            <h4 className="font-brand text-sm tracking-[0.2em] mb-4 text-gold group-hover:translate-x-2 transition-transform duration-500">
              {area.title}
            </h4>
            <p className="text-white/90 font-medium text-xs uppercase tracking-wider mb-4 leading-relaxed">
              {area.short}
            </p>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
              {area.desc}
            </p>
            <button 
              onClick={onDetailClick}
              className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 cursor-pointer outline-none"
              aria-label={`Ver detalle de ${area.title}`}
            >
               <span className="material-symbols-outlined text-gold text-sm">arrow_forward</span>
               <span className="text-[9px] uppercase tracking-widest text-gold font-bold">Ver detalle</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
