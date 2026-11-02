import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { profile } from '../data/portfolio';
import { EASE } from './fx';

interface PlayIntroProps {
  onClose: () => void;
}

export default function PlayIntro({
  onClose,
}: PlayIntroProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="
          fixed inset-0 z-[100]
          flex items-center justify-center
          overflow-hidden bg-[#080608]
          px-5
        "
        role="dialog"
        aria-modal="true"
        aria-label="TIME KAMU introduction"
        onClick={onClose}
      >

        {/* Cinematic background */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: EASE,
          }}
          className="
            pointer-events-none absolute
            inset-0
          "
          style={{
            background: `
              radial-gradient(
                ellipse at 50% 45%,
                rgba(229,9,47,0.22),
                transparent 55%
              ),
              linear-gradient(
                135deg,
                #080608,
                #160810,
                #080608
              )
            `,
          }}
        />

        {/* Light streak */}
        <motion.div
          initial={{ x: '-120%', opacity: 0 }}
          animate={{ x: '120%', opacity: [0, 0.7, 0] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none absolute
            top-1/2 h-px w-[70%]
            bg-gradient-to-r
            from-transparent via-[#ff3155]
            to-transparent
          "
        />

        {/* Close button */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label="Close introduction"
          className="
            absolute right-5 top-5 z-20
            flex h-11 w-11 items-center
            justify-center rounded-full
            border border-white/15
            text-xl text-white/70
            transition-all hover:border-[#e5092f]
            hover:bg-[#e5092f]/15
            hover:text-white
          "
        >
          ×
        </button>

        {/* Intro content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: EASE,
          }}
          onClick={(event) => event.stopPropagation()}
          className="
            relative z-10 w-full
            max-w-4xl text-center
          "
        >

          <p className="
            mb-7 text-[9px]
            font-bold tracking-[0.45em]
            text-[#ff3155]
          ">
            A TIME KAMU ORIGINAL
          </p>

          <motion.h1
            initial={{ letterSpacing: '0.05em' }}
            animate={{ letterSpacing: '0.16em' }}
            transition={{
              delay: 0.5,
              duration: 1.2,
              ease: EASE,
            }}
            className="
              font-display
              text-6xl leading-none
              text-white sm:text-8xl
              md:text-9xl
            "
          >
            TIME
            <span className="text-[#e5092f]">
              {' '}KAMU
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: EASE,
            }}
            className="
              mx-auto mt-8 h-[2px]
              bg-[#e5092f]
            "
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.7,
            }}
            className="
              mt-8 text-xs
              tracking-[0.25em]
              text-white/55 sm:text-sm
            "
          >
            {profile.tagline.join('  ·  ')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
            }}
            className="
              mt-5 text-[10px]
              tracking-[0.3em]
              text-white/35
            "
          >
            CREATED BY {profile.displayName}
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8,
              duration: 0.6,
            }}
            onClick={onClose}
            className="
              mt-12 rounded-md
              border border-white/20
              px-8 py-3
              text-[9px] font-bold
              tracking-[0.25em] text-white
              transition-all
              hover:border-[#e5092f]
              hover:bg-[#e5092f]
            "
          >
            ENTER THE PORTFOLIO
            <span className="ml-3">→</span>
          </motion.button>

        </motion.div>

        {/* Bottom cinematic label */}
        <p className="
          absolute bottom-6
          text-[8px] tracking-[0.3em]
          text-white/20
        ">
          VISUAL STORYTELLING · MOTION · IMAGINATION
        </p>

      </motion.div>
    </AnimatePresence>
  );
}
