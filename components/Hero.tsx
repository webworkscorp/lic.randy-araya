
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = "Rodríguez & Asociados";

  useEffect(() => {
    const handleType = () => {
      const shouldDelete = isDeleting;
      const currentFullText = fullText;
      
      setText(
        shouldDelete 
          ? currentFullText.substring(0, text.length - 1) 
          : currentFullText.substring(0, text.length + 1)
      );

      setTypingSpeed(shouldDelete ? 50 : 150);

      if (!shouldDelete && text === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="reveal relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-20">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20 w-full relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-8 lg:mb-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 border border-black-pure/5 bg-gray-50/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-[9px] tracking-widest font-bold uppercase text-black-pure/60">
              Excelencia garantizada
            </span>
          </div>

          <span className="text-black-pure/40 tracking-[0.4em] text-[10px] uppercase font-bold font-sans">
            Confianza y orden para su negocio
          </span>
        </div>

        <div className="min-h-[12vw] lg:min-h-[8rem] flex items-center justify-center mb-8">
          <h2 className="font-brand text-[8vw] lg:text-[6rem] leading-[0.85] tracking-tighter font-bold text-black-pure">
            {text}
            <span className="inline-block w-[3px] h-[0.8em] bg-teal-firm ml-2 animate-pulse"></span>
          </h2>
        </div>

        <div className="w-full max-w-[500px] lg:max-w-[600px] mb-12 group px-4">
          <img 
            src="https://i.imgur.com/vxi1Aav.png" 
            alt="Logotipo" 
            className="relative w-full h-auto drop-shadow-lg transition-all duration-1000 group-hover:scale-[1.02]"
            style={{ maxHeight: '40vh', objectFit: 'contain' }}
          />
        </div>

        <div className="max-w-2xl flex flex-col items-center">
          <p className="text-xl lg:text-2xl text-black-pure/60 font-serif leading-relaxed mb-12 italic px-4">
            "Le ayudamos a organizar sus cuentas para que usted se enfoque en crecer."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <button 
              onClick={onCtaClick}
              className="px-12 py-5 bg-black-pure text-white font-sans text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-teal-firm transition-all duration-500 shadow-xl"
            >
              Agendar consulta
            </button>
            <span className="font-sans text-[10px] tracking-[0.2em] text-black-pure/50 font-medium uppercase">
              UPALA, ALAJUELA · COSTA RICA 21301
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-light/30 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
