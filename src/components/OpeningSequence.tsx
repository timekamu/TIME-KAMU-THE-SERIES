
import { useEffect, useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { EASE } from './fx';

type OpeningSequenceProps = {
  onDone: () => void;
};

export default function OpeningSequence({
  onDone,
}: OpeningSequenceProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - start;

      const next = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );

      setProgress(next);

      if (next >= 100) {
        window.clearInterval(interval);
        setExiting(true);
      }
    }, 35);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!exiting) return;

    const timer = window.setTimeout(onDone, 850);

    return () => window.clearTimeout(timer);
  }, [exiting, onDone]);

  return (
    <AnimatePresence>
      {!exiting || progress === 100 ? (
        <motion.div
          key="opening-screen"
          className="
            fixed inset-0 z-[300]
            flex flex-col items-center justify-center
            overflow-hidden bg-[#070609]
          "
          initial={{ opacity: 1 }}
          animate={{
            opacity: exiting ? 0 : 1,
            scale: exiting ? 1.04 : 1,
            filter: exiting ? 'blur(12px)' : 'blur(0px)',
          }}
          transition={{
            duration: 0.8,
            ease: EASE,
          }}
        >
          {/* Ambient background */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(ellipse_at_center,rgba(229,9,47,0.19),transparent_55%)]
            "
          />

          <motion.div
            className="
              absolute h-[320px] w-[320px]
              rounded-full border border-red-500/10
              sm:h-[480px] sm:w-[480px]
            "
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{
              rotate: {
                duration: 24,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />

          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                mb-5 text-[10px] font-bold
                tracking-[0.55em] text-white/45
                sm:text-xs
              "
            >
              AN ORIGINAL CREATIVE EXPERIENCE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(15px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: EASE }}
              className="
                font-display text-[clamp(64px,15vw,150px)]
                leading-[0.85] tracking-[-0.04em]
                text-white
              "
            >
              TIME
              <span className="text-[#e5092f]"> KAMU</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: EASE,
              }}
              className="
                mx-auto mt-7 h-px max-w-[260px]
                bg-gradient-to-r from-transparent via-red-500 to-transparent
              "
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
                mt-5 text-[10px] tracking-[0.4em]
                text-white/55 sm:text-xs
              "
            >
              CRAFTED BY INDRAJIT
            </motion.p>
          </div>

          {/* Loading progress */}
          <div className="
            absolute bottom-12 left-1/2
            w-[min(240px,65vw)] -translate-x-1/2
          ">
            <div className="
              mb-3 flex items-center justify-between
              text-[9px] tracking-[0.25em] text-white/45
            ">
              <span>INITIALIZING EXPERIENCE</span>
              <span className="tabular-nums">
                {progress}%
              </span>
            </div>

            <div className="
              h-[2px] overflow-hidden bg-white/10
            ">
              <motion.div
                className="h-full bg-[#e5092f]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
