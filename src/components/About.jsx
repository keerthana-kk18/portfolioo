import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import profileImage from '../assets/prof2.PNG';

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma },
  { name: 'Postman', icon: SiPostman },
  { name: 'VS Code', icon: VscVscode },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="
        group relative
        w-42.5
        xs:w-[180px]
        sm:w-52.5
        h-16
        sm:h-17.5
        rounded-2xl
        flex flex-row items-center justify-center
        gap-2.5
        sm:gap-3
        cursor-default
        overflow-hidden
        shrink-0
      "
      style={{
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.025))',
        border: '1px solid rgba(255,255,255,0.14)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(255,255,255,0.35)',
        boxShadow: '0 16px 35px rgba(0,0,0,0.6)',
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Soft white hover glow */}
      <motion.div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle at 50% 25%, rgba(255,255,255,0.13), transparent 65%)',
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 8, scale: 1.12 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 15,
        }}
        className="relative z-10 shrink-0"
      >
        <Icon
          size={30}
          className="w-7 h-7 sm:w-7.5 sm:h-7.5"
          style={{
            color: '#FFFFFF',
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.18))',
          }}
        />
      </motion.div>

      {/* Tool name */}
      <span
        className="
          relative z-10
          text-base
          sm:text-lg
          tracking-wide
          font-medium
          whitespace-nowrap
        "
        style={{
          color: 'rgba(255,255,255,0.65)',
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className=" px-5 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-24 md:py-28 " >
      <div className="max-w-6xl mx-auto">

        {/*  -------------------  MAIN ABOUT LAYOUT  ------------------- */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.85fr_1.15fr]
            gap-14
            md:gap-16
            lg:gap-20
            items-center
          "
        >

          {/*  ------------------- LEFT — IMAGE  ------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              justify-center
              lg:justify-start
              w-full
            "
          >
            <div
              className="
                relative
                w-67.5
                h-67.5
                xs:w-[290px]
                xs:h-[290px]
                sm:w-75
                sm:h-75
                md:w-85
                md:h-85
              "
            >

              {/*  ------------------- ROTATING SMOKY SQUARE BEHIND  ------------------- */}
              <motion.div
                className="
                  absolute
                  -inset-7
                  sm:-inset-8.75
                  rounded-[28px]
                  pointer-events-none
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at 30% 25%,
                      rgba(255,255,255,0.90),
                      rgba(190,190,190,0.70) 35%,
                      rgba(110,110,110,0.55) 58%,
                      transparent 75%
                    )
                  `,
                  filter: 'blur(16px)',
                  opacity: 1,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/*  ------------------- SECOND SMOKY LAYER  ------------------- */}
              <motion.div
                className="
                  absolute
                  -inset-7
                  sm:-inset-8.75
                  rounded-[22px]
                  pointer-events-none
                "
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.25),
                      rgba(130,130,130,0.18),
                      rgba(255,255,255,0.28)
                    )
                  `,
                  filter: 'blur(10px)',
                  opacity: 0.7,
                }}
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/*  ------------------- IMAGE CARD  ------------------- */}
              <motion.div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[20px]
                "
                style={{
                  background: '#FFFFFF',
                  border: '7px solid #000000',
                  boxShadow: `
                    0 22px 45px rgba(0,0,0,0.85),
                    0 8px 15px rgba(0,0,0,0.55)
                  `,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <img
                  src={profileImage}
                  alt="Keerthana"
                  className="
                    w-full
                    h-full
                    object-cover
                    scale-125
                  "
                />
              </motion.div>
            </div>
          </motion.div>

          {/*  ------------------- RIGHT — ABOUT CONTENT  ------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              w-full
              text-center
              lg:text-left
            "
          >

            {/* About Me */}
            <span
              className="
                text-xs
                tracking-[0.3em]
                uppercase
                font-bold
              "
              style={{
                color: '#FFFFFF',
              }}
            >
              About Me
            </span>

            {/* Heading */}
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
                textShadow: '0 0 25px rgba(255,255,255,0.12)',
              }}
            >
              The person behind the code
            </h2>

            {/* White line */}
            <motion.div
              className=" h-px mt-5 mx-auto lg:mx-0 "
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.8), transparent)',
              }}
              initial={{ width: 0 }}
              whileInView={{ width: 140 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
            />

            {/* Description */}
            <motion.p
              className="
                max-w-3xl
                mx-auto
                lg:mx-0
                text-sm
                sm:text-base
                leading-relaxed
                mt-6
              "
              style={{
                color: 'rgba(255,255,255,0.62)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
            >
             I’m a full stack developer focused on building modern, responsive, and user-friendly web applications. My experience spans frontend development with React, backend development with Node.js and Express, and database management with MongoDB. I enjoy working across the entire development process — from translating ideas into clean interfaces to building APIs, handling application logic, and connecting the frontend with reliable backend services.
             I’m particularly interested in creating applications that balance functionality with thoughtful design. I care about writing maintainable code, building responsive experiences, improving performance, and ensuring that every part of an application works together smoothly. I also enjoy debugging, learning new technologies, and exploring better ways to solve technical problems.
             As I continue growing as a developer, I’m looking forward to working on meaningful projects, collaborating with others, and turning challenging ideas into practical digital experiences.
            </motion.p>
          </motion.div>
        </div>

        {/*  ------------------- SKILLS  -------------------  */}
        <motion.div
          className="
            mt-16
            sm:mt-20
          "
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >

          {/*  ------------------- SKILLS HEADING  -------------------  */}
          <div className="mb-7 text-center">
            <span
              className="
                text-sm
                tracking-[0.3em]
                uppercase
                font-bold
              "
              style={{
                color: '#FFFFFF',
              }}
            >
              Technologies
            </span>

            <h3
              className="
                text-xl
                sm:text-3xl
                font-bold
                mt-2
              "
              style={{
                color: '#FFFFFF',
              }}
            >
              Tools I work with
            </h3>
          </div>

          {/* ------------------- FULL WIDTH TOOLS MARQUEE  -------------------  */}
          <style>
            {`
              @keyframes toolsRow1 {
                from {
                  transform: translateX(-50%);
                }

                to {
                  transform: translateX(0%);
                }
              }

              @keyframes toolsRow2 {
                from {
                  transform: translateX(0%);
                }

                to {
                  transform: translateX(-50%);
                }
              }

              .tools-row-1 {
                animation: toolsRow1 28s linear infinite;
                will-change: transform;
              }

              .tools-row-2 {
                animation: toolsRow2 28s linear infinite;
                will-change: transform;
              }

              .tools-marquee:hover .tools-row-1,
              .tools-marquee:hover .tools-row-2 {
                animation-play-state: paused;
              }

              @media (max-width: 640px) {
                .tools-row-1,
                .tools-row-2 {
                  animation-duration: 22s;
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .tools-row-1,
                .tools-row-2 {
                  animation: none;
                  transform: none;
                }
              }
            `}
          </style>

          <div
            className="
              tools-marquee
              relative
              left-1/2
              -translate-x-1/2
              w-screen
              max-w-none
              overflow-hidden
              mt-8
            "
          >

            {/*  ------------------- ROW 1 — LEFT → RIGHT  -------------------  */}
            <div className=" overflow-hidden mb-4 ">
              <div className=" tools-row-1 flex w-max gap-3 sm:gap-4 " >
                {[...skills, ...skills].map((skill, index) => (
                  <SkillCard
                    key={`row1-${skill.name}-${index}`}
                    skill={skill}
                  />
                ))}
              </div>
            </div>

            {/*  ------------------- ROW 2 — RIGHT → LEFT -------------------  */}
            <div className=" overflow-hidden ">
              <div className=" tools-row-2 flex w-max gap-3 sm:gap-4 ">
                {[...skills, ...skills].map((skill, index) => (
                  <SkillCard
                    key={`row2-${skill.name}-${index}`}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}