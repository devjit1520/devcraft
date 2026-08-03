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
  FaComments,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

/* =========================================================
   FAQ DATA
========================================================= */

const faqItems = [
  {
    id: 1,

    category: "Pricing",

    question:
      "How much does a website project cost?",

    answer:
      "Pricing depends on the scope of the project, number of pages, required features, design complexity and whether the project is a new build or redesign. Share your requirements and I can understand the scope before discussing an appropriate project budget.",
  },

  {
    id: 2,

    category: "Timeline",

    question:
      "How long does it take to build a website?",

    answer:
      "The timeline depends on the size and complexity of the website. A focused landing page can usually move faster than a multi-page business website or a more interactive frontend application. The project timeline is discussed after the requirements are understood.",
  },

  {
    id: 3,

    category: "Responsive",

    question:
      "Will my website work properly on mobile?",

    answer:
      "Yes. Responsive behavior is considered from the beginning of development. The website is designed and tested to adapt across desktop, tablet and mobile screen sizes.",
  },

  {
    id: 4,

    category: "Redesign",

    question:
      "Can you redesign my existing website?",

    answer:
      "Yes. If your current website feels outdated, confusing or difficult to use on smaller screens, I can review the existing experience and rebuild the frontend with a cleaner visual direction and improved responsive structure.",
  },

  {
    id: 5,

    category: "React",

    question:
      "Do you build websites with React?",

    answer:
      "Yes. React is one of the main technologies I use for modern frontend development, especially when a project benefits from reusable components, interactive interfaces and structured application-style development.",
  },

  {
    id: 6,

    category: "WordPress",

    question:
      "Do you also work with WordPress?",

    answer:
      "Yes. WordPress can be a good option for business websites where easier content management is important. The right approach depends on what the project needs and how the website will be maintained.",
  },

  {
    id: 7,

    category: "Deployment",

    question:
      "Can you help deploy the website after development?",

    answer:
      "Yes. Once the website is ready, I can help prepare the project for deployment and guide the launch process depending on the technology and hosting setup being used.",
  },

  {
    id: 8,

    category: "Maintenance",

    question:
      "Do you provide website maintenance?",

    answer:
      "Frontend maintenance can include interface updates, responsive fixes, content changes and improvements to existing sections. The exact support depends on what your website requires.",
  },

  {
    id: 9,

    category: "Getting Started",

    question:
      "What do you need from me before starting?",

    answer:
      "A basic explanation of your business, what you want to build, important pages or features, examples you like and any timeline or budget context is enough to begin the conversation. You do not need to have every detail finalized.",
  },
];

/* =========================================================
   SUPPORT POINTS
========================================================= */

const supportPoints = [
  "Project scope",
  "Timeline questions",
  "Technology options",
  "Redesign requirements",
];

/* =========================================================
   FAQ
========================================================= */

