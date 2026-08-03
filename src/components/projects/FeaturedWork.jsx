import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import OptimizedImage from "../common/OptimizedImage";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,

    number: "01",

    name: "FinTrack Pro",

    category:
      "Personal Finance Dashboard",

    year: "2026",

    headline:
      "Making personal finance easier to understand.",

    description:
      "A modern personal finance dashboard designed to help users understand transactions, budgets, goals and financial activity through a clean responsive interface.",

    image:
      "/public/images/projects/fintrack-pro.jpg.png",

    accent: "coral",

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Dashboard analytics",
      "Budget tracking",
      "Financial goals",
      "Responsive interface",
    ],

    liveUrl: "#",

    githubUrl: "#",
  },

  {
    id: 2,

    number: "02",

    name: "TaskBloom",

    category:
      "Productivity Application",

    year: "2026",

    headline:
      "A simpler way to organize everyday tasks.",

    description:
      "A modern productivity experience built with vanilla JavaScript featuring task organization, filters, priorities, search, local storage and responsive interactions.",

    image:
      "/public/images/projects/taskbloom.jpg.png",

    accent: "green",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage",
    ],

    features: [
      "Task management",
      "Search & filters",
      "Local persistence",
      "Responsive experience",
    ],

    liveUrl:
      "https://taskbloom-todo-app.vercel.app/",

    githubUrl: "#",
  },

  {
    id: 3,

    number: "03",

    name: "Modern Quiz",

    category:
      "Interactive Learning Experience",

    year: "2026",

    headline:
      "Turning quizzes into a polished interactive experience.",

    description:
      "A responsive quiz application focused on interaction, progression and modern interface design with animated feedback and achievement-style elements.",

    image:
      "/public/images/projects/modern-quiz.jpg.png",

    accent: "purple",

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Interactive quizzes",
      "Progress tracking",
      "Achievements",
      "Responsive interface",
    ],

    liveUrl: "#",

    githubUrl: "#",
  },
];

/* =========================================================
   COLOR SYSTEM
========================================================= */

const projectColors = {
  coral: {
    accent: "text-[#ff685b]",

    button: `
      bg-[#ff685b]
      hover:bg-[#292929]
    `,

    soft: "bg-[#fff0ed]",

    border:
      "border-[#ffd9d3]",

    glow:
      "bg-[#ff685b]/10",

    dot: "bg-[#ff685b]",

    frame:
      "from-[#fff0ed] via-[#fff9f7] to-white",
  },

  green: {
    accent:
      "text-[#34a56a]",

    button: `
      bg-[#42b979]
      hover:bg-[#292929]
    `,

    soft:
      "bg-[#eefaf3]",

    border:
      "border-[#d7eee1]",

    glow:
      "bg-[#42b979]/10",

    dot:
      "bg-[#42b979]",

    frame:
      "from-[#eefaf3] via-[#f8fcfa] to-white",
  },

  purple: {
    accent:
      "text-[#8d62ef]",

    button: `
      bg-[#996cff]
      hover:bg-[#292929]
    `,

    soft:
      "bg-[#f6f0ff]",

    border:
      "border-[#e6dcf8]",

    glow:
      "bg-[#996cff]/10",

    dot:
      "bg-[#996cff]",

    frame:
      "from-[#f6f0ff] via-[#fbf9ff] to-white",
  },
};

/* =========================================================
   FEATURED WORK
========================================================= */

