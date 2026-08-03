import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaBolt,
  FaCheck,
  FaCode,
  FaComments,
  FaLaptopCode,
  FaMobileAlt,
  FaReact,
} from "react-icons/fa";

/* =========================================================
   WHY DEVCRAFT DATA
========================================================= */

const strengths = [
  {
    id: 1,

    number: "01",

    title: "Business-First Thinking",

    description:
      "The goal is not simply to make a website look attractive. Every section should help visitors understand your business, trust it and know what to do next.",

    icon: FaLaptopCode,

    color: "coral",

    points: [
      "Clear content hierarchy",
      "Strong calls-to-action",
      "Purpose-driven layouts",
    ],
  },

  {
    id: 2,

    number: "02",

    title: "Responsive By Default",

    description:
      "Your website is carefully adapted for desktop, tablet and mobile so the experience stays polished across different screen sizes.",

    icon: FaMobileAlt,

    color: "blue",

    points: [
      "Mobile experience",
      "Tablet optimization",
      "Flexible layouts",
    ],
  },

  {
    id: 3,

    number: "03",

    title: "Clean Frontend Development",

    description:
      "Interfaces are built with reusable components, organized code and a structure that is easier to maintain and improve later.",

    icon: FaCode,

    color: "purple",

    points: [
      "Reusable components",
      "Organized structure",
      "Maintainable frontend",
    ],
  },

  {
    id: 4,

    number: "04",

    title: "Performance Awareness",

    description:
      "Visual quality matters, but the experience should also feel smooth. Unnecessary assets, heavy effects and avoidable frontend work are kept under control.",

    icon: FaBolt,

    color: "green",

    points: [
      "Optimized assets",
      "Focused animations",
      "Cleaner loading",
    ],
  },
];

/* =========================================================
   COLOR SYSTEM
========================================================= */

const cardColors = {
  coral: {
    background: `
      border-[#ffdcd7]
      bg-gradient-to-br
      from-[#fff0ed]
      via-[#fff8f6]
      to-white
    `,

    icon: `
      bg-[#ff685b]
      text-white
      shadow-[0_12px_30px_rgba(255,104,91,0.18)]
    `,

    text: "text-[#ff685b]",

    dot: "bg-[#ff685b]",

    glow: "bg-[#ff685b]/10",
  },

  blue: {
    background: `
      border-[#dce8ff]
      bg-gradient-to-br
      from-[#edf5ff]
      via-[#f8fbff]
      to-white
    `,

    icon: `
      bg-[#5688ff]
      text-white
      shadow-[0_12px_30px_rgba(86,136,255,0.16)]
    `,

    text: "text-[#5688ff]",

    dot: "bg-[#5688ff]",

    glow: "bg-[#5688ff]/10",
  },

  purple: {
    background: `
      border-[#e7def8]
      bg-gradient-to-br
      from-[#f6f0ff]
      via-[#fbf9ff]
      to-white
    `,

    icon: `
      bg-[#996cff]
      text-white
      shadow-[0_12px_30px_rgba(153,108,255,0.16)]
    `,

    text: "text-[#8e62ef]",

    dot: "bg-[#996cff]",

    glow: "bg-[#996cff]/10",
  },

  green: {
    background: `
      border-[#d9eee2]
      bg-gradient-to-br
      from-[#eefaf3]
      via-[#f8fcfa]
      to-white
    `,

    icon: `
      bg-[#42b979]
      text-white
      shadow-[0_12px_30px_rgba(66,185,121,0.16)]
    `,

    text: "text-[#35a56b]",

    dot: "bg-[#42b979]",

    glow: "bg-[#42b979]/10",
  },
};

/* =========================================================
   WHY DEVCRAFT
========================================================= */

