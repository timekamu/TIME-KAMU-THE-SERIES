import { useEffect, useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  sectionMeta,
  viewerProfiles,
  type ProfileId,
  type SectionId,
} from '../data/portfolio';

import { useSmoothScroll } from '../hooks/smoothScroll';
import { useMobile } from '../hooks/useMedia';
import { useSectionProgress } from '../hooks/sectionProgress';

import { EASE } from './fx';

type NavbarProps = {
  order: SectionId[];
  profileId: ProfileId;
  onSwitch: (id: ProfileId) => void;
};

export default function Navbar({
  order,
  profileId,
  onSwitch,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const mobile = useMobile();
  const { scrollTo } = useSmoothScroll();

  const { activeSection } = useSectionProgress(
    order
  );

  const activeProfile = viewerProfiles.find(
    (item) => item.id === profileId
  );

  // ========================================
  // SCROLL STATE
  // ========================================

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 35);
    };

    update();

    window.addEventListener('scroll', update, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', update);
    };
  }, []);

  // ========================================
  // NAVIGATION
  // ========================================

  const navigate = (id: SectionId) => {
    setMenuOpen(false);

    setTimeout(() => {
      scrollTo(`#${id}`, {
        offset: -85,
        duration: 1.1,
      });
    }, 50);
  };

  // ========================================
  // LOGO
  // ========================================

  const goHome = () => {
    scrollTo(0, {
      duration: 1.2,
    });

    setMenuOpen(false);
  };

  return (
    <motion.header
      className="
        fixed inset-x-0 top-0 z-[100]
        transition-colors duration-500
      "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      style={{
        background: scrolled
          ? 'rgba(7,6,9,0.94)'
          : 'linear-gradient(180deg,rgba(0,0,0,0.72),transparent)',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid transparent',
      }}
    >
      <div className="
        mx-auto flex h-[68px] max-w-[1600px]
        items-center justify-between
        px-5 sm:px-8 lg:px-12
      ">

        {/* Brand */}
        <button
          type="button"
          onClick={goHome}
          className="
            group flex shrink-0 items-center gap-2
          "
          aria-label="TIME KAMU home"
        >
          <span className="
            font-display text-2xl
            tracking-wide text-white
            sm:text-3xl
          ">
            TIME
            <span className="text-[#e5092f]">
              KAMU
            </span>
          </span>

          <span className="
            hidden border-l border-white/20
            pl-2 text-[8px] tracking-[0.2em]
            text-white/40 sm:block
          ">
            ORIGINAL
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="
          hidden items-center gap-5
          lg:flex xl:gap-7
        ">
          {order.map((id) => {
            const meta = sectionMeta[id];

            const active = activeSection === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => navigate(id)}
                className={`
                  relative py-2 text-[11px]
                  font-semibold tracking-wide
                  transition-colors duration-300
                  ${
                    active
                      ? 'text-white'
                      : 'text-white/55 hover:text-white'
                  }
                `}
              >
                {meta.nav}

                {active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="
                      absolute inset-x-0 -bottom-[1px]
                      h-[2px] rounded-full
                      bg-[#e5092f]
                    "
                    transition={{
                      duration: 0.35,
                      ease: EASE,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="
          flex items-center gap-3
        ">

          {/* Profile switcher */}
          <div className="relative">

            <button
              type="button"
              onClick={() => {
                setProfileOpen((value) => !value);
                setMenuOpen(false);
              }}
              className="
                flex items-center gap-2
                rounded-md border border-white/10
                bg-white/5 px-2 py-1.5
                transition-colors hover:bg-white/10
              "
              aria-expanded={profileOpen}
              aria-label="Switch profile"
            >
              <span
                className="
                  flex h-7 w-7 items-center
                  justify-center rounded
                  bg-[#780d25] text-xs
                  font-bold text-white
                "
              >
                {activeProfile?.name.charAt(0) ?? 'I'}
              </span>

              <span className="
                hidden text-[10px]
                font-bold tracking-wider
                text-white/80 sm:block
              ">
                {activeProfile?.name ?? 'INDRA'}
              </span>

              <span className="
                text-[9px] text-white/50
              ">
                ▾
              </span>
            </button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  className="
                    glass absolute right-0 top-12
                    z-[120] min-w-[170px]
                    overflow-hidden rounded-lg
                    p-2 shadow-2xl
                  "
                >
                  <p className="
                    px-3 py-2 text-[9px]
                    tracking-[0.2em] text-white/35
                  ">
                    SWITCH PROFILE
                  </p>

                  {viewerProfiles.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onSwitch(item.id);
                        setProfileOpen(false);
                      }}
                      className="
                        flex w-full items-center
                        gap-3 rounded-md px-3 py-2.5
                        text-left text-xs
                        text-white/70
                        transition-colors
                        hover:bg-white/10 hover:text-white
                      "
                    >
                      <span
                        className="
                          flex h-6 w-6 items-center
                          justify-center rounded
                          text-[10px] font-bold text-white
                        "
                        style={{
                          background: item.color,
                        }}
                      >
                        {item.name.charAt(0)}
                      </span>

                      {item.name}

                      {item.id === profileId && (
                        <span className="
                          ml-auto text-[#ff3155]
                        ">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen((value) => !value);
              setProfileOpen(false);
            }}
            className="
              flex h-9 w-9 flex-col
              items-center justify-center
              gap-[5px] rounded-md
              border border-white/10
              bg-white/5 lg:hidden
            "
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 3.5 : 0,
              }}
              className="
                h-[1.5px] w-4
                bg-white
              "
            />

            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -3 : 0,
              }}
              className="
                h-[1.5px] w-4
                bg-white
              "
            />
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobile && menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: EASE,
            }}
            className="
              overflow-hidden border-t
              border-white/10 bg-[#0b080c]
              lg:hidden
            "
          >
            <nav className="
              flex flex-col px-5 py-4
            ">
              {order.map((id, index) => (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => navigate(id)}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.045,
                  }}
                  className="
                    flex items-center
                    justify-between
                    border-b border-white/5
                    py-3.5 text-left
                    text-sm text-white/75
                    transition-colors
                    hover:text-[#ff3155]
                  "
                >
                  {sectionMeta[id].nav}

                  <span className="
                    text-[10px] text-white/25
                  ">
                    ↗
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
