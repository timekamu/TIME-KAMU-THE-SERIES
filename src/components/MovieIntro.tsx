import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type MovieIntroProps = {
  onComplete: () => void;
};

const credits = [
  { small: 'A FILM BY', main: 'INDRAJIT' },
  { small: 'DIRECTED BY', main: 'INDRAJIT' },
  { small: 'ANIMATION BY', main: 'INDRAJIT' },
  { small: 'A CREATIVE BRAND', main: 'TIME KAMU' },
  { small: 'WELCOME TO', main: 'KAMU UNIVERSE' },
];

export default function MovieIntro({
  onComplete,
}: MovieIntroProps) {
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState(-1);
  const audioRef = useRef<AudioContext | null>(null);

  function sound(type: 'impact' | 'whoosh' | 'shine') {
    const ctx = audioRef.current;
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'impact') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.65);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc.start(now);
      osc.stop(now + 0.7);
    } else if (type === 'whoosh') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.45);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.25);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.07, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  }

  function beginIntro() {
    const AudioContextClass = window.AudioContext;

    if (AudioContextClass) {
      audioRef.current = new AudioContextClass();
      void audioRef.current.resume();
    }

    setStarted(true);
    setStage(0);
    sound('impact');
  }

  useEffect(() => {
    if (!started) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const sequence = [
      { time: 0, stage: 0, sound: 'impact' },
      { time: 2600, stage: 1, sound: 'whoosh' },
      { time: 5100, stage: 2, sound: 'whoosh' },
      { time: 7600, stage: 3, sound: 'impact' },
      { time: 10100, stage: 4, sound: 'shine' },
    ] as const;

    sequence.forEach((item) => {
      if (item.time === 0) return;

      timers.push(
        setTimeout(() => {
          setStage(item.stage);
          sound(item.sound);
        }, item.time)
      );
    });

    timers.push(
      setTimeout(() => {
        onComplete();
      }, 13200)
    );

    return () => timers.forEach(clearTimeout);
  }, [started]);

  useEffect(() => {
    return () => {
      void audioRef.current?.close();
    };
  }, []);

  return (
    <AnimatePresence>
      {!started ? (
        <motion.div
          key="start"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050407]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(130,0,30,0.25),transparent_65%)]" />

          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full bg-red-700/20 blur-[100px]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10 text-center">
            <p className="mb-5 text-[10px] tracking-[0.5em] text-white/40">
              AN ORIGINAL CREATIVE EXPERIENCE
            </p>

            <h1 className="font-display text-5xl font-black tracking-wider text-white sm:text-7xl">
              TIME <span className="text-[#e5092f]">KAMU</span>
            </h1>

            <motion.button
              onClick={beginIntro}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 border border-red-500/60 px-8 py-4 text-[10px] font-bold tracking-[0.35em] text-white transition-colors hover:bg-red-600"
            >
              TAP TO ENTER
            </motion.button>

            <p className="mt-4 text-[9px] tracking-widest text-white/30">
              HEADPHONES RECOMMENDED
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="credits"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050407]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(120,0,30,0.22),transparent_65%)]" />

          <motion.div
            className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-red-700/15 blur-[120px]"
            animate={{ x: [-40, 40, -40], scale: [1, 1.2, 1] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <motion.div
            className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(229,9,47,0.12)_50%,transparent_65%)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

          <AnimatePresence mode="wait">
            {stage >= 0 && (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 35, scale: 0.88, rotateX: 18 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -25, scale: 1.08, rotateX: -12 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full px-5 text-center"
                style={{ perspective: 1000 }}
              >
                <p className="mb-5 text-[10px] font-medium tracking-[0.55em] text-white/45 sm:text-xs">
                  {credits[stage].small}
                </p>

                <h1 className="font-display text-4xl font-black tracking-[0.12em] text-white drop-shadow-[0_8px_25px_rgba(229,9,47,0.35)] sm:text-6xl md:text-7xl">
                  {credits[stage].main}
                </h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100px' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mx-auto mt-7 h-[2px] bg-[#e5092f] shadow-[0_0_18px_#e5092f]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-[9px] tracking-[0.45em] text-white/25">
              TIME KAMU ORIGINAL
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
