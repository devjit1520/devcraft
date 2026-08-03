import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaJs,
  FaLaptopCode,
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
            {/* HEADING */}

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

            {/* DESCRIPTION */}

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

            {/* CTA */}

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

            {/* BENEFITS */}

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
              NEW PREMIUM RIGHT VISUAL
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
              max-w-[740px]

              lg:mx-0
            "
          >
            {/* =================================================
                VISUAL STAGE
            ================================================= */}

            <div
              className="
                relative
                min-h-[440px]
                overflow-hidden
                rounded-[30px]
                border
                border-white/90
                bg-gradient-to-br
                from-[#fff4f0]
                via-[#fffdfa]
                to-[#eef4ff]
                shadow-[0_34px_100px_rgba(63,42,34,0.11)]

                min-[360px]:min-h-[470px]

                sm:min-h-[580px]
                sm:rounded-[38px]

                md:min-h-[630px]

                lg:min-h-[620px]

                xl:min-h-[660px]
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
                  opacity-[0.32]
                "
              />

              {/* CORAL ORB */}

              <motion.div
                animate={{
                  y: [
                    0,
                    -12,
                    0,
                  ],
                  rotate: [
                    0,
                    3,
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
                  -right-[55px]
                  top-[32px]
                  h-[145px]
                  w-[145px]
                  rounded-full
                  bg-gradient-to-br
                  from-[#ff8879]
                  to-[#ff5f53]
                  shadow-[0_24px_55px_rgba(255,104,91,0.22)]

                  sm:-right-[75px]
                  sm:h-[215px]
                  sm:w-[215px]

                  md:h-[240px]
                  md:w-[240px]
                "
              />

              {/* BLUE SHAPE */}

              <motion.div
                animate={{
                  y: [
                    0,
                    10,
                    0,
                  ],
                }}
                transition={{
                  duration: 5.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-5
                  bottom-[7%]
                  h-[70px]
                  w-[70px]
                  rounded-full
                  bg-[#5788ff]
                  shadow-[0_18px_40px_rgba(87,136,255,0.18)]

                  sm:h-[100px]
                  sm:w-[100px]
                "
              />

              {/* SOFT CORAL GLOW */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[8%]
                  top-[20%]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  bg-[#ff685b]/10
                  blur-[85px]
                "
              />

              {/* =================================================
                  MAIN BROWSER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 28,
                  scale: 0.965,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  w-[84%]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white
                  bg-white/90
                  shadow-[0_30px_80px_rgba(55,37,30,0.13)]
                  backdrop-blur-xl

                  sm:w-[78%]
                  sm:rounded-[30px]

                  md:w-[76%]
                "
              >
                {/* TOOLBAR */}

                <div
                  className="
                    flex
                    h-11
                    items-center
                    justify-between
                    border-b
                    border-[#eee8e5]
                    px-4

                    sm:h-13
                    sm:px-5
                  "
                >
                  <div className="flex gap-1.5">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#ff7d70]
                      "
                    />

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#ffc96b]
                      "
                    />

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#6ac994]
                      "
                    />
                  </div>

                  <div
                    className="
                      h-5
                      w-[38%]
                      rounded-full
                      bg-[#f3efed]
                    "
                  />

                  <span
                    className="
                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[0.16em]
                      text-[#aaa29e]

                      sm:text-[8px]
                    "
                  >
                    DevCraft
                  </span>
                </div>

                {/* =================================================
                    WEBSITE CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    px-5
                    py-6

                    sm:px-7
                    sm:py-9

                    md:px-8
                    md:py-10
                  "
                >
                  {/* GLOW */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      top-8
                      h-40
                      w-40
                      rounded-full
                      bg-[#ff685b]/10
                      blur-[55px]
                    "
                  />

                  {/* TOP MINI NAV */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        font-black
                        tracking-[-0.04em]
                        text-[#292929]

                        sm:text-[10px]
                      "
                    >
                      DEVCRAFT.
                    </span>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-7
                          rounded-full
                          bg-[#ded8d4]
                        "
                      />

                      <span
                        className="
                          h-1.5
                          w-5
                          rounded-full
                          bg-[#e7e1dd]
                        "
                      />

                      <span
                        className="
                          h-5
                          w-9
                          rounded-full
                          bg-[#292929]
                        "
                      />
                    </div>
                  </div>

                  {/* MAIN TEXT */}

                  <div
                    className="
                      relative
                      mt-9
                      max-w-[350px]

                      sm:mt-12
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-extrabold
                        uppercase
                        tracking-[0.18em]
                        text-[#ff685b]

                        sm:text-[8px]
                      "
                    >
                      Digital Experience
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[clamp(1.65rem,7vw,2.5rem)]
                        font-bold
                        leading-[0.91]
                        tracking-[-0.06em]
                        text-[#292929]

                        sm:text-[clamp(2.4rem,5vw,3.7rem)]
                      "
                    >
                      Websites that
                      <br />

                      feel as good
                      <br />

                      as they{" "}

                      <span className="text-[#ff685b]">
                        look.
                      </span>
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[285px]
                        text-[8px]
                        leading-4
                        text-[#857d79]

                        sm:text-[10px]
                        sm:leading-5
                      "
                    >
                      Design, development
                      and interaction working
                      together to create a
                      stronger digital presence.
                    </p>

                    <div
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#ff685b]
                        px-4
                        py-2.5
                        text-[7px]
                        font-bold
                        text-white
                        shadow-[0_12px_25px_rgba(255,104,91,0.20)]

                        sm:px-5
                        sm:py-3
                        sm:text-[8px]
                      "
                    >
                      Explore Work

                      <FaArrowRight
                        size={7}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CREATIVE MINI DASHBOARD
                  ================================================= */}

                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-[0.92fr_1.08fr]
                      gap-2.5

                      sm:mt-10
                      sm:gap-3
                    "
                  >
                    {/* LEFT CARD */}

                    <div
                      className="
                        rounded-[15px]
                        bg-[#faf6f3]
                        p-3.5

                        sm:rounded-[20px]
                        sm:p-5
                      "
                    >
                      <p
                        className="
                          text-[6px]
                          font-extrabold
                          uppercase
                          tracking-[0.15em]
                          text-[#aaa29d]

                          sm:text-[7px]
                        "
                      >
                        Experience
                      </p>

                      <p
                        className="
                          mt-2
                          text-[10px]
                          font-bold
                          leading-4
                          text-[#37312e]

                          sm:text-[12px]
                          sm:leading-5
                        "
                      >
                        Thoughtful UI
                        for modern brands.
                      </p>

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-[45%]
                            rounded-full
                            bg-[#ff685b]
                          "
                        />

                        <span
                          className="
                            h-1.5
                            w-[25%]
                            rounded-full
                            bg-[#ddd6d2]
                          "
                        />

                        <span
                          className="
                            h-1.5
                            w-[14%]
                            rounded-full
                            bg-[#ebe5e1]
                          "
                        />
                      </div>
                    </div>

                    {/* DARK CARD */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[15px]
                        bg-[#292929]
                        p-4

                        sm:rounded-[20px]
                        sm:p-5
                      "
                    >
                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          -bottom-8
                          -right-7
                          h-20
                          w-20
                          rounded-full
                          bg-[#ff685b]

                          sm:h-24
                          sm:w-24
                        "
                      />

                      <FaCode
                        className="
                          relative
                          text-[18px]
                          text-white

                          sm:text-[23px]
                        "
                      />

                      <p
                        className="
                          relative
                          mt-4
                          text-[6px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white/40

                          sm:text-[7px]
                        "
                      >
                        Development
                      </p>

                      <p
                        className="
                          relative
                          mt-1
                          max-w-[110px]
                          text-[9px]
                          font-bold
                          leading-4
                          text-white

                          sm:text-[11px]
                          sm:leading-5
                        "
                      >
                        Clean frontend.
                        Smooth experience.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  REACT FLOAT CARD
              ================================================= */}

              <FloatingCard
                className="
                  left-[2%]
                  top-[12%]
                  z-20
                  hidden

                  min-[390px]:block

                  sm:left-[3%]
                  sm:top-[13%]
                "
                delay={0.7}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5

                    sm:gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#edf7ff]
                      text-[#4b8ce8]

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <FaReact
                      size={18}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[6px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-[#aaa39f]

                        sm:text-[7px]
                      "
                    >
                      Frontend
                    </p>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-bold
                        text-[#37312e]

                        sm:text-[11px]
                      "
                    >
                      React Development
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* =================================================
                  RESPONSIVE FLOAT CARD
              ================================================= */}

              <FloatingCard
                className="
                  right-[2%]
                  top-[40%]
                  z-20
                  hidden

                  sm:block

                  md:right-[3%]
                "
                delay={0.82}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#fff0ed]
                      text-[#ff685b]
                    "
                  >
                    <FaLaptopCode
                      size={16}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#aaa29d]
                      "
                    >
                      Responsive
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        font-bold
                        text-[#37312e]
                      "
                    >
                      Every screen matters
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* =================================================
                  JAVASCRIPT FLOAT CARD
              ================================================= */}

              <FloatingCard
                className="
                  bottom-[7%]
                  right-[3%]
                  z-20
                  hidden

                  min-[410px]:block

                  sm:bottom-[10%]
                "
                delay={0.95}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5

                    sm:gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#fff8dd]
                      text-[#d4a920]

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <FaJs
                      size={18}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[6px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-[#aaa39f]

                        sm:text-[7px]
                      "
                    >
                      Technology
                    </p>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-bold
                        text-[#37312e]

                        sm:text-[11px]
                      "
                    >
                      JavaScript
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* =================================================
                  PERFORMANCE FLOAT CARD
              ================================================= */}

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
                  bottom-[6%]
                  left-[4%]
                  z-20
                  hidden
                  rounded-[20px]
                  p-3.5

                  sm:block

                  md:left-[5%]
                  md:p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3.5
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#effaf3]

                      md:h-14
                      md:w-14
                    "
                  >
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
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

                        md:text-[10px]
                      "
                    >
                      UX
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                        text-[7px]
                        font-extrabold
                        uppercase
                        tracking-[0.15em]
                        text-[#aaa29d]
                      "
                    >
                      Performance
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        font-bold
                        text-[#37312e]

                        md:text-[11px]
                      "
                    >
                      Built with speed
                      in mind
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  TAILWIND FLOAT ICON
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [
                    0,
                    -7,
                    0,
                  ],
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
                  right-[9%]
                  top-[21%]
                  z-20
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[16px]
                  text-[#38bdf8]

                  sm:flex

                  md:h-14
                  md:w-14
                  md:rounded-[18px]
                "
              >
                <SiTailwindcss
                  size={22}
                />
              </motion.div>

              {/* =================================================
                  VITE FLOAT ICON
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [
                    0,
                    7,
                    0,
                  ],
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
                  top-[60%]
                  z-20
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-[15px]
                  text-[#7257ff]

                  md:flex

                  md:h-12
                  md:w-12
                "
              >
                <SiVite
                  size={19}
                />
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
        <FaCheck
          size={7}
        />
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
        y: [
          0,
          -6,
          0,
        ],
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
          delay:
            delay + 0.4,
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