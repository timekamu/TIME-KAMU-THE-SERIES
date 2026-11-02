import {
  type ReactNode,
  useRef,
} from 'react';

import { motion, useInView } from 'framer-motion';

import type { SectionId } from '../data/portfolio';

import { EASE } from './fx';

type SceneProps = {
  id: SectionId;
  children: ReactNode;
  className?: string;
};

export default function Scene({
  id,
  children,
  className = '',
}: SceneProps) {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.08,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`
        relative isolate
        w-full overflow-hidden
        py-16 sm:py-20 lg:py-24
        ${className}
      `}
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 35,
      }}
      transition={{
        duration: 0.9,
        ease: EASE,
      }}
    >
      {/* Ambient section glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[-180px] top-1/4
          -z-10 h-[280px] w-[280px]
          rounded-full bg-[#e5092f]/[0.035]
          blur-[100px]
        "
      />

      {/* Content */}
      <div className="
        relative z-10 w-full
      ">
        {children}
      </div>

      {/* Bottom cinematic divider */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-0 right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.055]
          to-transparent
        "
      />
    </motion.section>
  );
}
