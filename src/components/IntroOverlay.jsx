import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Timeline constants (ms)
const TEXT_ANIM = 1400;
const PAUSE_AFTER_TEXT = 2500;
const EXIT_STAGGER = 300;
const EXIT_ANIM = 900;
const FADE_OUT = 900;

const EASE = [0.16, 1, 0.3, 1]; // smooth, no bounce

export default function IntroOverlay({ onDone }) {
  // stages: textIn -> exit -> gone
  const [stage, setStage] = useState('textIn');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(
      () => setStage('exit'),
      TEXT_ANIM + PAUSE_AFTER_TEXT
    );

    const exitDone =
      TEXT_ANIM +
      PAUSE_AFTER_TEXT +
      EXIT_STAGGER * 2 +
      EXIT_ANIM;

    const t2 = setTimeout(
      () => setVisible(false),
      exitDone + FADE_OUT
    );

    const t3 = setTimeout(
      () => onDone?.(),
      exitDone + FADE_OUT + 200
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  const isExiting = stage === 'exit';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden"
          style={{ background: '#000000' }}
          exit={{ opacity: 0 }}
          transition={{
            duration: FADE_OUT / 1000,
            ease: 'easeInOut',
          }}
        >
          {/* Ambient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 25% 25%, rgba(40,40,40,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(20,20,20,0.5), transparent 55%), #000000',
            }}
          />

          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: 520,
              height: 520,
              top: '-8%',
              left: '-10%',
              background:
                'radial-gradient(circle, #1A1A1A 0%, transparent 70%)',
              opacity: 0.5,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute rounded-full blur-[130px]"
            style={{
              width: 600,
              height: 600,
              bottom: '-15%',
              right: '-10%',
              background:
                'radial-gradient(circle, rgba(216,168,87,0.18) 0%, transparent 70%)',
              opacity: 0.6,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Typography composition */}
          <div className="relative flex flex-col items-center px-6 w-full">

  {/* Welcome text */}
  <motion.p
    className="text-center whitespace-nowrap"
    style={{
      position: 'relative',
      zIndex: 10,
      marginBottom: '-0.6em',
      fontSize: 'clamp(1.4rem, 4.2vw, 2.8rem)',
      fontWeight: 300,
      fontFamily: '"Great Vibes", cursive',
      letterSpacing: '0.12em',
      color: '#D8A857',
      textShadow: '0 0 24px rgba(216,168,87,0.35)',
    }}
    initial={{ x: '-60vw', opacity: 0 }}
    animate={
      isExiting
        ? { x: '40vw', opacity: 0 }
        : { x: 0, opacity: 1 }
    }
    transition={
      isExiting
        ? {
            duration: EXIT_ANIM / 1000,
            ease: EASE,
          }
        : {
            duration: TEXT_ANIM / 1000,
            ease: EASE,
          }
    }
  >
    Welcome to my
  </motion.p>

  {/* KEEP  SPACE */}
  <div
    className="relative"
    style={{
      width: '210px',
      height: '210px',
      margin: '0.3em 0',
      flexShrink: 0,
    }}
  />

  {/* PORTFOLIO  */}
  <motion.h1
    className="font-display text-center"
    style={{
      position: 'relative',
      zIndex: 30,
      marginTop: '-0.5em',
      fontSize: 'clamp(3.2rem, 15vw, 12rem)',
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: 1,
      color: '#F5F5F5',
      textShadow: '0 0 40px rgba(255,255,255,0.15)',
    }}
    initial={{ x: '60vw', opacity: 0 }}
    animate={
      isExiting
        ? { x: '-45vw', opacity: 0 }
        : { x: 0, opacity: 1 }
    }
    transition={
      isExiting
        ? {
            duration: EXIT_ANIM / 1000,
            ease: EASE,
            delay: EXIT_STAGGER / 1000,
          }
        : {
            duration: TEXT_ANIM / 1000,
            ease: EASE,
          }
    }
  >
    PORTFOLIO
  </motion.h1>
</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}