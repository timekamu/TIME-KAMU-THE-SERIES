import { motion } from 'framer-motion';

import {
  achievements,
  certifications,
} from '../data/portfolio';

import {
  staggerContainer,
  staggerItem,
} from './fx';

export default function Achievements() {
  return (
    <section className="
      mx-auto w-full max-w-[1600px]
      px-5 sm:px-8 lg:px-16
    ">
      <div className="mb-12">
        <p className="
          mb-3 text-[9px] font-bold
          tracking-[0.35em] text-[#ff3155]
        ">
          THE JOURNEY SO FAR
        </p>

        <h2 className="
          font-display text-5xl
          tracking-wide text-white sm:text-7xl
        ">
          BRAND
          <span className="text-[#e5092f]">
            {' '}HIGHLIGHTS
          </span>
        </h2>

        <p className="
          mt-4 max-w-xl text-sm
          leading-relaxed text-white/45
        ">
          Every project, every experiment
          and every creative step is part
          of the TIME KAMU journey.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="
          grid grid-cols-1 gap-4 sm:grid-cols-2
        "
      >
        {achievements.map((item, index) => (
          <motion.article
            key={item.id}
            variants={staggerItem}
            whileHover={{ y: -5 }}
            className="
              group relative overflow-hidden
              rounded-xl border border-white/10
              bg-[#110d12] p-6
              transition-colors
              hover:border-[#e5092f]/40
              sm:p-8
            "
          >
            <span className="
              pointer-events-none absolute
              -right-2 -top-8
              font-display text-[150px]
              leading-none text-white/[0.035]
            ">
              0{index + 1}
            </span>

            <div className="
              relative mb-7 h-[2px] w-12
              bg-[#e5092f]
              transition-all duration-500
              group-hover:w-24
            " />

            <p className="
              relative text-[9px]
              font-bold tracking-[0.25em]
              text-[#ff3155]
            ">
              {item.org}
            </p>

            <h3 className="
              relative mt-3 font-display
              text-3xl tracking-wide text-white
              sm:text-4xl
            ">
              {item.title}
            </h3>

            <p className="
              relative mt-3 max-w-lg
              text-xs leading-relaxed
              text-white/45
            ">
              {item.detail}
            </p>

            <div className="
              relative mt-7 flex
              items-center justify-between
              gap-3 border-t
              border-white/[0.08] pt-4
            ">
              <span className="
                text-[9px] tracking-[0.15em]
                text-[#ff3155]
              ">
                {item.laurel}
              </span>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-[9px] font-bold
                    tracking-wider text-white/60
                    hover:text-[#ff3155]
                  "
                >
                  EXPLORE ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {certifications.length > 0 && (
        <div className="mt-14">
          <p className="
            text-[9px] font-bold
            tracking-[0.3em] text-[#ff3155]
          ">
            LEARNING & DEVELOPMENT
          </p>

          <h3 className="
            mt-2 font-display text-3xl
            tracking-wide text-white
          ">
            CERTIFICATIONS
          </h3>

          <div className="
            mt-6 grid grid-cols-1
            gap-3 sm:grid-cols-2 lg:grid-cols-3
          ">
            {certifications.map((certificate) => (
              <div
                key={certificate.name}
                className="
                  rounded-lg border
                  border-white/10
                  bg-white/[0.025] p-5
                "
              >
                <p className="
                  text-sm font-semibold
                  text-white/85
                ">
                  {certificate.name}
                </p>

                <p className="
                  mt-2 text-[10px]
                  text-white/40
                ">
                  {certificate.issuer}
                </p>

                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4 inline-block
                      text-[9px] text-[#ff3155]
                    "
                  >
                    VIEW CERTIFICATE ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="
        mt-10 border-t border-white/[0.08]
        pt-6 text-[9px]
        tracking-[0.2em] text-white/35
      ">
        LEARN · EXPERIMENT · CREATE
      </div>
    </section>
  );
}
