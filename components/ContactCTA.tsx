
import React, { useState } from 'react';
import { useReveal } from '../useReveal';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', details: '' });
  const ref = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "88188891";
    const message = `Nueva consulta legal\nNombre: ${formData.name}\nConsulta: ${formData.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/506${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="consulta" ref={ref} className="py-40 lg:py-60 px-6 lg:px-10 bg-gray-dark/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5 space-y-10">
          <div className="reveal space-y-4">
            <span className="text-gold tracking-[0.4em] text-[10px] uppercase">Contacto Directo</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-tight">
              Consulta Legal
            </h2>
          </div>
          <p className="reveal delay-100 text-gray-400 text-lg font-light tracking-wide italic leading-relaxed">
            Cada situación merece atención responsable y una orientación clara. 
            Puede iniciar una consulta para exponer su caso, aclarar dudas y definir el mejor camino a seguir según su situación.
          </p>
          <div className="reveal delay-200 flex flex-col gap-6 pt-6">
            <div className="flex items-center gap-4 text-gold/80">
              <span className="material-symbols-outlined text-sm">call</span>
              <span className="text-[10px] tracking-widest font-bold uppercase">8818 8891</span>
            </div>
            <div className="flex items-center gap-4 text-gold/80">
              <span className="material-symbols-outlined text-sm">mail</span>
              <span className="text-[10px] tracking-widest font-bold uppercase">info@randyaraya.com</span>
            </div>
          </div>
        </div>

        <div className="reveal delay-300 lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-black-pure p-8 lg:p-16 border border-gold/10 editorial-border shadow-2xl space-y-12">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block ml-1">
                Nombre Completo
              </label>
              <input 
                id="name"
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-gold/20 py-4 text-white focus:border-gold outline-none transition-all placeholder:text-gray-800"
                placeholder="Su nombre..."
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="details" className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block ml-1">
                Detalles de la consulta
              </label>
              <textarea 
                id="details"
                required
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-transparent border-b border-gold/20 py-4 text-white focus:border-gold outline-none transition-all placeholder:text-gray-800 resize-none"
                placeholder="Escriba aquí los detalles de su caso..."
              />
            </div>

            <button 
              type="submit"
              className="group relative w-full flex items-center justify-center py-6 bg-gold border border-gold hover:bg-black-pure hover:text-white transition-all duration-700 overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 font-brand text-[11px] tracking-[0.5em] uppercase font-bold text-black-pure group-hover:text-gold transition-colors duration-500">
                Enviar consulta
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
