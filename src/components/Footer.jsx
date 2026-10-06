import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaArrowRight,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 sm:px-12 lg:px-24 pt-16 sm:pt-20 lg:pt-24 pb-8">

      {/* Subtle center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '420px',
          left: '50%',
          top: '25%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(ellipse, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.018) 35%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 max-w-375 mx-auto">

        {/* =====================================================
            TOP BAR
        ====================================================== */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <span className="block h-px w-12 sm:w-16 bg-white/25" />

            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-white/45">
              LET&apos;S CONNECT
            </span>
          </div>

          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/25">
            DESIGN · CODE · CREATE
          </span>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div
          className="
            mt-24
            sm:mt-28
            lg:mt-32
            grid
            grid-cols-1
            lg:grid-cols-[260px_minmax(0,1fr)_260px]
            items-end
            gap-12
            lg:gap-14
          "
        >

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <div className="order-2 lg:order-1 lg:pb-1">

            <p className="max-w-65 text-sm leading-[1.65] text-white/45">
              Building modern digital experiences with clean code,
              thoughtful interfaces, and a focus on creating things
              that feel simple and effortless.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-xs
                sm:text-sm
                font-medium
                text-white/75
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <span>Get in touch</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  transition-all
                  duration-300
                  group-hover:border-white/60
                  group-hover:bg-white
                  group-hover:text-black
                "
              >
                <FaArrowRight
                  size={9}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>

          {/* ===================================================
              CENTER NAME
          ==================================================== */}
          <div className="order-1 lg:order-2 min-w-0 text-center">

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                select-none
                whitespace-nowrap
                text-[15vw]
                sm:text-[12vw]
                lg:text-[8vw]
                leading-[0.8]
                tracking-[-0.065em]
                text-white/25
              "
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontWeight: 900,
              }}
            >
              KEERTHANA
            </motion.h2>

            <p className="mt-5 text-[9px] sm:text-[15px] tracking-[0.38em] uppercase text-white/30">
              Fullstack Developer
            </p>
          </div>

          {/* ===================================================
              RIGHT CONTENT
          ==================================================== */}
          <div className="order-3 lg:pb-1 lg:text-right">

            <p className="mb-5 text-[10px] tracking-[0.28em] uppercase text-white/30">
              Find me online
            </p>

            <div className="flex items-center gap-3 lg:justify-end">

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/2
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-white/50
                  hover:bg-white
                  hover:text-black
                "
              >
                <FaGithub size={15} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/2
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-white/50
                  hover:bg-white
                  hover:text-black
                "
              >
                <FaLinkedin size={15} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/2
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-white/50
                  hover:bg-white
                  hover:text-black
                "
              >
                <FaInstagram size={15} />
              </a>

              {/* Back to top */}
              <motion.a
                href="#home"
                aria-label="Back to top"
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  ml-2
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  transition-shadow
                  duration-300
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                "
              >
                <FaArrowUp size={12} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="mt-20 sm:mt-24 lg:mt-28 border-t border-white/10" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-3
            pt-6
            text-[10px]
            sm:text-xs
            text-white/30
          "
        >
          <p>
            &copy; {new Date().getFullYear()} Keerthana. All rights reserved.
          </p>

          <p>
            Designed &amp; built with{' '}
            <span className="text-white/55">React</span>
          </p>

          <p className="hidden sm:block">
            Based in India
          </p>
        </div>
      </div>
    </footer>
  );
}