const WhyDevCraft = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="why-devcraft"
      className="
        section-spacing
        relative
        overflow-hidden
        bg-[#f8f4f1]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          background-dots
          opacity-[0.12]

          sm:opacity-[0.16]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-36
          top-[120px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ff685b]/[0.055]
          blur-[100px]

          sm:-left-44
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          bottom-[100px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-400/[0.05]
          blur-[100px]

          sm:-right-44
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[130px]
        "
      />

      <div className="site-container relative z-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            grid
            gap-8

            md:gap-10

            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-14

            xl:gap-16
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="eyebrow">
              Why DevCraft
            </div>

            <p
              className="
                mt-4
                max-w-sm
                text-[13px]
                leading-6
                text-[#817a75]

                sm:mt-5
                sm:text-sm
                sm:leading-7
              "
            >
              Good websites need more than
              attractive screens. The design,
              development and user experience
              need to work together.
            </p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <h2
              className="
                text-[clamp(2.8rem,12vw,4.2rem)]
                font-bold
                leading-[0.93]
                tracking-[-0.06em]
                text-[#292929]

                sm:text-[clamp(3.6rem,9vw,5rem)]

                lg:text-[clamp(4.3rem,6vw,6.8rem)]
                lg:leading-[0.9]
              "
            >
              More than
              <br />

              just writing{" "}

              <span className="text-[#ff685b]">
                code.
              </span>
            </h2>

            <div
              className="
                mt-6
                border-t
                border-[#ded7d2]
                pt-6

                sm:mt-8
                sm:pt-7
              "
            >
              <p
                className="
                  max-w-2xl
                  text-[13px]
                  leading-6
                  text-[#77706c]

                  sm:text-[15px]
                  sm:leading-7
                "
              >
                DevCraft combines visual
                thinking with frontend
                development so the finished
                website feels polished,
                communicates clearly and works
                properly across devices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            mt-12
            grid
            gap-4

            sm:mt-14
            sm:gap-5

            lg:mt-16

            xl:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LARGE VISUAL CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[28px]
              border
              border-white/90
              bg-gradient-to-br
              from-[#fff1ed]
              via-[#fffaf8]
              to-[#f1f7ff]
              p-5
              shadow-[0_24px_70px_rgba(61,42,34,0.075)]

              sm:min-h-[580px]
              sm:rounded-[34px]
              sm:p-7

              md:min-h-[620px]

              lg:p-9

              xl:min-h-[640px]
              xl:rounded-[38px]
              xl:p-10
            "
          >
            {/* GRID */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                background-grid
                opacity-[0.24]

                sm:opacity-[0.34]
              "
            />

            {/* CORAL SPHERE */}

            <motion.div
              aria-hidden="true"
              animate={{
                y: [
                  0,
                  -10,
                  0,
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-12
                top-8
                h-[130px]
                w-[130px]
                rounded-full
                bg-gradient-to-br
                from-[#ff8876]
                to-[#ff5e52]
                shadow-[0_24px_55px_rgba(255,104,91,0.18)]

                sm:-right-14
                sm:top-10
                sm:h-[180px]
                sm:w-[180px]

                lg:-right-16
                lg:h-[210px]
                lg:w-[210px]
              "
            />

            {/* BLUE SPHERE */}

            <motion.div
              aria-hidden="true"
              animate={{
                y: [
                  0,
                  8,
                  0,
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[8%]
                left-[5%]
                h-12
                w-12
                rounded-full
                bg-[#5688ff]
                shadow-[0_16px_35px_rgba(86,136,255,0.15)]

                sm:h-16
                sm:w-16

                lg:left-[7%]
                lg:h-20
                lg:w-20
              "
            />

            {/* ===============================================
                MAIN COPY
            =============================================== */}

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-[#ff685b]

                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                The DevCraft approach
              </p>

              <h3
                className="
                  mt-4
                  max-w-[520px]
                  text-[clamp(2.4rem,11vw,3.6rem)]
                  font-bold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#292929]

                  sm:mt-5
                  sm:text-[clamp(3rem,8vw,4.2rem)]

                  lg:text-[clamp(3.6rem,5vw,5.1rem)]
                  lg:leading-[0.92]
                "
              >
                Design with purpose.
                <br />

                Build with clarity.
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-[12px]
                  leading-6
                  text-[#77706c]

                  sm:mt-6
                  sm:text-sm
                  sm:leading-7
                "
              >
                Every decision should make
                the website clearer, easier
                to use or more effective for
                the business behind it.
              </p>
            </div>

            {/* ===============================================
                CENTRAL GLASS PANEL
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
              className="
                glass-card-premium
                absolute
                bottom-[6%]
                left-1/2
                z-10
                w-[88%]
                -translate-x-1/2
                rounded-[22px]
                p-4

                sm:bottom-[7%]
                sm:w-[80%]
                sm:rounded-[26px]
                sm:p-5

                md:w-[72%]

                xl:bottom-[8%]
                xl:left-auto
                xl:right-[8%]
                xl:w-[76%]
                xl:max-w-[420px]
                xl:translate-x-0
                xl:rounded-[28px]
                xl:p-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[#eee5e1]
                  pb-4
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-[#aaa29d]

                      sm:text-[8px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Project foundation
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      font-bold
                      text-[#302b28]

                      sm:mt-1.5
                      sm:text-sm
                    "
                  >
                    Built around the user
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-[#292929]
                    text-white

                    sm:h-11
                    sm:w-11
                    sm:rounded-[14px]
                  "
                >
                  <FaReact
                    size={16}
                  />
                </div>
              </div>

              <div
                className="
                  mt-4
                  space-y-2.5

                  sm:mt-5
                  sm:space-y-3
                "
              >
                <ApproachRow
                  label="Clear UI"
                  value="Design"
                />

                <ApproachRow
                  label="Responsive"
                  value="Development"
                />

                <ApproachRow
                  label="Focused"
                  value="Performance"
                />
              </div>
            </motion.div>

            {/* ===============================================
                FLOATING CLIENT CARD
            =============================================== */}

            <motion.div
              animate={{
                y: [
                  0,
                  -7,
                  0,
                ],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                floating-card
                absolute
                left-[6%]
                top-[55%]
                z-20
                hidden
                items-center
                gap-3
                p-3

                md:flex

                xl:left-[7%]
                xl:p-3.5
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#effaf3]
                  text-[#35a56b]

                  xl:h-9
                  xl:w-9
                "
              >
                <FaCheck size={11} />
              </span>

              <div>
                <p
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#aaa29d]

                    xl:text-[8px]
                    xl:tracking-[0.14em]
                  "
                >
                  Approach
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-bold
                    text-[#39332f]

                    xl:text-xs
                  "
                >
                  Client focused
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              STRENGTH CARDS
          ================================================= */}

          <div
            className="
              grid
              gap-3

              sm:gap-4

              md:grid-cols-2

              xl:gap-5
            "
          >
            {strengths.map(
              (
                strength,
                index,
              ) => (
                <StrengthCard
                  key={
                    strength.id
                  }
                  strength={
                    strength
                  }
                  index={index}
                />
              ),
            )}
          </div>
        </div>

        {/* ===================================================
            WORKING TOGETHER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-4
            overflow-hidden
            rounded-[28px]
            border
            border-[#e8e0dc]
            bg-white
            shadow-[0_16px_45px_rgba(55,37,30,0.045)]

            sm:mt-5
            sm:rounded-[34px]
          "
        >
          <div
            className="
              grid

              lg:grid-cols-[0.82fr_1.18fr]
            "
          >
            {/* LEFT */}

            <div
              className="
                border-b
                border-[#eee7e3]
                p-5

                sm:p-7

                lg:border-b-0
                lg:border-r
                lg:p-9

                xl:p-10
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-[#fff0ed]
                  text-[#ff685b]

                  sm:h-12
                  sm:w-12
                  sm:rounded-[16px]
                "
              >
                <FaComments
                  size={17}
                />
              </div>

              <p
                className="
                  mt-5
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.17em]
                  text-[#ff685b]

                  sm:mt-6
                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                Working together
              </p>

              <h3
                className="
                  mt-3
                  max-w-lg
                  text-[clamp(2.1rem,10vw,3.2rem)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#292929]

                  sm:text-[clamp(2.7rem,7vw,3.8rem)]
                "
              >
                A clear process makes
                better projects.
              </h3>
            </div>

            {/* RIGHT */}

            <div
              className="
                p-5

                sm:p-7

                lg:p-9

                xl:p-10
              "
            >
              <p
                className="
                  max-w-2xl
                  text-[12px]
                  leading-6
                  text-[#77706c]

                  sm:text-sm
                  sm:leading-7
                "
              >
                You should understand what is
                being built, what stage the
                project is in and what decisions
                need your input. Communication
                should support the work, not
                complicate it.
              </p>

              <div
                className="
                  mt-5
                  grid
                  gap-2.5

                  sm:mt-7
                  sm:grid-cols-2
                  sm:gap-3
                "
              >
                <ExpectationItem
                  text="Clear project stages"
                />

                <ExpectationItem
                  text="Responsive communication"
                />

                <ExpectationItem
                  text="Feedback-driven revisions"
                />

                <ExpectationItem
                  text="Clean project delivery"
                />
              </div>

              <button
                type="button"
                onClick={
                  scrollToContact
                }
                className="
                  group
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  text-[11px]
                  font-bold
                  text-[#292929]
                  transition-colors
                  duration-300
                  hover:text-[#ff685b]

                  sm:mt-8
                  sm:text-[12px]
                "
              >
                Tell me about your project

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#292929]
                    text-white
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-[#ff685b]

                    sm:h-10
                    sm:w-10
                  "
                >
                  <FaArrowRight
                    size={9}
                  />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   STRENGTH CARD
========================================================= */

const StrengthCard = ({
  strength,
  index,
}) => {
  const Icon =
    strength.icon;

  const colors =
    cardColors[
      strength.color
    ];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.55,

        delay: Math.min(
          index * 0.05,
          0.18,
        ),
      }}
      className={`
        group
        relative
        flex
        min-w-0
        flex-col
        overflow-hidden
        rounded-[26px]
        border
        p-5
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_24px_60px_rgba(55,37,30,0.08)]

        sm:rounded-[30px]
        sm:p-6

        md:min-h-[330px]

        xl:min-h-[300px]
        xl:rounded-[32px]
        xl:p-7

        ${colors.background}
      `}
    >
      {/* GLOW */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-14
          -top-14
          h-[160px]
          w-[160px]
          rounded-full
          blur-[55px]

          sm:h-[190px]
          sm:w-[190px]

          ${colors.glow}
        `}
      />

      {/* TOP */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:rotate-3

            sm:h-12
            sm:w-12
            sm:rounded-[16px]

            ${colors.icon}
          `}
        >
          <Icon
            size={17}
          />
        </div>

        <span
          className="
            text-[8px]
            font-black
            tracking-[0.14em]
            text-[#aaa29d]

            sm:text-[9px]
            sm:tracking-[0.15em]
          "
        >
          {strength.number}
        </span>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mt-6

          sm:mt-7
          xl:mt-8
        "
      >
        <p
          className={`
            text-[7px]
            font-extrabold
            uppercase
            tracking-[0.15em]

            sm:text-[8px]
            sm:tracking-[0.18em]

            ${colors.text}
          `}
        >
          DevCraft principle
        </p>

        <h3
          className="
            mt-2.5
            text-[clamp(1.7rem,8vw,2.3rem)]
            font-bold
            leading-[1]
            tracking-[-0.05em]
            text-[#302b28]

            sm:mt-3

            md:text-[clamp(1.75rem,3.5vw,2.4rem)]

            xl:text-[clamp(1.7rem,2.2vw,2.5rem)]
          "
        >
          {strength.title}
        </h3>

        <p
          className="
            mt-3.5
            text-[11px]
            leading-5
            text-[#79726e]

            sm:mt-4
            sm:text-[12px]
            sm:leading-6

            xl:text-[13px]
          "
        >
          {strength.description}
        </p>
      </div>

      {/* POINTS */}

      <div
        className="
          relative
          z-10
          mt-auto
          space-y-2
          pt-5

          sm:space-y-2.5
          sm:pt-6
        "
      >
        {strength.points.map(
          (point) => (
            <div
              key={point}
              className="
                flex
                items-center
                gap-2
              "
            >
              <span
                className={`
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full

                  ${colors.dot}
                `}
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  leading-4
                  text-[#716a66]

                  sm:text-[10px]
                "
              >
                {point}
              </span>
            </div>
          ),
        )}
      </div>
    </motion.article>
  );
};

/* =========================================================
   APPROACH ROW
========================================================= */

const ApproachRow = ({
  label,
  value,
}) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-3
      "
    >
      <div
        className="
          flex
          min-w-0
          items-center
          gap-2
        "
      >
        <span
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#fff0ed]
            text-[#ff685b]
          "
        >
          <FaCheck size={7} />
        </span>

        <span
          className="
            truncate
            text-[9px]
            font-semibold
            text-[#716a66]

            sm:text-[10px]
          "
        >
          {label}
        </span>
      </div>

      <span
        className="
          shrink-0
          text-[7px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#aaa29d]

          sm:text-[9px]
          sm:tracking-[0.1em]
        "
      >
        {value}
      </span>
    </div>
  );
};

/* =========================================================
   EXPECTATION ITEM
========================================================= */

const ExpectationItem = ({
  text,
}) => {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-3
        rounded-[15px]
        border
        border-[#eee7e3]
        bg-[#fffaf8]
        px-3.5
        py-3
        transition-all
        duration-300
        hover:border-[#ffc7c0]
        hover:bg-[#fff3f0]

        sm:rounded-[16px]
        sm:px-4
        sm:py-3.5
      "
    >
      <span
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#fff0ed]
          text-[#ff685b]
        "
      >
        <FaCheck size={8} />
      </span>

      <span
        className="
          min-w-0
          text-[10px]
          font-semibold
          leading-5
          text-[#615b57]

          sm:text-[11px]
        "
      >
        {text}
      </span>
    </div>
  );
};

export default WhyDevCraft;