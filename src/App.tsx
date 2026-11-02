import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from 'framer-motion';

import {
  viewerProfiles,
  type ProfileId,
  type Project,
  type SectionId,
} from './data/portfolio';

import {
  SmoothScrollProvider,
  useSmoothScroll,
} from './hooks/smoothScroll';

import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';

import { EASE } from './components/fx';

// Load large overlays only when required.
const PlayIntro = lazy(
  () => import('./components/PlayIntro')
);

const ProjectModal = lazy(
  () => import('./components/ProjectModal')
);

const ResumeModal = lazy(
  () => import('./components/ResumeModal')
);

type Stage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY = 'time-kamu-profile';

// ==========================================
// PROFILE STORAGE
// ==========================================

function readStoredProfile(): ProfileId | null {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    return viewerProfiles.some(
      (profile) => profile.id === saved
    )
      ? (saved as ProfileId)
      : null;

  } catch {
    return null;
  }
}

// ==========================================
// MAIN APPLICATION
// ==========================================

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

// ==========================================
// TIME KAMU SERIES
// ==========================================

function Series() {
  const stored = readStoredProfile();

  const [stage, setStage] = useState<Stage>(
    stored ? 'home' : 'opening'
  );

  const [profileId, setProfileId] = useState<ProfileId>(
    stored ?? 'indrajit'
  );

  const [playing, setPlaying] = useState(false);

  const [project, setProject] = useState<Project | null>(
    null
  );

  const [resumeOpen, setResumeOpen] = useState(false);

  const [toast, setToast] = useState<string | null>(null);

  const {
    scrollTo,
    lock,
    unlock,
  } = useSmoothScroll();

  const activeProfile = viewerProfiles.find(
    (profile) => profile.id === profileId
  );

  const order = activeProfile?.order ?? [];

  // Lock scrolling while cinematic overlays are active.
  useEffect(() => {
    if (stage === 'home') return;

    lock();

    return unlock;
  }, [stage, lock, unlock]);

  // ========================================
  // PROFILE SWITCHING
  // ========================================

  const pickProfile = useCallback(
    (id: ProfileId) => {
      setProfileId(id);

      try {
        sessionStorage.setItem(STORAGE_KEY, id);
      } catch {
        // Session storage may be unavailable.
      }

      if (stage !== 'home') {
        window.scrollTo(0, 0);
        setStage('home');
      } else {
        const selected = viewerProfiles.find(
          (profile) => profile.id === id
        );

        setToast(
          `Now watching as ${selected?.name ?? 'INDRA'}`
        );

        scrollTo(0);
      }
    },
    [stage, scrollTo]
  );

  // ========================================
  // TOAST MESSAGE
  // ========================================

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(
      () => setToast(null),
      3200
    );

    return () => window.clearTimeout(timer);
  }, [toast]);

  // ========================================
  // MODAL CONTROLS
  // ========================================

  const closeIntro = useCallback(
    () => setPlaying(false),
    []
  );

  const closeProject = useCallback(
    () => setProject(null),
    []
  );

  const closeResume = useCallback(
    () => setResumeOpen(false),
    []
  );

  // ========================================
  // PORTFOLIO SECTIONS
  // ========================================

  const sections: Record<SectionId, ReactNode> = {
    about: <About />,

    journey: <Seasons />,

    originals: (
      <Originals onOpen={setProject} />
    ),

    picks: <TopPicks />,

    skills: <Skills />,

    moments: <Achievements />,

    story: (
      <ResumeSection
        onView={() => setResumeOpen(true)}
      />
    ),
  };

  // ========================================
  // APPLICATION UI
  // ========================================

  return (
    <LayoutGroup>

      {/* Cinematic film grain */}
      <div
        className="grain"
        aria-hidden="true"
      />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Opening and profile screens */}
      <AnimatePresence mode="wait">

        {stage === 'opening' && (
          <OpeningSequence
            key="opening"
            onDone={() => setStage('profiles')}
          />
        )}

        {stage === 'profiles' && (
          <ProfileSelector
            key="profiles"
            onPick={pickProfile}
          />
        )}

      </AnimatePresence>

      {/* Main portfolio */}
      {stage === 'home' && (

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
        >

          <Navbar
            order={order}
            profileId={profileId}
            onSwitch={pickProfile}
          />

          <main>

            <Hero
              key={`hero-${profileId}`}
              onPlay={() => setPlaying(true)}
              onResume={() => setResumeOpen(true)}
              profileId={profileId}
            />

            <ContinueWatching
              order={order}
            />

            {order.map((id) => (

              <Scene
                key={id}
                id={id}
                className={
                  id === 'originals'
                    ? '!py-0 sm:!py-0'
                    : ''
                }
              >

                {sections[id]}

              </Scene>

            ))}

            <FinalCTA />

          </main>

        </motion.div>

      )}

      {/* Lazy-loaded interactive overlays */}
      <Suspense fallback={null}>

        <AnimatePresence>
          {playing && (
            <PlayIntro
              key="intro"
              onClose={closeIntro}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {project && (
            <ProjectModal
              key="project"
              project={project}
              onClose={closeProject}
              onSwitch={setProject}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {resumeOpen && (
            <ResumeModal
              key="resume"
              onClose={closeResume}
            />
          )}
        </AnimatePresence>

      </Suspense>

      {/* Notification */}
      <AnimatePresence>

        {toast && (

          <motion.div
            role="status"
            className="
              glass fixed bottom-6 left-1/2
              z-[150] w-[min(92vw,420px)]
              -translate-x-1/2 rounded-xl
              px-5 py-3 text-center
              text-sm text-bone
            "
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
          >
            {toast}
          </motion.div>

        )}

      </AnimatePresence>

    </LayoutGroup>
  );
          }
