import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';

import Lenis from 'lenis';

type ScrollOptions = {
  offset?: number;
  immediate?: boolean;
  duration?: number;
};

type SmoothScrollContextValue = {
  scrollTo: (
    target: string | number | HTMLElement,
    options?: ScrollOptions
  ) => void;

  lock: () => void;
  unlock: () => void;
};

const SmoothScrollContext =
  createContext<SmoothScrollContextValue | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({
  children,
}: ProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const lockedRef = useRef(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      orientation: 'vertical',
      gestureOrientation: 'vertical',

      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.2,

      wheelMultiplier: 0.9,
      infinite: false,

      autoRaf: true,
    });

    lenisRef.current = lenis;

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const link = target.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );

      if (!link) return;

      const href = link.getAttribute('href');

      if (!href || href === '#') return;

      const element = document.querySelector(href);

      if (!element) return;

      event.preventDefault();

      lenis.scrollTo(element, {
        offset: -80,
        duration: 1.2,
      });
    };

    document.addEventListener(
      'click',
      handleAnchorClick
    );

    return () => {
      document.removeEventListener(
        'click',
        handleAnchorClick
      );

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options: ScrollOptions = {}
    ) => {
      const lenis = lenisRef.current;

      if (!lenis) {
        if (typeof target === 'number') {
          window.scrollTo({
            top: target,
            behavior: 'smooth',
          });
        }

        return;
      }

      lenis.scrollTo(target, {
        offset: options.offset ?? 0,
        immediate: options.immediate ?? false,
        duration: options.duration ?? 1.2,
      });
    },
    []
  );

  const lock = useCallback(() => {
    if (lockedRef.current) return;

    lockedRef.current = true;
    lenisRef.current?.stop();
  }, []);

  const unlock = useCallback(() => {
    if (!lockedRef.current) return;

    lockedRef.current = false;
    lenisRef.current?.start();
  }, []);

  const value = useMemo(
    () => ({
      scrollTo,
      lock,
      unlock,
    }),
    [scrollTo, lock, unlock]
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);

  if (!context) {
    throw new Error(
      'useSmoothScroll must be used inside SmoothScrollProvider.'
    );
  }

  return context;
}
