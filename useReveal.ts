
import { useRef } from 'react';

/**
 * Hook useReveal simplificado para desactivar animaciones de scroll
 * a petición del usuario.
 */
export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  return ref;
};
