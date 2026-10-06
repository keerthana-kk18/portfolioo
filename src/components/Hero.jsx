import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaDownload,
} from 'react-icons/fa';
import prof from '../assets/prof1.PNG';

const socials = [
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

const EASE = [0.16, 1, 0.3, 1];

/* ---------------------------------------------
   Animation variants
--------------------------------------------- */

const developerVariant = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

const portraitVariant = {
  hidden: { opacity: 0, scale: 0.94, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay: 0.8, ease: EASE },
  },
};

const leftContentVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 1.25, ease: EASE } },
};

const rightContentVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 1.35, ease: EASE } },
};

const buttonContainerVariant = {
  hidden: {},
  visible: { transition: { delayChildren: 1.7, staggerChildren: 0.12 } },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ------------------------- Hero ------------------------- */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20"
    >
      {/* Display font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
      `}</style>

      {/* LARGE SMOKY CIRCULAR HALO */}

      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* BASE BLACK */}
        <div className="absolute inset-0" style={{ background: '#050505' }} />

        {/* HUGE OUTER SMOKE CIRCLE */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '115vw',
            height: '115vw',
            minWidth: '1100px',
            minHeight: '1100px',
            left: '50%',
            top: '38%',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(115,115,115,0.24) 0%,
                rgba(105,105,105,0.22) 10%,
                rgba(92,92,92,0.19) 20%,
                rgba(78,78,78,0.16) 30%,
                rgba(64,64,64,0.13) 40%,
                rgba(50,50,50,0.095) 50%,
                rgba(38,38,38,0.065) 60%,
                rgba(25,25,25,0.035) 70%,
                rgba(10,10,10,0.012) 82%,
                transparent 100%
              )
            `,
            filter: 'blur(55px)',
          }}
          animate={{ scale: [1, 1.025, 1], opacity: [0.82, 0.95, 0.82] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* MAIN SMOKY CIRCLE */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '78vw',
            height: '72vh',
            left: '50%',
            top: '37%',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(125,125,125,0.28) 0%,
                rgba(115,115,115,0.26) 12%,
                rgba(100,100,100,0.22) 24%,
                rgba(84,84,84,0.18) 36%,
                rgba(68,68,68,0.135) 48%,
                rgba(52,52,52,0.09) 60%,
                rgba(35,35,35,0.05) 72%,
                rgba(18,18,18,0.018) 85%,
                transparent 100%
              )
            `,
            filter: 'blur(48px)',
          }}
          animate={{ scale: [1, 1.035, 1], x: ['0%', '0.7%', '0%'], y: ['0%', '-0.5%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* DARK GRAY CENTER */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '48vw',
            height: '48vh',
            minWidth: '600px',
            minHeight: '420px',
            left: '50%',
            top: '38%',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(72,72,72,0.38) 0%,
                rgba(68,68,68,0.34) 15%,
                rgba(62,62,62,0.29) 30%,
                rgba(55,55,55,0.23) 45%,
                rgba(45,45,45,0.16) 60%,
                rgba(32,32,32,0.08) 75%,
                transparent 100%
              )
            `,
            filter: 'blur(38px)',
          }}
          animate={{ scale: [0.98, 1.025, 0.98], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* SOFT WHITE/GRAY INNER HALO */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '42vw',
            height: '40vh',
            minWidth: '500px',
            minHeight: '350px',
            left: '50%',
            top: '36%',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(175,175,175,0.11) 0%,
                rgba(155,155,155,0.085) 16%,
                rgba(130,130,130,0.06) 32%,
                rgba(105,105,105,0.04) 48%,
                rgba(75,75,75,0.02) 68%,
                transparent 100%
              )
            `,
            filter: 'blur(55px)',
            mixBlendMode: 'screen',
          }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* LEFT SMOKE */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '65vw',
            height: '55vh',
            left: '-20%',
            top: '12%',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(75,75,75,0.12) 0%,
                rgba(65,65,65,0.085) 25%,
                rgba(50,50,50,0.055) 45%,
                rgba(30,30,30,0.025) 65%,
                transparent 82%
              )
            `,
            filter: 'blur(75px)',
          }}
          animate={{ x: ['-2%', '2%', '-2%'], opacity: [0.65, 0.85, 0.65] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* RIGHT SMOKE */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '65vw',
            height: '55vh',
            right: '-20%',
            top: '12%',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(75,75,75,0.12) 0%,
                rgba(65,65,65,0.085) 25%,
                rgba(50,50,50,0.055) 45%,
                rgba(30,30,30,0.025) 65%,
                transparent 82%
              )
            `,
            filter: 'blur(75px)',
          }}
          animate={{ x: ['2%', '-2%', '2%'], opacity: [0.65, 0.85, 0.65] }}
          transition={{ duration: 31, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* LOWER SPREAD */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '90vw',
            height: '60vh',
            left: '50%',
            top: '70%',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(65,65,65,0.10) 0%,
                rgba(52,52,52,0.075) 25%,
                rgba(40,40,40,0.05) 45%,
                rgba(25,25,25,0.025) 65%,
                transparent 82%
              )
            `,
            filter: 'blur(80px)',
          }}
          animate={{ scaleX: [1, 1.04, 1], opacity: [0.55, 0.75, 0.55] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* VERY LARGE OUTER DIFFUSION */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '140vw',
            height: '140vw',
            left: '50%',
            top: '37%',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                ellipse at center,
                transparent 0%,
                transparent 35%,
                rgba(60,60,60,0.025) 48%,
                rgba(50,50,50,0.02) 58%,
                rgba(35,35,35,0.012) 70%,
                transparent 100%
              )
            `,
            filter: 'blur(90px)',
          }}
        />

        {/* EDGE VIGNETTE */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                ellipse 82% 78% at 50% 38%,
                transparent 35%,
                rgba(0,0,0,0.08) 55%,
                rgba(0,0,0,0.20) 72%,
                rgba(0,0,0,0.42) 88%,
                rgba(0,0,0,0.68) 100%
              )
            `,
          }}
        />

        {/* SUBTLE GRAIN */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
            `,
          }}
        />
      </div>

      {/* ------------------- UPPER TYPOGRAPHY + PORTRAIT  ------------------- */}

      <div className="relative w-full flex justify-center items-center px-2 sm:px-4">
        <motion.h1
          className="relative z-1 uppercase text-center select-none whitespace-nowrap w-full"
          variants={developerVariant}
          initial="hidden"
          animate="visible"
         style={{
          fontFamily: '"Archivo Black", sans-serif',
          fontSize: 'clamp(2.4rem, 13.2vw, 12rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: '-0.045em',
          color: '#FFFFFF',

          textShadow: `
          0 0 2px #000000,
          0 0 5px #000000,
          0 4px 8px rgba(0,0,0,1),
          0 8px 18px rgba(0,0,0,0.95),
          0 0 30px rgba(0,0,0,0.9)
        `,
     }}
        >
          DEVELOPER
        </motion.h1>

        {/* Portrait — positioned in front of DEVELOPER.*/}
        <motion.div
          className="absolute left-1/2 top-1/12 z-20"
          variants={portraitVariant}
          initial="hidden"
          animate="visible"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <img
            src={prof}
            alt="Portrait of Keerthana"
            className="block w-60 sm:w-70 md:w-82.5 lg:w-120 -translate-x-24.25 sm:-translate-x-28.5 md:-translate-x-33.5 lg:-translate-x-48.75 max-w-full"
            style={{
              height: 'auto',
              maxHeight: '98vh',
              objectFit: 'contain',
              filter:
                'drop-shadow(0 30px 55px rgba(0,0,0,0.7)) drop-shadow(0 0 35px rgba(255,255,255,0.14)) drop-shadow(0 0 30px rgba(216,168,87,0.15))',
            }}
          />
        </motion.div>
      </div>

      {/*  ------------------- LOWER CONTENT  ------------------- */}

      <div className="relative mt-90 sm:mt-100 md:mt-110 lg:mt-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ---------------- LEFT — INTRODUCTION ---------------- */}
          <motion.div
            variants={leftContentVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-start"
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              Hi, I&apos;m Keerthana
            </h2>

            <p
              className="mt-4"
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontWeight: 900,
                color: '#FFFFFF',
                fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                letterSpacing: '-0.01em',
              }}
            >
              Full Stack Developer
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-10 sm:mt-16 md:mt-24 lg:mt-60">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#FFFFFF',
                    background: 'transparent',
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    borderColor: '#ffffff',
                    boxShadow: '0 0 18px rgba(216,168,87,0.25)',
                  }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ---------------- RIGHT — DESCRIPTION + BUTTONS ---------------- */}
          <motion.div
            variants={rightContentVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:items-end lg:text-left ml-0 sm:ml-6 md:ml-10 lg:ml-16"
          >
            <p
              className="max-w-2xl text-sm sm:text-base leading-relaxed ml-0 sm:ml-8 md:ml-16 lg:ml-28"
              style={{ color: 'var(--ink-dim)' }}
            >
              I design and build scalable, modern web applications — blending clean architecture with refined interfaces that feel effortless
              to use. Every project starts with a question: how can this be simpler, faster, and more delightful?
            </p>

            <motion.div
              variants={buttonContainerVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              {/* Download Resume */}
              <motion.a
                variants={buttonVariant}
                href="#"
                download="Keerthana-Resume.pdf"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium mt-8 sm:mt-16 md:mt-24 lg:mt-60"
                style={{ background: '#FFFFFF', color: '#000000', border: '1px solid #FFFFFF' }}
                whileHover={{ y: -3, scale: 1.02, boxShadow: '0 10px 30px rgba(255,255,255,0.16)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <FaDownload size={13} />
                <span>Download Resume</span>
              </motion.a>

              {/* Contact Me */}
              <motion.a
                variants={buttonVariant}
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium mt-8 sm:mt-16 md:mt-24 lg:mt-60"
                style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(156,156,156,0.65)' }}
                whileHover={{ y: -3, scale: 1.02, borderColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <span>Contact Me</span>
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <FaArrowRight size={12} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}