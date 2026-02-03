
import React from 'react';

const STEPS = [
  { 
    n: '01', 
    title: 'Revisión', 
    d: 'Analizamos su situación actual con un diagnóstico profundo y honesto, identificando fugas de capital y áreas de mejora inmediata.' 
  },
  { 
    n: '02', 
    title: 'Orden', 
    d: 'Limpiamos y estructuramos sus cuentas estancadas bajo normativas vigentes, devolviéndole el control total de sus finanzas.' 
  },
  { 
    n: '03', 
    title: 'Crecimiento', 
    d: 'Implementamos un seguimiento estratégico para que su negocio no solo cumpla, sino que escale hacia sus metas reales.' 
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="py-24 lg:py-48 bg-black-pure text-white overflow-hidden border-t border-white/5">
      <div className="max-w-[1900px] mx-auto px-8 lg:px-20">
        
        {/* Encabezado de Sección */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-6">
            <h2 className="font-brand text-6xl lg:text-8xl font-bold leading-none uppercase">
              Pasos <span className="text-gold italic lowercase font-serif font-normal">simples</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:text-right">
            <p className="font-sans text-[10px] lg:text-[12px] tracking-[0.8em] text-teal-firm uppercase font-bold">
              ORDEN · CONFIANZA · RESULTADOS
            </p>
          </div>
        </div>
        
        {/* Grid de Pasos */}
        <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className={`group relative p-10 lg:p-16 border-white/10 transition-all duration-1000 hover:bg-white/[0.02]
                ${idx !== 2 ? 'lg:border-r border-b lg:border-b-0' : 'border-b lg:border-b-0'}`}
            >
              {/* Número de fondo */}
              <span className="absolute top-10 right-10 font-brand text-7xl lg:text-9xl text-white/[0.03] font-bold group-hover:text-gold/10 transition-colors duration-700">
                {step.n}
              </span>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase font-bold mb-12 block">
                  Etapa {step.n}
                </span>
                
                <h3 className="font-brand text-3xl lg:text-4xl font-bold mb-8 uppercase tracking-tight group-hover:text-teal-firm transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-white text-lg lg:text-xl font-serif leading-relaxed max-w-sm mb-12">
                  {step.d}
                </p>
                
                <div className="mt-auto pt-8">
                  <div className="w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-teal-firm transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;
