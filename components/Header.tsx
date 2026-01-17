
import React from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black-pure/80 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
        <div className="flex-1 hidden md:flex justify-start">
          <nav className="flex items-center gap-12 text-[10px] uppercase tracking-[0.25em] font-medium">
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gold transition-colors duration-500 cursor-pointer">Inicio</a>
            <a onClick={() => scrollTo('areas')} className="hover:text-gold transition-colors duration-500 cursor-pointer">Áreas</a>
          </nav>
        </div>
        
        <div className="flex-none">
          <h1 className="font-brand text-xl lg:text-2xl tracking-[0.4em] text-white whitespace-nowrap">
            RANDY ARAYA
          </h1>
        </div>

        <div className="flex-1 flex justify-end gap-12 items-center">
          <nav className="hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.25em] font-medium">
            <a onClick={() => scrollTo('metodo')} className="hover:text-gold transition-colors duration-500 cursor-pointer">Forma de Trabajo</a>
            <button 
              onClick={onContactClick}
              className="hover:text-gold transition-colors duration-500 cursor-pointer uppercase"
            >
              Consulta
            </button>
          </nav>
          <button 
            onClick={onContactClick}
            className="text-[10px] uppercase tracking-[0.2em] border border-gold/40 px-6 py-3 hover:bg-gold hover:text-black-pure transition-all duration-500 hidden sm:block"
          >
            Consulta
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
