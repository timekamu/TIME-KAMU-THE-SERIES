
import { useEffect, useState } from 'react';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import {
  useFinePointer,
  useReducedMotionPref,
} from '../hooks/useMedia';

// ==========================================
// CURSOR LABELS
// ==========================================

const LABELS: Record<string, string> = {
  view: 'VIEW',
  play: '▶',
  link: '↗',
  drag: '↔',
  close: '✕',
};

// ==========================================
// CUSTOM CURSOR
// ==========================================

export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();

  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, {
    stiffness: 600,
    damping: 40,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 600,
    damping: 40,
    mass: 0.4,
  });

  const [mode, setMode] = useState<string | null>(
    null
  );

  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  // ========================================
  // POINTER EVENTS
  // ========================================

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add(
      'has-custom-cursor'
    );

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      setVisible(true);

      const target = event.target as HTMLElement | null;

      const tagged = target?.closest<HTMLElement>(
        '[data-cursor]'
      );

      setMode(tagged?.dataset.cursor ?? null);

      setHoverLink(
        !tagged &&
        !!target?.closest('a, button, [role="button"]')
      );
    };

    const handleLeave = () => {
      setVisible(false);
    };

    const handlePress = () => {
      setDown(true);
    };

    const handleRelease = () => {
      setDown(false);
    };

    window.addEventListener(
      'pointermove',
      handleMove,
      { passive: true }
    );

    document.addEventListener(
      'pointerleave',
      handleLeave
    );

    window.addEventListener(
      'pointerdown',
      handlePress
    );

    window.addEventListener(
      'pointerup',
      handleRelease
    );

    return () => {
      document.documentElement.classList.remove(
        'has-custom-cursor'
      );

      window.removeEventListener(
        'pointermove',
        handleMove
      );

      document.removeEventListener(
        'pointerleave',
        handleLeave
      );

      window.removeEventListener(
        'pointerdown',
        handlePress
      );

      window.removeEventListener(
        'pointerup',
        handleRelease
      );
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  // ========================================
  // CURSOR SIZE & APPEARANCE
  // ========================================

  const label = mode ? LABELS[mode] : null;

  const size = label
    ? mode === 'view' ? 72 : 52
    : hoverLink ? 34 : 10;

  const backgroundColor = label
    ? 'rgba(229, 9, 47, 0.92)'
    : hoverLink
      ? 'rgba(244, 241, 236, 0.08)'
      : 'rgba(244, 241, 236, 1)';

  return (
    <motion.div
      aria-hidden="true"

      className="
        pointer-events-none
        fixed left-0 top-0
        z-[200]
        flex items-center justify-center
        rounded-full
      "

      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}

      animate={{
        width: size,
        height: size,

        opacity: visible ? 1 : 0,

        scale: down ? 0.85 : 1,

        backgroundColor,

        borderColor:
          hoverLink && !label
            ? 'rgba(244, 241, 236, 0.7)'
            : 'rgba(244, 241, 236, 0)',
      }}

      transition={{
        type: 'spring',
        stiffness: 420,
        damping: 30,
      }}
    >

      <span
        className="
          absolute inset-0
          rounded-full border
        "
        style={{
          borderColor: 'inherit',
        }}
      />

      <AnimatePresence mode="wait">

        {label && (

          <motion.span
            key={label}

            initial={{
              opacity: 0,
              scale: 0.6,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              scale: 0.6,
            }}

            className="
              font-sans
              text-[11px]
              font-bold
              tracking-[0.18em]
              text-white
            "
          >
            {label}
          </motion.span>

        )}

      </AnimatePresence>

    </motion.div>
  );
}
