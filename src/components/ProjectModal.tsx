import { useEffect } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import type { Project } from '../data/portfolio';

import { EASE } from './fx';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSwitch: (project: Project) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onSwitch,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[110]
            overflow-y-auto bg-black/90
            px-3 py-6 backdrop-blur-md
            sm:px-6 sm:py-10
          "
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative mx-auto max-w-4xl
              overflow-hidden rounded-2xl
              border border-white/10
              bg-[#100c10]
            "
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project details`}
          >
            {/* Project artwork */}
            <div
              className="
                relative flex min-h-[260px]
                items-end overflow-hidden
                p-6 sm:min-h-[390px] sm:p-10
              "
              style={{
                background: `
                  radial-gradient(
                    circle at 75% 25%,
                    ${project.palette.accent}70,
                    transparent 40%
                  ),
                  linear-gradient(
                    135deg,
                    ${project.palette.from},
                    ${project.palette.via},
                    ${project.palette.to}
                  )
                `,
              }}
            >
              <div className="
                pointer-events-none absolute
                -right-10 -top-20
                h-72 w-72 rounded-full
                border border-white/15
                sm:h-96 sm:w-96
              " />

              <div className="
                pointer-events-none absolute
                right-8 top-8
                h-48 w-48 rounded-full
                border border-white/10
                sm:right-20 sm:top-14
                sm:h-64 sm:w-64
              " />

              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80 via-black/10
                to-transparent
              " />

              <div className="relative z-10">
                <p className="
                  mb-3 text-[9px]
                  font-bold tracking-[0.3em]
                  text-[#ff3155]
                ">
                  TIME KAMU ORIGINAL
                </p>

                <h2 className="
                  font-display text-5xl
                  leading-none text-white
                  sm:text-7xl
                ">
                  {project.title}
                </h2>

                <p className="
                  mt-4 text-xs
                  tracking-wider text-white/60
                ">
                  {project.category}
                </p>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="
                  absolute right-4 top-4 z-20
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full border
                  border-white/20 bg-black/30
                  text-xl text-white
                  transition-colors
                  hover:border-[#e5092f]
                  hover:bg-[#e5092f]
                "
              >
                ×
              </button>
            </div>

            {/* Project information */}
            <div className="
              grid grid-cols-1 gap-9
              p-6 sm:p-10
              md:grid-cols-[1.3fr_0.7fr]
            ">
              <div>
                <p className="
                  mb-3 text-[9px]
                  font-bold tracking-[0.25em]
                  text-[#ff3155]
                ">
                  PROJECT OVERVIEW
                </p>

                <h3 className="
                  font-display text-3xl
                  tracking-wide text-white
                ">
                  THE CREATIVE VISION
                </h3>

                <p className="
                  mt-4 text-sm
                  leading-7 text-white/55
                ">
                  {project.description}
                </p>

                <div className="mt-8">
                  <p className="
                    mb-4 text-[9px]
                    font-bold tracking-[0.25em]
                    text-white/40
                  ">
                    PROJECT FEATURES
                  </p>

                  <div className="space-y-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex items-start gap-3
                          text-xs text-white/70
                        "
                      >
                        <span className="
                          text-[#ff3155]
                        ">
                          ✦
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project details */}
              <aside>
                <div className="
                  rounded-xl border
                  border-white/10
                  bg-white/[0.025] p-5
                ">
                  <p className="
                    mb-5 text-[9px]
                    font-bold tracking-[0.25em]
                    text-[#ff3155]
                  ">
                    PROJECT DETAILS
                  </p>

                  <div className="space-y-5">
                    <div>
                      <p className="
                        text-[8px]
                        tracking-[0.2em]
                        text-white/30
                      ">
                        CATEGORY
                      </p>

                      <p className="
                        mt-2 text-xs
                        text-white/80
                      ">
                        {project.category}
                      </p>
                    </div>

                    <div>
                      <p className="
                        text-[8px]
                        tracking-[0.2em]
                        text-white/30
                      ">
                        BUILD
                      </p>

                      <p className="
                        mt-2 text-xs
                        text-white/80
                      ">
                        {project.build}
                      </p>
                    </div>

                    <div>
                      <p className="
                        text-[8px]
                        tracking-[0.2em]
                        text-white/30
                      ">
                        TECHNOLOGY
                      </p>

                      <div className="
                        mt-2 flex flex-wrap gap-2
                      ">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="
                              rounded border
                              border-white/10
                              px-2 py-1
                              text-[9px]
                              text-white/55
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="
                  mt-4 rounded-xl
                  border border-[#e5092f]/20
                  bg-[#e5092f]/[0.06] p-5
                ">
                  <p className="
                    text-[9px]
                    tracking-[0.2em]
                    text-[#ff3155]
                  ">
                    CREATIVE SIGNATURE
                  </p>

                  <p className="
                    mt-3 font-display
                    text-2xl text-white
                  ">
                    CRAFTED BY INDRA
                  </p>
                </div>
              </aside>
            </div>

            {/* Other projects */}
            <div className="
              border-t border-white/10
              p-6 sm:p-10
            ">
              <p className="
                mb-5 text-[9px]
                font-bold tracking-[0.25em]
                text-white/40
              ">
                EXPLORE MORE PROJECTS
              </p>

              <div className="
                flex flex-wrap gap-2
              ">
                {project.id !== 'cinematic-edits' && (
                  <button
                    type="button"
                    onClick={() => onSwitch(project)}
                    className="
                      rounded-md border
                      border-white/15 px-4 py-2
                      text-[9px] tracking-wider
                      text-white/70
                      hover:border-[#e5092f]
                    "
                  >
                    CURRENT PROJECT
                  </button>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    rounded-md bg-[#e5092f]
                    px-5 py-2
                    text-[9px] font-bold
                    tracking-wider text-white
                    hover:bg-[#ff3155]
                  "
                >
                  CLOSE VIEWER
                </button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
