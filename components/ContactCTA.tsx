
import React, { useState } from 'react';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', details: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "62209941";
    
    // Formato ordenado para WhatsApp usando asteriscos para negrita
    const message = `*NUEVA CONSULTA - RODRÍGUEZ & ASOCIADOS*\n` +
                    `---------------------------------------\n` +
                    `*Nombre:* ${formData.name}\n` +
                    `*Desafío:* ${formData.details}\n` +
                    `---------------------------------------\n` +
                    `_Enviado desde el sitio web oficial_`;
                    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/506${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="consulta" className="reveal py-32 lg:py-64 px-8 lg:px-20 bg-white overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Columna de Texto Persuasivo */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <span className="text-teal-firm tracking-[0.8em] text-[10px] uppercase font-bold font-sans block">Acción Inmediata</span>
              <h2 className="font-brand text-6xl lg:text-9xl font-bold text-black-pure leading-[0.85] tracking-tighter">
                Tome el <br/>
                <span className="text-gold italic font-serif font-normal lowercase">control</span> <br/>
                hoy mismo
              </h2>
              <p className="text-2xl text-black-pure/60 font-serif leading-relaxed italic max-w-md">
                "No permita que el desorden financiero limite su crecimiento. Asegure su patrimonio con asesoría de élite."
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-gray-border">
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] text-black-pure/40 uppercase font-bold mb-4">Vía Prioritaria</p>
                <div className="flex items-center gap-2 font-brand text-3xl text-black-pure cursor-default">
                  6220 9941
                </div>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] text-black-pure/40 uppercase font-bold mb-4">Correo Oficial</p>
                <a href="mailto:info@contarodriguez.com" className="font-brand text-2xl text-black-pure hover:text-teal-firm transition-all">info@contarodriguez.com</a>
              </div>
            </div>

            <div className="pt-8">
               <p className="font-serif text-sm text-black-pure/40 italic">
                 Respuestas en menos de 24 horas hábiles. Su privacidad y éxito son nuestra prioridad.
               </p>
            </div>
          </div>

          {/* Columna del Formulario de Cierre */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gray-light/50 -z-10 rounded-sm"></div>
            <div className="bg-black-pure p-10 lg:p-24 shadow-2xl relative">
              <div className="mb-16">
                <h4 className="font-brand text-3xl text-white uppercase tracking-tight mb-4">Iniciar Transformación</h4>
                <div className="w-16 h-[1px] bg-gold"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="group space-y-3">
                  <label className="font-sans text-[9px] uppercase tracking-[0.5em] text-gold font-bold block transition-colors">
                    Nombre del Titular o Empresa
                  </label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-serif text-white focus:border-teal-firm outline-none transition-all placeholder:text-white/5"
                    placeholder="Ej. Corporación Horizonte"
                  />
                </div>
                
                <div className="group space-y-3">
                  <label className="font-sans text-[9px] uppercase tracking-[0.5em] text-gold font-bold block transition-colors">
                    Describa su desafío actual
                  </label>
                  <textarea 
                    required
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-serif text-white focus:border-teal-firm outline-none transition-all resize-none placeholder:text-white/5"
                    placeholder="Contabilidad, SICOP, Auditoría..."
                  />
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    className="group relative w-full overflow-hidden bg-teal-firm py-8 text-white transition-all duration-700 hover:bg-white hover:text-black-pure"
                  >
                    <span className="relative z-10 font-sans text-[11px] tracking-[0.6em] font-bold uppercase">
                      Enviar consulta
                    </span>
                    <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
