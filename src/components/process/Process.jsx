import {
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaCheckCircle,
  FaCode,
  FaLightbulb,
  FaPaintBrush,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

/* =========================================================
   PROCESS DATA
========================================================= */

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    shortTitle: "Discover",
    icon: FaSearch,
    color: "coral",

    description:
      "We begin by understanding your business, goals, target audience and what the website needs to achieve.",

    deliverables: [
      "Project requirements",
      "Website goals",
      "Audience understanding",
      "Feature priorities",
    ],

    note:
      "A strong project starts with understanding the problem before thinking about the interface.",
  },

  {
    id: 2,
    number: "02",
    title: "Strategy",
    shortTitle: "Strategy",
    icon: FaLightbulb,
    color: "yellow",

    description:
      "The information is organized into a clear website structure so pages, sections and calls-to-action have a purpose.",

    deliverables: [
      "Page structure",
      "Content hierarchy",
      "User journey",
      "CTA planning",
    ],

    note:
      "This stage helps prevent random sections and keeps the website focused on the user's journey.",
  },

  {
    id: 3,
    number: "03",
    title: "Design Direction",
    shortTitle: "Design",
    icon: FaPaintBrush,
    color: "purple",

    description:
      "A visual direction is established through typography, spacing, colors, components and the overall personality of the interface.",

    deliverables: [
      "Visual direction",
      "Typography system",
      "Color approach",
      "Responsive layout thinking",
    ],

    note:
      "The design should support the content and business rather than simply add decoration.",
  },

  {
    id: 4,
    number: "04",
    title: "Development",
    shortTitle: "Develop",
    icon: FaCode,
    color: "blue",

    description:
      "The approved direction becomes a responsive frontend using organized components, reusable patterns and clean development practices.",

    deliverables: [
      "Responsive frontend",
      "Reusable components",
      "Interactions",
      "Clean project structure",
    ],

    note:
      "Desktop, tablet and mobile behavior are considered during development rather than added as an afterthought.",
  },

  {
    id: 5,
    number: "05",
    title: "Testing",
    shortTitle: "Testing",
    icon: FaCheckCircle,
    color: "green",

    description:
      "Before launch, the experience is reviewed across important screen sizes and common interaction states to catch layout or usability issues.",

    deliverables: [
      "Responsive checks",
      "Interaction review",
      "Content review",
      "Frontend cleanup",
    ],

    note:
      "Testing is where small details are corrected so the final experience feels much more complete.",
  },

  {
    id: 6,
    number: "06",
    title: "Launch",
    shortTitle: "Launch",
    icon: FaRocket,
    color: "coral",

    description:
      "Once everything is ready, the project can be prepared for deployment and final delivery.",

    deliverables: [
      "Final review",
      "Deployment preparation",
      "Project handoff",
      "Post-launch guidance",
    ],

    note:
      "The goal is a clean handoff with a website that is ready for real visitors.",
  },
];

/* =========================================================
   COLOR SYSTEM
========================================================= */

const processColors = {
  coral: {
    accent: "text-[#ff685b]",
    icon: "bg-[#ff685b] text-white",
    soft: "bg-[#fff0ed]",
    border: "border-[#ffd8d2]",
    dot: "bg-[#ff685b]",
    glow: "bg-[#ff685b]/10",
  },

  yellow: {
    accent: "text-[#d9a329]",
    icon: "bg-[#efb83d] text-white",
    soft: "bg-[#fff8e5]",
    border: "border-[#f4e5ba]",
    dot: "bg-[#efb83d]",
    glow: "bg-[#efb83d]/10",
  },

  purple: {
    accent: "text-[#8f62ef]",
    icon: "bg-[#996cff] text-white",
    soft: "bg-[#f6f0ff]",
    border: "border-[#e6dcf8]",
    dot: "bg-[#996cff]",
    glow: "bg-[#996cff]/10",
  },

  blue: {
    accent: "text-[#5688ff]",
    icon: "bg-[#5688ff] text-white",
    soft: "bg-[#edf5ff]",
    border: "border-[#dce8ff]",
    dot: "bg-[#5688ff]",
    glow: "bg-[#5688ff]/10",
  },

  green: {
    accent: "text-[#35a56b]",
    icon: "bg-[#42b979] text-white",
    soft: "bg-[#eefaf3]",
    border: "border-[#d7eee1]",
    dot: "bg-[#42b979]",
    glow: "bg-[#42b979]/10",
  },
};

