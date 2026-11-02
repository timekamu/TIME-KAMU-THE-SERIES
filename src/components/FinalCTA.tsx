import { motion } from 'framer-motion';

import { profile } from '../data/portfolio';

import { EASE } from './fx';

export default function FinalCTA() {
  const socialLinks = [
    {
      name: 'YOUTUBE',
      label: 'Watch my creative work',
      url: profile.links.youtube,
    },
    {
      name: 'INSTAGRAM',
      label: 'Follow the journey',
      url: profile.links.instagram,
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        px-5 py-24 sm:px-8
        sm:py-32 lg:px-16
      "
    >

      {/* Background effects */}
      <div className="
        pointer-events-none absolute
        left-1/2 top-1/2
        h-[500px] w-[500px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[#e5092f]/10
        blur-[120px]
      " />

      <div className="
        pointer-events-none absolute
        inset-0 opacity-[0.035]
      "
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              white 1px,
              transparent 1px
            ),
            linear-gradient(
              white 1px,
              transparent 1px
            )
          `,
          backgroundSize: '55px 55px',
        }}
      />

      <motion.div
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: EASE,
        }}
        className="
          relative mx-auto
          max-w-5xl text-center
        "
      >

        {/* Eyebrow */}
        <p className="
          mb-6 text-[9px]
          font-bold tracking-[0.4em]
          text-[#ff3155]
        ">
          THE NEXT CHAPTER STARTS HERE
        </p>

        {/* Main heading */}
        <h2 className="
          font-display
          text-6xl leading-[0.9]
          tracking-wide text-white
          sm:text-8xl md:text-9xl
        ">
          LET'S
          <br />
          CREATE
          <span className="
            text-[#e5092f]
          ">
            {' '}MAGIC.
          </span>
        </h2>

        {/* Description */}
        <p className="
          mx-auto mt-8 max-w-xl
          text-sm leading-relaxed
          text-white/50 sm:text-base
        ">
          Have a creative idea, a project
          or a collaboration in mind?
          Let's turn your vision into
          something unforgettable.
        </p>

        {/* Social links */}
        <div className="
          mx-auto mt-12
          flex max-w-xl flex-col
          gap-3 sm:flex-row
        ">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="
                group flex flex-1
                items-center justify-between
                rounded-lg border
                border-white/15
                bg-white/[0.035]
                px-5 py-5 text-left
                transition-all duration-300
                hover:border-[#e5092f]/50
                hover:bg-[#e5092f]/10
              "
            >
              <span>
                <span className="
                  block text-[10px]
                  font-bold tracking-[0.2em]
                  text-white
                ">
                  {social.name}
                </span>

                <span className="
                  mt-2 block text-[9px]
                  text-white/40
                ">
                  {social.label}
                </span>
              </span>

              <span className="
                text-xl text-[#ff3155]
                transition-transform
                group-hover:-translate-y-1
                group-hover:translate-x-1
              ">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Brand signature */}
        <div className="
          mt-20 border-t
          border-white/10 pt-8
        ">
          <p className="
            font-display text-3xl
            tracking-[0.2em] text-white
          ">
            TIME
            <span className="text-[#e5092f]">
              {' '}KAMU
            </span>
          </p>

          <p className="
            mt-3 text-[8px]
            tracking-[0.35em] text-white/35
          ">
            CRAFTED BY INDRAJIT
          </p>

          <p className="
            mt-8 text-[9px]
            tracking-wider text-white/25
          ">
            © {new Date().getFullYear()} TIME KAMU.
            ALL RIGHTS RESERVED.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
