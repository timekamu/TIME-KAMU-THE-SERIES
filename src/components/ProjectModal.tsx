import { useEffect } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  projects,
  type Project,
} from '../data/portfolio';

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
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            transition={{
              duration: 0.5,
              ease: EASE,
            }}
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
            {/* Cinematic artwork */}
            <div
              className="
                relative flex min-h-[280px]
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
                  {project.genre} · {project.year}
                </p>
              </div>

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

            {/* Details */}
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
                  PROJECT STORY
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
                  {project.logline}
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
                        <span className="text-[#ff3155]">
                          ✦
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="
                    mb-4 text-[9px]
                    font-bold tracking-[0.25em]
                    text-white/40
                  ">
                    PROJECT METRICS
                  </p>

                  <div className="
                    grid grid-cols-2 gap-3
                  ">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="
                          rounded-lg border
                          border-white/10
                          bg-white/[0.025] p-4
                        "
                      >
                        <p className="
                          font-display text-2xl
                          text-white
                        ">
                          {metric.value}
                        </p>

                        <p className="
                          mt-1 text-[9px]
                          text-white/40
                        ">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-4">
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
                        GENRE
                      </p>

                      <p className="
                        mt-2 text-xs text-white/80
                      ">
                        {project.genre}
                      </p>
                    </div>

                    <div>
                      <p className="
                        text-[8px]
                        tracking-[0.2em]
                        text-white/30
                      ">
                        YEAR
                      </p>

                      <p className="
                        mt-2 text-xs text-white/80
                      ">
                        {project.year}
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

                      <div className="
                        mt-2 flex flex-wrap gap-2
                      ">
                        {project.build.map((item) => (
                          <span
                            key={item}
                            className="
                              rounded border
                              border-white/10
                              px-2 py-1
                              text-[9px] text-white/55
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
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
                              text-[9px] text-white/55
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      block rounded-lg
                      bg-[#e5092f] px-5 py-4
                      text-center text-[9px]
                      font-bold tracking-wider
                      text-white hover:bg-[#ff3155]
                    "
                  >
                    VIEW PROJECT ↗
                  </a>
                )}

                <div className="
                  rounded-xl border
                  border-[#e5092f]/20
                  bg-[#e5092f]/[0.06] p-5
                ">
                  <p className="
                    text-[9px] tracking-[0.2em]
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

            {/* More projects */}
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

              <div className="flex flex-wrap gap-2">
                {projects
                  .filter((item) => item.id !== project.id)
                  .map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSwitch(item)}
                      className="
                        rounded-md border
                        border-white/15 px-4 py-2
                        text-[9px] tracking-wider
                        text-white/70
                        transition-colors
                        hover:border-[#e5092f]
                        hover:text-white
                      "
                    >
                      {item.title}
                    </button>
                  ))}

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    rounded-md bg-[#e5092f]
                    px-5 py-2 text-[9px]
                    font-bold tracking-wider
                    text-white hover:bg-[#ff3155]
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
