import { useEffect } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  profile,
  education,
  experience,
} from '../data/portfolio';

import { EASE } from './fx';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({
  onClose,
}: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
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
        className="
          fixed inset-0 z-[120]
          overflow-y-auto bg-black/90
          px-3 py-6 backdrop-blur-md
          sm:px-6 sm:py-10
        "
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{
            duration: 0.5,
            ease: EASE,
          }}
          onClick={(event) => event.stopPropagation()}
          className="
            relative mx-auto max-w-3xl
            overflow-hidden rounded-2xl
            border border-white/10
            bg-[#100c10]
          "
          role="dialog"
          aria-modal="true"
          aria-label="Professional profile"
        >

          {/* Header */}
          <div className="
            relative overflow-hidden
            border-b border-white/10
            bg-gradient-to-br
            from-[#3a101d] via-[#180b12]
            to-[#100c10]
            p-7 sm:p-10
          ">
            <div className="
              pointer-events-none absolute
              -right-16 -top-24
              h-72 w-72 rounded-full
              border border-white/10
            " />

            <div className="
              pointer-events-none absolute
              -right-5 -top-12
              h-52 w-52 rounded-full
              border border-white/[0.06]
            " />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="
                absolute right-5 top-5 z-10
                flex h-10 w-10
                items-center justify-center
                rounded-full border
                border-white/20
                text-xl text-white
                transition-colors
                hover:border-[#e5092f]
                hover:bg-[#e5092f]
              "
            >
              ×
            </button>

            <p className="
              text-[9px] font-bold
              tracking-[0.35em]
              text-[#ff3155]
            ">
              A TIME KAMU ORIGINAL
            </p>

            <h2 className="
              mt-5 font-display
              text-5xl tracking-wide
              text-white sm:text-7xl
            ">
              {profile.displayName}
            </h2>

            <p className="
              mt-3 text-sm
              text-white/65
            ">
              {profile.fullName}
            </p>

            <p className="
              mt-2 text-[10px]
              tracking-wider text-white/40
            ">
              {profile.role}
            </p>

            <div className="
              mt-7 flex flex-wrap gap-2
            ">
              {profile.tagline.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full border
                    border-white/15
                    bg-black/20 px-3 py-1.5
                    text-[9px] text-white/75
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="
            space-y-10 p-7 sm:p-10
          ">

            {/* About */}
            <section>
              <p className="
                text-[9px] font-bold
                tracking-[0.25em]
                text-[#ff3155]
              ">
                ABOUT
              </p>

              <p className="
                mt-4 text-sm
                leading-7 text-white/60
              ">
                {profile.intro}
              </p>
            </section>

            {/* Location */}
            <section className="
              border-t border-white/[0.08]
              pt-7
            ">
              <p className="
                text-[9px] font-bold
                tracking-[0.25em]
                text-[#ff3155]
              ">
                LOCATION
              </p>

              <p className="
                mt-3 text-sm text-white/70
              ">
                {profile.location}
              </p>
            </section>

            {/* Education */}
            <section className="
              border-t border-white/[0.08]
              pt-7
            ">
              <p className="
                mb-5 text-[9px] font-bold
                tracking-[0.25em]
                text-[#ff3155]
              ">
                EDUCATION
              </p>

              <div className="space-y-5">
                {education.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="
                      border-l-2
                      border-[#e5092f]/50
                      pl-5
                    "
                  >
                    <h3 className="
                      text-sm font-semibold
                      text-white/85
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-1 text-xs
                      text-white/45
                    ">
                      {item.institution}
                    </p>

                    <p className="
                      mt-2 text-[9px]
                      tracking-wider
                      text-[#ff3155]
                    ">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="
              border-t border-white/[0.08]
              pt-7
            ">
              <p className="
                mb-5 text-[9px] font-bold
                tracking-[0.25em]
                text-[#ff3155]
              ">
                EXPERIENCE & CREATIVE JOURNEY
              </p>

              <div className="space-y-5">
                {experience.map((item, index) => (
                  <div
                    key={`${item.role}-${index}`}
                    className="
                      border-l-2
                      border-white/15 pl-5
                    "
                  >
                    <h3 className="
                      text-sm font-semibold
                      text-white/85
                    ">
                      {item.role}
                    </h3>

                    <p className="
                      mt-1 text-xs
                      text-white/45
                    ">
                      {item.company}
                    </p>

                    <p className="
                      mt-2 text-[9px]
                      tracking-wider text-white/35
                    ">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Social links */}
            <section className="
              border-t border-white/[0.08]
              pt-7
            ">
              <p className="
                mb-5 text-[9px] font-bold
                tracking-[0.25em]
                text-[#ff3155]
              ">
                CONNECT WITH ME
              </p>

              <div className="
                flex flex-wrap gap-3
              ">
                <a
                  href={profile.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-md bg-[#e5092f]
                    px-5 py-3
                    text-[9px] font-bold
                    tracking-wider text-white
                    transition-colors
                    hover:bg-[#ff3155]
                  "
                >
                  YOUTUBE ↗
                </a>

                <a
                  href={profile.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-md border
                    border-white/15
                    px-5 py-3
                    text-[9px] font-bold
                    tracking-wider text-white
                    transition-colors
                    hover:border-[#e5092f]
                  "
                >
                  INSTAGRAM ↗
                </a>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="
            border-t border-white/10
            px-7 py-5 text-center
            sm:px-10
          ">
            <p className="
              text-[9px] tracking-[0.25em]
              text-white/30
            ">
              CRAFTED BY INDRAJIT · TIME KAMU
            </p>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
