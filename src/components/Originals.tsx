import { motion } from 'framer-motion';

import {
  projects,
  type Project,
} from '../data/portfolio';

import { EASE } from './fx';

type OriginalsProps = {
  onOpen: (project: Project) => void;
};

// ==========================================
// PROJECT ARTWORK
// ==========================================

function ProjectArtwork({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="
        relative aspect-[16/10]
        overflow-hidden
      "
      style={{
        background: `
          radial-gradient(
            circle at 72% 30%,
            ${project.palette.accent}66,
            transparent 38%
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
      {/* Decorative rings */}
      <div
        className="
          absolute right-[-12%]
          top-[-35%] aspect-square
          w-[75%] rounded-full
          border border-white/15
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute right-[5%]
          top-[-10%] aspect-square
          w-[48%] rounded-full
          border border-white/10
        "
      />

      {/* Background number */}
      <span className="
        absolute left-5 top-2
        font-display text-[110px]
        leading-none text-white/[0.09]
        sm:text-[145px]
      ">
        0{index + 1}
      </span>

      {/* Center artwork */}
      <div className="
        absolute inset-0
        flex flex-col items-center
        justify-center px-5 text-center
      ">
        <motion.span
          className="
            mb-3 text-[9px]
            font-bold tracking-[0.35em]
            text-white/55
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          TIME KAMU PRESENTS
        </motion.span>

        <h3 className="
          font-display
          text-[clamp(30px,5vw,55px)]
          leading-none tracking-wide
          text-white
        ">
          {project.title}
        </h3>

        <div
          className="
            mt-4 h-[2px] w-12
            rounded-full
          "
          style={{
            backgroundColor: project.palette.accent,
          }}
        />
      </div>

      {/* Bottom category */}
      <span className="
        absolute bottom-4 left-4
        max-w-[80%] truncate
        rounded-full border
        border-white/15
        bg-black/30 px-3 py-1.5
        text-[8px] tracking-[0.15em]
        text-white/80 backdrop-blur-md
      ">
        {project.genre}
      </span>

      {/* Play indicator */}
      <span className="
        absolute right-4 top-4
        flex h-10 w-10 items-center
        justify-center rounded-full
        border border-white/20
        bg-black/30 text-xs
        text-white backdrop-blur-md
        transition-all duration-300
        group-hover:scale-110
        group-hover:bg-[#e5092f]
      ">
        ▶
      </span>
    </div>
  );
}

// ==========================================
// ORIGINALS GALLERY
// ==========================================

export default function Originals({
  onOpen,
}: OriginalsProps) {
  return (
    <section className="
      mx-auto w-full max-w-[1600px]
      px-5 sm:px-8 lg:px-16
    ">

      {/* Heading */}
      <div className="
        mb-10 flex flex-col
        justify-between gap-5
        sm:flex-row sm:items-end
      ">
        <div>
          <p className="
            mb-3 text-[9px]
            font-bold tracking-[0.35em]
            text-[#ff3155]
          ">
            EXCLUSIVE CREATIVE COLLECTION
          </p>

          <h2 className="
            font-display text-5xl
            tracking-wide text-white
            sm:text-7xl
          ">
            TIME KAMU
            <span className="text-[#e5092f]">
              {' '}ORIGINALS
            </span>
          </h2>

          <p className="
            mt-4 max-w-xl
            text-sm leading-relaxed
            text-white/45
          ">
            A collection of creative experiments,
            cinematic edits, motion graphics and
            visual storytelling.
          </p>
        </div>

        <span className="
          text-[9px] tracking-[0.2em]
          text-white/35
        ">
          {projects.length} CREATIVE COLLECTIONS
        </span>
      </div>

      {/* Featured projects */}
      <div className="
        mb-7 flex items-center gap-3
      ">
        <span className="
          h-5 w-[3px] rounded-full
          bg-[#e5092f]
        " />

        <h3 className="
          text-xs font-bold
          tracking-[0.2em] text-white/80
        ">
          FEATURED COLLECTIONS
        </h3>
      </div>

      {/* Project grid */}
      <div className="
        grid grid-cols-1 gap-5
        sm:grid-cols-2
        xl:grid-cols-3
      ">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            data-cursor="view"
            onClick={() => onOpen(project)}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: EASE,
            }}
            whileHover={{
              y: -7,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group overflow-hidden
              rounded-xl border
              border-white/10
              bg-[#110d12]
              text-left
              transition-colors
              hover:border-[#e5092f]/50
            "
          >
            <ProjectArtwork
              project={project}
              index={index}
            />

            <div className="p-5">

              <div className="
                mb-3 flex items-center
                justify-between gap-3
              ">
                <span className="
                  text-[8px] font-bold
                  tracking-[0.2em]
                  text-[#ff3155]
                ">
                  ORIGINAL COLLECTION
                </span>

                <span className="
                  text-[9px] text-white/35
                ">
                  {project.year}
                </span>
              </div>

              <h4 className="
                font-display text-2xl
                tracking-wide text-white
              ">
                {project.title}
              </h4>

              <p className="
                mt-2 line-clamp-2
                text-[11px] leading-relaxed
                text-white/45
              ">
                {project.logline}
              </p>

              {/* Technology tags */}
              <div className="
                mt-4 flex flex-wrap gap-1.5
              ">
                {project.stack.slice(0, 3).map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        rounded border
                        border-white/10
                        px-2 py-1
                        text-[8px]
                        text-white/45
                      "
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* Open project */}
              <div className="
                mt-5 flex items-center
                justify-between
                border-t border-white/[0.07]
                pt-4
              ">
                <span className="
                  text-[9px] font-bold
                  tracking-[0.2em]
                  text-white/55
                  transition-colors
                  group-hover:text-white
                ">
                  EXPLORE PROJECT
                </span>

                <span className="
                  text-sm text-[#ff3155]
                  transition-transform
                  group-hover:translate-x-1
                ">
                  ↗
                </span>
              </div>

            </div>
          </motion.button>
        ))}
      </div>

      {/* Collection footer */}
      <div className="
        mt-10 flex items-center gap-4
        border-t border-white/[0.07]
        pt-6
      ">
        <span className="
          h-2 w-2 rounded-full
          bg-[#e5092f]
        " />

        <p className="
          text-[9px] tracking-[0.2em]
          text-white/35
        ">
          MORE CREATIVE STORIES COMING SOON
        </p>

        <div className="
          h-px flex-1 bg-white/10
        " />

        <span className="
          text-[9px] text-white/30
        ">
          CRAFTED BY INDRAJIT
        </span>
      </div>

    </section>
  );
}
