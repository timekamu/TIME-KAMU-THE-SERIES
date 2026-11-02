
import { motion } from 'framer-motion';

import {
  profile,
  experience,
  education,
} from '../data/portfolio';

import {
  staggerContainer,
  staggerItem,
  EASE,
} from './fx';

export default function About() {
  return (
    <section className="
      mx-auto w-full max-w-[1600px]
      px-5 sm:px-8 lg:px-16
    ">

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-12"
      >
        <p className="
          mb-3 text-[9px] font-bold
          tracking-[0.35em] text-[#ff3155]
        ">
          THE CREATOR BEHIND THE FRAME
        </p>

        <h2 className="
          font-display text-5xl
          leading-none tracking-wide
          text-white sm:text-7xl
        ">
          ABOUT
          <span className="text-[#e5092f]">
            {' '}INDRA
          </span>
        </h2>

        <p className="
          mt-4 max-w-xl
          text-sm leading-relaxed
          text-white/45
        ">
          Every frame has a story. Every story
          begins with imagination.
        </p>
      </motion.div>

      {/* Main content */}
      <div className="
        grid grid-cols-1 gap-8
        lg:grid-cols-[0.85fr_1.15fr]
        lg:gap-14
      ">

        {/* Creator visual */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          className="
            relative min-h-[320px]
            overflow-hidden rounded-xl
            border border-white/10
            bg-[#130b10]
            sm:min-h-[440px]
          "
        >

          {/* Background light */}
          <div className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_50%_25%,rgba(229,9,47,0.25),transparent_60%)]
          " />

          {/* Decorative frame */}
          <div className="
            absolute inset-5
            rounded-lg border border-white/10
          " />

          {/* Letter */}
          <div className="
            absolute inset-0
            flex items-center justify-center
          ">
            <span className="
              select-none font-display
              text-[clamp(180px,30vw,340px)]
              leading-none text-white/[0.06]
            ">
              I
            </span>
          </div>

          {/* Creator identity */}
          <div className="
            absolute bottom-10 left-8 right-8
          ">
            <p className="
              mb-3 text-[9px]
              tracking-[0.35em] text-[#ff3155]
            ">
              CREATIVE IDENTITY
            </p>

            <h3 className="
              font-display text-5xl
              tracking-wide text-white
              sm:text-6xl
            ">
              {profile.displayName}
            </h3>

            <p className="
              mt-2 text-xs
              tracking-wider text-white/45
            ">
              {profile.role}
            </p>
          </div>

          {/* Corner label */}
          <span className="
            absolute right-8 top-8
            rounded-full border border-white/15
            px-3 py-1 text-[8px]
            tracking-[0.2em] text-white/55
          ">
            TIME KAMU
          </span>

        </motion.div>

        {/* Creator story */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex flex-col justify-center
          "
        >

          <motion.p
            variants={staggerItem}
            className="
              mb-4 text-[10px]
              font-bold tracking-[0.25em]
              text-[#ff3155]
            "
          >
            HELLO, I'M INDRAJIT
          </motion.p>

          <motion.h3
            variants={staggerItem}
            className="
              max-w-2xl font-serif
              text-3xl italic leading-tight
              text-white sm:text-4xl
            "
          >
            Turning imagination into
            <span className="text-[#ff3155]">
              {' '}visual experiences.
            </span>
          </motion.h3>

          <motion.p
            variants={staggerItem}
            className="
              mt-6 text-sm leading-[2]
              text-white/55 sm:text-[15px]
            "
          >
            {profile.intro}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="
              mt-4 text-sm leading-[2]
              text-white/45
            "
          >
            Through TIME KAMU, I explore
            cinematic editing, motion graphics,
            2D animation and creative visual
            storytelling. My focus is to keep
            learning, experimenting and turning
            creative ideas into meaningful work.
          </motion.p>

          {/* Interests */}
          <motion.div
            variants={staggerItem}
            className="mt-8"
          >
            <p className="
              mb-4 text-[9px]
              font-bold tracking-[0.25em]
              text-white/35
            ">
              CREATIVE INTERESTS
            </p>

            <div className="
              flex flex-wrap gap-2
            ">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="
                    rounded-md
                    border border-white/10
                    bg-white/[0.035]
                    px-3 py-2
                    text-[10px]
                    text-white/65
                  "
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={staggerItem}
            className="
              mt-8 flex items-center gap-3
              border-t border-white/10 pt-5
            "
          >
            <span className="
              flex h-9 w-9 items-center
              justify-center rounded-full
              border border-[#e5092f]/30
              bg-[#e5092f]/10 text-[#ff3155]
            ">
              ◎
            </span>

            <div>
              <p className="
                text-[8px] tracking-[0.2em]
                text-white/35
              ">
                BASED IN
              </p>

              <p className="
                mt-1 text-xs text-white/75
              ">
                {profile.location}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Experience and education */}
      <div className="
        mt-16 grid grid-cols-1
        gap-5 md:grid-cols-2
      ">

        <div className="
          rounded-xl border border-white/10
          bg-white/[0.025] p-6
        ">
          <p className="
            mb-5 text-[9px] font-bold
            tracking-[0.25em] text-[#ff3155]
          ">
            CREATIVE EXPERIENCE
          </p>

          {experience.map((item) => (
            <div key={item.company}>
              <h4 className="
                font-display text-3xl
                text-white
              ">
                {item.company}
              </h4>

              <p className="
                mt-2 text-xs text-white/70
              ">
                {item.role}
              </p>

              <p className="
                mt-1 text-[10px] text-white/35
              ">
                {item.period} · {item.place}
              </p>

              <ul className="
                mt-5 space-y-3
              ">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="
                      flex gap-3 text-xs
                      leading-relaxed text-white/45
                    "
                  >
                    <span className="text-[#ff3155]">
                      ✦
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="
          rounded-xl border border-white/10
          bg-white/[0.025] p-6
        ">
          <p className="
            mb-5 text-[9px] font-bold
            tracking-[0.25em] text-[#ff3155]
          ">
            EDUCATION
          </p>

          {education.map((item) => (
            <div key={item.school}>
              <h4 className="
                font-display text-3xl
                text-white
              ">
                {item.school}
              </h4>

              <p className="
                mt-2 text-xs text-white/70
              ">
                {item.degree}
              </p>

              <p className="
                mt-1 text-[10px] text-white/35
              ">
                {item.place} · {item.period}
              </p>

              <div className="
                mt-6 border-t border-white/10 pt-5
              ">
                <p className="
                  text-[9px] tracking-[0.2em]
                  text-white/35
                ">
                  LEARNING & GROWTH
                </p>

                <p className="
                  mt-3 text-xs leading-relaxed
                  text-white/50
                ">
                  Continuously exploring new
                  creative techniques, editing
                  workflows and visual technologies.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
