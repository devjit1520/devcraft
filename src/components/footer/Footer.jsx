import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaArrowUp,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

/* =========================================================
   NAVIGATION
========================================================= */

const navigationLinks = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "Services",
    target: "services",
  },
  {
    label: "Work",
    target: "work",
  },
  {
    label: "Process",
    target: "process",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "FAQ",
    target: "faq",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const serviceLinks = [
  "Landing Pages",
  "React Development",
  "Business Websites",
  "WordPress Websites",
  "Website Redesign",
  "Responsive Development",
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "WordPress",
  "Vite",
];

/* =========================================================
   SOCIAL LINKS

   Replace "#" with your real social URLs
   before final deployment.
========================================================= */

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: FaGithub,
  },

  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },

  {
    label: "Contact",
    href: "#contact",
    icon: FaEnvelope,
    internal: true,
  },
];

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  const currentYear =
    new Date().getFullYear();

  /* =======================================================
     SCROLL TO SECTION
  ======================================================= */

  const scrollToSection = (
    target,
  ) => {
    document
      .getElementById(target)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#171412]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          background-grid
          opacity-[0.06]

          sm:opacity-[0.08]
        "
      />

      {/* =====================================================
          CORAL GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[170px]
          top-[60px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ff685b]/12
          blur-[100px]

          sm:h-[430px]
          sm:w-[430px]
          sm:blur-[130px]

          xl:h-[520px]
          xl:w-[520px]
          xl:blur-[160px]
        "
      />

      {/* =====================================================
          BLUE GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[170px]
          bottom-[90px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[100px]

          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[130px]
        "
      />

      <div className="site-container relative z-10">
        {/* ===================================================
            TOP CTA
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.05]
            px-5
            py-8
            mt-15
            shadow-[0_30px_90px_rgba(0,0,0,0.17)]
            backdrop-blur-[18px]

            sm:rounded-[34px]
            sm:px-8
            sm:py-10
            sm:backdrop-blur-[24px]

            lg:px-10
            lg:py-12

            xl:rounded-[38px]
            xl:px-14
            xl:py-14
          "
        >
          {/* =================================================
              CORAL ORB
          ================================================= */}

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
              duration: 7,
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
              bg-gradient-to-br
              from-[#ff8977]
              to-[#ff5f53]
              opacity-85

              sm:-right-24
              sm:-top-24
              sm:h-[240px]
              sm:w-[240px]

              lg:h-[290px]
              lg:w-[290px]
            "
          />

          {/* =================================================
              DESKTOP GLASS ORB
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[145px]
              top-8
              hidden
              h-[120px]
              w-[120px]
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl

              lg:block
            "
          />

          {/* =================================================
              SMALL BLUE DOT
          ================================================= */}

          <motion.div
            aria-hidden="true"
            animate={{
              y: [
                0,
                7,
                0,
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              bottom-7
              right-[28%]
              hidden
              h-7
              w-7
              rounded-full
              bg-[#5688ff]

              lg:block
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-7

              sm:gap-9

              lg:grid-cols-[1fr_auto]
              lg:items-end
              lg:gap-12
            "
          >
            {/* =================================================
                CTA COPY
            ================================================= */}

            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[2px]
                    w-6
                    shrink-0
                    rounded-full
                    bg-[#ff685b]

                    sm:w-7
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.16em]
                    text-[#ff9287]

                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  Have a project in mind?
                </span>
              </div>

              <h2
                className="
                  mt-4
                  max-w-5xl
                  break-words
                  text-[clamp(2.7rem,12vw,4rem)]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.06em]
                  text-white

                  sm:mt-5
                  sm:text-[clamp(3.7rem,9vw,5.3rem)]

                  lg:text-[clamp(4.3rem,5.5vw,6.5rem)]
                  lg:leading-[0.9]

                  xl:text-[clamp(4.8rem,6vw,7rem)]
                "
              >
                Let&apos;s build
                something worth{" "}

                <span className="text-[#ff685b]">
                  remembering.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-[12px]
                  leading-6
                  text-white/45

                  sm:mt-6
                  sm:text-sm
                  sm:leading-7

                  lg:text-[15px]
                "
              >
                Whether you need a
                landing page, business
                website, frontend
                application or redesign,
                start by sharing what you
                want to create.
              </p>
            </div>

            {/* =================================================
                CTA BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                scrollToSection(
                  "contact",
                )
              }
              className="
                group
                inline-flex
                min-h-[52px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-5
                text-[10px]
                font-bold
                text-[#292929]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff685b]
                hover:text-white
                hover:shadow-[0_16px_38px_rgba(255,104,91,0.22)]

                min-[480px]:w-fit

                sm:min-h-[56px]
                sm:px-7
                sm:text-[11px]
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

        {/* ===================================================
            MAIN FOOTER CONTENT
        =================================================== */}

        <div
          className="
            grid
            gap-10
            border-b
            border-white/[0.08]
            py-12

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12
            sm:py-16

            lg:grid-cols-[1.4fr_0.7fr_0.95fr_0.95fr]
            lg:gap-8
            lg:py-20

            xl:gap-12
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

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
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              sm:col-span-2

              lg:col-span-1
            "
          >
            {/* ===============================================
                LOGO
            =============================================== */}

            <button
              type="button"
              onClick={() =>
                scrollToSection(
                  "home",
                )
              }
              className="
                group
                flex
                items-center
                gap-3
                text-left
              "
            >
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[14px]
                  bg-[#ff685b]
                  shadow-[0_12px_30px_rgba(255,104,91,0.20)]
                  transition-transform
                  duration-300
                  group-hover:-rotate-3
                  group-hover:scale-105

                  sm:h-12
                  sm:w-12
                  sm:rounded-[15px]
                "
              >
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-[3px]
                  "
                >
                  {Array.from({
                    length: 4,
                  }).map(
                    (
                      _,
                      index,
                    ) => (
                      <span
                        key={index}
                        className="
                          h-[5px]
                          w-[5px]
                          rounded-[1px]
                          bg-white
                        "
                      />
                    ),
                  )}
                </div>

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-full
                    top-0
                    h-full
                    w-[45%]
                    rotate-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[150%]
                  "
                />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    truncate
                    text-[20px]
                    font-black
                    tracking-[-0.055em]
                    text-white

                    sm:text-[22px]
                  "
                >
                  DevCraft

                  <span className="text-[#ff685b]">
                    .
                  </span>
                </p>

                <p
                  className="
                    mt-0.5
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-white/30

                    sm:text-[8px]
                    sm:tracking-[0.16em]
                  "
                >
                  Creative Web Studio
                </p>
              </div>
            </button>

            {/* ===============================================
                DESCRIPTION
            =============================================== */}

            <p
              className="
                mt-6
                max-w-md
                text-[12px]
                leading-6
                text-white/40

                sm:mt-7
                sm:text-sm
                sm:leading-7
              "
            >
              Modern web design and
              frontend development focused
              on creating polished,
              responsive digital
              experiences for businesses
              and brands.
            </p>

            {/* ===============================================
                AVAILABILITY
            =============================================== */}

            <div
              className="
                mt-6
                inline-flex
                max-w-full
                items-center
                gap-2.5
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3.5
                py-2.5
                backdrop-blur-xl

                sm:mt-7
                sm:px-4
                sm:py-3
              "
            >
              <span
                className="
                  relative
                  flex
                  h-1.5
                  w-1.5
                  shrink-0
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
                    bg-emerald-400
                  "
                />
              </span>

              <span
                className="
                  text-[8px]
                  font-bold
                  leading-4
                  text-white/55

                  sm:text-[9px]
                "
              >
                Available for new
                project enquiries
              </span>
            </div>

            {/* ===============================================
                SOCIALS
            =============================================== */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2

                sm:mt-7
              "
            >
              {socialLinks.map(
                (social) => (
                  <SocialLink
                    key={
                      social.label
                    }
                    social={
                      social
                    }
                    onInternalClick={() =>
                      scrollToSection(
                        "contact",
                      )
                    }
                  />
                ),
              )}
            </div>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <FooterColumn
            title="Navigation"
            delay={0.05}
          >
            {navigationLinks.map(
              (link) => (
                <FooterButton
                  key={
                    link.target
                  }
                  onClick={() =>
                    scrollToSection(
                      link.target,
                    )
                  }
                >
                  {link.label}
                </FooterButton>
              ),
            )}
          </FooterColumn>

          {/* =================================================
              SERVICES
          ================================================= */}

          <FooterColumn
            title="Services"
            delay={0.1}
          >
            {serviceLinks.map(
              (service) => (
                <FooterButton
                  key={service}
                  onClick={() =>
                    scrollToSection(
                      "services",
                    )
                  }
                >
                  {service}
                </FooterButton>
              ),
            )}
          </FooterColumn>

          {/* =================================================
              TECHNOLOGY
          ================================================= */}

          <FooterColumn
            title="Technology"
            delay={0.15}
          >
            <div
              className="
                flex
                flex-wrap
                gap-1.5

                sm:gap-2
              "
            >
              {technologies.map(
                (
                  technology,
                ) => (
                  <span
                    key={
                      technology
                    }
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-2.5
                      py-1.5
                      text-[7px]
                      font-semibold
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-[#ff685b]/30
                      hover:bg-[#ff685b]/10
                      hover:text-[#ff9388]

                      sm:px-3
                      sm:py-2
                      sm:text-[8px]

                      lg:text-[9px]
                    "
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>

            {/* FOCUS CARD */}

            <div
              className="
                mt-6
                rounded-[18px]
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-3.5

                sm:mt-7
                sm:rounded-[22px]
                sm:p-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
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
                    rounded-[12px]
                    bg-[#ff685b]/12
                    text-[#ff887d]
                  "
                >
                  <FaCode
                    size={13}
                  />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-white/25

                      sm:text-[8px]
                      sm:tracking-[0.15em]
                    "
                  >
                    Focus
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-semibold
                      leading-5
                      text-white/55

                      sm:text-[10px]
                    "
                  >
                    Modern frontend
                    experiences
                  </p>
                </div>
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* ===================================================
            GIANT WORDMARK
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.75,
          }}
          className="
            relative
            overflow-hidden
            border-b
            border-white/[0.08]
            py-8

            sm:py-10

            lg:py-12
          "
        >
          <button
            type="button"
            onClick={
              scrollToTop
            }
            aria-label="Back to top"
            className="
              group
              block
              w-full
              overflow-hidden
              text-left
            "
          >
            <span
              className="
                block
                max-w-full
                select-none
                text-[clamp(4rem,20vw,15rem)]
                font-black
                leading-[0.78]
                tracking-[-0.09em]
                text-white/[0.055]
                transition-colors
                duration-500
                group-hover:text-white/[0.09]

                min-[360px]:text-[clamp(4.5rem,20vw,15rem)]
              "
            >
              DevCraft

              <span className="text-[#ff685b]/50">
                .
              </span>
            </span>
          </button>

          {/* =================================================
              DESKTOP LABEL
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              right-0
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3
              backdrop-blur-xl

              md:flex
            "
          >
            <span
              className="
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.15em]
                text-white/30

                lg:text-[8px]
                lg:tracking-[0.17em]
              "
            >
              Web Design
            </span>

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-[#ff685b]
              "
            />

            <span
              className="
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.15em]
                text-white/30

                lg:text-[8px]
                lg:tracking-[0.17em]
              "
            >
              Frontend Development
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-6

            sm:py-7

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* COPYRIGHT */}

          <div
            className="
              flex
              flex-col
              gap-2

              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-3
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                leading-5
                text-white/30

                sm:text-[9px]
              "
            >
              © {currentYear} DevCraft.
              All rights reserved.
            </p>

            <span
              aria-hidden="true"
              className="
                hidden
                h-1
                w-1
                rounded-full
                bg-white/15

                sm:block
              "
            />

            <p
              className="
                text-[8px]
                font-semibold
                leading-5
                text-white/20

                sm:text-[9px]
              "
            >
              Designed & developed
              with purpose.
            </p>
          </div>

          {/* =================================================
              BACK TO TOP
          ================================================= */}

          <button
            type="button"
            onClick={
              scrollToTop
            }
            aria-label="Back to top"
            className="
              group
              inline-flex
              min-h-[44px]
              w-full
              items-center
              justify-between
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              text-[8px]
              font-bold
              uppercase
              tracking-[0.11em]
              text-white/45
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#ff685b]/40
              hover:bg-[#ff685b]
              hover:text-white

              min-[420px]:w-fit
              min-[420px]:justify-center

              sm:text-[9px]
              sm:tracking-[0.12em]
            "
          >
            Back to top

            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/[0.08]
                transition-all
                duration-300
                group-hover:bg-white
                group-hover:text-[#ff685b]
              "
            >
              <FaArrowUp
                size={8}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   FOOTER COLUMN
========================================================= */

const FooterColumn = ({
  title,
  children,
  delay = 0,
}) => {
  return (
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
      }}
      transition={{
        duration: 0.55,
        delay,
      }}
      className="
        min-w-0
      "
    >
      <div
        className="
          flex
          items-center
          gap-2.5
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-[#ff685b]
          "
        />

        <h3
          className="
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.17em]
            text-white/30

            sm:text-[9px]
            sm:tracking-[0.2em]
          "
        >
          {title}
        </h3>
      </div>

      <div
        className="
          mt-5
          flex
          flex-col
          items-start
          gap-3

          sm:mt-6
          sm:gap-3.5
        "
      >
        {children}
      </div>
    </motion.div>
  );
};

/* =========================================================
   FOOTER BUTTON
========================================================= */

const FooterButton = ({
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        inline-flex
        min-h-[30px]
        max-w-full
        items-center
        gap-2
        text-left
        text-[10px]
        font-semibold
        leading-5
        text-white/45
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-white

        sm:text-[11px]
      "
    >
      <span
        className="
          h-1
          w-1
          shrink-0
          rounded-full
          bg-white/15
          transition-colors
          duration-300
          group-hover:bg-[#ff685b]
        "
      />

      <span>
        {children}
      </span>
    </button>
  );
};

/* =========================================================
   SOCIAL LINK
========================================================= */

const SocialLink = ({
  social,
  onInternalClick,
}) => {
  const Icon =
    social.icon;

  const isPlaceholder =
    social.href === "#";

  /* =======================================================
     INTERNAL CONTACT LINK
  ======================================================= */

  if (social.internal) {
    return (
      <button
        type="button"
        onClick={
          onInternalClick
        }
        aria-label={
          social.label
        }
        title={
          social.label
        }
        className="
          group
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          text-white/45
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#ff685b]
          hover:bg-[#ff685b]
          hover:text-white

          sm:h-11
          sm:w-11
        "
      >
        <Icon
          size={13}
        />
      </button>
    );
  }

  /* =======================================================
     EXTERNAL LINK
  ======================================================= */

  return (
    <a
      href={
        isPlaceholder
          ? "#"
          : social.href
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
      onClick={(
        event,
      ) => {
        if (
          isPlaceholder
        ) {
          event.preventDefault();
        }
      }}
      aria-label={
        social.label
      }
      aria-disabled={
        isPlaceholder
      }
      title={
        isPlaceholder
          ? `Add your ${social.label} URL`
          : social.label
      }
      className={`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        transition-all
        duration-300

        sm:h-11
        sm:w-11

        ${
          isPlaceholder
            ? `
              cursor-not-allowed
              border-white/[0.07]
              bg-white/[0.025]
              text-white/20
            `
            : `
              border-white/10
              bg-white/[0.04]
              text-white/45
              hover:-translate-y-1
              hover:border-[#ff685b]
              hover:bg-[#ff685b]
              hover:text-white
            `
        }
      `}
    >
      <Icon
        size={13}
      />
    </a>
  );
};

export default Footer;