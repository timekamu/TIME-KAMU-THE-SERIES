import { motion } from 'framer-motion';

import {
  projects,
  sectionMeta,
  type SectionId,
} from '../data/portfolio';

import { EASE } from './fx';

type ContinueWatchingProps = {
  order: SectionId[];
};

const progressValues = [82, 64, 45];

export default function ContinueWatching({
  order,
}: ContinueWatchingProps) {
  const featured = projects.slice(0, 3);

  return (
    <section
      className="
        relative z-20
        -mt-14 pb-12
        sm:-mt-20 sm:pb-16
      "
    >
      <div className="
        mx-auto max-w-[1600px]
        px-5 sm:px-8 lg:px-16
      ">

        {/* Heading */}
        <div className="
          mb-6 flex items-end
          justify-between gap-4
        ">
          <div>
            <p className="
              mb-2 text-[9px]
              font-bold tracking-[0.3em]
              text-[#ff3155]
            ">
              PICK UP WHERE YOU LEFT OFF
            </p>

            <h2 className="
              font-display text-2xl
              tracking-wide text-white
              sm:text-3xl
            ">
              CONTINUE EXPLORING
            </h2>
          </div>

          <span className="
            hidden text-[9px]
            tracking-[0.2em]
            text-white/35 sm:block
          ">
            TIME KAMU COLLECTION
          </span>
        </div>

        {/* Project cards */}
        <div className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {featured.map((project, index) => {
            const palette = project.palette;
            const progress = progressValues[index] ?? 50;

            return (
              <motion.a
                key={project.id}
                href="#originals"
                data-cursor="view"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: EASE,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group relative
                  overflow-hidden rounded-lg
                  border border-white/10
                  bg-[#110d12]
                  transition-colors
                  hover:border-[#e5092f]/50
                "
              >

                {/* Artwork */}
                <div
                  className="
                    relative aspect-[16/8]
                    overflow-hidden
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 75% 25%,
                        ${palette.accent}55,
                        transparent 38%
                      ),
                      linear-gradient(
                        135deg,
                        ${palette.from},
                        ${palette.via},
                        ${palette.to}
                      )
                    `,
                  }}
                >

                  {/* Decorative rings */}
                  <div
                    className="
                      absolute right-[-8%]
                      top-[-35%] aspect-square
                      w-[65%] rounded-full
                      border border-white/15
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute right-[7%]
                      top-[-15%] aspect-square
                      w-[42%] rounded-full
                      border border-white/10
                    "
                  />

                  {/* Large project number */}
                  <span className="
                    absolute left-5 top-3
                    font-display text-[85px]
                    leading-none text-white/10
                  ">
                    0{index + 1}
                  </span>

                  {/* Center title */}
                  <div className="
                    absolute inset-0
                    flex items-center justify-center
                    px-4 text-center
                  ">
                    <h3 className="
                      font-display
                      text-3xl tracking-wide
                      text-white sm:text-4xl
                    ">
                      {project.title}
                    </h3>
                  </div>

                  {/* Category */}
                  <span className="
                    absolute bottom-3 left-4
                    rounded-full border
                    border-white/15
                    bg-black/30 px-3 py-1
                    text-[8px] tracking-[0.15em]
                    text-white/80
                    backdrop-blur-md
                  ">
                    {project.genre}
                  </span>

                  {/* Play icon */}
                  <span className="
                    absolute right-4 top-4
                    flex h-9 w-9 items-center
                    justify-center rounded-full
                    border border-white/20
                    bg-black/30 text-sm
                    text-white backdrop-blur-md
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:bg-[#e5092f]
                  ">
                    ▶
                  </span>
                </div>

                {/* Card details */}
                <div className="p-4">

                  <div className="
                    mb-3 flex items-center
                    justify-between gap-2
                  ">
                    <span className="
                      text-[10px] font-bold
                      tracking-wider text-white
                    ">
                      {project.title}
                    </span>

                    <span className="
                      text-[9px] text-white/35
                    ">
                      {project.year}
                    </span>
                  </div>

                  <p className="
                    mb-4 line-clamp-2
                    text-[11px] leading-relaxed
                    text-white/45
                  ">
                    {project.logline}
                  </p>

                  {/* Progress bar */}
                  <div className="
                    mb-2 h-[3px]
                    overflow-hidden rounded-full
                    bg-white/10
                  ">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${progress}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.3 + index * 0.1,
                        ease: EASE,
                      }}
                      className="
                        h-full rounded-full
                        bg-[#e5092f]
                      "
                    />
                  </div>

                  <div className="
                    flex justify-between
                    text-[8px] tracking-wider
                    text-white/30
                  ">
                    <span>FEATURED COLLECTION</span>
                    <span>{progress}%</span>
                  </div>

                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
