import { useState } from 'react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  viewerProfiles,
  type ProfileId,
} from '../data/portfolio';

import { EASE } from './fx';

type ProfileSelectorProps = {
  onPick: (id: ProfileId) => void;
};

const profileIcons: Record<ProfileId, string> = {
  indrajit: 'I',
  client: 'C',
  creator: 'T',
  editor: 'E',
};

export default function ProfileSelector({
  onPick,
}: ProfileSelectorProps) {
  const [selected, setSelected] =
    useState<ProfileId | null>(null);

  const [confirming, setConfirming] =
    useState(false);

  const chooseProfile = (id: ProfileId) => {
    setSelected(id);
    setConfirming(true);
  };

  return (
    <motion.div
      className="
        fixed inset-0 z-[250]
        flex min-h-screen flex-col
        items-center justify-center
        overflow-y-auto bg-[#070609]
        px-5 py-12
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* Background glow */}
      <div className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_at_50%_40%,rgba(110,9,35,0.20),transparent_65%)]
      " />

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
      >
        {/* Brand */}
        <div className="mb-12 text-center">
          <p className="
            mb-3 text-[10px] font-bold
            tracking-[0.5em] text-[#e5092f]
          ">
            TIME KAMU ORIGINAL
          </p>

          <h1 className="
            font-display text-5xl tracking-wide
            text-white sm:text-7xl
          ">
            WHO'S WATCHING?
          </h1>

          <p className="
            mt-4 text-sm text-white/45
          ">
            Choose your experience
          </p>
        </div>

        {/* Profiles */}
        <div className="
          grid grid-cols-2 gap-5
          sm:grid-cols-4 sm:gap-7
        ">
          {viewerProfiles.map((profile, index) => {
            const isSelected = selected === profile.id;

            return (
              <motion.button
                key={profile.id}
                type="button"
                onClick={() => chooseProfile(profile.id)}
                className="group flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35 + index * 0.12,
                  duration: 0.6,
                  ease: EASE,
                }}
                whileHover={{ y: -7 }}
                whileTap={{ scale: 0.96 }}
                aria-pressed={isSelected}
              >
                {/* Avatar */}
                <div
                  className="
                    relative mb-4 aspect-square
                    w-full max-w-[150px]
                    overflow-hidden rounded-xl
                    border-2 transition-all duration-300
                  "
                  style={{
                    borderColor: isSelected
                      ? profile.color
                      : 'rgba(255,255,255,0.12)',

                    boxShadow: isSelected
                      ? `0 0 35px ${profile.color}44`
                      : 'none',
                  }}
                >
                  <div
                    className="
                      flex h-full w-full
                      items-center justify-center
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                    style={{
                      background: `
                        radial-gradient(
                          circle at 50% 20%,
                          ${profile.color}77,
                          transparent 65%
                        ),
                        linear-gradient(
                          145deg,
                          #261019,
                          #0d0a10
                        )
                      `,
                    }}
                  >
                    <span
                      className="
                        font-display text-7xl
                        text-white/90
                      "
                    >
                      {profileIcons[profile.id]}
                    </span>
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="profile-outline"
                      className="
                        absolute inset-0
                        rounded-xl border-2
                      "
                      style={{
                        borderColor: profile.color,
                      }}
                    />
                  )}
                </div>

                <span className="
                  text-sm font-bold uppercase
                  tracking-[0.16em] text-white
                  transition-colors
                  group-hover:text-[#ff3155]
                ">
                  {profile.name}
                </span>

                <span className="
                  mt-2 max-w-[155px]
                  text-[11px] leading-relaxed
                  text-white/40
                ">
                  {profile.blurb}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selection confirmation */}
        <AnimatePresence>
          {confirming && selected && (
            <motion.div
              className="
                mt-12 flex flex-col
                items-center text-center
              "
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <p className="
                mb-5 text-xs tracking-wider
                text-white/50
              ">
                Watching as{' '}
                <span className="text-white">
                  {viewerProfiles.find(
                    (item) => item.id === selected
                  )?.name}
                </span>
              </p>

              <button
                type="button"
                onClick={() => onPick(selected)}
                className="
                  min-w-[190px] rounded-md
                  bg-[#e5092f] px-8 py-3
                  text-xs font-bold
                  tracking-[0.18em] text-white
                  transition-all duration-300
                  hover:bg-[#ff3155]
                  hover:shadow-[0_0_30px_rgba(229,9,47,0.35)]
                "
              >
                ENTER EXPERIENCE
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  setConfirming(false);
                }}
                className="
                  mt-4 text-[10px]
                  tracking-[0.2em] text-white/35
                  transition-colors hover:text-white
                "
              >
                CHANGE PROFILE
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <p className="
          mt-14 text-center
          text-[9px] tracking-[0.3em]
          text-white/25
        ">
          CRAFTED BY INDRAJIT · TIME KAMU
        </p>
      </motion.div>
    </motion.div>
  );
}
