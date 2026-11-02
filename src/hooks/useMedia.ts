import { useSyncExternalStore } from 'react';

// ==========================================
// TIME KAMU — RESPONSIVE MEDIA HOOK
// ==========================================

export function useMedia(
  query: string,
  fallback = false
): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') {
        return () => {};
      }

      const mediaQuery = window.matchMedia(query);

      mediaQuery.addEventListener(
        'change',
        callback
      );

      return () => {
        mediaQuery.removeEventListener(
          'change',
          callback
        );
      };
    },

    () => {
      if (typeof window === 'undefined') {
        return fallback;
      }

      return window.matchMedia(query).matches;
    },

    () => fallback
  );
}

// ==========================================
// DEVICE DETECTION
// ==========================================

// Desktop: 1024px and above.
export const useDesktop = () =>
  useMedia('(min-width: 1024px)');

// Tablet: 641px to 1023px.
export const useTablet = () =>
  useMedia(
    '(min-width: 641px) and (max-width: 1023px)'
  );

// Mobile: 640px and below.
export const useMobile = () =>
  useMedia('(max-width: 640px)');

// ==========================================
// POINTER DETECTION
// ==========================================

// Mouse or trackpad.
export const useFinePointer = () =>
  useMedia('(hover: hover) and (pointer: fine)');

// Touch-oriented device.
export const useTouchDevice = () =>
  useMedia('(hover: none) and (pointer: coarse)');

// ==========================================
// ACCESSIBILITY
// ==========================================

// Respect user's motion preferences.
export const useReducedMotionPref = () =>
  useMedia('(prefers-reduced-motion: reduce)');

// ==========================================
// DISPLAY DETECTION
// ==========================================

export const useLandscape = () =>
  useMedia('(orientation: landscape)');

export const usePortrait = () =>
  useMedia('(orientation: portrait)');