const FeaturedWork = () => {
  const scrollToContact = () => {
    document
      .getElementById(
        "contact",
      )
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="work"
      className="
        section-spacing
        relative
        overflow-hidden
        bg-[#fffdfc]
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
          -left-36
          top-[18%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ff685b]/[0.045]
          blur-[100px]

          sm:-left-52
          sm:h-[430px]
          sm:w-[430px]
          sm:blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          top-[62%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#996cff]/[0.045]
          blur-[100px]

          sm:-right-52
          sm:h-[430px]
          sm:w-[430px]
          sm:blur-[140px]
        "
      />

      <div
        className="
          site-container
          relative
          z-10
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            grid
            gap-8

            md:gap-10

            lg:grid-cols-[0.65fr_1.35fr]
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
              Frontend & Web Design Projects
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
Explore selected React,
 JavaScript and responsive
  web development projects
   built with a focus on usability,
    clean interfaces and modern design.
            </p>

            {/* PROJECT COUNT */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3

                sm:mt-8
                sm:gap-4
              "
            >
              <span
                className="
                  text-[32px]
                  font-black
                  leading-none
                  tracking-[-0.06em]
                  text-[#292929]

                  sm:text-[38px]
                "
              >
                03
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.16em]
                    text-[#aaa29d]

                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  Selected
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-bold
                    text-[#716b67]

                    sm:text-[11px]
                  "
                >
                  Project experiences
                </p>
              </div>
            </div>
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
                text-[clamp(2.8rem,12vw,4.25rem)]
                font-bold
                leading-[0.93]
                tracking-[-0.06em]
                text-[#292929]

                sm:text-[clamp(3.6rem,9vw,5rem)]

                lg:text-[clamp(4.3rem,6vw,6.8rem)]
                lg:leading-[0.9]
              "
            >
              Work that
              <br />

              turns ideas into
              <br />

              <span
                className="
                  text-[#ff685b]
                "
              >
                real experiences.
              </span>
            </h2>

            <div
              className="
                mt-6
                border-t
                border-[#eee7e3]
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
                Each project focuses
                on a different
                frontend challenge,
                from financial
                dashboards to
                productivity tools and
                interactive learning
                experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <div
          className="
            mt-14
            space-y-16

            sm:mt-16
            sm:space-y-20

            lg:mt-20
            lg:space-y-28

            xl:space-y-32
          "
        >
          {projects.map(
            (
              project,
              index,
            ) => (
              <ProjectCaseStudy
                key={
                  project.id
                }
                project={
                  project
                }
                index={
                  index
                }
              />
            ),
          )}
        </div>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-6
            border-t
            border-[#eee7e3]
            pt-8

            sm:mt-20
            sm:pt-10

            lg:mt-24
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-extrabold
                uppercase
                tracking-[0.17em]
                text-[#ff685b]

                sm:text-[9px]
                sm:tracking-[0.2em]
              "
            >
              Your project could
              be next
            </p>

            <h3
              className="
                mt-3
                max-w-3xl
                text-[clamp(2.3rem,11vw,3.5rem)]
                font-bold
                leading-[0.96]
                tracking-[-0.055em]
                text-[#292929]

                sm:mt-4
                sm:text-[clamp(3rem,7vw,4.3rem)]

                lg:text-[clamp(3.5rem,5vw,5rem)]
                lg:leading-[0.94]
              "
            >
              Have something
              worth building?
            </h3>
          </div>

          <button
            type="button"
            onClick={
              scrollToContact
            }
            className="
              primary-button
              shine-effect
              group
              w-full
              shrink-0

              sm:w-fit
            "
          >
            Start Your Project

            <FaArrowRight
              size={10}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CASE STUDY
========================================================= */

const ProjectCaseStudy = ({
  project,
  index,
}) => {
  const colors =
    projectColors[
      project.accent
    ];

  const reversed =
    index % 2 !== 0;

  return (
    <article
      className="
        min-w-0
      "
    >
      {/* =====================================================
          TOP INFO
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 16,
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
          duration: 0.55,
        }}
        className="
          mb-4
          flex
          items-end
          justify-between
          gap-3
          border-b
          border-[#eee7e3]
          pb-4

          sm:mb-6
          sm:gap-5
          sm:pb-5
        "
      >
        <div
          className="
            flex
            min-w-0
            items-center
            gap-2.5

            sm:gap-4
          "
        >
          <span
            className={`
              shrink-0
              text-[8px]
              font-black
              tracking-[0.14em]

              sm:text-[10px]
              sm:tracking-[0.16em]

              ${colors.accent}
            `}
          >
            {project.number}
          </span>

          <div
            className="
              h-px
              w-5
              shrink-0
              bg-[#dcd5d0]

              sm:w-10
            "
          />

          <span
            className="
              min-w-0
              truncate
              text-[7px]
              font-extrabold
              uppercase
              tracking-[0.11em]
              text-[#aaa29d]

              min-[360px]:text-[8px]

              sm:text-[9px]
              sm:tracking-[0.16em]
            "
          >
            {project.category}
          </span>
        </div>

        <span
          className="
            shrink-0
            text-[8px]
            font-bold
            text-[#aaa29d]

            sm:text-[10px]
          "
        >
          {project.year}
        </span>
      </motion.div>

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className={`
          grid
          min-w-0
          items-center
          gap-7

          sm:gap-9

          lg:gap-12

          xl:gap-20

          ${
            reversed
              ? `
                lg:grid-cols-[0.84fr_1.16fr]
              `
              : `
                lg:grid-cols-[1.16fr_0.84fr]
              `
          }
        `}
      >
        {/* ===================================================
            VISUAL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className={`
            min-w-0

            ${
              reversed
                ? "lg:order-2"
                : ""
            }
          `}
        >
          <ProjectVisual
            project={
              project
            }
            colors={
              colors
            }
          />
        </motion.div>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <motion.div
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: 0.05,
          }}
          className={`
            min-w-0

            ${
              reversed
                ? "lg:order-1"
                : ""
            }
          `}
        >
          <p
            className={`
              text-[8px]
              font-extrabold
              uppercase
              tracking-[0.17em]

              sm:text-[9px]
              sm:tracking-[0.2em]

              ${colors.accent}
            `}
          >
            Featured project
          </p>

          <h3
            className="
              mt-3
              break-words
              text-[clamp(2.8rem,14vw,4.2rem)]
              font-bold
              leading-[0.92]
              tracking-[-0.06em]
              text-[#292929]

              sm:mt-4
              sm:text-[clamp(3.7rem,9vw,5rem)]

              lg:text-[clamp(3.6rem,4.8vw,5.7rem)]
              lg:leading-[0.9]
            "
          >
            {project.name}
          </h3>

          <p
            className="
              mt-4
              max-w-xl
              text-[17px]
              font-semibold
              leading-[1.3]
              tracking-[-0.025em]
              text-[#4c4642]

              sm:mt-5
              sm:text-[20px]

              lg:text-[clamp(1.25rem,1.7vw,1.75rem)]
            "
          >
            {project.headline}
          </p>

          <p
            className="
              mt-4
              max-w-xl
              text-[12px]
              leading-6
              text-[#77706c]

              sm:mt-5
              sm:text-sm
              sm:leading-7
            "
          >
            {project.description}
          </p>

          {/* FEATURES */}

          <div
            className="
              mt-6
              grid
              gap-2

              min-[440px]:grid-cols-2

              sm:mt-7
              sm:gap-2.5
            "
          >
            {project.features.map(
              (feature) => (
                <ProjectFeature
                  key={
                    feature
                  }
                  feature={
                    feature
                  }
                  dotClass={
                    colors.dot
                  }
                />
              ),
            )}
          </div>

          {/* TECHNOLOGY */}

          <div
            className="
              mt-6
              border-t
              border-[#eee7e3]
              pt-5

              sm:mt-8
              sm:pt-6
            "
          >
            <p
              className="
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-[#aaa29d]

                sm:text-[8px]
                sm:tracking-[0.19em]
              "
            >
              Technology
            </p>

            <div
              className="
                mt-3
                flex
                flex-wrap
                gap-1.5

                sm:gap-2
              "
            >
              {project.stack.map(
                (tech) => (
                  <span
                    key={
                      tech
                    }
                    className="
                      rounded-full
                      border
                      border-[#e8e0dc]
                      bg-white
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-bold
                      text-[#716a66]
                      shadow-[0_5px_15px_rgba(55,37,30,0.03)]

                      sm:px-3
                      sm:py-2
                      sm:text-[9px]
                    "
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-6
              grid
              gap-2.5

              min-[430px]:flex
              min-[430px]:flex-wrap

              sm:mt-8
              sm:gap-3
            "
          >
            <ProjectLink
              href={
                project.liveUrl
              }
              label="View Live Project"
              icon={
                FaExternalLinkAlt
              }
              primary
              colorClass={
                colors.button
              }
            />

            <ProjectLink
              href={
                project.githubUrl
              }
              label="View GitHub"
              icon={FaGithub}
            />
          </div>
        </motion.div>
      </div>
    </article>
  );
};

/* =========================================================
   PROJECT VISUAL
========================================================= */

const ProjectVisual = ({
  project,
  colors,
}) => {
  return (
    <div
      className={`
        group
        relative
        min-w-0
        overflow-hidden
        rounded-[26px]
        border
        bg-gradient-to-br
        p-2.5
        shadow-[0_22px_60px_rgba(55,37,30,0.075)]

        min-[360px]:p-3

        sm:rounded-[32px]
        sm:p-5
        sm:shadow-[0_28px_80px_rgba(55,37,30,0.09)]

        lg:rounded-[38px]
        lg:p-6

        ${colors.border}
        ${colors.frame}
      `}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-[220px]
          w-[220px]
          rounded-full
          blur-[75px]

          sm:h-[300px]
          sm:w-[300px]
          sm:blur-[90px]

          ${colors.glow}
        `}
      />

      {/* =====================================================
          PROJECT NUMBER
      ===================================================== */}

      <motion.div
        animate={{
          y: [
            0,
            -7,
            0,
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          glass-card-premium
          absolute
          right-5
          top-5
          z-30
          hidden
          h-11
          w-11
          items-center
          justify-center
          rounded-[14px]

          min-[420px]:flex

          sm:right-7
          sm:top-7
          sm:h-14
          sm:w-14
          sm:rounded-[18px]
        "
      >
        <span
          className={`
            text-[9px]
            font-black
            tracking-[0.1em]

            sm:text-[11px]

            ${colors.accent}
          `}
        >
          {project.number}
        </span>
      </motion.div>

      {/* =====================================================
          BROWSER WINDOW
      ===================================================== */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[18px]
          border
          border-white
          bg-white
          shadow-[0_18px_45px_rgba(45,31,26,0.10)]

          sm:rounded-[24px]
          sm:shadow-[0_24px_60px_rgba(45,31,26,0.12)]

          lg:rounded-[26px]
        "
      >
        {/* ===================================================
            BROWSER TOOLBAR
        =================================================== */}

        <div
          className="
            flex
            h-9
            items-center
            justify-between
            border-b
            border-[#eee8e5]
            bg-white
            px-3

            sm:h-11
            sm:px-4

            lg:h-12
          "
        >
          {/* DOTS */}

          <div
            className="
              flex
              gap-1

              sm:gap-1.5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#ff766b]

                sm:h-2
                sm:w-2
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#ffc866]

                sm:h-2
                sm:w-2
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#65c78b]

                sm:h-2
                sm:w-2
              "
            />
          </div>

          {/* URL */}

          <div
            className="
              hidden
              h-5
              w-[38%]
              items-center
              justify-center
              rounded-full
              bg-[#f7f4f2]

              min-[420px]:flex

              sm:h-6
            "
          >
            <span
              className="
                truncate
                px-2
                text-[6px]
                font-semibold
                text-[#aaa39f]

                sm:text-[7px]
              "
            >
              project.preview
            </span>
          </div>

          <span
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.1em]
              text-[#aaa39f]

              sm:text-[8px]
              sm:tracking-[0.12em]
            "
          >
            DevCraft
          </span>
        </div>

        {/* ===================================================
            PROJECT SCREENSHOT
        =================================================== */}

        <div
          className="
            relative
            aspect-[16/10]
            min-h-[150px]
            overflow-hidden
            bg-[#f6f3f1]

            min-[360px]:min-h-[165px]

            sm:min-h-0
          "
        >
          <OptimizedImage
            src={
              project.image
            }
            alt={`${project.name} project preview`}
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
            draggable={false}
            pictureClassName="
              relative
              z-10
              block
              h-full
              w-full
            "
            className="
              h-full
              w-full
              object-cover
              object-top
              transition-transform
              duration-[900ms]
              ease-out

              sm:group-hover:scale-[1.025]

              lg:group-hover:scale-[1.035]
            "
            fallback={
              <ProjectImageFallback
                project={
                  project
                }
                colors={
                  colors
                }
              />
            }
          />

          {/* BOTTOM GRADIENT */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              h-[24%]
              bg-gradient-to-t
              from-black/[0.07]
              to-transparent
            "
          />
        </div>
      </div>

      {/* =====================================================
          REACT FLOATING CARD
      ===================================================== */}

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
          glass-card-premium
          absolute
          bottom-7
          left-6
          z-30
          hidden
          items-center
          gap-2.5
          rounded-[16px]
          p-2.5

          md:flex

          lg:left-7
          lg:gap-3
          lg:rounded-[18px]
          lg:p-3
        "
      >
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-[10px]
            bg-[#edf7ff]
            text-[#4b8ce8]

            lg:h-9
            lg:w-9
            lg:rounded-xl
          "
        >
          <FaReact
            size={16}
          />
        </div>

        <div>
          <p
            className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.13em]
              text-[#aaa29d]

              lg:text-[7px]
              lg:tracking-[0.15em]
            "
          >
            Built with
          </p>

          <p
            className="
              mt-0.5
              text-[9px]
              font-bold
              text-[#39332f]

              lg:text-[10px]
            "
          >
            Modern frontend
          </p>
        </div>
      </motion.div>

      {/* =====================================================
          JAVASCRIPT FLOATING CARD
      ===================================================== */}

      <motion.div
        animate={{
          y: [
            0,
            6,
            0,
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          glass-card
          absolute
          bottom-[18%]
          right-4
          z-30
          hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-[13px]
          text-[#e2b52c]

          lg:flex

          xl:h-12
          xl:w-12
          xl:rounded-[16px]
        "
      >
        <SiJavascript
          size={19}
        />
      </motion.div>

      {/* =====================================================
          TAILWIND CARD
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [
            -2,
            2,
            -2,
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          glass-card
          absolute
          left-[16%]
          top-3
          z-30
          hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-[13px]
          text-[#38bdf8]

          xl:flex

          xl:h-11
          xl:w-11
          xl:rounded-[15px]
        "
      >
        <SiTailwindcss
          size={19}
        />
      </motion.div>
    </div>
  );
};

/* =========================================================
   PROJECT IMAGE FALLBACK
========================================================= */

const ProjectImageFallback = ({
  project,
  colors,
}) => {
  return (
    <div
      role="img"
      aria-label={`${project.name} project preview unavailable`}
      className={`
        relative
        z-10
        flex
        h-full
        w-full
        items-center
        justify-center
        bg-gradient-to-br
        p-5
        text-center

        ${colors.frame}
      `}
    >
      <div>
        <div
          className={`
            mx-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-[14px]
            bg-white
            shadow-[0_10px_30px_rgba(55,37,30,0.07)]

            sm:h-14
            sm:w-14
            sm:rounded-[18px]

            ${colors.accent}
          `}
        >
          <FaReact
            size={18}
          />
        </div>

        <p
          className="
            mt-4
            text-[7px]
            font-extrabold
            uppercase
            tracking-[0.16em]
            text-[#aaa29d]

            sm:text-[8px]
            sm:tracking-[0.18em]
          "
        >
          Project preview
        </p>

        <p
          className="
            mt-2
            text-[18px]
            font-black
            tracking-[-0.04em]
            text-[#292929]

            sm:text-xl
          "
        >
          {project.name}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   PROJECT FEATURE
========================================================= */

const ProjectFeature = ({
  feature,
  dotClass,
}) => {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-2
        rounded-[13px]
        border
        border-[#eee7e3]
        bg-[#fffaf8]
        px-3
        py-2.5

        sm:gap-2.5
        sm:rounded-[14px]
        sm:px-3.5
        sm:py-3
      "
    >
      <span
        className={`
          h-1.5
          w-1.5
          shrink-0
          rounded-full

          ${dotClass}
        `}
      />

      <span
        className="
          min-w-0
          text-[9px]
          font-semibold
          leading-4
          text-[#6f6864]

          sm:text-[10px]
        "
      >
        {feature}
      </span>
    </div>
  );
};

/* =========================================================
   PROJECT LINK
========================================================= */

const ProjectLink = ({
  href,
  label,
  icon: Icon,
  primary = false,
  colorClass = "",
}) => {
  const isPlaceholder =
    !href ||
    href === "#";

  const handleClick = (
    event,
  ) => {
    if (isPlaceholder) {
      event.preventDefault();
    }
  };

  return (
    <a
      href={
        isPlaceholder
          ? "#"
          : href
      }
      target={
        isPlaceholder
          ? undefined
          : "_blank"
      }
      rel={
        isPlaceholder
          ? undefined
          : "noopener noreferrer"
      }
      onClick={
        handleClick
      }
      aria-disabled={
        isPlaceholder
      }
      title={
        isPlaceholder
          ? "Project link will be added before deployment"
          : label
      }
      className={`
        group
        inline-flex
        min-h-[48px]
        w-full
        items-center
        justify-center
        gap-2.5
        rounded-full
        px-4
        text-[10px]
        font-bold
        transition-all
        duration-300

        min-[430px]:w-auto

        sm:min-h-[50px]
        sm:px-5
        sm:text-[11px]

        ${
          primary
            ? `
              text-white
              shadow-[0_10px_28px_rgba(55,37,30,0.10)]
              hover:-translate-y-1

              ${colorClass}
            `
            : `
              border
              border-[#e6ded9]
              bg-white
              text-[#39332f]
              hover:-translate-y-1
              hover:border-[#292929]
              hover:bg-[#292929]
              hover:text-white
            `
        }

        ${
          isPlaceholder
            ? `
              cursor-not-allowed
              opacity-50
              hover:translate-y-0
            `
            : ""
        }
      `}
    >
      <Icon
        size={11}
        className="
          shrink-0
          transition-transform
          duration-300
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
      />

      {label}
    </a>
  );
};

export default FeaturedWork;