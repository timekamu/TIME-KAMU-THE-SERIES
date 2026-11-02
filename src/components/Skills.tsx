import { motion } from 'framer-motion';

import {
  skillCategories,
  skillEvidence,
} from '../data/portfolio';

import {
  staggerContainer,
  staggerItem,
  EASE,
} from './fx';

export default function Skills() {
  return (
    <section className="
      mx-auto w-full max-w-[1600px]
      px-5 sm:px-8 lg:px-16
    ">

      {/* Heading */}
      <div className="mb-12">
        <p className="
          mb-3 text-[9px] font-bold
          tracking-[0.35em] text-[#ff3155]
        ">
          THE CREATIVE TOOLKIT
        </p>

        <h2 className="
          font-display text-5xl
          tracking-wide text-white
          sm:text-7xl
        ">
          MY
          <span className="text-[#e5092f]">
            {' '}SKILLS
          </span>
        </h2>

        <p className="
          mt-4 max-w-xl
          text-sm leading-relaxed
          text-white/45
        ">
          The creative disciplines and techniques
          I explore to transform ideas into
          visual experiences.
        </p>
      </div>

      {/* Skills grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          grid grid-cols-1 gap-5
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.id}
            variants={staggerItem}
            className="
              group relative overflow-hidden
              rounded-xl border border-white/10
              bg-[#110d12] p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#e5092f]/40
            "
          >
            {/* Ambient glow */}
            <div className="
              pointer-events-none absolute
              -right-16 -top-16
              h-40 w-40 rounded-full
              bg-[#e5092f]/[0.08]
              blur-[55px]
              transition-opacity
              group-hover:opacity-100
            " />

            {/* Category number */}
            <div className="
              relative mb-6 flex
              items-center justify-between
            ">
              <span className="
                font-display text-4xl
                text-white/15
              ">
                0{index + 1}
              </span>

              <span className="
                rounded-full border
                border-[#e5092f]/25
                bg-[#e5092f]/10
                px-3 py-1
                text-[8px] font-bold
                tracking-[0.15em]
                text-[#ff3155]
              ">
                CATEGORY
              </span>
            </div>

            {/* Category title */}
            <h3 className="
              font-display text-3xl
              tracking-wide text-white
            ">
              {category.title}
            </h3>

            <p className="
              mt-2 text-[10px]
              leading-relaxed text-white/40
            ">
              {category.subtitle}
            </p>

            {/* Skill items */}
            <div className="
              mt-7 space-y-3
            ">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-3
                    border-b border-white/[0.06]
                    pb-3 last:border-0
                  "
                >
                  {/* Skill initials */}
                  <div className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-md border
                    border-white/10
                    bg-white/[0.035]
                    font-display text-lg
                    text-[#ff3155]
                    transition-colors
                    group-hover:border-[#e5092f]/30
                  ">
                    {skill.mono}
                  </div>

                  {/* Skill name */}
                  <div className="min-w-0 flex-1">
                    <p className="
                      text-[11px]
                      font-semibold text-white/80
                    ">
                      {skill.name}
                    </p>

                    {skill.note && (
                      <p className="
                        mt-0.5 text-[8px]
                        tracking-wider text-[#ff3155]
                      ">
                        {skill.note}
                      </p>
                    )}
                  </div>

                  <span className="
                    text-[10px] text-white/25
                  ">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            {/* Evidence tags */}
            <div className="
              mt-5 border-t border-white/[0.07]
              pt-4
            ">
              <p className="
                mb-2 text-[8px]
                font-bold tracking-[0.2em]
                text-white/30
              ">
                RELATED WORK
              </p>

              <div className="
                flex flex-wrap gap-1.5
              ">
                {Array.from(
                  new Set(
                    category.skills.flatMap(
                      (skill) =>
                        skillEvidence[skill.name] ?? []
                    )
                  )
                ).slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="
                      rounded border
                      border-white/[0.07]
                      px-2 py-1
                      text-[8px] text-white/40
                    "
                  >
                    {item}
                  </span>
                ))}

                {category.skills.every(
                  (skill) =>
                    !skillEvidence[skill.name]
                ) && (
                  <span className="
                    text-[9px] text-white/25
                  ">
                    Creative exploration
                  </span>
                )}
              </div>
            </div>

          </motion.article>
        ))}
      </motion.div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: EASE,
        }}
        className="
          mt-10 flex flex-col
          gap-3 border-t border-white/[0.08]
          pt-6 sm:flex-row
          sm:items-center sm:justify-between
        "
      >
        <p className="
          text-[9px] tracking-[0.2em]
          text-white/35
        ">
          SKILLS ARE ALWAYS EVOLVING
        </p>

        <p className="
          text-[9px] tracking-wider
          text-[#ff3155]
        ">
          LEARN · EXPERIMENT · CREATE
        </p>
      </motion.div>

    </section>
  );
}
