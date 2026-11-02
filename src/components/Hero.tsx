import { motion } from 'framer-motion';

import {
  profile,
  viewerProfiles,
  type ProfileId,
} from '../data/portfolio';

import {
  heroReveal,
  staggerContainer,
  staggerItem,
  EASE,
} from './fx';

type HeroProps = {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
};

export default function Hero({
  onPlay,
  onResume,
  profileId,
}: HeroProps) {
  const activeProfile = viewerProfiles.find(
    (item) => item.id === profileId
  );

  const isIndra = profileId === 'indrajit';

  const title = isIndra
    ? 'INDRAJIT'
    : activeProfile?.name.toUpperCase() ?? 'INDRAJIT';

  return (
    <section
      id="home"
      className="
        relative flex min-h-[760px]
        min-h-[100svh] w-full
        items-center overflow-hidden
        bg-[#070609]
      "
    >
      {/* ===================================
          CINEMATIC BACKGROUND
      =================================== */}

      <div className="
        pointer-events-none absolute inset-0
      ">
        <div className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_75%_45%,rgba(120,13,37,0.30),transparent_50%)]
        " />

        <div className="
          absolute inset-0
          bg-[linear-gradient(90deg,#070609_0%,rgba(7,6,9,0.96)_30%,rgba(7,6,9,0.55)_65%,#070609_100%)]
        " />

        <div className="
          absolute inset-0
          bg-[linear-gradient(0deg,#070609_0%,transparent_40%,rgba(7,6,9,0.2)_100%)]
        " />

        {/* Ambient red light */}
        <motion.div
          className="
            absolute right-[-12%] top-[15%]
            h-[340px] w-[340px]
            rounded-full bg-[#e5092f]/10
            blur-[100px] sm:h-[600px]
            sm:w-[600px]
          "
          animate={{
            opacity: [0.35, 0.7, 0.35],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Cinematic vertical lines */}
        <div className="
          absolute right-[15%] top-0
          hidden h-full w-px
          bg-gradient-to-b
          from-transparent via-white/10
          to-transparent md:block
        " />

        <div className="
          absolute right-[30%] top-0
          hidden h-full w-px
          bg-gradient-to-b
          from-transparent via-red-500/10
          to-transparent md:block
        " />

        {/* Large background letter */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.035, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: EASE,
          }}
          className="
            absolute right-[-5%] top-[15%]
            hidden select-none
            font-display text-[clamp(250px,42vw,650px)]
            leading-none text-white
            md:block
          "
        >
          I
        </motion.div>
      </div>

{/* INDRA PORTRAIT */}
<motion.div
  initial={{ opacity: 0, x: 60, scale: 0.96 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
  className="
    pointer-events-none absolute
right-0 bottom-0 z-0
block
w-[58%] h-[48%]
opacity-50
sm:w-[50%] sm:h-[60%]
sm:opacity-70
md:w-[44%] md:h-[82%]
md:opacity-100
max-w-[620px]
  "
>
  <img
    src={`${import.meta.env.BASE_URL}assets/indra-portrait.webp`}
    alt="Indrajit Bhunia - TIME KAMU"
    className="
      h-full w-full
      object-contain object-bottom
      drop-shadow-[0_20px_60px_rgba(229,9,47,0.18)]
    "
  />
  <div className="
    absolute inset-0
    bg-gradient-to-r
    from-[#070609] via-transparent to-transparent
  " />
</motion.div>
      
      {/* ===================================
          HERO CONTENT
      =================================== */}

      <div className="
        relative z-10 mx-auto
        w-full max-w-[1600px]
        px-5 pb-28 pt-32
        sm:px-8 lg:px-16
      ">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="
            max-w-[850px]
          "
        >

          {/* Brand label */}
          <motion.div
            variants={staggerItem}
            className="
              mb-7 flex items-center gap-3
            "
          >
            <span className="
              h-[2px] w-9 bg-[#e5092f]
            " />

            <span className="
              text-[9px] font-bold
              tracking-[0.35em]
              text-[#ff3155] sm:text-[11px]
            ">
              {profile.originalLabel}
            </span>
          </motion.div>

          {/* Creator introduction */}
          <motion.p
            variants={staggerItem}
            className="
              mb-2 text-xs font-medium
              tracking-[0.25em] text-white/55
              sm:text-sm
            "
          >
            THE CREATIVE WORLD OF
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={heroReveal}
            className="
              font-display
              text-[clamp(64px,13vw,160px)]
              leading-[0.82]
              tracking-[-0.035em]
              text-white
            "
          >
            {title}
            <span className="
              block text-[#e5092f]
            ">
              {isIndra ? 'BHUNIA' : 'CREATIVE'}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={staggerItem}
            className="
              mt-7 flex flex-wrap
              items-center gap-x-3 gap-y-2
            "
          >
            <span className="
              font-serif text-xl
              italic text-white/85
              sm:text-2xl
            ">
              {profile.role}
            </span>

            <span className="
              h-1 w-1 rounded-full
              bg-[#e5092f]
            " />

            <span className="
              text-[10px] tracking-[0.18em]
              text-white/45 sm:text-xs
            ">
              WEST BENGAL, INDIA
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="
              mt-6 max-w-[560px]
              text-sm leading-[1.9]
              text-white/55 sm:text-base
            "
          >
            {profile.intro}
          </motion.p>

          {/* Skills tags */}
          <motion.div
            variants={staggerItem}
            className="
              mt-7 flex flex-wrap gap-2
            "
          >
            {profile.tagline.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.035]
                  px-3 py-1.5
                  text-[9px] font-medium
                  tracking-wider
                  text-white/65 sm:text-[10px]
                "
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={staggerItem}
            className="
              mt-9 flex flex-wrap
              items-center gap-3
            "
          >
            <motion.button
              type="button"
              onClick={onPlay}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
                flex min-h-[48px]
                items-center gap-3
                rounded-md bg-[#e5092f]
                px-6 py-3
                text-xs font-bold
                tracking-wider text-white
                shadow-[0_8px_30px_rgba(229,9,47,0.25)]
                transition-colors
                hover:bg-[#ff3155]
              "
            >
              <span className="text-sm">▶</span>
              WATCH INTRO
            </motion.button>

            <motion.button
              type="button"
              onClick={onResume}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
                flex min-h-[48px]
                items-center gap-3
                rounded-md border
                border-white/15
                bg-white/[0.07]
                px-6 py-3
                text-xs font-bold
                tracking-wider text-white
                backdrop-blur-md
                transition-colors
                hover:bg-white/[0.14]
              "
            >
              <span className="text-sm">＋</span>
              VIEW PROFILE
            </motion.button>
          </motion.div>

        </motion.div>

        {/* =================================
            BOTTOM BRAND SIGNATURE
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: EASE,
          }}
          className="
            absolute bottom-10
            left-5 right-5
            flex items-end justify-between
            border-t border-white/10
            pt-5 sm:left-8 sm:right-8
            lg:left-16 lg:right-16
          "
        >
          <div>
            <p className="
              text-[9px] tracking-[0.3em]
              text-white/30
            ">
              CREATIVE IDENTITY
            </p>

            <p className="
              mt-2 font-display
              text-xl tracking-wider
              text-white/80
            ">
              TIME KAMU
            </p>
          </div>

          <div className="text-right">
            <p className="
              text-[9px] tracking-[0.3em]
              text-white/30
            ">
              DESIGNED BY
            </p>

            <p className="
              mt-2 text-[10px]
              font-semibold tracking-[0.2em]
              text-white/70
            ">
              INDRAJIT
            </p>
          </div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="
        pointer-events-none absolute
        bottom-0 left-0 right-0
        h-28 bg-gradient-to-t
        from-[#070609] to-transparent
      " />

    </section>
  );
}
