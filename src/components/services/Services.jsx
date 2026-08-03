import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaBolt,
  FaLaptopCode,
  FaMobileAlt,
  FaReact,
  FaRocket,
  FaSyncAlt,
  FaWordpress,
  FaWrench,
} from "react-icons/fa";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    id: 1,

    number: "01",

    title: "Landing Page Development",

    shortTitle: "Landing Pages",

    description:
      "High-impact landing pages designed to present your offer clearly, build trust and guide visitors toward action.",

    icon: FaRocket,

    color: "coral",

    size: "featured",

    deliverables: [
      "Conversion-focused layout",
      "Responsive development",
      "Clear call-to-action",
    ],

    tags: [
      "Business",
      "Marketing",
      "Responsive",
    ],
  },

  {
    id: 2,

    number: "02",

    title: "React Frontend Development",

    shortTitle: "React Development",

    description:
      "Modern React interfaces built with reusable components, clean structure and polished responsive experiences.",

    icon: FaReact,

    color: "blue",

    size: "heroSide",

    deliverables: [
      "Reusable components",
      "Responsive interfaces",
      "Clean frontend architecture",
    ],

    tags: [
      "React",
      "JavaScript",
      "UI",
    ],
  },

  {
    id: 3,

    number: "03",

    title: "Business Websites",

    shortTitle: "Business Websites",

    description:
      "Professional websites that communicate your services clearly and give customers confidence in your business.",

    icon: FaLaptopCode,

    color: "green",

    size: "standard",

    deliverables: [
      "Professional presentation",
      "Service pages",
      "Contact experience",
    ],

    tags: [
      "Company",
      "Brand",
      "Professional",
    ],
  },

  {
    id: 4,

    number: "04",

    title: "WordPress Websites",

    shortTitle: "WordPress",

    description:
      "Flexible WordPress websites designed for businesses that need professional pages with easier content management.",

    icon: FaWordpress,

    color: "purple",

    size: "standard",

    deliverables: [
      "Responsive pages",
      "Easy content editing",
      "Business-ready structure",
    ],

    tags: [
      "WordPress",
      "CMS",
    ],
  },

  {
    id: 5,

    number: "05",

    title: "Website Redesign",

    shortTitle: "Website Redesign",

    description:
      "Transform outdated or confusing websites into cleaner, more modern and more effective digital experiences.",

    icon: FaSyncAlt,

    color: "yellow",

    size: "standard",

    deliverables: [
      "Modern visual direction",
      "Improved page structure",
      "Responsive redesign",
    ],

    tags: [
      "UI Refresh",
      "Modernization",
    ],
  },

  {
    id: 6,

    number: "06",

    title: "Responsive Development",

    shortTitle: "Responsive UI",

    description:
      "Interfaces carefully adapted for desktop, tablet and mobile so the experience stays strong on every screen.",

    icon: FaMobileAlt,

    color: "coral",

    size: "standard",

    deliverables: [
      "Mobile-first thinking",
      "Tablet optimization",
      "Cross-device layouts",
    ],

    tags: [
      "Mobile",
      "Tablet",
      "Desktop",
    ],
  },

  {
    id: 7,

    number: "07",

    title: "Performance Optimization",

    shortTitle: "Performance",

    description:
      "Frontend improvements focused on reducing unnecessary loading, improving responsiveness and creating a smoother experience.",

    icon: FaBolt,

    color: "blue",

    size: "standard",

    deliverables: [
      "Asset optimization",
      "Frontend cleanup",
      "Loading improvements",
    ],

    tags: [
      "Speed",
      "UX",
      "Optimization",
    ],
  },

  {
    id: 8,

    number: "08",

    title: "Website Maintenance",

    shortTitle: "Maintenance",

    description:
      "Ongoing frontend improvements, content updates, responsive fixes and interface maintenance when your website needs attention.",

    icon: FaWrench,

    color: "green",

    size: "standard",

    deliverables: [
      "UI updates",
      "Responsive fixes",
      "Frontend maintenance",
    ],

    tags: [
      "Support",
      "Updates",
      "Fixes",
    ],
  },
];

/* =========================================================
   COLOR SYSTEM
========================================================= */

