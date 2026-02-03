
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // El header aparece después de un scroll inicial sutil
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactNumber = "+506 6220 9941";
  const scrollingText = `${contactNumber}  •  `;
  const repeatedText = Array(20).fill(scrollingText).join("");

  return (
    <header 
      className={`fixed top-0 w-full z-50 bg-black-pure h-14 border-b border-white/5 transition-transform duration-1000 ease-in-out flex items-center overflow-hidden ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative w-full whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="font-sans text-[11px] lg:text-[13px] tracking-[0.5em] font-medium text-white/70 uppercase">
            {repeatedText}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