const FAQ = () => {
  const [
    openFaq,
    setOpenFaq,
  ] = useState(0);

  /* =======================================================
     TOGGLE FAQ
  ======================================================= */

  const handleToggle = (
    index,
  ) => {
    setOpenFaq(
      (current) =>
        current === index
          ? null
          : index,
    );
  };

  /* =======================================================
     CONTACT
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
      id="faq"
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
          top-[18%]
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
          bottom-[14%]
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
              FAQ
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
              A few common questions
              about website projects,
              development, timelines and
              working with DevCraft.
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
              Questions before
              <br />

              we get{" "}

              <span className="text-[#ff685b]">
                started?
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
                If your question is not
                covered here, send your
                project requirements and
                we can discuss the details
                directly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            FAQ GRID
        =================================================== */}

        <div
          className="
            mt-12
            grid
            items-start
            gap-5

            sm:mt-14
            sm:gap-6

            lg:mt-16

            xl:grid-cols-[0.65fr_1.35fr]
            xl:gap-8
          "
        >
          {/* =================================================
              SUPPORT PANEL
          ================================================= */}

          <motion.aside
            initial={{
              opacity: 0,
              x: -22,
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
              xl:sticky
              xl:top-[105px]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#ffdcd7]
                bg-gradient-to-br
                from-[#fff0ed]
                via-[#fff8f6]
                to-white
                p-5
                shadow-[0_20px_55px_rgba(55,37,30,0.055)]

                sm:rounded-[34px]
                sm:p-7

                lg:p-8

                xl:min-h-[520px]
                xl:rounded-[36px]
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
                  opacity-[0.18]

                  sm:opacity-[0.25]
                "
              />

              {/* CORAL SPHERE */}

              <motion.div
                aria-hidden="true"
                animate={{
                  y: [
                    0,
                    -8,
                    0,
                  ],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-[140px]
                  w-[140px]
                  rounded-full
                  bg-[#ff685b]
                  opacity-80

                  sm:h-[190px]
                  sm:w-[190px]
                "
              />

              <div className="relative z-10">
                {/* ICON */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[15px]
                    bg-[#292929]
                    text-white
                    shadow-[0_12px_30px_rgba(38,30,27,0.13)]

                    sm:h-14
                    sm:w-14
                    sm:rounded-[18px]
                  "
                >
                  <FaComments
                    size={18}
                  />
                </div>

                {/* COPY */}

                <p
                  className="
                    mt-7
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.17em]
                    text-[#ff685b]

                    sm:mt-8
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  Still have a question?
                </p>

                <h3
                  className="
                    mt-3
                    max-w-md
                    text-[clamp(2.3rem,10vw,3.5rem)]
                    font-bold
                    leading-[0.96]
                    tracking-[-0.055em]
                    text-[#292929]

                    sm:mt-4
                    sm:text-[clamp(2.9rem,7vw,4rem)]

                    xl:text-[clamp(3rem,3.6vw,4.4rem)]
                  "
                >
                  Tell me what
                  you&apos;re planning.
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
                  You do not need a
                  complete specification.
                  Share what you know and
                  we can start from there.
                </p>

                {/* ===========================================
                    POINTS
                =========================================== */}

                <div
                  className="
                    mt-6
                    grid
                    gap-2

                    min-[480px]:grid-cols-2

                    sm:mt-7

                    xl:grid-cols-1
                  "
                >
                  {supportPoints.map(
                    (point) => (
                      <SupportPoint
                        key={point}
                        text={point}
                      />
                    ),
                  )}
                </div>

                {/* CTA */}

                <button
                  type="button"
                  onClick={
                    scrollToContact
                  }
                  className="
                    group
                    mt-7
                    inline-flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#292929]
                    px-5
                    text-[11px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#ff685b]
                    hover:shadow-[0_16px_36px_rgba(255,104,91,0.18)]

                    min-[480px]:w-fit

                    sm:mt-8
                    sm:min-h-[52px]
                    sm:px-6
                    sm:text-[12px]

                    xl:w-full
                  "
                >
                  Ask About Your Project

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
            </div>
          </motion.aside>

          {/* =================================================
              FAQ ACCORDION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 22,
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
              space-y-2.5

              sm:space-y-3
            "
          >
            {faqItems.map(
              (
                faq,
                index,
              ) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isOpen={
                    openFaq ===
                    index
                  }
                  onToggle={() =>
                    handleToggle(
                      index,
                    )
                  }
                />
              ),
            )}
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM CTA
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            border-t
            border-[#eee7e3]
            pt-8

            sm:mt-12
            sm:pt-9

            lg:mt-16
            lg:flex-row
            lg:items-center
            lg:justify-between
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
              Ready when you are
            </p>

            <h3
              className="
                mt-3
                max-w-3xl
                text-[clamp(2.15rem,10vw,3.2rem)]
                font-bold
                leading-[0.97]
                tracking-[-0.055em]
                text-[#292929]

                sm:text-[clamp(2.8rem,7vw,4rem)]

                lg:text-[clamp(3rem,4vw,4.4rem)]
              "
            >
              Let&apos;s talk about
              your website.
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
            Start a Conversation

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
   FAQ ITEM
========================================================= */

const FAQItem = ({
  faq,
  index,
  isOpen,
  onToggle,
}) => {
  const contentId =
    `faq-content-${faq.id}`;

  const buttonId =
    `faq-button-${faq.id}`;

  return (
    <motion.article
      layout
      className={`
        relative
        overflow-hidden
        rounded-[22px]
        border
        transition-colors
        duration-300

        sm:rounded-[26px]

        ${
          isOpen
            ? `
              border-[#ffd5cf]
              bg-[#fff4f1]
              shadow-[0_14px_38px_rgba(55,37,30,0.05)]
            `
            : `
              border-[#eae3df]
              bg-white
              hover:border-[#ffd1ca]
            `
        }
      `}
    >
      {/* ACTIVE STRIPE */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            exit={{
              scaleY: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            aria-hidden="true"
            className="
              absolute
              bottom-4
              left-0
              top-4
              w-[3px]
              origin-center
              rounded-r-full
              bg-[#ff685b]

              sm:w-1
            "
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          QUESTION BUTTON
      ===================================================== */}

      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={
          isOpen
        }
        aria-controls={
          contentId
        }
        className="
          group
          grid
          w-full
          grid-cols-[1fr_auto]
          items-start
          gap-3
          px-4
          py-4
          text-left

          min-[360px]:px-5

          sm:gap-5
          sm:px-6
          sm:py-5

          lg:px-7
          lg:py-6

          xl:px-8
        "
      >
        {/* LEFT CONTENT */}

        <div className="min-w-0">
          <div
            className="
              flex
              min-w-0
              flex-wrap
              items-center
              gap-2
            "
          >
            {/* NUMBER */}

            <span
              className={`
                text-[7px]
                font-black
                tracking-[0.13em]

                sm:text-[8px]
                sm:tracking-[0.15em]

                ${
                  isOpen
                    ? "text-[#ff685b]"
                    : "text-[#b0a9a4]"
                }
              `}
            >
              {String(
                index + 1,
              ).padStart(
                2,
                "0",
              )}
            </span>

            <span
              aria-hidden="true"
              className="
                h-1
                w-1
                rounded-full
                bg-[#d5cec9]
              "
            />

            {/* CATEGORY */}

            <span
              className={`
                rounded-full
                px-2.5
                py-1.5
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.1em]
                transition-colors
                duration-300

                sm:px-3
                sm:text-[8px]
                sm:tracking-[0.12em]

                ${
                  isOpen
                    ? `
                      bg-white
                      text-[#ff685b]
                    `
                    : `
                      bg-[#f7f3f1]
                      text-[#9a928d]
                    `
                }
              `}
            >
              {faq.category}
            </span>
          </div>

          {/* QUESTION */}

          <h3
            className={`
              mt-3
              max-w-3xl
              text-[clamp(1.15rem,5.8vw,1.45rem)]
              font-bold
              leading-[1.18]
              tracking-[-0.035em]
              transition-colors
              duration-300

              sm:mt-4
              sm:text-[clamp(1.3rem,3vw,1.65rem)]

              lg:text-[clamp(1.4rem,1.8vw,1.85rem)]

              ${
                isOpen
                  ? "text-[#292929]"
                  : `
                    text-[#4a4440]
                    group-hover:text-[#292929]
                  `
              }
            `}
          >
            {faq.question}
          </h3>
        </div>

        {/* PLUS / MINUS */}

        <span
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300

            sm:h-11
            sm:w-11

            ${
              isOpen
                ? `
                  rotate-0
                  border-[#ff685b]
                  bg-[#ff685b]
                  text-white
                  shadow-[0_9px_22px_rgba(255,104,91,0.18)]
                `
                : `
                  border-[#e8e0dc]
                  bg-[#fffaf8]
                  text-[#847d79]
                  group-hover:border-[#292929]
                  group-hover:bg-[#292929]
                  group-hover:text-white
                `
            }
          `}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.span
              key={
                isOpen
                  ? "minus"
                  : "plus"
              }
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
                scale: 0.8,
              }}
              transition={{
                duration: 0.18,
              }}
            >
              {isOpen ? (
                <FaMinus
                  size={9}
                />
              ) : (
                <FaPlus
                  size={9}
                />
              )}
            </motion.span>
          </AnimatePresence>
        </span>
      </button>

      {/* =====================================================
          ANSWER
      ===================================================== */}

      <AnimatePresence
        initial={false}
      >
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={
              buttonId
            }
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.35,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              },

              opacity: {
                duration: 0.25,
              },
            }}
            className="overflow-hidden"
          >
            <div
              className="
                px-4
                pb-5

                min-[360px]:px-5

                sm:px-6
                sm:pb-6

                lg:px-7
                lg:pb-7

                xl:px-8
              "
            >
              <div
                className="
                  border-t
                  border-[#efdeda]
                  pt-4

                  sm:pt-5
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3

                    sm:gap-4
                  "
                >
                  <span
                    className="
                      mt-0.5
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#ff685b]
                      shadow-[0_5px_15px_rgba(55,37,30,0.04)]

                      sm:h-7
                      sm:w-7
                    "
                  >
                    <FaCheck
                      size={7}
                    />
                  </span>

                  <p
                    className="
                      max-w-3xl
                      text-[11px]
                      leading-6
                      text-[#706965]

                      sm:text-[13px]
                      sm:leading-7

                      lg:text-sm
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

/* =========================================================
   SUPPORT POINT
========================================================= */

const SupportPoint = ({
  text,
}) => {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-3
        rounded-[14px]
        border
        border-white/90
        bg-white/65
        px-3
        py-2.5
        shadow-[0_6px_18px_rgba(55,37,30,0.03)]
        backdrop-blur-lg

        sm:rounded-[16px]
        sm:px-3.5
        sm:py-3
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
          min-w-0
          text-[9px]
          font-semibold
          leading-5
          text-[#69625e]

          sm:text-[10px]
        "
      >
        {text}
      </span>
    </div>
  );
};

export default FAQ;