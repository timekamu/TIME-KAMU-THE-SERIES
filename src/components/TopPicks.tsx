import { useRef } from 'react';

import { motion } from 'framer-motion';

import { topPicks } from '../data/portfolio';

import { EASE } from './fx';

export default function TopPicks() {
  const railRef = useRef<HTMLDivElement>(null);

  const moveRail = (direction: number) => {
    const rail = railRef.current;

    if (!rail) return;

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.75,
      behavior: 'smooth',
    });
  };

  return (
    <section className="
      mx-auto w-full max-w-[1600px]
      px-5 sm:px-8 lg:px-16
    ">

      {/* Heading */}
      <div className="
        mb-8 flex items-end
        justify-between gap-4
      ">
        <div>
          <p className="
            mb-3 text-[9px]
            font-bold tracking-[0.35em]
            text-[#ff3155]
          ">
            HANDPICKED FOR YOU
          </p>

          <h2 className="
            font-display text-5xl
            tracking-wide text-white
            sm:text-7xl
          ">
            TOP
            <span className="text-[#e5092f]">
              {' '}PICKS
            </span>
          </h2>

          <p className="
            mt-3 max-w-lg
            text-xs leading-relaxed
            text-white/40 sm:text-sm
          ">
            A closer look at the creative world
            and visual interests behind TIME KAMU.
          </p>
        </div>

        {/* Desktop controls */}
        <div className="
          hidden gap-2 sm:flex
        ">
          <button
            type="button"
            onClick={() => moveRail(-1)}
            aria-label="Previous picks"
            className="
              flex h-10 w-10 items-center
              justify-center rounded-full
              border border-white/15
              text-white/70
              transition-colors
              hover:border-[#e5092f]
              hover:bg-[#e5092f]
              hover:text-white
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => moveRail(1)}
            aria-label="Next picks"
            className="
              flex h-10 w-10 items-center
              justify-center rounded-full
              border border-white/15
              text-white/70
              transition-colors
              hover:border-[#e5092f]
              hover:bg-[#e5092f]
              hover:text-white
            "
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal carousel */}
      <div
        ref={railRef}
        className="
          rail flex gap-4
          overflow-x-auto pb-5
          sm:gap-5
        "
      >
        {topPicks.map((pick, index) => (
          <motion.article
            key={pick.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: EASE,
            }}
            whileHover={{
              y: -7,
            }}
            className="
              group relative
              min-w-[230px] max-w-[230px]
              flex-1 overflow-hidden
              rounded-xl border
              border-white/10
              bg-[#110d12]
              transition-colors
              hover:border-[#e5092f]/45
              sm:min-w-[270px]
              sm:max-w-[270px]
            "
          >

            {/* Artwork */}
            <div
              className="
                relative aspect-[4/5]
                overflow-hidden
              "
              style={{
                background: `
                  radial-gradient(
                    circle at 70% 25%,
                    ${pick.palette.accent}66,
                    transparent 40%
                  ),
                  linear-gradient(
                    145deg,
                    ${pick.palette.from},
                    ${pick.palette.via},
                    ${pick.palette.to}
                  )
                `,
              }}
            >

              {/* Large decorative ring */}
              <div className="
                absolute right-[-25%]
                top-[-12%] aspect-square
                w-[100%] rounded-full
                border border-white/15
                transition-transform
                duration-700
                group-hover:scale-110
              " />

              <div className="
                absolute right-[-5%]
                top-[10%] aspect-square
                w-[65%] rounded-full
                border border-white/10
              " />

              {/* Background number */}
              <span className="
                absolute left-4 top-2
                font-display text-[115px]
                leading-none text-white/[0.07]
              ">
                0{index + 1}
              </span>

              {/* Card title */}
              <div className="
                absolute inset-x-5
                bottom-7 z-10
              ">
                <p className="
                  mb-3 text-[8px]
                  font-bold tracking-[0.25em]
                  text-white/50
                ">
                  {pick.label}
                </p>

                <h3 className="
                  font-display text-4xl
                  leading-none tracking-wide
                  text-white
                ">
                  {pick.title}
                </h3>

                <div
                  className="
                    mt-4 h-[2px] w-10
                    transition-all duration-500
                    group-hover:w-20
                  "
                  style={{
                    background: pick.palette.accent,
                  }}
                />

                <p className="
                  mt-4 text-[10px]
                  leading-relaxed text-white/55
                ">
                  {pick.detail}
                </p>
              </div>

              {/* Index label */}
              <span className="
                absolute right-4 top-4
                rounded-full border
                border-white/15
                bg-black/20 px-3 py-1
                text-[8px] tracking-wider
                text-white/70 backdrop-blur-md
              ">
                PICK 0{index + 1}
              </span>

            </div>

          </motion.article>
        ))}
      </div>

      {/* Footer */}
      <div className="
        mt-5 flex items-center
        justify-between gap-3
      ">
        <p className="
          text-[9px] tracking-[0.2em]
          text-white/30
        ">
          DISCOVER THE CREATIVE UNIVERSE
        </p>

        <div className="
          h-px flex-1 bg-white/[0.08]
        " />

        <p className="
          text-[9px] text-white/30
        ">
          {topPicks.length} PICKS
        </p>
      </div>

    </section>
  );
}
