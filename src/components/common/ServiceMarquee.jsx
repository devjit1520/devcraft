import { motion } from "framer-motion";

import {
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

/* =========================================================
   SERVICE ITEMS
========================================================= */

const primaryItems = [
  {
    label: "Web Design",
    icon: FaCode,
  },

  {
    label: "React Development",
    icon: FaReact,
  },

  {
    label: "JavaScript",
    icon: FaJs,
  },

  {
    label: "Responsive UI",
    icon: FaCss3Alt,
  },

  {
    label: "WordPress",
    icon: FaWordpress,
  },

  {
    label: "Performance",
    icon: SiVite,
  },
];

/* =========================================================
   TECHNOLOGY ITEMS
========================================================= */

const secondaryItems = [
  {
    label: "HTML",
    icon: FaHtml5,
  },

  {
    label: "CSS",
    icon: FaCss3Alt,
  },

  {
    label: "JavaScript",
    icon: FaJs,
  },

  {
    label: "React",
    icon: FaReact,
  },

  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
  },

  {
    label: "WordPress",
    icon: FaWordpress,
  },

  {
    label: "Vite",
    icon: SiVite,
  },
];

/* =========================================================
   DUPLICATED CONTENT

   Repeated three times for a smoother loop,
   especially on larger desktop displays.
========================================================= */

const repeatedPrimaryItems = [
  ...primaryItems,
  ...primaryItems,
  ...primaryItems,
];

const repeatedSecondaryItems = [
  ...secondaryItems,
  ...secondaryItems,
  ...secondaryItems,
];

/* =========================================================
   SERVICE MARQUEE
========================================================= */

