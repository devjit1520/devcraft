import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaLaptopCode,
  FaReact,
  FaUser,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import OptimizedImage from "../common/OptimizedImage";

/* =========================================================
   WORKING PRINCIPLES
========================================================= */

const principles = [
  "Responsive from the beginning",
  "Clean and reusable frontend",
  "Client-focused page structure",
  "Modern visual direction",
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "HTML",
    icon: FaCode,
  },

  {
    name: "CSS",
    icon: FaCode,
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
  },

  {
    name: "React",
    icon: FaReact,
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },

  {
    name: "WordPress",
    icon: FaCode,
  },

  {
    name: "Vite",
    icon: SiVite,
  },
];

/* =========================================================
   PROFILE IMAGE
========================================================= */

const profileImage =
  "/public/images/projects/devcraft-profile.jpg.avif";

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const [
    imageError,
    setImageError,
  ] = useState(false);

  /* =======================================================
     SCROLL TO CONTACT
  ======================================================= */

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
      id="about"
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
          inset-0
          background-dots
          opacity-[0.08]

          sm:opacity-[0.12]
        "
      />

      {/* CORAL GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[20%]
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

      {/* BLUE GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[12%]
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

      <div
        className="
          site-container
          relative
          z-10
        "
      >
        {/* ===================================================
            SECTION HEADER
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
              About DevCraft
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
I’m a frontend developer focused on
 building modern, responsive websites 
 with HTML, CSS, JavaScript, React and 
 Tailwind CSS.

Through DevCraft, I help businesses 
turn ideas and existing websites into 
polished digital experiences.
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

                sm:text-[clamp(3.6rem,9vw,5.1rem)]

                lg:text-[clamp(4.4rem,6vw,6.8rem)]
                lg:leading-[0.9]
              "
            >
              Where design
              <br />

              meets{" "}

              <span
                className="
                  text-[#ff685b]
                "
              >
                development.
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
                DevCraft is focused
                on building websites
                that look professional,
                communicate clearly and
                provide a polished
                experience across
                different devices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN ABOUT GRID
        =================================================== */}

        <div
          className="
            mt-12
            grid
            items-start
            gap-8

            sm:mt-14
            sm:gap-10

            lg:mt-16
            lg:grid-cols-[0.88fr_1.12fr]
            lg:gap-12

            xl:gap-16
          "
        >
          {/* =================================================
              PROFILE VISUAL
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
              relative
              mx-auto
              w-full
              max-w-[680px]

              lg:sticky
              lg:top-[105px]
            "
          >
            <div
              className="
                relative
                min-h-[470px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/90
                bg-gradient-to-br
                from-[#fff0ed]
                via-[#fffaf8]
                to-[#eef5ff]
                p-3
                shadow-[0_26px_75px_rgba(55,37,30,0.08)]

                min-[360px]:min-h-[500px]
                min-[360px]:p-4

                sm:min-h-[590px]
                sm:rounded-[34px]
                sm:p-5

                md:min-h-[640px]

                lg:min-h-[600px]
                lg:rounded-[38px]
                lg:p-6

                xl:min-h-[680px]
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
                  opacity-[0.25]

                  sm:opacity-[0.35]
                "
              />

              {/* CORAL SPHERE */}

              <motion.div
                aria-hidden="true"
                animate={{
                  y: [
                    0,
                    -9,
                    0,
                  ],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-10
                  top-9
                  h-[120px]
                  w-[120px]
                  rounded-full
                  bg-gradient-to-br
                  from-[#ff8876]
                  to-[#ff5e52]
                  shadow-[0_25px_55px_rgba(255,104,91,0.18)]

                  sm:-right-12
                  sm:h-[170px]
                  sm:w-[170px]

                  xl:h-[210px]
                  xl:w-[210px]
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
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[7%]
                  left-[5%]
                  h-11
                  w-11
                  rounded-full
                  bg-[#5688ff]
                  shadow-[0_15px_35px_rgba(86,136,255,0.15)]

                  sm:h-16
                  sm:w-16

                  xl:h-20
                  xl:w-20
                "
              />

              {/* =============================================
                  OPTIMIZED PROFILE PHOTO
              ============================================= */}

              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  top-[74px]
                  z-10
                  w-[84%]
                  -translate-x-1/2
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white
                  bg-[#eee9e6]
                  shadow-[0_22px_65px_rgba(46,31,25,0.13)]

                  min-[360px]:bottom-4
                  min-[360px]:top-[82px]

                  sm:bottom-5
                  sm:top-[92px]
                  sm:w-[78%]
                  sm:rounded-[28px]

                  md:w-[72%]

                  lg:bottom-6
                  lg:w-[78%]

                  xl:top-[105px]
                  xl:w-[72%]
                  xl:rounded-[30px]
                "
              >
                <OptimizedImage
                  src={
                    profileImage
                  }
                  alt="DevCraft frontend developer and web designer"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                  draggable={
                    false
                  }
                  onError={() =>
                    setImageError(
                      true,
                    )
                  }
                  pictureClassName="
                    block
                    h-full
                    w-full
                  "
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                  fallback={
                    <ProfileFallback />
                  }
                />

                {/* ===========================================
                    IMAGE OVERLAY

                    Only displayed when the real
                    profile image loaded successfully.
                =========================================== */}

                {!imageError && (
                  <>
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        h-[32%]
                        bg-gradient-to-t
                        from-black/25
                        via-black/[0.05]
                        to-transparent
                      "
                    />

                    {/* =======================================
                        IMAGE LABEL
                    ======================================= */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        z-20
                        p-4

                        sm:p-5

                        xl:p-6
                      "
                    >
                      <div
                        className="
                          rounded-[18px]
                          border
                          border-white/20
                          bg-black/20
                          px-4
                          py-3
                          backdrop-blur-[14px]

                          sm:rounded-[20px]
                        "
                      >
                        <p
                          className="
                            text-[7px]
                            font-extrabold
                            uppercase
                            tracking-[0.16em]
                            text-white/60

                            sm:text-[8px]
                            sm:tracking-[0.18em]
                          "
                        >
                          DevCraft
                        </p>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            font-bold
                            text-white

                            sm:text-sm
                          "
                        >
                          Frontend Developer
                          & Web Designer
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* =============================================
                  REACT CARD
                  Small tablet+
              ============================================= */}

              <motion.div
                animate={{
                  y: [
                    0,
                    -7,
                    0,
                  ],
                }}
                transition={{
                  duration: 4.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  glass-card-premium
                  absolute
                  left-[3%]
                  top-[19%]
                  z-30
                  hidden
                  items-center
                  gap-2.5
                  rounded-[17px]
                  p-2.5

                  sm:flex

                  md:left-[5%]
                  md:gap-3
                  md:rounded-[20px]
                  md:p-3.5
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
                    rounded-[10px]
                    bg-[#edf7ff]
                    text-[#4f86ff]

                    md:h-10
                    md:w-10
                    md:rounded-xl
                  "
                >
                  <FaReact
                    size={16}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[6px]
                      font-extrabold
                      uppercase
                      tracking-[0.13em]
                      text-[#aaa29d]

                      md:text-[7px]
                      md:tracking-[0.15em]
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

                      md:text-[11px]
                    "
                  >
                    React Development
                  </p>
                </div>
              </motion.div>

              {/* =============================================
                  RESPONSIVE CARD
              ============================================= */}

              <motion.div
                animate={{
                  y: [
                    0,
                    7,
                    0,
                  ],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  glass-card-premium
                  absolute
                  bottom-[15%]
                  right-[3%]
                  z-30
                  hidden
                  items-center
                  gap-3
                  rounded-[20px]
                  p-3.5

                  md:flex

                  lg:hidden

                  xl:flex
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#effaf3]
                    text-[#35a56b]
                  "
                >
                  <FaCheck
                    size={11}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-[#aaa29d]
                    "
                  >
                    Responsive
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-bold
                      text-[#37312e]
                    "
                  >
                    Every screen matters
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              ABOUT CONTENT
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              min-w-0
              lg:pt-2
            "
          >
            {/* LABELS */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  rounded-full
                  bg-[#fff0ed]
                  px-3
                  py-2
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.15em]
                  text-[#ff685b]

                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                The person behind
                DevCraft
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-100
                  bg-emerald-50
                  px-3
                  py-2
                "
              >
                <span
                  className="
                    relative
                    flex
                    h-1.5
                    w-1.5
                  "
                >
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-50
                    "
                  />

                  <span
                    className="
                      relative
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span
                  className="
                    text-[8px]
                    font-bold
                    text-emerald-700

                    sm:text-[9px]
                  "
                >
                  Available for projects
                </span>
              </span>
            </div>

            {/* HEADLINE */}

            <h3
              className="
                mt-6
                max-w-3xl
                text-[clamp(2.55rem,11vw,3.8rem)]
                font-bold
                leading-[0.95]
                tracking-[-0.058em]
                text-[#292929]

                sm:mt-7
                sm:text-[clamp(3.4rem,8vw,4.8rem)]

                lg:text-[clamp(3.6rem,4.7vw,5.7rem)]
                lg:leading-[0.92]
              "
            >
              Building websites
              with creativity,
              structure and{" "}

              <span
                className="
                  text-[#ff685b]
                "
              >
                purpose.
              </span>
            </h3>

            {/* DESCRIPTION */}

            <div
              className="
                mt-6
                max-w-2xl
                space-y-4

                sm:mt-7
                sm:space-y-5
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#706965]

                  sm:text-[15px]
                  sm:leading-7
                "
              >
                My focus is frontend
                development and modern
                web design — taking
                ideas and turning them
                into clear, responsive
                interfaces that people
                can actually use.
              </p>

              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#706965]

                  sm:text-[15px]
                  sm:leading-7
                "
              >
                I enjoy working on the
                details that make a
                website feel more
                complete: spacing,
                hierarchy,
                responsiveness,
                interaction and clean
                component structure.
              </p>
            </div>

            {/* ROLE CARDS */}

            <div
              className="
                mt-7
                grid
                gap-3

                min-[480px]:grid-cols-2

                sm:mt-8
                sm:gap-4
              "
            >
              <RoleCard
                icon={
                  FaLaptopCode
                }
                label="Frontend Developer"
                description="Responsive React and JavaScript interfaces."
                color="coral"
              />

              <RoleCard
                icon={
                  FaCode
                }
                label="Web Designer"
                description="Modern layouts focused on clarity and visual polish."
                color="blue"
              />
            </div>

            {/* PRINCIPLES */}

            <div
              className="
                mt-8
                border-t
                border-[#eee7e3]
                pt-7

                sm:mt-10
                sm:pt-8
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
                How I approach
                the work
              </p>

              <div
                className="
                  mt-4
                  grid
                  gap-2.5

                  sm:mt-5
                  sm:grid-cols-2
                  sm:gap-3
                "
              >
                {principles.map(
                  (principle) => (
                    <PrincipleItem
                      key={
                        principle
                      }
                      text={
                        principle
                      }
                    />
                  ),
                )}
              </div>
            </div>

            {/* CTA */}

            <button
              type="button"
              onClick={
                scrollToContact
              }
              className="
                primary-button
                shine-effect
                group
                mt-8
                w-full

                min-[480px]:w-fit

                sm:mt-10
              "
            >
              Work With DevCraft

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

        {/* ===================================================
            TECHNOLOGY SECTION
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
            mt-14
            overflow-hidden
            rounded-[28px]
            border
            border-[#eee7e3]
            bg-white
            shadow-[0_16px_45px_rgba(55,37,30,0.045)]

            sm:mt-16
            sm:rounded-[34px]

            lg:mt-20
          "
        >
          <div
            className="
              grid

              lg:grid-cols-[0.74fr_1.26fr]
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
                Technology
              </p>

              <h3
                className="
                  mt-3
                  max-w-md
                  text-[clamp(2.1rem,10vw,3.2rem)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#292929]

                  sm:text-[clamp(2.7rem,7vw,3.8rem)]

                  lg:text-[clamp(2.9rem,3.8vw,4rem)]
                "
              >
                Tools used to bring
                interfaces to life.
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-[12px]
                  leading-6
                  text-[#77706c]

                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                "
              >
                The stack stays
                focused around
                technologies used for
                modern frontend and
                business website
                development.
              </p>
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
              <div
                className="
                  grid
                  grid-cols-2
                  gap-2

                  min-[480px]:grid-cols-3

                  sm:gap-3

                  md:grid-cols-4

                  lg:grid-cols-3

                  xl:grid-cols-4
                "
              >
                {technologies.map(
                  (
                    technology,
                    index,
                  ) => (
                    <TechnologyCard
                      key={
                        technology.name
                      }
                      technology={
                        technology
                      }
                      index={
                        index
                      }
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   PROFILE FALLBACK
========================================================= */

const ProfileFallback = () => {
  return (
    <div
      role="img"
      aria-label="DevCraft profile image unavailable"
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
        bg-gradient-to-br
        from-[#f4eeeb]
        via-[#faf7f5]
        to-[#edf5ff]
        p-5
        text-center
      "
    >
      <div>
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-[20px]
            bg-white
            text-[#ff685b]
            shadow-[0_15px_40px_rgba(55,37,30,0.08)]

            sm:h-20
            sm:w-20
            sm:rounded-[24px]
          "
        >
          <FaUser
            size={24}
          />
        </div>

        <p
          className="
            mt-5
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.17em]
            text-[#aaa29d]

            sm:text-[9px]
            sm:tracking-[0.2em]
          "
        >
          DevCraft Profile
        </p>

        <h4
          className="
            mt-2
            text-2xl
            font-bold
            tracking-[-0.05em]
            text-[#292929]

            sm:text-3xl
          "
        >
          Add your professional
          photo
        </h4>

        <p
          className="
            mx-auto
            mt-3
            max-w-[250px]
            text-[10px]
            leading-5
            text-[#8b837e]

            sm:text-[11px]
          "
        >
          Place your image inside
          public/images/about to
          display it here.
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   ROLE CARD
========================================================= */

const RoleCard = ({
  icon: Icon,
  label,
  description,
  color,
}) => {
  const isCoral =
    color === "coral";

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_38px_rgba(55,37,30,0.06)]

        sm:rounded-[24px]
        sm:p-5

        ${
          isCoral
            ? `
              border-[#ffdcd7]
              bg-[#fff4f1]
            `
            : `
              border-[#dce8ff]
              bg-[#f1f7ff]
            `
        }
      `}
    >
      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-[13px]
          transition-transform
          duration-300
          group-hover:-translate-y-1
          group-hover:rotate-3

          sm:h-11
          sm:w-11
          sm:rounded-[14px]

          ${
            isCoral
              ? `
                bg-[#ff685b]
                text-white
              `
              : `
                bg-[#5688ff]
                text-white
              `
          }
        `}
      >
        <Icon
          size={15}
        />
      </div>

      <h4
        className="
          mt-4
          text-[18px]
          font-bold
          leading-tight
          tracking-[-0.035em]
          text-[#302b28]

          sm:text-[20px]
        "
      >
        {label}
      </h4>

      <p
        className="
          mt-2
          text-[10px]
          leading-5
          text-[#7b7470]

          sm:text-[11px]
        "
      >
        {description}
      </p>
    </div>
  );
};

/* =========================================================
   PRINCIPLE
========================================================= */

const PrincipleItem = ({
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
        hover:bg-[#fff2ef]

        sm:rounded-[17px]
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
        <FaCheck
          size={7}
        />
      </span>

      <span
        className="
          text-[9px]
          font-semibold
          leading-5
          text-[#625b57]

          sm:text-[10px]
        "
      >
        {text}
      </span>
    </div>
  );
};

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

const TechnologyCard = ({
  technology,
  index,
}) => {
  const Icon =
    technology.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,

        delay: Math.min(
          index * 0.035,
          0.18,
        ),
      }}
      className="
        group
        flex
        min-h-[88px]
        min-w-0
        flex-col
        justify-between
        rounded-[18px]
        border
        border-[#eee7e3]
        bg-[#fffaf8]
        p-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#ffc9c3]
        hover:bg-[#fff2ef]
        hover:shadow-[0_12px_32px_rgba(55,37,30,0.05)]

        sm:min-h-[105px]
        sm:rounded-[20px]
        sm:p-4
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-[10px]
          bg-white
          text-[#77706c]
          shadow-[0_5px_16px_rgba(55,37,30,0.04)]
          transition-all
          duration-300
          group-hover:bg-[#ff685b]
          group-hover:text-white

          sm:h-9
          sm:w-9
          sm:rounded-[11px]
        "
      >
        <Icon
          size={14}
        />
      </span>

      <p
        className="
          mt-4
          truncate
          text-[9px]
          font-bold
          text-[#4a4440]

          sm:text-[10px]
        "
      >
        {technology.name}
      </p>
    </motion.div>
  );
};

export default About;