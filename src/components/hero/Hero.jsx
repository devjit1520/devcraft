import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaJs,
  FaPlay,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#fffdfc]
        pb-14
        pt-[105px]

        sm:pb-16
        sm:pt-[122px]

        md:pb-20
        md:pt-[132px]

        lg:min-h-screen
        lg:pb-24
        lg:pt-[145px]

        xl:pt-[152px]
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
          opacity-[0.2]

          sm:opacity-[0.25]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[150px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#ff685b]/10
          blur-[110px]

          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[120px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-blue-400/[0.07]
          blur-[120px]

          sm:h-[460px]
          sm:w-[460px]
          sm:blur-[140px]
        "
      />

      <div className="site-container relative z-10">
        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-12

            sm:gap-14

            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-10

            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="
              relative
              z-20
              min-w-0
            "
          >

            {/* ===============================================
                HEADING
            =============================================== */}

            <motion.h1
              variants={fadeUp}
              transition={{
                duration: 0.68,
              }}
              className="
                mt-6
                max-w-[820px]
                break-words
                text-[clamp(3.05rem,15vw,4.6rem)]
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
                text-[#292929]

                min-[360px]:text-[clamp(3.35rem,15vw,5rem)]

                sm:mt-7
                sm:text-[clamp(4.5rem,12vw,6rem)]

                md:text-[clamp(5.4rem,10vw,7rem)]

                lg:text-[clamp(4.7rem,6.6vw,7.4rem)]

                xl:text-[clamp(5.4rem,6.6vw,7.8rem)]
              "
            >
              Websites that
              <br />

              make your
              <br />

              business{" "}

              <span
                className="
                  relative
                  inline-block
                  text-[#ff685b]
                "
              >
                stand out.

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.75,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    -bottom-0.5
                    left-1
                    h-[4px]
                    w-[92%]
                    origin-left
                    rounded-full
                    bg-[#ff685b]/20

                    sm:-bottom-1
                    sm:h-[6px]
                  "
                />
              </span>
            </motion.h1>

            {/* ===============================================
                DESCRIPTION
            =============================================== */}

            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.6,
              }}
              className="
                mt-6
                max-w-[610px]
                text-[13px]
                leading-6
                text-[#77706c]

                min-[360px]:text-[14px]
                min-[360px]:leading-7

                sm:mt-7
                sm:text-[16px]
                sm:leading-8

                lg:max-w-[560px]
              "
            >
              I design and develop modern,
              responsive websites that help
              businesses look professional,
              communicate clearly and create
              stronger digital experiences.
            </motion.p>

            {/* ===============================================
                CTA
            =============================================== */}

            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.6,
              }}
              className="
                mt-7
                grid
                gap-3

                min-[480px]:flex
                min-[480px]:flex-wrap
                min-[480px]:items-center

                sm:mt-8
              "
            >
              <button
                type="button"
                onClick={() =>
                  scrollToSection("contact")
                }
                className="
                  primary-button
                  shine-effect
                  group
                  w-full

                  min-[480px]:w-auto
                "
              >
                Start Your Project

                <FaArrowRight
                  size={11}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToSection("work")
                }
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#e9dfda]
                  bg-white/75
                  px-4
                  text-[11px]
                  font-bold
                  text-[#4f4945]
                  shadow-[0_8px_25px_rgba(55,37,30,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  min-[480px]:w-auto
                  min-[480px]:px-5

                  sm:min-h-[52px]
                  sm:text-[12px]

                  hover:-translate-y-1
                  hover:border-[#ffb6ad]
                  hover:bg-[#fff0ed]
                  hover:text-[#ff685b]
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#292929]
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-[#ff685b]
                  "
                >
                  <FaPlay
                    size={8}
                    className="ml-[1px]"
                  />
                </span>

                View Selected Work
              </button>
            </motion.div>

            {/* ===============================================
                BENEFITS
            =============================================== */}

            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.6,
              }}
              className="
                mt-7
                grid
                gap-2.5

                min-[440px]:grid-cols-2

                sm:mt-9
                sm:flex
                sm:flex-wrap
                sm:gap-x-6
                sm:gap-y-3
              "
            >
              <HeroBenefit
                text="Responsive by default"
              />

              <HeroBenefit
                text="Clean development"
              />

              <HeroBenefit
                text="Performance focused"
              />
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              relative
              mx-auto
              w-full
              min-w-0
              max-w-[720px]

              lg:mx-0
            "
          >
            {/* ===============================================
                VISUAL STAGE
            =============================================== */}

            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/90
                bg-gradient-to-br
                from-[#fff4f0]
                via-[#fffdfb]
                to-[#f2f7ff]
                p-3
                shadow-[0_28px_80px_rgba(67,43,34,0.09)]

                min-[360px]:min-h-[460px]
                min-[360px]:p-4

                sm:min-h-[560px]
                sm:rounded-[34px]
                sm:p-6

                md:min-h-[610px]
                md:p-7

                lg:min-h-[610px]

                xl:min-h-[650px]
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  background-grid
                  opacity-[0.32]

                  sm:opacity-[0.42]
                "
              />

              {/* =============================================
                  CORAL ORB
              ============================================= */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-10
                  top-8
                  h-[110px]
                  w-[110px]
                  rounded-full
                  bg-gradient-to-br
                  from-[#ff8b78]
                  to-[#ff5f53]
                  shadow-[0_24px_50px_rgba(255,104,91,0.20)]

                  min-[360px]:h-[130px]
                  min-[360px]:w-[130px]

                  sm:-right-10
                  sm:top-10
                  sm:h-[180px]
                  sm:w-[180px]

                  md:h-[210px]
                  md:w-[210px]
                "
              />

              {/* =============================================
                  BLUE ORB
              ============================================= */}

              <motion.div
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[10%]
                  left-[5%]
                  h-11
                  w-11
                  rounded-full
                  bg-[#5688ff]
                  shadow-[0_16px_35px_rgba(86,136,255,0.17)]

                  sm:h-16
                  sm:w-16

                  md:h-20
                  md:w-20
                "
              />

              {/* =============================================
                  MAIN WEBSITE WINDOW
              ============================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  w-[88%]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white
                  bg-white/84
                  shadow-[0_24px_65px_rgba(64,43,35,0.13)]
                  backdrop-blur-[20px]

                  min-[360px]:w-[85%]

                  sm:w-[80%]
                  sm:rounded-[26px]

                  md:w-[78%]
                "
              >
                {/* TOOLBAR */}

                <div
                  className="
                    flex
                    h-9
                    items-center
                    justify-between
                    border-b
                    border-[#eee8e5]
                    px-3

                    sm:h-11
                    sm:px-4

                    md:h-12
                  "
                >
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
                        bg-[#ff776c]

                        sm:h-2
                        sm:w-2
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#ffc764]

                        sm:h-2
                        sm:w-2
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#68c88c]

                        sm:h-2
                        sm:w-2
                      "
                    />
                  </div>

                  <div
                    className="
                      h-4
                      w-[34%]
                      rounded-full
                      bg-[#f4f0ee]

                      sm:h-5
                      sm:w-[38%]
                    "
                  />

                  <span
                    className="
                      text-[6px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#aaa39f]

                      sm:text-[7px]

                      md:text-[8px]
                    "
                  >
                    DevCraft
                  </span>
                </div>

                {/* ===========================================
                    MOCK WEBSITE
                =========================================== */}

                <div
                  className="
                    relative
                    overflow-hidden
                    px-4
                    py-5

                    sm:px-5
                    sm:py-7

                    md:px-7
                    md:py-9
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-12
                      -top-10
                      h-32
                      w-32
                      rounded-full
                      bg-[#ff685b]/10
                      blur-3xl
                    "
                  />

                  <div className="relative">
                    {/* MOCK NAV */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-[7px]
                          font-black
                          tracking-[-0.04em]
                          text-[#292929]

                          sm:text-[9px]

                          md:text-[10px]
                        "
                      >
                        NORTHSTAR.
                      </span>

                      <div
                        className="
                          flex
                          gap-1.5
                        "
                      >
                        <span
                          className="
                            h-1
                            w-5
                            rounded-full
                            bg-[#ded8d4]

                            sm:h-1.5
                            sm:w-7
                          "
                        />

                        <span
                          className="
                            h-1
                            w-4
                            rounded-full
                            bg-[#ded8d4]

                            sm:h-1.5
                            sm:w-5
                          "
                        />
                      </div>
                    </div>

                    {/* MOCK HERO */}

                    <div
                      className="
                        mt-6
                        max-w-[280px]

                        sm:mt-8

                        md:mt-10
                        md:max-w-[330px]
                      "
                    >
                      <p
                        className="
                          text-[6px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#ff685b]

                          sm:text-[7px]

                          md:text-[8px]
                        "
                      >
                        Digital Experience
                      </p>

                      <h3
                        className="
                          mt-2
                          text-[clamp(1.3rem,7vw,2rem)]
                          font-bold
                          leading-[0.92]
                          tracking-[-0.06em]
                          text-[#292929]

                          sm:mt-3
                          sm:text-[clamp(2rem,6vw,3rem)]

                          md:text-[clamp(2.3rem,4vw,3.5rem)]
                        "
                      >
                        Better ideas
                        deserve better
                        websites.
                      </h3>

                      <p
                        className="
                          mt-3
                          max-w-[230px]
                          text-[7px]
                          leading-3.5
                          text-[#88817d]

                          sm:mt-4
                          sm:text-[9px]
                          sm:leading-4

                          md:max-w-[260px]
                          md:text-[10px]
                          md:leading-5
                        "
                      >
                        Modern digital
                        experiences designed
                        to communicate,
                        connect and convert.
                      </p>

                      <div
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          bg-[#ff685b]
                          px-3
                          py-2
                          text-[6px]
                          font-bold
                          text-white

                          sm:mt-5
                          sm:gap-2
                          sm:px-4
                          sm:py-2.5
                          sm:text-[8px]

                          md:text-[9px]
                        "
                      >
                        Explore Project

                        <FaArrowRight
                          size={7}
                        />
                      </div>
                    </div>

                    {/* =======================================
                        MINI CONTENT
                    ======================================= */}

                    <div
                      className="
                        mt-5
                        grid
                        grid-cols-[1.15fr_0.85fr]
                        gap-2

                        sm:mt-7
                        sm:gap-3

                        md:mt-9
                      "
                    >
                      <div
                        className="
                          min-h-[62px]
                          rounded-[12px]
                          bg-[#f8f4f1]
                          p-3

                          sm:min-h-[80px]
                          sm:rounded-[16px]
                          sm:p-4

                          md:min-h-[95px]
                          md:rounded-[18px]
                        "
                      >
                        <div
                          className="
                            h-1.5
                            w-[42%]
                            rounded-full
                            bg-[#292929]

                            sm:h-2
                          "
                        />

                        <div
                          className="
                            mt-2
                            h-1
                            w-[75%]
                            rounded-full
                            bg-[#ddd6d2]

                            sm:mt-3
                            sm:h-1.5
                          "
                        />

                        <div
                          className="
                            mt-1.5
                            h-1
                            w-[58%]
                            rounded-full
                            bg-[#e8e1dd]

                            sm:mt-2
                            sm:h-1.5
                          "
                        />
                      </div>

                      <div
                        className="
                          relative
                          min-h-[62px]
                          overflow-hidden
                          rounded-[12px]
                          bg-[#292929]

                          sm:min-h-[80px]
                          sm:rounded-[16px]

                          md:min-h-[95px]
                          md:rounded-[18px]
                        "
                      >
                        <div
                          className="
                            absolute
                            -bottom-7
                            -right-5
                            h-16
                            w-16
                            rounded-full
                            bg-[#ff685b]

                            sm:h-20
                            sm:w-20
                          "
                        />

                        <FaCode
                          size={16}
                          className="
                            absolute
                            left-3
                            top-3
                            text-white

                            sm:left-4
                            sm:top-4
                            sm:text-[20px]

                            md:text-[24px]
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =============================================
                  REACT CARD
                  Hidden on very small phones.
              ============================================= */}

              <FloatingCard
                className="
                  left-[3%]
                  top-[8%]
                  z-20
                  hidden

                  min-[390px]:block

                  sm:left-[4%]
                  sm:top-[13%]
                "
                delay={0.7}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    sm:gap-3
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

                      sm:h-10
                      sm:w-10
                      sm:rounded-xl
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
                        tracking-[0.1em]
                        text-[#aaa39f]

                        sm:text-[8px]
                        sm:tracking-[0.14em]
                      "
                    >
                      Frontend
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        font-bold
                        text-[#37312e]

                        sm:text-xs
                      "
                    >
                      React
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* =============================================
                  JAVASCRIPT CARD
              ============================================= */}

              <FloatingCard
                className="
                  bottom-[7%]
                  right-[3%]
                  z-20
                  hidden

                  min-[410px]:block

                  sm:bottom-[14%]
                  sm:right-[3%]
                "
                delay={0.9}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    sm:gap-3
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
                      bg-[#fff9df]
                      text-[#d8ac2d]

                      sm:h-10
                      sm:w-10
                      sm:rounded-xl
                    "
                  >
                    <FaJs size={16} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[6px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[#aaa39f]

                        sm:text-[8px]
                        sm:tracking-[0.14em]
                      "
                    >
                      Logic
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        font-bold
                        text-[#37312e]

                        sm:text-xs
                      "
                    >
                      JavaScript
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* =============================================
                  PERFORMANCE CARD
                  Tablet and above only.
              ============================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 0.55,
                }}
                className="
                  glass-card-premium
                  absolute
                  bottom-[7%]
                  left-[6%]
                  z-20
                  hidden
                  items-center
                  rounded-[18px]
                  p-3

                  sm:flex

                  md:bottom-[8%]
                  md:left-[7%]
                  md:rounded-[20px]
                  md:p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    md:gap-4
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#effaf3]

                      md:h-14
                      md:w-14
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-1
                        rounded-full
                        border-[3px]
                        border-emerald-400
                        border-r-emerald-100
                      "
                    />

                    <span
                      className="
                        relative
                        text-[9px]
                        font-black
                        text-[#27885a]

                        md:text-[11px]
                      "
                    >
                      UX
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#aaa39f]

                        md:text-[8px]
                        md:tracking-[0.15em]
                      "
                    >
                      Performance
                    </p>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-bold
                        text-[#37312e]

                        md:text-xs
                      "
                    >
                      Built with speed in mind
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =============================================
                  TAILWIND ICON
              ============================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -7, 0],
                }}
                transition={{
                  opacity: {
                    delay: 1,
                    duration: 0.4,
                  },

                  scale: {
                    delay: 1,
                    duration: 0.4,
                  },

                  y: {
                    delay: 1.3,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  glass-card
                  absolute
                  right-[8%]
                  top-[23%]
                  z-20
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-[14px]
                  text-[#38bdf8]

                  sm:flex

                  md:h-14
                  md:w-14
                  md:rounded-[18px]
                "
              >
                <SiTailwindcss
                  size={21}
                />
              </motion.div>

              {/* =============================================
                  VITE ICON
              ============================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, 7, 0],
                }}
                transition={{
                  opacity: {
                    delay: 1.05,
                    duration: 0.4,
                  },

                  scale: {
                    delay: 1.05,
                    duration: 0.4,
                  },

                  y: {
                    delay: 1.4,
                    duration: 4.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  glass-card
                  absolute
                  right-[4%]
                  top-[52%]
                  z-20
                  hidden
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-[13px]
                  text-[#7257ff]

                  md:flex

                  md:h-12
                  md:w-12
                  md:rounded-[16px]
                "
              >
                <SiVite size={19} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            TECHNOLOGY STRIP
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.75,
          }}
          className="
            mt-12
            border-y
            border-[#eee8e5]
            py-5

            sm:mt-14

            lg:mt-18
            lg:py-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              lg:flex-row
              lg:items-center
              lg:justify-between
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
                sm:tracking-[0.2em]
              "
            >
              Modern tools for modern websites
            </p>

            <div
              className="
                grid
                grid-cols-2
                gap-x-5
                gap-y-4
                text-[#8c8581]

                min-[420px]:grid-cols-4

                sm:flex
                sm:flex-wrap
                sm:items-center
                sm:gap-x-8
              "
            >
              <TechItem
                icon={FaReact}
                name="React"
              />

              <TechItem
                icon={FaJs}
                name="JavaScript"
              />

              <TechItem
                icon={SiTailwindcss}
                name="Tailwind"
              />

              <TechItem
                icon={SiVite}
                name="Vite"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   BENEFIT
========================================================= */

const HeroBenefit = ({
  text,
}) => {
  return (
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
          text-[10px]
          font-semibold
          leading-5
          text-[#7c7571]

          sm:text-[11px]
        "
      >
        {text}
      </span>
    </div>
  );
};

/* =========================================================
   FLOATING CARD
========================================================= */

const FloatingCard = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
      }}
      transition={{
        opacity: {
          delay,
          duration: 0.45,
        },

        scale: {
          delay,
          duration: 0.45,
        },

        y: {
          delay: delay + 0.4,
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`
        glass-card-premium
        absolute
        rounded-[16px]
        p-2.5
        shadow-[0_18px_48px_rgba(55,37,30,0.09)]

        sm:rounded-[20px]
        sm:p-3.5

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   TECH ITEM
========================================================= */

const TechItem = ({
  icon: Icon,
  name,
}) => {
  return (
    <div
      className="
        group
        flex
        min-w-0
        items-center
        gap-2
        transition-colors
        duration-300
        hover:text-[#ff685b]
      "
    >
      <Icon
        size={15}
        className="
          shrink-0
          transition-transform
          duration-300
          group-hover:-translate-y-0.5

          sm:text-[17px]
        "
      />

      <span
        className="
          truncate
          text-[10px]
          font-bold

          sm:text-[11px]
        "
      >
        {name}
      </span>
    </div>
  );
};

export default Hero;