const ServiceMarquee = () => {
  return (
    <section
      aria-label="DevCraft services and technologies"
      className="
        relative
        overflow-hidden
        border-y
        border-[#eee7e3]
        bg-[#fffaf8]
        py-7

        sm:py-9
        lg:py-11
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
          -left-24
          top-1/2
          h-[220px]
          w-[220px]
          -translate-y-1/2
          rounded-full
          bg-[#ff685b]/[0.08]
          blur-[80px]

          sm:-left-32
          sm:h-[280px]
          sm:w-[280px]
          sm:blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-1/2
          h-[220px]
          w-[220px]
          -translate-y-1/2
          rounded-full
          bg-blue-400/[0.055]
          blur-[80px]

          sm:-right-32
          sm:h-[280px]
          sm:w-[280px]
          sm:blur-[100px]
        "
      />

      {/* =====================================================
          FADED LEFT EDGE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          w-6
          bg-gradient-to-r
          from-[#fffaf8]
          via-[#fffaf8]/80
          to-transparent

          min-[400px]:w-10

          sm:w-20

          lg:w-32

          xl:w-40
        "
      />

      {/* =====================================================
          FADED RIGHT EDGE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-20
          w-6
          bg-gradient-to-l
          from-[#fffaf8]
          via-[#fffaf8]/80
          to-transparent

          min-[400px]:w-10

          sm:w-20

          lg:w-32

          xl:w-40
        "
      />

      <div className="relative z-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            site-container
            mb-5
            flex
            items-center
            justify-between
            gap-4

            sm:mb-7
          "
        >
          <div
            className="
              flex
              min-w-0
              items-center
              gap-2.5

              sm:gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-5
                shrink-0
                rounded-full
                bg-[#ff685b]

                sm:w-7
              "
            />

            <p
              className="
                truncate
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-[#8d8681]

                min-[360px]:text-[8px]

                sm:text-[9px]
                sm:tracking-[0.2em]
              "
            >
              What DevCraft works with
            </p>
          </div>

          <p
            className="
              hidden
              shrink-0
              text-[8px]
              font-bold
              uppercase
              tracking-[0.13em]
              text-[#bbb3ae]

              md:block

              lg:text-[9px]
              lg:tracking-[0.16em]
            "
          >
            Design • Development • Performance
          </p>
        </motion.div>

        {/* ===================================================
            PRIMARY SERVICE MARQUEE
        =================================================== */}

        <div
          className="
            group/marquee
            w-full
            overflow-hidden
          "
        >
          <div
            className="
              flex
              w-max
              items-center
              gap-4
              pr-4

              animate-[devcraftMarquee_34s_linear_infinite]

              min-[480px]:gap-5

              sm:gap-6
              sm:pr-6
              sm:animate-[devcraftMarquee_30s_linear_infinite]

              lg:gap-8
              lg:pr-8
              lg:animate-[devcraftMarquee_28s_linear_infinite]

              group-hover/marquee:[animation-play-state:paused]
            "
          >
            {repeatedPrimaryItems.map(
              (
                item,
                index,
              ) => (
                <PrimaryItem
                  key={`${item.label}-${index}`}
                  item={item}
                />
              ),
            )}
          </div>
        </div>

        {/* ===================================================
            SECONDARY TECHNOLOGY MARQUEE
        =================================================== */}

        <div
          className="
            group/secondary
            mt-3
            w-full
            overflow-hidden

            sm:mt-4
          "
        >
          <div
            className="
              flex
              w-max
              items-center
              gap-4
              pr-4

              animate-[devcraftMarqueeReverse_39s_linear_infinite]

              min-[480px]:gap-5

              sm:gap-6
              sm:pr-6
              sm:animate-[devcraftMarqueeReverse_35s_linear_infinite]

              lg:gap-8
              lg:pr-8
              lg:animate-[devcraftMarqueeReverse_32s_linear_infinite]

              group-hover/secondary:[animation-play-state:paused]
            "
          >
            {repeatedSecondaryItems.map(
              (
                item,
                index,
              ) => (
                <SecondaryItem
                  key={`${item.label}-${index}`}
                  item={item}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PRIMARY ITEM
========================================================= */

const PrimaryItem = ({
  item,
}) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group/item
        flex
        shrink-0
        items-center
        gap-4

        sm:gap-5
      "
    >
      {/* =====================================================
          SERVICE PILL
      ===================================================== */}

      <div
        className="
          flex
          min-h-[48px]
          shrink-0
          items-center
          gap-2.5
          rounded-full
          border
          border-white/90
          bg-white/72
          px-3
          py-2
          shadow-[0_8px_26px_rgba(58,38,30,0.05)]
          backdrop-blur-[14px]
          transition-all
          duration-300

          min-[360px]:px-3.5

          sm:min-h-[58px]
          sm:gap-3
          sm:px-4
          sm:py-2.5
          sm:backdrop-blur-[18px]

          lg:px-5
          lg:py-3

          hover:-translate-y-1
          hover:border-[#ffc9c3]
          hover:bg-white
          hover:shadow-[0_16px_40px_rgba(255,104,91,0.10)]
        "
      >
        {/* ICON */}

        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#fff0ed]
            text-[#ff685b]
            transition-all
            duration-300

            sm:h-9
            sm:w-9

            group-hover/item:rotate-6
            group-hover/item:bg-[#ff685b]
            group-hover/item:text-white
          "
        >
          <Icon
            size={13}
            className="
              sm:text-[15px]
            "
          />
        </span>

        {/* LABEL */}

        <span
          className="
            whitespace-nowrap
            text-[10px]
            font-bold
            tracking-[-0.02em]
            text-[#403a36]
            transition-colors
            duration-300

            min-[360px]:text-[11px]

            sm:text-[12px]

            lg:text-[13px]

            group-hover/item:text-[#ff685b]
          "
        >
          {item.label}
        </span>
      </div>

      {/* =====================================================
          DIVIDER STAR
      ===================================================== */}

      <span
        aria-hidden="true"
        className="
          shrink-0
          text-[13px]
          text-[#ff685b]/70

          sm:text-[16px]

          lg:text-[18px]
        "
      >
        ✦
      </span>
    </div>
  );
};

/* =========================================================
   SECONDARY ITEM
========================================================= */

const SecondaryItem = ({
  item,
}) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group/item
        flex
        shrink-0
        items-center
        gap-4

        sm:gap-5
      "
    >
      {/* =====================================================
          TECHNOLOGY PILL
      ===================================================== */}

      <div
        className="
          flex
          min-h-[38px]
          shrink-0
          items-center
          gap-2
          rounded-full
          border
          border-[#ece5e1]
          bg-[#fffdfc]/88
          px-3
          py-2
          transition-all
          duration-300

          sm:min-h-[42px]
          sm:gap-2.5
          sm:px-4
          sm:py-2.5

          hover:-translate-y-0.5
          hover:border-[#ffcbc5]
          hover:bg-[#fff0ed]
        "
      >
        <Icon
          size={11}
          className="
            shrink-0
            text-[#99918c]
            transition-all
            duration-300

            sm:text-[13px]

            group-hover/item:scale-110
            group-hover/item:text-[#ff685b]
          "
        />

        <span
          className="
            whitespace-nowrap
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.1em]
            text-[#8d8580]
            transition-colors
            duration-300

            min-[360px]:text-[9px]

            sm:text-[10px]
            sm:tracking-[0.13em]

            group-hover/item:text-[#ff685b]
          "
        >
          {item.label}
        </span>
      </div>

      {/* DOT */}

      <span
        aria-hidden="true"
        className="
          h-1
          w-1
          shrink-0
          rounded-full
          bg-[#d6cec9]
        "
      />
    </div>
  );
};

export default ServiceMarquee;