/* =========================================================
   PROCESS
========================================================= */

const Process = () => {
  const [activeStep, setActiveStep] =
    useState(0);

  const activeProcess =
    processSteps[activeStep];

  const ActiveIcon =
    activeProcess.icon;

  const activeColors =
    processColors[
      activeProcess.color
    ];

  /* =======================================================
     CONTACT
  ======================================================= */

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =======================================================
     NEXT STEP
  ======================================================= */

  const goToNextStep = () => {
    setActiveStep((current) => {
      if (
        current ===
        processSteps.length - 1
      ) {
        return 0;
      }

      return current + 1;
    });
  };

  return (
    <section
      id="process"
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
          opacity-[0.1]
          sm:opacity-[0.15]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[25%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ff685b]/[0.05]
          blur-[100px]

          sm:h-[430px]
          sm:w-[430px]
          sm:blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-400/[0.045]
          blur-[100px]

          sm:h-[430px]
          sm:w-[430px]
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

            lg:grid-cols-[0.66fr_1.34fr]
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
              Process
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
              A structured workflow keeps
              projects clear from the first
              discussion through development,
              testing and final delivery.
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
                text-[clamp(2.8rem,12vw,4.25rem)]
                font-bold
                leading-[0.93]
                tracking-[-0.06em]
                text-[#292929]

                sm:text-[clamp(3.6rem,9vw,5.1rem)]

                lg:text-[clamp(4.4rem,6vw,6.9rem)]
                lg:leading-[0.9]
              "
            >
              From first idea
              <br />

              to{" "}

              <span className="text-[#ff685b]">
                final launch.
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
                Each stage has a clear
                purpose, helping reduce
                confusion and keeping design,
                development and feedback
                aligned throughout the project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            MOBILE / TABLET STEP SELECTOR
        =================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
          }}
          className="
            mt-12
            grid
            grid-cols-2
            gap-2

            min-[480px]:grid-cols-3

            sm:mt-14
            sm:gap-3

            lg:hidden
          "
        >
          {processSteps.map(
            (
              step,
              index,
            ) => (
              <MobileStepButton
                key={step.id}
                step={step}
                index={index}
                isActive={
                  activeStep ===
                  index
                }
                onClick={() =>
                  setActiveStep(
                    index,
                  )
                }
              />
            ),
          )}
        </motion.div>

        {/* ===================================================
            MAIN PROCESS
        =================================================== */}

        <div
          className="
            mt-4
            grid
            gap-4

            sm:mt-5
            sm:gap-5

            lg:mt-16
            lg:grid-cols-[0.68fr_1.32fr]
            lg:items-start

            xl:grid-cols-[0.62fr_1.38fr]
          "
        >
          {/* =================================================
              DESKTOP STEP NAVIGATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -24,
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
              hidden
              overflow-hidden
              rounded-[32px]
              border
              border-[#e6ded9]
              bg-white
              p-2
              shadow-[0_18px_50px_rgba(55,37,30,0.05)]

              lg:sticky
              lg:top-[105px]
              lg:block

              xl:rounded-[36px]
              xl:p-3
            "
          >
            <div
              className="
                border-b
                border-[#eee7e3]
                px-4
                py-5

                xl:px-5
                xl:py-6
              "
            >
              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-[#ff685b]

                  xl:text-[9px]
                  xl:tracking-[0.2em]
                "
              >
                Project journey
              </p>

              <p
                className="
                  mt-2
                  max-w-xs
                  text-[11px]
                  leading-5
                  text-[#88817d]

                  xl:text-[12px]
                  xl:leading-6
                "
              >
                Select a stage to see
                what happens during the
                process.
              </p>
            </div>

            <div className="mt-2">
              {processSteps.map(
                (
                  step,
                  index,
                ) => (
                  <DesktopStepButton
                    key={step.id}
                    step={step}
                    index={index}
                    isActive={
                      activeStep ===
                      index
                    }
                    onClick={() =>
                      setActiveStep(
                        index,
                      )
                    }
                  />
                ),
              )}
            </div>
          </motion.div>

          {/* =================================================
              ACTIVE STEP PANEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              min-w-0
              overflow-hidden
              rounded-[28px]
              border
              border-white/90
              bg-white
              shadow-[0_24px_70px_rgba(55,37,30,0.07)]

              sm:rounded-[34px]

              lg:min-h-[650px]

              xl:rounded-[38px]
            "
          >
            <AnimatePresence
              mode="wait"
            >
              <motion.div
                key={
                  activeProcess.id
                }
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  relative
                  min-h-full
                  overflow-hidden
                  p-5

                  sm:p-7

                  md:p-8

                  lg:p-9

                  xl:p-11
                "
              >
                {/* ===========================================
                    BACKGROUND GLOW
                =========================================== */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-[240px]
                    w-[240px]
                    rounded-full
                    blur-[85px]

                    sm:h-[320px]
                    sm:w-[320px]

                    ${activeColors.glow}
                  `}
                />

                {/* DECORATIVE RING */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    -right-20
                    top-[12%]
                    hidden
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border-[40px]
                    opacity-[0.045]

                    md:block

                    ${
                      activeProcess.color ===
                      "blue"
                        ? "border-[#5688ff]"
                        : activeProcess.color ===
                            "purple"
                          ? "border-[#996cff]"
                          : activeProcess.color ===
                              "green"
                            ? "border-[#42b979]"
                            : activeProcess.color ===
                                "yellow"
                              ? "border-[#efb83d]"
                              : "border-[#ff685b]"
                    }
                  `}
                />

                <div className="relative z-10">
                  {/* =========================================
                      TOP
                  ========================================= */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3

                        sm:gap-4
                      "
                    >
                      <motion.div
                        key={`icon-${activeProcess.id}`}
                        initial={{
                          scale: 0.8,
                          rotate: -8,
                        }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                        }}
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[15px]
                          shadow-[0_12px_30px_rgba(55,37,30,0.10)]

                          sm:h-14
                          sm:w-14
                          sm:rounded-[18px]

                          ${activeColors.icon}
                        `}
                      >
                        <ActiveIcon
                          size={18}
                          className="
                            sm:text-[21px]
                          "
                        />
                      </motion.div>

                      <div>
                        <p
                          className={`
                            text-[7px]
                            font-extrabold
                            uppercase
                            tracking-[0.16em]

                            sm:text-[8px]
                            sm:tracking-[0.19em]

                            ${activeColors.accent}
                          `}
                        >
                          Current stage
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            font-bold
                            text-[#716a66]

                            sm:text-[11px]
                          "
                        >
                          Step{" "}
                          {activeProcess.number}
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        shrink-0
                        text-[clamp(2.8rem,12vw,4rem)]
                        font-black
                        leading-none
                        tracking-[-0.08em]
                        text-[#f0ebe8]

                        sm:text-[5rem]

                        lg:text-[6rem]
                      "
                    >
                      {activeProcess.number}
                    </span>
                  </div>

                  {/* =========================================
                      TITLE
                  ========================================= */}

                  <div
                    className="
                      mt-8

                      sm:mt-10

                      lg:mt-12
                    "
                  >
                    <p
                      className={`
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.17em]

                        sm:text-[9px]
                        sm:tracking-[0.2em]

                        ${activeColors.accent}
                      `}
                    >
                      DevCraft process
                    </p>

                    <h3
                      className="
                        mt-3
                        max-w-3xl
                        break-words
                        text-[clamp(2.8rem,13vw,4.2rem)]
                        font-bold
                        leading-[0.92]
                        tracking-[-0.06em]
                        text-[#292929]

                        sm:mt-4
                        sm:text-[clamp(3.7rem,8vw,5rem)]

                        lg:text-[clamp(4rem,5vw,6rem)]
                        lg:leading-[0.9]
                      "
                    >
                      {activeProcess.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-[12px]
                        leading-6
                        text-[#77706c]

                        sm:mt-6
                        sm:text-sm
                        sm:leading-7

                        lg:text-[15px]
                      "
                    >
                      {
                        activeProcess.description
                      }
                    </p>
                  </div>

                  {/* =========================================
                      DELIVERABLES
                  ========================================= */}

                  <div
                    className="
                      mt-7
                      border-t
                      border-[#eee7e3]
                      pt-6

                      sm:mt-9
                      sm:pt-7
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.17em]
                        text-[#aaa29d]

                        sm:text-[9px]
                        sm:tracking-[0.19em]
                      "
                    >
                      What happens here
                    </p>

                    <div
                      className="
                        mt-4
                        grid
                        gap-2.5

                        min-[480px]:grid-cols-2

                        sm:mt-5
                        sm:gap-3
                      "
                    >
                      {activeProcess.deliverables.map(
                        (
                          deliverable,
                        ) => (
                          <DeliverableCard
                            key={
                              deliverable
                            }
                            text={
                              deliverable
                            }
                            colors={
                              activeColors
                            }
                          />
                        ),
                      )}
                    </div>
                  </div>

                  {/* =========================================
                      NOTE
                  ========================================= */}

                  <div
                    className={`
                      mt-6
                      rounded-[20px]
                      border
                      p-4

                      sm:mt-8
                      sm:rounded-[24px]
                      sm:p-5

                      ${activeColors.border}
                      ${activeColors.soft}
                    `}
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        className={`
                          mt-0.5
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white

                          ${activeColors.accent}
                        `}
                      >
                        <FaCheck
                          size={8}
                        />
                      </span>

                      <div>
                        <p
                          className="
                            text-[7px]
                            font-extrabold
                            uppercase
                            tracking-[0.16em]
                            text-[#9c948f]

                            sm:text-[8px]
                            sm:tracking-[0.18em]
                          "
                        >
                          Why this stage matters
                        </p>

                        <p
                          className="
                            mt-2
                            max-w-2xl
                            text-[10px]
                            leading-5
                            text-[#6f6864]

                            sm:text-[11px]
                            sm:leading-6
                          "
                        >
                          {
                            activeProcess.note
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      PANEL FOOTER
                  ========================================= */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-col
                      gap-4
                      border-t
                      border-[#eee7e3]
                      pt-6

                      min-[480px]:flex-row
                      min-[480px]:items-center
                      min-[480px]:justify-between

                      sm:mt-8
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      {processSteps.map(
                        (
                          step,
                          index,
                        ) => (
                          <button
                            key={
                              step.id
                            }
                            type="button"
                            onClick={() =>
                              setActiveStep(
                                index,
                              )
                            }
                            aria-label={`View ${step.title} stage`}
                            className={`
                              h-2
                              rounded-full
                              transition-all
                              duration-300

                              ${
                                index ===
                                activeStep
                                  ? `
                                    w-7
                                    ${activeColors.dot}
                                  `
                                  : `
                                    w-2
                                    bg-[#ddd5d1]
                                    hover:bg-[#aaa29d]
                                  `
                              }
                            `}
                          />
                        ),
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={
                        goToNextStep
                      }
                      className="
                        group
                        inline-flex
                        w-fit
                        items-center
                        gap-3
                        text-[10px]
                        font-bold
                        text-[#292929]
                        transition-colors
                        duration-300
                        hover:text-[#ff685b]

                        sm:text-[11px]
                      "
                    >
                      {activeStep ===
                      processSteps.length -
                        1
                        ? "Start Again"
                        : "Next Stage"}

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-[#292929]
                          text-white
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:bg-[#ff685b]
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
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ===================================================
            FULL JOURNEY
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
            duration: 0.7,
          }}
          className="
            mt-5
            overflow-hidden
            rounded-[28px]
            border
            border-[#e8e0dc]
            bg-white
            shadow-[0_16px_45px_rgba(55,37,30,0.045)]

            sm:mt-6
            sm:rounded-[34px]

            lg:mt-8
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              flex-col
              gap-4
              border-b
              border-[#eee7e3]
              p-5

              sm:flex-row
              sm:items-end
              sm:justify-between
              sm:p-7

              lg:p-9
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
                Complete workflow
              </p>

              <h3
                className="
                  mt-3
                  max-w-2xl
                  text-[clamp(2rem,9vw,3rem)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#292929]

                  sm:text-[clamp(2.6rem,6vw,3.8rem)]
                "
              >
                Six stages. One clear
                project journey.
              </h3>
            </div>

            <p
              className="
                max-w-sm
                text-[11px]
                leading-5
                text-[#817a75]

                sm:text-[12px]
                sm:leading-6
              "
            >
              The exact process can adapt
              depending on the project, but
              these stages provide a clear
              working foundation.
            </p>
          </div>

          {/* JOURNEY */}

          <div
            className="
              grid
              grid-cols-2

              min-[480px]:grid-cols-3

              lg:grid-cols-6
            "
          >
            {processSteps.map(
              (
                step,
                index,
              ) => (
                <JourneyStep
                  key={step.id}
                  step={step}
                  index={index}
                  active={
                    activeStep ===
                    index
                  }
                  onClick={() =>
                    setActiveStep(
                      index,
                    )
                  }
                />
              ),
            )}
          </div>
        </motion.div>

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[28px]
            bg-[#292929]
            p-5
            text-white
            shadow-[0_24px_65px_rgba(38,30,27,0.11)]

            sm:mt-6
            sm:rounded-[34px]
            sm:p-8

            lg:mt-8
            lg:p-10

            xl:p-12
          "
        >
          {/* CORAL CIRCLE */}

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
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-[180px]
              w-[180px]
              rounded-full
              bg-[#ff685b]
              opacity-80

              sm:h-[230px]
              sm:w-[230px]

              lg:-right-24
              lg:-top-24
              lg:h-[290px]
              lg:w-[290px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-7

              lg:grid-cols-[1fr_auto]
              lg:items-end
              lg:gap-12
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.17em]
                  text-[#ff9a90]

                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                Ready to begin?
              </p>

              <h3
                className="
                  mt-3
                  max-w-4xl
                  text-[clamp(2.35rem,11vw,3.6rem)]
                  font-bold
                  leading-[0.96]
                  tracking-[-0.055em]

                  sm:mt-4
                  sm:text-[clamp(3rem,7vw,4.5rem)]

                  lg:text-[clamp(3.8rem,5vw,5.4rem)]
                  lg:leading-[0.93]
                "
              >
                Every strong website
                starts with a clear
                conversation.
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[12px]
                  leading-6
                  text-white/55

                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                "
              >
                Tell me what you want to
                build, where the project
                currently stands and what
                you want the final website
                to achieve.
              </p>
            </div>

            <button
              type="button"
              onClick={
                scrollToContact
              }
              className="
                group
                inline-flex
                min-h-[50px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-5
                text-[11px]
                font-bold
                text-[#292929]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff685b]
                hover:text-white

                sm:w-fit
                sm:min-h-[54px]
                sm:px-6
                sm:text-[12px]
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   MOBILE STEP BUTTON
========================================================= */

const MobileStepButton = ({
  step,
  index,
  isActive,
  onClick,
}) => {
  const Icon =
    step.icon;

  const colors =
    processColors[
      step.color
    ];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={
        isActive
      }
      className={`
        group
        relative
        min-w-0
        overflow-hidden
        rounded-[18px]
        border
        p-3
        text-left
        transition-all
        duration-300

        sm:rounded-[22px]
        sm:p-4

        ${
          isActive
            ? `
              border-[#292929]
              bg-[#292929]
              text-white
              shadow-[0_14px_35px_rgba(38,30,27,0.12)]
            `
            : `
              border-[#e6ded9]
              bg-white
              text-[#39332f]
              hover:border-[#ffc5be]
              hover:bg-[#fff7f5]
            `
        }
      `}
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-2
        "
      >
        <span
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-[10px]

            sm:h-9
            sm:w-9
            sm:rounded-[11px]

            ${
              isActive
                ? `
                  bg-white/10
                  text-white
                `
                : `
                  ${colors.soft}
                  ${colors.accent}
                `
            }
          `}
        >
          <Icon
            size={12}
          />
        </span>

        <span
          className={`
            text-[7px]
            font-black
            tracking-[0.12em]

            sm:text-[8px]

            ${
              isActive
                ? "text-white/35"
                : "text-[#b0a8a3]"
            }
          `}
        >
          {step.number}
        </span>
      </div>

      <p
        className="
          mt-3
          truncate
          text-[10px]
          font-bold

          sm:text-[11px]
        "
      >
        {step.shortTitle}
      </p>

      {isActive && (
        <motion.span
          layoutId="mobile-process-active"
          className={`
            absolute
            inset-x-3
            bottom-0
            h-[2px]
            rounded-full

            ${colors.dot}
          `}
        />
      )}
    </button>
  );
};

