import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const items = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'projects', label: 'Projects', icon: FaBriefcase },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* ONE continuous glass container */}
      <div
        className="
          relative
          flex items-center
          gap-1 sm:gap-2
          px-3 sm:px-5
          py-2.5
          rounded-full
          backdrop-blur-2xl
          border border-white/20
          overflow-hidden
        "
         style={{
    background: `
      linear-gradient(
        135deg,
        rgba(255,255,255,0.16),
        rgba(255,255,255,0.08)
      )
    `,
    border: '1px solid rgba(255,255,255,0.32)',
    boxShadow: `
      0 8px 35px rgba(0,0,0,0.55),
      inset 0 1px 0 rgba(255,255,255,0.22),
      inset 0 -1px 0 rgba(255,255,255,0.06)
    `,
  }}
      >
        {/* Very subtle inner glass glow */}
        <div
          className="
            absolute inset-0
            rounded-full
            pointer-events-none
            bg-linear-to-b
            from-white/6
            via-transparent
            to-transparent
          "
        />

        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              className="
                relative
                flex flex-col
                items-center
                gap-1
                px-3 sm:px-4
                py-1.5
                rounded-full
                group
              "
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ y: -2 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Icon
                  size={14}
                  className="
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                  style={{
                    color: isActive
                      ? '#FFFFFF'
                      : 'rgba(255,255,255,0.50)',
                    filter: isActive
                      ? 'drop-shadow(0 0 7px rgba(255,255,255,0.65))'
                      : undefined,
                  }}
                />

                <span
                  className="
                    hidden sm:inline
                    text-xs
                    tracking-wide
                    font-medium
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                  style={{
                    color: isActive
                      ? '#FFFFFF'
                      : 'rgba(255,255,255,0.55)',
                    textShadow: isActive
                      ? '0 0 12px rgba(255,255,255,0.35)'
                      : 'none',
                  }}
                >
                  {label}
                </span>
              </motion.div>

              {/* Active indicator */}
              {isActive && (
                <motion.span
                  layoutId="nav-dot"
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-white
                  "
                  style={{
                    boxShadow:
                      '0 0 6px 2px rgba(255,255,255,0.75), 0 0 14px 3px rgba(255,255,255,0.35)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
