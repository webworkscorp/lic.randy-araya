
import React from 'react';

const REASONS = [
  {
    title: "Experiencia",
    desc: "Años apoyando a empresas en procesos de licitación pública con éxito."
  },
  {
    title: "A su medida",
    desc: "Estrategias contables que se adaptan al ritmo real de su operación."
  },
  {
    title: "Compromiso",
    desc: "Nuestra prioridad es que su negocio tenga bases sólidas y seguras siempre."
  },
  {
    title: "Claridad",
    desc: "Cuentas ordenadas y reportes que usted puede entender sin rodeos."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="reveal py-24 lg:py-40 px-8 lg:px-20 bg-white border-y border-gray-border overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-teal-firm tracking-[0.6em] text-[9px] uppercase font-bold font-sans mb-6 block">Valores</span>
            <h2 className="font-brand text-5xl lg:text-7xl font-bold text-black-pure leading-[0.9] mb-8 uppercase">
              ¿Por qué <br/><span className="text-gold italic">nosotros?</span>
            </h2>
            <p className="text-lg text-black-pure/40 font-serif leading-relaxed italic">
              Construimos confianza a través del orden y la honestidad técnica.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {REASONS.map((reason, idx) => (
              <div key={idx} className="group border-t border-gray-border pt-10">
                <span className="font-brand text-xs text-gold font-bold mb-4 block opacity-50">
                  0{idx + 1}
                </span>
                <h4 className="font-brand text-2xl font-bold text-black-pure uppercase mb-4 tracking-tight group-hover:text-teal-firm transition-colors duration-500">
                  {reason.title}
                </h4>
                <p className="text-black-pure/50 font-serif text-lg leading-relaxed max-w-sm">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
