import { motion, useReducedMotion } from 'framer-motion';

export default function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background: '#000000',
      }}
    >
      {/* Base black background */}
      <div
        className="absolute inset-0"
        style={{
          background: '#000000',
        }}
      />

      {/* Top-left gray atmosphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55vw',
          height: '55vw',
          top: '-15%',
          left: '-12%',
          background:
            'radial-gradient(circle, rgba(70,70,70,0.42) 0%, rgba(45,45,45,0.25) 35%, rgba(20,20,20,0.08) 60%, transparent 75%)',
          filter: 'blur(80px)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 20, 0],
                y: [0, 15, 0],
                opacity: [0.75, 1, 0.75],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main center gray glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '75vw',
          height: '65vw',
          maxWidth: 1000,
          maxHeight: 850,
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(circle, rgba(100,100,100,0.22) 0%, rgba(75,75,75,0.14) 30%, rgba(40,40,40,0.08) 52%, transparent 72%)',
          filter: 'blur(110px)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.04, 1],
                opacity: [0.75, 1, 0.75],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft right-side gray atmosphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '60vw',
          top: '5%',
          right: '-18%',
          background:
            'radial-gradient(circle, rgba(55,55,55,0.32) 0%, rgba(35,35,35,0.18) 40%, transparent 72%)',
          filter: 'blur(100px)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -20, 0],
                y: [0, 20, 0],
                opacity: [0.65, 0.9, 0.65],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Lower dark-gray atmosphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '90vw',
          height: '45vh',
          bottom: '-18%',
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(ellipse at center, rgba(60,60,60,0.18) 0%, rgba(30,30,30,0.10) 45%, transparent 75%)',
          filter: 'blur(100px)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.03, 1],
                opacity: [0.55, 0.8, 0.55],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Very subtle central light */}
      <div
        className="absolute rounded-full"
        style={{
          width: '35vw',
          height: '35vw',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(130,130,130,0.10) 0%, rgba(80,80,80,0.05) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.65) 85%, rgba(0,0,0,0.9) 100%)',
        }}
      />
    </div>
  );
}