
import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      const revealElements = currentRef.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const revealElements = currentRef.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
};