/* =========================================================
   DESKTOP STEP BUTTON
========================================================= */

const DesktopStepButton = ({
  step,
  index,
  isActive,
  onClick,
}) => {
  const Icon =
    step.icon;

  const colors =
    processColors[
      step.color
    ];

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => {
        if (!isActive) {
          onClick();
        }
      }}
      aria-pressed={
        isActive
      }
      className={`
        group
        relative
        grid
        w-full
        grid-cols-[42px_1fr_auto]
        items-center
        gap-3
        overflow-hidden
        rounded-[20px]
        px-3
        py-3.5
        text-left
        transition-all
        duration-300

        xl:grid-cols-[46px_1fr_auto]
        xl:gap-4
        xl:rounded-[22px]
        xl:px-4
        xl:py-4

        ${
          isActive
            ? `
              bg-[#292929]
              text-white
            `
            : `
              text-[#4e4844]
              hover:bg-[#faf6f3]
            `
        }
      `}
    >
      <span
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-[13px]
          transition-all
          duration-300

          xl:h-11
          xl:w-11
          xl:rounded-[14px]

          ${
            isActive
              ? `
                bg-white/10
                text-white
              `
              : `
                ${colors.soft}
                ${colors.accent}
              `
          }
        `}
      >
        <Icon
          size={14}
        />
      </span>

      <div className="min-w-0">
        <p
          className={`
            text-[7px]
            font-black
            uppercase
            tracking-[0.14em]

            xl:text-[8px]

            ${
              isActive
                ? "text-white/35"
                : "text-[#aaa29d]"
            }
          `}
        >
          Step {step.number}
        </p>

        <p
          className="
            mt-1
            truncate
            text-[11px]
            font-bold

            xl:text-[12px]
          "
        >
          {step.title}
        </p>
      </div>

      <span
        className={`
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          transition-all
          duration-300

          ${
            isActive
              ? `
                bg-white
                text-[#292929]
              `
              : `
                bg-[#f4f0ed]
                text-[#aaa29d]
                group-hover:translate-x-1
                group-hover:bg-[#ff685b]
                group-hover:text-white
              `
          }
        `}
      >
        <FaArrowRight
          size={8}
        />
      </span>
    </button>
  );
};

/* =========================================================
   DELIVERABLE
========================================================= */

const DeliverableCard = ({
  text,
  colors,
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
        hover:border-[#ffc8c1]
        hover:bg-white

        sm:rounded-[17px]
        sm:px-4
        sm:py-3.5
      "
    >
      <span
        className={`
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full

          ${colors.soft}
          ${colors.accent}
        `}
      >
        <FaCheck
          size={7}
        />
      </span>

      <span
        className="
          min-w-0
          text-[9px]
          font-semibold
          leading-5
          text-[#665f5b]

          sm:text-[10px]
        "
      >
        {text}
      </span>
    </div>
  );
};

/* =========================================================
   JOURNEY STEP
========================================================= */

const JourneyStep = ({
  step,
  index,
  active,
  onClick,
}) => {
  const Icon =
    step.icon;

  const colors =
    processColors[
      step.color
    ];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        relative
        min-w-0
        border-b
        border-r
        border-[#eee7e3]
        p-4
        text-left
        transition-all
        duration-300

        sm:p-5

        lg:min-h-[170px]
        lg:border-b-0
        lg:p-5

        xl:min-h-[185px]
        xl:p-6

        ${
          active
            ? `
              bg-[#292929]
              text-white
            `
            : `
              bg-white
              hover:bg-[#fff9f7]
            `
        }
      `}
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-3
        "
      >
        <span
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-[12px]

            sm:h-10
            sm:w-10
            sm:rounded-[13px]

            ${
              active
                ? `
                  bg-white/10
                  text-white
                `
                : `
                  ${colors.soft}
                  ${colors.accent}
                `
            }
          `}
        >
          <Icon
            size={13}
          />
        </span>

        <span
          className={`
            text-[7px]
            font-black
            tracking-[0.13em]

            sm:text-[8px]

            ${
              active
                ? "text-white/30"
                : "text-[#b1aaa5]"
            }
          `}
        >
          {step.number}
        </span>
      </div>

      <p
        className="
          mt-4
          text-[10px]
          font-bold
          leading-4

          sm:text-[11px]

          lg:mt-6
        "
      >
        {step.shortTitle}
      </p>

      <div
        className={`
          mt-3
          h-[2px]
          rounded-full
          transition-all
          duration-300

          ${
            active
              ? colors.dot
              : `
                w-5
                bg-[#e2dbd7]
                group-hover:w-9
                group-hover:bg-[#ff685b]
              `
          }
        `}
      />
    </button>
  );
};

export default Process;