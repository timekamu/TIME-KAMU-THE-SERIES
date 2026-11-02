import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';

import Lenis from 'lenis';

interface SmoothScrollContextType {
  scrollTo: (target: string | number | HTMLElement) => void;
  lock: () => void;
  unlock: () => void;
}

const SmoothScrollContext =
  createContext<SmoothScrollContextType | null>(null);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      autoRaf: true,
      anchors: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<SmoothScrollContextType>(
    () => ({
      scrollTo: (target) => {
        lenisRef.current?.scrollTo(target, {
          duration: 1.15,
          offset: -70,
        });
      },

      lock: () => {
        lenisRef.current?.stop();
      },

      unlock: () => {
        lenisRef.current?.start();
      },
    }),
    [],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll(): SmoothScrollContextType {
  const context = useContext(SmoothScrollContext);

  if (!context) {
    throw new Error(
      'useSmoothScroll must be used inside SmoothScrollProvider.',
    );
  }

  return context;
}
