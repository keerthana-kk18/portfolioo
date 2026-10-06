import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import fragranzia from '../assets/fragranzia.png';
import kalotsav from '../assets/kalotsav.png';
import weather from '../assets/weather.png';
import medicare from '../assets/medicare.png';

const projects = [
  {
    name: 'Kalotsav',
    description:
      ` A full-stack web application to automate student registrations, manage participant details,
and provide real-time leaderboard viewing for a University Kalolsavam.`,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'linear-gradient(135deg, #5C0827, #8D2B52)',
    image: kalotsav,
    liveDemo: 'https://kalotsav.vercel.app/'
  },
  {
    name: 'Medicare',
    description:
      'A full-stack hospital management system designed to streamline patient care and hospital operations, with features for managing doctors, patients, appointments, and medical records',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'linear-gradient(135deg, #43101E, #74123A)',
    image: medicare,
    liveDemo: ' https://hospitalmanage-vvv4-phi.vercel.app/'
  },
  {
    name: 'Weather',
    description:
      'A weather application that provides real-time weather information for any searched location, including temperature, conditions, wind speed, humidity, and forecast details.',
    tech: ['React', 'Tailwind', 'Weather API'],
    gradient: 'linear-gradient(135deg, #22040D, #5C0827)',
    image: weather,
    liveDemo: 'https://weather-82s7.vercel.app/'
  },
  {
    name: 'Fragrancia',
    description:
      'A luxurious perfume shopping application designed with an elegant UI, intuitive product filtering, and a seamless browsing experience to make discovering and shopping for premium fragrances effortless.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'linear-gradient(135deg, #5C0827, #8D2B52)',
    image: fragranzia,
    liveDemo: 'https://fragranzia-eight.vercel.app/'
  },

];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty('--rx', `${y * -8}deg`);
    el.style.setProperty('--ry', `${x * 10}deg`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="
          group
          relative
          rounded-3xl
          p-px
          overflow-hidden
          transition-transform
          duration-300
          w-full
          h-full
        "
        style={{
          transform:
            'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
          transformStyle: 'preserve-3d',
        }}
      >
        {/*  ------------------- ANIMATED WHITE SMOKY HOVER BORDER ------------------- */}
        <div
          className="
            absolute
            -inset-0.5
            rounded-3xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            -z-10
          "
          style={{
            background:
              'conic-gradient(from 0deg, rgba(255,255,255,0.35), rgba(255,255,255,0.025), rgba(160,160,160,0.20), rgba(255,255,255,0.035), rgba(230,230,230,0.28), rgba(255,255,255,0.35))',
            animation: 'spin 4s linear infinite',
            filter: 'blur(3px)',
          }}
        />

        {/*  ------------------- WHITE GLASS CARD ------------------- */}
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            backdrop-blur-2xl
            h-full
            flex
            flex-col
          "
          style={{
            background:
              'linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.055))',

            border: '1px solid rgba(255,255,255,0.32)',

            boxShadow: `
              0 15px 40px rgba(0,0,0,0.45),
              inset 0 1px 0 rgba(255,255,255,0.22),
              inset 0 -1px 0 rgba(255,255,255,0.05)
            `,
          }}
        >
          {/*  ------------------- SOFT GLASS REFLECTION ------------------- */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-700
              pointer-events-none
              z-0
            "
            style={{
              background:
                'linear-gradient(120deg, rgba(255,255,255,0.10), transparent 40%, rgba(255,255,255,0.06))',
            }}
          />

          {/*  ------------------- PROJECT PREVIEW ------------------- */}
          <div
            className="
              relative
              h-44
              sm:h-48
              overflow-hidden
            "
          >
            <motion.img
              src={project.image}
              alt={`${project.name} project preview`}
              className="absolute inset-0 w-full h-full object-cover"
             
              whileHover={{ y: -12 }}
              transition={{
                duration: 0.5,
              }}
            />

            {/* White shine */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
              style={{
                background:
                  'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 45%, transparent 60%)',
              }}
            />

            {/* Project name */}
            <span
              className="
                absolute
                bottom-3
                left-5
                right-5
                font-display
                text-lg
                tracking-wide
                font-bold
              "
              style={{
                color: '#FFFFFF',
              }}
            >
              {project.name}
            </span>
          </div>

          {/*  ------------------- CARD CONTENT ------------------- */}
          <div
            className="
              relative
              z-10
              p-5
              sm:p-6
              flex
              flex-col
              flex-1
            "
          >
            {/* Description */}
            <p
              className="
                text-sm
                leading-relaxed
                mb-4
              "
              style={{
                color: 'rgba(255,255,255,0.68)',
              }}
            >
              {project.description}
            </p>

            {/*  ------------------- TECHNOLOGY TAGS ------------------- */}
            <div
              className="
                flex
                flex-wrap
                gap-2
                mb-6
              "
            >
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  className="
                    text-[11px]
                    px-3
                    py-1
                    rounded-full
                    whitespace-nowrap
                  "
                  style={{
                    border:
                      '1px solid rgba(255,255,255,0.25)',
                    color: 'rgba(255,255,255,0.78)',
                    background:
                      'rgba(255,255,255,0.045)',
                  }}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/*  ------------------- BUTTONS ------------------- */}
            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-auto
              "
            >
              {/* Live Demo */}
              <motion.a
                href={project.liveDemo}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  font-medium
                  px-4
                  py-2
                  rounded-full
                  whitespace-nowrap
                "
                style={{
                  background:
                    'rgba(255,255,255,0.16)',
                  border:
                    '1px solid rgba(255,255,255,0.30)',
                  color: '#FFFFFF',
                }}
                whileHover={{
                  background:
                    'rgba(255,255,255,0.25)',
                  boxShadow:
                    '0 0 18px rgba(255,255,255,0.20)',
                }}
              >
                Live Demo
                <FaExternalLinkAlt size={10} />
              </motion.a>

             
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        px-5
        sm:px-8
        md:px-12
        lg:px-24
        py-20
        sm:py-24
        md:py-28
      "
    >
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto">

        {/*  ------------------- SECTION HEADING ------------------- */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-12
            sm:mb-14
            md:mb-16
            text-center
          "
        >
          {/* Selected Work */}
          <span
            className="
              text-xs
              sm:text-sm
              tracking-[0.3em]
              uppercase
              font-bold
            "
            style={{
              color: '#FFFFFF',
            }}
          >
            Selected Work
          </span>

          {/* Projects */}
          <h2
            className="
              font-display
              text-3xl
              sm:text-4xl
              mt-3
              font-bold
            "
            style={{
              color: '#FFFFFF',
              textShadow:
                '0 0 25px rgba(255,255,255,0.12)',
            }}
          >
            Projects
          </h2>

          {/* Centered white line */}
          <motion.div
            className="
              h-px
              mt-5
              mx-auto
            "
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)',
            }}
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 140,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          />
        </motion.div>

        {/*  ------------------- PROJECT GRID ------------------- */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-7
            lg:gap-8
          "
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.name}
              project={p}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}