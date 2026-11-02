import { motion } from 'framer-motion';

import {
  profile,
  education,
  experience,
} from '../data/portfolio';

import { EASE } from './fx';

interface ResumeViewerProps {
  onView: () => void;
}

export default function ResumeViewer({
  onView,
}: ResumeViewerProps) {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-16 py-20">
      {/* Heading */}
      <div className="mb-12">
        <p className="mb-3 text-[9px] font-bold tracking-[0.35em] text-[#ff3155]">
          BEHIND THE CREATIVE WORK
        </p>

        <h2 className="font-display text-5xl tracking-wide text-white sm:text-7xl">
          PROFESSIONAL
          <span className="text-[#e5092f]"> PROFILE</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45">
          A snapshot of my creative journey, background and professional interests.
        </p>
      </div>

      {/* Main Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#110d12] p-6 sm:p-10"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#e5092f]/10 blur-[90px]" />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">

          {/* Identity */}
          <div>
            <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-xl border border-[#e5092f]/30 bg-[#e5092f]/10 font-display text-4xl text-[#ff3155]">
              I
            </div>

            <p className="text-[9px] font-bold tracking-[0.3em] text-[#ff3155]">
              CREATIVE PROFILE
            </p>

            <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
              {profile.fullName}
            </h3>

            <p className="mt-3 text-sm text-white/55">
              {profile.role}
            </p>

            <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
              <div>
                <p className="text-[8px] tracking-[0.2em] text-white/30">
                  LOCATION
                </p>
                <p className="mt-2 text-sm text-white/75">
                  {profile.location}
                </p>
              </div>

              <div>
                <p className="text-[8px] tracking-[0.2em] text-white/30">
                  BRAND
                </p>
                <p className="mt-2 text-sm font-semibold tracking-wider text-white">
                  TIME KAMU
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onView}
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#e5092f] px-6 py-3 text-[10px] font-bold tracking-[0.15em] text-white transition-all hover:bg-[#ff3155] hover:shadow-[0_0_30px_rgba(229,9,47,0.25)]"
            >
              VIEW FULL PROFILE
              <span>↗</span>
            </button>
          </div>

          {/* Education & Experience */}
          <div className="space-y-10">

            {/* Education */}
            <div>
              <p className="mb-6 text-[9px] font-bold tracking-[0.25em] text-[#ff3155]">
                EDUCATION
              </p>

              <div className="space-y-5">
                {education.map((item, index) => (
                  <div
                    key={`${item.school}-${index}`}
                    className="border-l-2 border-[#e5092f]/50 pl-5"
                  >
                    <h4 className="text-sm font-semibold text-white/90">
                      {item.school}
                    </h4>

                    <p className="mt-1 text-xs text-white/45">
                      {item.place}
                    </p>

                    <p className="mt-2 text-[10px] tracking-wider text-[#ff3155]">
                      {item.degree} · {item.period}
                    </p>

                    {item.score && (
                      <p className="mt-1 text-[10px] text-white/40">
                        {item.score}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="mb-6 text-[9px] font-bold tracking-[0.25em] text-[#ff3155]">
                EXPERIENCE & CREATIVE WORK
              </p>

              <div className="space-y-5">
                {experience.map((item, index) => (
                  <div
                    key={`${item.role}-${index}`}
                    className="border-l-2 border-white/15 pl-5"
                  >
                    <h4 className="text-sm font-semibold text-white/90">
                      {item.role}
                    </h4>

                    <p className="mt-1 text-xs text-white/45">
                      {item.company}
                    </p>

                    <p className="mt-2 text-[10px] tracking-wider text-white/35">
                      {item.period}
                    </p>

                    {item.points?.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="mt-2 text-xs leading-relaxed text-white/50"
                      >
                        • {point}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-[9px] tracking-[0.2em] text-white/30">
            CRAFTED BY INDRAJIT · TIME KAMU
          </p>
        </div>
      </motion.div>
    </section>
  );
}
