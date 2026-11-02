import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import {
  seasons,
  type Episode,
} from '../data/portfolio';

import { EASE } from './fx';

// ==========================================
// EPISODE CARD
// ==========================================

function EpisodeCard({
  episode,
  index,
}: {
  episode: Episode;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: index * 0.08,
        duration: 0.65,
        ease: EASE,
      }}
      className="
        group grid grid-cols-[105px_1fr]
        gap-4 rounded-lg
        border border-white/[0.07]
        bg-white/[0.025] p-3
        transition-colors
        hover:border-[#e5092f]/35
        sm:grid-cols-[165px_1fr]
        sm:gap-5 sm:p-4
      "
    >
      {/* Episode artwork */}
      <div
        className="
          relative aspect-video
          overflow-hidden rounded-md
        "
        style={{
          background: `
            radial-gradient(
              circle at 75% 25%,
              ${episode.palette.accent}66,
              transparent 40%
            ),
            linear-gradient(
              135deg,
              ${episode.palette.from},
              ${episode.palette.via},
              ${episode.palette.to}
            )
          `,
        }}
      >
        <div className="
          absolute inset-0
          flex items-center justify-center
        ">
          <span className="
            font-display text-5xl
            text-white/20 sm:text-6xl
          ">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/50 to-transparent
        " />

        <span className="
          absolute bottom-2 left-2
          text-[8px] font-bold
          tracking-[0.15em] text-white/80
        ">
          {episode.code}
        </span>

        <span className="
          absolute right-2 top-2
          flex h-7 w-7 items-center
          justify-center rounded-full
          border border-white/20
          bg-black/30 text-[10px]
          text-white backdrop-blur-sm
        ">
          ▶
        </span>
      </div>

      {/* Episode information */}
      <div className="
        flex min-w-0 flex-col justify-center
      ">
        <p className="
          mb-1 text-[8px]
          tracking-[0.2em] text-[#ff3155]
        ">
          {episode.code}
        </p>

        <h4 className="
          font-display text-xl
          tracking-wide text-white
          sm:text-2xl
        ">
          {episode.title}
        </h4>

        <p className="
          mt-1 line-clamp-2
          text-[10px] leading-relaxed
          text-white/45 sm:text-xs
        ">
          {episode.description}
        </p>

        <div className="
          mt-3 flex flex-wrap gap-1.5
        ">
          {episode.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded border
                border-white/10
                px-2 py-1 text-[8px]
                text-white/45
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="
          mt-2 text-[8px]
          tracking-wider text-white/25
        ">
          {episode.runtime}
        </p>
      </div>
    </motion.article>
  );
}

// ==========================================
// SEASONS SECTION
// ==========================================

export default function Seasons() {
  const [activeSeason, setActiveSeason] =
    useState(0);

  const selectedSeason = seasons[activeSeason];

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
            mb-3 text-[9px] font-bold
            tracking-[0.35em] text-[#ff3155]
          ">
            THE STORY SO FAR
          </p>

          <h2 className="
            font-display text-5xl
            tracking-wide text-white
            sm:text-7xl
          ">
            CREATIVE
            <span className="text-[#e5092f]">
              {' '}JOURNEY
            </span>
          </h2>

          <p className="
            mt-4 max-w-lg
            text-sm leading-relaxed
            text-white/45
          ">
            Every season represents a new chapter.
            Every episode captures a creative milestone.
          </p>
        </div>

        <span className="
          text-[9px] tracking-[0.25em]
          text-white/30
        ">
          TIME KAMU · ORIGINAL STORY
        </span>
      </div>

      {/* Season selector */}
      <div className="
        mb-8 flex flex-wrap
        gap-2 border-b
        border-white/10 pb-5
      ">
        {seasons.map((season, index) => {
          const active = activeSeason === index;

          return (
            <button
              key={season.number}
              type="button"
              onClick={() => setActiveSeason(index)}
              aria-pressed={active}
              className={`
                relative rounded-md
                px-4 py-2.5
                text-[10px] font-bold
                tracking-wider
                transition-all duration-300
                ${
                  active
                    ? 'bg-[#e5092f] text-white'
                    : 'border border-white/10 bg-white/[0.03] text-white/45 hover:text-white'
                }
              `}
            >
              SEASON {String(season.number).padStart(2, '0')}
            </button>
          );
        })}
      </div>

      {/* Selected season */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSeason.number}
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{
            duration: 0.4,
            ease: EASE,
          }}
        >

          {/* Season banner */}
          <div className="
            relative mb-8
            overflow-hidden rounded-xl
            border border-white/10
            bg-[#120b11] p-6
            sm:p-9
          ">
            <div className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_85%_30%,rgba(229,9,47,0.19),transparent_55%)]
            " />

            <div className="
              absolute right-[-15px]
              top-[-55px]
              font-display text-[190px]
              leading-none text-white/[0.035]
              sm:right-8 sm:text-[240px]
            ">
              {String(selectedSeason.number).padStart(2, '0')}
            </div>

            <div className="
              relative z-10 max-w-2xl
            ">
              <p className="
                mb-3 text-[9px]
                font-bold tracking-[0.3em]
                text-[#ff3155]
              ">
                SEASON {String(selectedSeason.number).padStart(2, '0')}
                {' '}· {selectedSeason.period}
              </p>

              <h3 className="
                font-display text-4xl
                tracking-wide text-white
                sm:text-6xl
              ">
                {selectedSeason.title}
              </h3>

              <p className="
                mt-4 max-w-xl
                text-xs leading-relaxed
                text-white/50 sm:text-sm
              ">
                {selectedSeason.synopsis}
              </p>

              <p className="
                mt-5 text-[9px]
                tracking-[0.2em] text-white/35
              ">
                {selectedSeason.episodes.length} EPISODES
              </p>
            </div>
          </div>

          {/* Episode list */}
          <div className="
            grid grid-cols-1
            gap-3 lg:grid-cols-2
          ">
            {selectedSeason.episodes.map(
              (episode, index) => (
                <EpisodeCard
                  key={episode.code}
                  episode={episode}
                  index={index}
                />
              )
            )}
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Timeline footer */}
      <div className="
        mt-10 flex items-center gap-4
        border-t border-white/[0.07] pt-6
      ">
        <span className="
          h-2 w-2 rounded-full
          bg-[#e5092f]
          shadow-[0_0_12px_rgba(229,9,47,0.8)]
        " />

        <p className="
          text-[9px] tracking-[0.2em]
          text-white/35
        ">
          THE JOURNEY CONTINUES...
        </p>

        <div className="
          h-px flex-1 bg-white/10
        " />

        <span className="
          text-[9px] tracking-wider
          text-white/35
        ">
          {seasons.length} SEASONS
        </span>
      </div>

    </section>
  );
}
