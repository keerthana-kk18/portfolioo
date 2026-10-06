import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Field({ label, type = 'text', textarea = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const active = focused || value.length > 0;
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <Tag
        type={!textarea ? type : undefined}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="
          w-full
          bg-transparent
          rounded-xl
          px-4
          pt-6
          pb-2
          text-sm
          outline-none
          resize-none
          transition-all
          duration-300
        "
        style={{
          border: `1px solid ${
            focused
              ? 'rgba(255,255,255,0.65)'
              : 'rgba(255,255,255,0.18)'
          }`,
          color: '#FFFFFF',
          background: 'rgba(255,255,255,0.035)',
          boxShadow: focused
            ? '0 0 18px rgba(255,255,255,0.10)'
            : 'none',
        }}
      />

      <motion.label
        className="
          absolute
          left-4
          pointer-events-none
        "
        animate={{
          top: active ? 8 : textarea ? 18 : 16,
          fontSize: active ? 11 : 13,
          color: focused
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(255,255,255,0.45)',
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className=" px-5 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-24 md:py-28 " >
      <div
        className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center " >
        {/*  ------------------- LEFT SIDE — GRAY / WHITE SMOKY DESIGN ------------------- */}
        <motion.div
          className="
            relative
            hidden
            lg:flex
            items-center
            justify-center
            h-115
          "
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Main smoky glow */}
          <motion.div
            className="
              absolute
              w-75
              h-75
              rounded-full
            "
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.20), rgba(160,160,160,0.12) 40%, transparent 72%)',
              filter: 'blur(35px)',
            }}
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.65, 0.9, 0.65],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Rotating smoky rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 190 + i * 65,
                height: 190 + i * 65,
                border: `1px solid rgba(255,255,255,${
                  0.16 - i * 0.035
                })`,
                boxShadow:
                  '0 0 30px rgba(255,255,255,0.04)',
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 16 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}

          {/* Soft floating smoky shapes */}
          <motion.div
            className="
              absolute
              w-32
              h-20
              rounded-full
            "
            style={{
              background:
                'rgba(255,255,255,0.12)',
              filter: 'blur(28px)',
              transform: 'rotate(-25deg)',
            }}
            animate={{
              x: [-20, 25, -20],
              y: [10, -15, 10],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="
              absolute
              w-28
              h-16
              rounded-full
            "
            style={{
              background:
                'rgba(150,150,150,0.16)',
              filter: 'blur(25px)',
              transform: 'rotate(30deg)',
            }}
            animate={{
              x: [25, -20, 25],
              y: [-10, 20, -10],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Mail icon */}
          <motion.div
            className="
              relative
              z-10
              w-24
              h-24
              rounded-3xl
              flex
              items-center
              justify-center
            "
            style={{
              background:
                'rgba(255,255,255,0.06)',
              border:
                '1px solid rgba(255,255,255,0.18)',
              boxShadow:
                '0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)',
              backdropFilter: 'blur(14px)',
            }}
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span
              className="text-5xl"
              style={{
                color: 'rgba(255,255,255,0.82)',
                textShadow:
                  '0 0 25px rgba(255,255,255,0.18)',
              }}
            >
              ✉
            </span>
          </motion.div>
        </motion.div>

        {/*  ------------------- RIGHT SIDE — CONTACT CARD -------------------  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div
            className="
              relative
              rounded-3xl
              p-6
              sm:p-8
              md:p-10
              overflow-hidden
            "
            style={{
              background:
                'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))',
              border:
                '1px solid rgba(255,255,255,0.24)',
              boxShadow: `
                0 25px 60px rgba(0,0,0,0.65),
                inset 0 1px 0 rgba(255,255,255,0.10),
                inset 0 -1px 0 rgba(255,255,255,0.03)
              `,
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Subtle white smoky glow */}
            <div
              className="
                absolute
                -top-32
                -right-32
                w-72
                h-72
                rounded-full
                pointer-events-none
              "
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            <div className="relative z-10">
              {/* Small heading */}
              <span
                className="
                  text-xs
                  sm:text-sm
                  tracking-[0.3em]
                  uppercase
                  font-bold
                "
                style={{
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                Contact
              </span>

              {/* Main heading */}
              <h2
                className="
                  font-display
                  text-3xl
                  sm:text-4xl
                  mt-3
                  mb-4
                  font-bold
                "
                style={{
                  color: '#FFFFFF',
                  textShadow:
                    '0 0 25px rgba(255,255,255,0.10)',
                }}
              >
                Get In Touch
              </h2>

              {/* Description */}
              <p
                className="
                  text-sm
                  leading-relaxed
                  mb-8
                  max-w-md
                "
                style={{
                  color: 'rgba(255,255,255,0.52)',
                }}
              >
                Have a project in mind or just want to
                say hello? Feel free to send me a message.
              </p>

              {/*  ------------------- FORM -------------------  */}
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Name */}
                <Field label="Name" />

                {/* Email */}
                <Field
                  label="Email"
                  type="email"
                />

                {/* Message */}
                <Field
                  label="Message"
                  textarea
                />

                {/*  ------------------- SEND BUTTON -------------------  */}
                <motion.button
                  type="submit"
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-7
                    sm:px-8
                    py-3
                    rounded-full
                    font-semibold
                    text-sm
                    overflow-hidden
                  "
                  style={{
                    background: '#FFFFFF',
                    color: '#000000',
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      '0 0 28px rgba(255,255,255,0.22)',
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  Send Message

                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                    }}
                  >
                    <FaArrowRight size={12} />
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}