const colorStyles = {
  coral: {
    card: `
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

    accent: "text-[#ff685b]",

    decoration: "bg-[#ff685b]",

    glow: "bg-[#ff685b]/10",
  },

  blue: {
    card: `
      border-[#dbe8ff]
      bg-gradient-to-br
      from-[#edf5ff]
      via-[#f7fbff]
      to-white
    `,

    icon: `
      bg-[#5688ff]
      text-white
      shadow-[0_12px_30px_rgba(86,136,255,0.16)]
    `,

    accent: "text-[#5688ff]",

    decoration: "bg-[#5688ff]",

    glow: "bg-[#5688ff]/10",
  },

  green: {
    card: `
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

    accent: "text-[#35a56b]",

    decoration: "bg-[#42b979]",

    glow: "bg-[#42b979]/10",
  },

  purple: {
    card: `
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

    accent: "text-[#8e62ef]",

    decoration: "bg-[#996cff]",

    glow: "bg-[#996cff]/10",
  },

  yellow: {
    card: `
      border-[#f4e5ba]
      bg-gradient-to-br
      from-[#fff8e5]
      via-[#fffdf5]
      to-white
    `,

    icon: `
      bg-[#efb83d]
      text-white
      shadow-[0_12px_30px_rgba(239,184,61,0.16)]
    `,

    accent: "text-[#d9a329]",

    decoration: "bg-[#efb83d]",

    glow: "bg-[#efb83d]/10",
  },
};

/* =========================================================
   SERVICES
========================================================= */

const Services = () => {
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
      id="services"
      className="
        section-spacing
        relative
        overflow-hidden
        bg-[#fffdfc]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-36
          top-[300px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ff685b]/[0.05]
          blur-[100px]

          sm:-left-48
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
          -right-36
          top-[58%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-400/[0.05]
          blur-[100px]

          sm:-right-48
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

            lg:grid-cols-[0.68fr_1.32fr]
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
             Web Design & Frontend Development Services
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
              From business websites and landing pages
               to React development and website redesigns,
                DevCraft creates modern digital experiences
                 built around your brand and goals.
            </p>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2

                sm:mt-8
              "
            >
              <span className="premium-tag">
                Design
              </span>

              <span className="premium-tag">
                Development
              </span>

              <span className="premium-tag">
                Responsive
              </span>

              <span className="premium-tag">
                Performance
              </span>
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
                max-w-[1000px]
                text-[clamp(2.75rem,12vw,4.2rem)]
                font-bold
                leading-[0.93]
                tracking-[-0.06em]
                text-[#292929]

                sm:text-[clamp(3.5rem,9vw,5rem)]

                lg:text-[clamp(4.3rem,6vw,6.7rem)]
                lg:leading-[0.9]
              "
            >
              Helping ideas
              <br />

              become{" "}

              <span className="text-[#ff685b]">
                better
              </span>

              <br />

              digital experiences.
            </h2>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-5
                border-t
                border-[#eee7e3]
                pt-6

                sm:mt-8
                sm:pt-7

                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <p
                className="
                  max-w-xl
                  text-[13px]
                  leading-6
                  text-[#77706c]

                  sm:text-[15px]
                  sm:leading-7
                "
              >
                Choose the service that best
                fits your project, or share your
                requirements and we can determine
                the right approach together.
              </p>

              <button
                type="button"
                onClick={
                  scrollToContact
                }
                className="
                  group
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  text-[11px]
                  font-bold
                  text-[#292929]
                  transition-colors
                  duration-300
                  hover:text-[#ff685b]

                  sm:text-[12px]
                "
              >
                Discuss your project

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
          </motion.div>
        </div>

        {/* ===================================================
            RESPONSIVE SERVICE GRID
        =================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            items-stretch
            gap-3

            sm:mt-14
            sm:gap-4

            md:grid-cols-2

            lg:mt-16

            xl:grid-cols-12
            xl:gap-5
          "
        >
          {services.map(
            (
              service,
              index,
            ) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onContact={
                  scrollToContact
                }
              />
            ),
          )}
        </div>

        {/* ===================================================
            CUSTOM PROJECT CTA
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
            amount: 0.16,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mt-4
            overflow-hidden
            rounded-[28px]
            border
            border-[#eee6e2]
            bg-[#292929]
            px-5
            py-8
            text-white
            shadow-[0_24px_65px_rgba(38,30,27,0.11)]

            sm:mt-5
            sm:rounded-[32px]
            sm:px-8
            sm:py-10

            lg:rounded-[36px]
            lg:px-10
            lg:py-12

            xl:px-14
          "
        >
          {/* ===============================================
              CORAL ORB
          =============================================== */}

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

              sm:-right-24
              sm:-top-24
              sm:h-[240px]
              sm:w-[240px]
              sm:opacity-90

              lg:h-[290px]
              lg:w-[290px]
            "
          />

          {/* GLASS ORB */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[115px]
              top-5
              hidden
              h-[100px]
              w-[100px]
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl

              md:block

              lg:right-[140px]
              lg:top-[22px]
              lg:h-[130px]
              lg:w-[130px]
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
                  text-[#ff9b91]

                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                Something more custom?
              </p>

              <h3
                className="
                  mt-3
                  max-w-3xl
                  text-[clamp(2.3rem,11vw,3.6rem)]
                  font-bold
                  leading-[0.96]
                  tracking-[-0.055em]

                  sm:mt-4
                  sm:text-[clamp(3rem,7vw,4.2rem)]

                  lg:text-[clamp(3.6rem,5vw,5.1rem)]
                  lg:leading-[0.94]
                "
              >
                Your project doesn&apos;t
                have to fit inside a box.
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
                Share what you need, what your
                business does and what you want
                the website to achieve. We can
                build the right solution around it.
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
                hover:shadow-[0_18px_45px_rgba(255,104,91,0.22)]

                sm:w-fit
                sm:min-h-[54px]
                sm:px-6
                sm:text-[12px]
              "
            >
              Start a Project

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
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  service,
  index,
  onContact,
}) => {
  const Icon =
    service.icon;

  const colors =
    colorStyles[
      service.color
    ];

  const isLarge =
    service.size ===
      "featured" ||
    service.size ===
      "heroSide";

  /* =======================================================
     RESPONSIVE GRID SIZE
  ======================================================= */

  const getSizeClass = () => {
    switch (
      service.size
    ) {
      case "featured":
        return `
          md:col-span-1

          xl:col-span-7
          xl:min-h-[470px]
        `;

      case "heroSide":
        return `
          md:col-span-1

          xl:col-span-5
          xl:min-h-[470px]
        `;

      default:
        return `
          md:col-span-1

          xl:col-span-4
          xl:min-h-[365px]
        `;
    }
  };

  return (
    <motion.article
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.55,

        delay: Math.min(
          index * 0.04,
          0.2,
        ),
      }}
      className={`
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[26px]
        border
        p-5
        transition-all
        duration-500

        sm:rounded-[30px]
        sm:p-6

        md:min-h-[390px]

        lg:p-7

        xl:rounded-[34px]
        xl:p-8

        hover:-translate-y-1
        hover:shadow-[0_24px_65px_rgba(55,37,30,0.09)]

        ${colors.card}
        ${getSizeClass()}
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
          -right-14
          -top-14
          h-[170px]
          w-[170px]
          rounded-full
          blur-[60px]
          transition-transform
          duration-700

          sm:h-[210px]
          sm:w-[210px]

          lg:h-[230px]
          lg:w-[230px]

          group-hover:scale-110

          ${colors.glow}
        `}
      />

      {/* =====================================================
          SMALL DECORATIVE DOT

          Hide on small mobile to reduce clutter.
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={{
          y: [
            0,
            -7,
            0,
          ],
        }}
        transition={{
          duration:
            5 +
            index * 0.2,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className={`
          absolute
          right-6
          top-6
          hidden
          h-7
          w-7
          rounded-full
          opacity-20

          sm:block

          lg:h-8
          lg:w-8

          ${colors.decoration}
        `}
      />

      {/* =====================================================
          LARGE RING
      ===================================================== */}

      {isLarge && (
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            hidden
            h-[240px]
            w-[240px]
            rounded-full
            border-[40px]
            opacity-[0.055]

            xl:block

            ${
              service.color ===
              "coral"
                ? "border-[#ff685b]"
                : "border-[#5688ff]"
            }
          `}
        />
      )}

      {/* =====================================================
          TOP
      ===================================================== */}

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
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-[15px]
            transition-all
            duration-400

            sm:h-13
            sm:w-13
            sm:rounded-[17px]

            lg:h-14
            lg:w-14
            lg:rounded-[18px]

            group-hover:-translate-y-1
            group-hover:rotate-3

            ${colors.icon}
          `}
        >
          <Icon
            size={18}
            className="
              sm:text-[20px]
              lg:text-[21px]
            "
          />
        </div>

        <span
          className="
            rounded-full
            border
            border-white/80
            bg-white/55
            px-2.5
            py-1.5
            text-[8px]
            font-black
            tracking-[0.13em]
            text-[#9f9792]
            shadow-[0_5px_16px_rgba(55,37,30,0.03)]
            backdrop-blur-md

            sm:px-3
            sm:text-[9px]
          "
        >
          {service.number}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className={`
          relative
          z-10

          ${
            isLarge
              ? `
                mt-7
                sm:mt-9
                xl:mt-11
              `
              : `
                mt-7
                sm:mt-8
              `
          }
        `}
      >
        <p
          className={`
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.15em]

            sm:text-[9px]
            sm:tracking-[0.18em]

            ${colors.accent}
          `}
        >
          {service.shortTitle}
        </p>

        <h3
          className={`
            mt-2.5
            max-w-xl
            break-words
            font-bold
            leading-[0.98]
            tracking-[-0.05em]
            text-[#302b28]

            sm:mt-3

            ${
              isLarge
                ? `
                  text-[clamp(2rem,9vw,2.8rem)]

                  md:text-[clamp(2.1rem,4.4vw,3rem)]

                  xl:text-[clamp(2.7rem,3.3vw,3.8rem)]
                `
                : `
                  text-[clamp(1.8rem,8vw,2.4rem)]

                  md:text-[clamp(1.8rem,3.7vw,2.45rem)]

                  xl:text-[clamp(1.9rem,2.3vw,2.7rem)]
                `
            }
          `}
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4
            max-w-xl
            text-[12px]
            leading-6
            text-[#7c7570]

            sm:text-[13px]

            lg:mt-5
            lg:text-sm
            lg:leading-7
          "
        >
          {service.description}
        </p>
      </div>

      {/* =====================================================
          DELIVERABLES
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-5
          border-t
          border-black/[0.065]
          pt-4

          sm:mt-6
          sm:pt-5

          lg:mt-7
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
            sm:tracking-[0.18em]
          "
        >
          What you get
        </p>

        <div
          className={`
            mt-3
            grid
            gap-2

            ${
              isLarge
                ? `
                  sm:grid-cols-1

                  xl:grid-cols-2
                `
                : ""
            }
          `}
        >
          {service.deliverables.map(
            (item) => (
              <div
                key={item}
                className="
                  flex
                  min-w-0
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

                    ${colors.decoration}
                  `}
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    leading-4
                    text-[#756e69]

                    sm:text-[10px]
                    sm:leading-5
                  "
                >
                  {item}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-auto
          flex
          items-end
          justify-between
          gap-3
          pt-6

          sm:gap-5
          sm:pt-7

          lg:pt-8
        "
      >
        {/* TAGS */}

        <div
          className="
            flex
            min-w-0
            flex-wrap
            gap-1.5
          "
        >
          {service.tags.map(
            (tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/80
                  bg-white/65
                  px-2.5
                  py-1.5
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#89817d]
                  shadow-[0_5px_15px_rgba(55,37,30,0.03)]
                  backdrop-blur-md

                  sm:px-3
                  sm:text-[8px]
                  sm:tracking-[0.1em]
                "
              >
                {tag}
              </span>
            ),
          )}
        </div>

        {/* ARROW */}

        <button
          type="button"
          onClick={
            onContact
          }
          aria-label={`Discuss ${service.title}`}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white
            bg-white/78
            text-[#3a3430]
            shadow-[0_8px_22px_rgba(55,37,30,0.055)]
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:border-[#292929]
            group-hover:bg-[#292929]
            group-hover:text-white

            sm:h-11
            sm:w-11
          "
        >
          <FaArrowRight
            size={10}
          />
        </button>
      </div>
    </motion.article>
  );
};

export default Services;