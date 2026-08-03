import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  FaArrowRight,
  FaBars,
  FaGithub,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "Services",
    target: "services",
  },
  {
    label: "Why DevCraft",
    target: "why-devcraft",
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
];

/* =========================================================
   SOCIAL LINKS

   Replace with your real URLs.
========================================================= */

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/devjit1520",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devjit-mondal-b68947233/",
    icon: FaLinkedinIn,
  },
];

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [
    activeSection,
    setActiveSection,
  ] = useState("home");

  const [
    isMenuOpen,
    setIsMenuOpen,
  ] = useState(false);

  /*
    Prevent scroll spy from changing the
    clicked item while smooth scroll runs.
  */

  const scrollLockRef =
    useRef(false);

  const scrollTimerRef =
    useRef(null);

  /* =======================================================
     ACTIVE SECTION

     Simple and reliable scroll spy.

     Every scroll:
     1. Get each section
     2. Compare its offsetTop
     3. Last section above activation point becomes active
  ======================================================= */

  useEffect(() => {
    let frameId = null;

    const updateActiveSection =
      () => {
        if (
          scrollLockRef.current
        ) {
          return;
        }

        const activationPoint =
          window.scrollY + 130;

        let current =
          "home";

        navLinks.forEach(
          (link) => {
            const section =
              document.getElementById(
                link.target,
              );

            if (!section) {
              return;
            }

            if (
              section.offsetTop <=
              activationPoint
            ) {
              current =
                link.target;
            }
          },
        );

        /* ===============================================
           CONTACT

           Contact isn't a navbar item.
           When visitor reaches Contact,
           remove active navigation highlight.
        =============================================== */

        const contact =
          document.getElementById(
            "contact",
          );

        if (
          contact &&
          contact.offsetTop <=
            activationPoint
        ) {
          current = "";
        }

        setActiveSection(
          current,
        );
      };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId =
        window.requestAnimationFrame(
          () => {
            updateActiveSection();

            frameId = null;
          },
        );
    };

    /*
      Run once after page sections
      have had time to render.
    */

    const initialTimer =
      window.setTimeout(
        updateActiveSection,
        300,
      );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.clearTimeout(
        initialTimer,
      );

      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );

      if (frameId) {
        window.cancelAnimationFrame(
          frameId,
        );
      }
    };
  }, []);

  /* =======================================================
     CLOSE MENU ON ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleEscape = (
      event,
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        setIsMenuOpen(
          false,
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow =
      isMenuOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [isMenuOpen]);

  /* =======================================================
     CLOSE MENU WHEN DESKTOP STARTS
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >=
        1024
      ) {
        setIsMenuOpen(
          false,
        );
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  /* =======================================================
     SCROLL TO SECTION
  ======================================================= */

  const scrollToSection = (
    target,
  ) => {
    const section =
      document.getElementById(
        target,
      );

    if (!section) {
      return;
    }

    /* Active immediately */

    setActiveSection(
      target,
    );

    setIsMenuOpen(
      false,
    );

    scrollLockRef.current =
      true;

    /* Navbar height + small gap */

    const navbarOffset =
      78;

    const sectionPosition =
      section.getBoundingClientRect()
        .top +
      window.scrollY;

    window.scrollTo({
      top:
        sectionPosition -
        navbarOffset,

      behavior: "smooth",
    });

    /*
      Stop scroll spy from changing
      active item during animation.
    */

    if (
      scrollTimerRef.current
    ) {
      window.clearTimeout(
        scrollTimerRef.current,
      );
    }

    scrollTimerRef.current =
      window.setTimeout(
        () => {
          scrollLockRef.current =
            false;
        },
        800,
      );
  };

  /* =======================================================
     CONTACT
  ======================================================= */

  const scrollToContact =
    () => {
      const contact =
        document.getElementById(
          "contact",
        );

      if (!contact) {
        return;
      }

      setActiveSection("");

      setIsMenuOpen(
        false,
      );

      scrollLockRef.current =
        true;

      const contactPosition =
        contact.getBoundingClientRect()
          .top +
        window.scrollY;

      window.scrollTo({
        top:
          contactPosition -
          78,

        behavior: "smooth",
      });

      if (
        scrollTimerRef.current
      ) {
        window.clearTimeout(
          scrollTimerRef.current,
        );
      }

      scrollTimerRef.current =
        window.setTimeout(
          () => {
            scrollLockRef.current =
              false;
          },
          800,
        );
    };

  return (
    <>
      {/* =====================================================
          FIXED NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          w-full
          border-b
          border-[#eee7e3]
          bg-[#fffdfc]/95
          shadow-[0_8px_30px_rgba(48,34,29,0.06)]
          backdrop-blur-xl
        "
      >
        <nav
          className="
            site-container
            flex
            h-[68px]
            items-center
            justify-between

            sm:h-[72px]

            lg:h-[76px]
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

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
              shrink-0
              items-center
              gap-3
            "
          >
            {/* LOGO ICON */}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[12px]
                bg-[#ff685b]
                shadow-[0_8px_22px_rgba(255,104,91,0.20)]
                transition-transform
                duration-300
                group-hover:-rotate-3
                group-hover:scale-105
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
                      key={
                        index
                      }
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
            </div>

            {/* LOGO TEXT */}

            <div
              className="
                text-left
              "
            >
              <p
                className="
                  text-[20px]
                  font-black
                  tracking-[-0.055em]
                  text-[#292929]

                  sm:text-[21px]
                "
              >
                DevCraft

                <span
                  className="
                    text-[#ff685b]
                  "
                >
                  .
                </span>
              </p>

              <p
                className="
                  hidden
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#aaa29d]

                  sm:block
                "
              >
                Creative Web Studio
              </p>
            </div>
          </button>

          {/* =================================================
              DESKTOP LINKS
          ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-1

              lg:flex
            "
          >
            {navLinks.map(
              (link) => {
                const isActive =
                  activeSection ===
                  link.target;

                return (
                  <button
                    key={
                      link.target
                    }
                    type="button"
                    onClick={() =>
                      scrollToSection(
                        link.target,
                      )
                    }
                    className={`
                      group
                      relative
                      flex
                      h-10
                      items-center
                      justify-center
                      whitespace-nowrap
                      rounded-full
                      px-2.5
                      text-[9px]
                      font-bold
                      transition-colors
                      duration-300

                      xl:px-3.5
                      xl:text-[10px]

                      ${
                        isActive
                          ? `
                            text-[#ff685b]
                          `
                          : `
                            text-[#5f5854]
                            hover:text-[#ff685b]
                          `
                      }
                    `}
                  >
                    {link.label}

                    {/* ACTIVE UNDERLINE */}

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="
                          absolute
                          -bottom-[3px]
                          left-1/2
                          h-[2px]
                          w-6
                          -translate-x-1/2
                          rounded-full
                          bg-[#ff685b]
                        "
                      />
                    )}
                  </button>
                );
              },
            )}
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div
            className="
              hidden
              shrink-0
              items-center
              gap-1.5

              lg:flex
            "
          >
            {/* GITHUB */}

            {socialLinks.map(
              (social) => (
                <SocialIcon
                  key={
                    social.label
                  }
                  social={
                    social
                  }
                />
              ),
            )}

            {/* DIVIDER */}

            <div
              className="
                mx-2
                h-6
                w-px
                bg-[#e8e0dc]
              "
            />

            {/* LET'S TALK */}

            <button
              type="button"
              onClick={
                scrollToContact
              }
              className="
                group
                flex
                h-11
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#ff685b]
                px-5
                text-[10px]
                font-extrabold
                text-white
                shadow-[0_8px_22px_rgba(255,104,91,0.18)]
                transition-all
                duration-300
                hover:bg-[#f45448]
              "
            >
              Let&apos;s Talk

              <FaArrowRight
                size={8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(
                (current) =>
                  !current,
              )
            }
            aria-expanded={
              isMenuOpen
            }
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300

              lg:hidden

              ${
                isMenuOpen
                  ? `
                    border-[#ff685b]
                    bg-[#ff685b]
                    text-white
                  `
                  : `
                    border-[#e8e0dc]
                    bg-white
                    text-[#393330]
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
                  isMenuOpen
                    ? "close"
                    : "menu"
                }
                initial={{
                  opacity: 0,
                  rotate: -30,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: 30,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                {isMenuOpen ? (
                  <FaTimes
                    size={13}
                  />
                ) : (
                  <FaBars
                    size={13}
                  />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() =>
                setIsMenuOpen(
                  false,
                )
              }
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-[80]
                bg-black/20
                backdrop-blur-[3px]

                lg:hidden
              "
            />

            {/* MENU */}

            <motion.div
              initial={{
                opacity: 0,
                y: -12,
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
                duration: 0.22,
              }}
              className="
                fixed
                left-0
                right-0
                top-[68px]
                z-[90]
                border-b
                border-[#eee7e3]
                bg-[#fffdfc]
                px-4
                py-4
                shadow-[0_20px_50px_rgba(48,34,29,0.12)]

                sm:top-[72px]
                sm:px-6

                lg:hidden
              "
            >
              {/* LINKS */}

              <div
                className="
                  grid
                  gap-1.5

                  min-[520px]:grid-cols-2
                "
              >
                {navLinks.map(
                  (link) => {
                    const isActive =
                      activeSection ===
                      link.target;

                    return (
                      <button
                        key={
                          link.target
                        }
                        type="button"
                        onClick={() =>
                          scrollToSection(
                            link.target,
                          )
                        }
                        className={`
                          flex
                          min-h-[50px]
                          items-center
                          justify-between
                          rounded-[14px]
                          px-4
                          text-left
                          text-[12px]
                          font-bold
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? `
                                bg-[#fff0ed]
                                text-[#ff685b]
                              `
                              : `
                                text-[#514a46]
                                hover:bg-[#fff8f6]
                              `
                          }
                        `}
                      >
                        {link.label}

                        <FaArrowRight
                          size={8}
                        />
                      </button>
                    );
                  },
                )}
              </div>

              {/* BOTTOM */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-t
                  border-[#eee7e3]
                  pt-4
                "
              >
                {/* SOCIAL */}

                <div
                  className="
                    flex
                    gap-2
                  "
                >
                  {socialLinks.map(
                    (social) => (
                      <SocialIcon
                        key={
                          social.label
                        }
                        social={
                          social
                        }
                        mobile
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
                    flex
                    min-h-[46px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#ff685b]
                    px-5
                    text-[10px]
                    font-extrabold
                    text-white
                  "
                >
                  Let&apos;s Talk

                  <FaArrowRight
                    size={8}
                  />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({
  social,
  mobile = false,
}) => {
  const Icon =
    social.icon;

  const hasLink =
    Boolean(
      social.href &&
        social.href !== "#",
    );

  return (
    <a
      href={
        hasLink
          ? social.href
          : "#"
      }
      target={
        hasLink
          ? "_blank"
          : undefined
      }
      rel={
        hasLink
          ? "noopener noreferrer"
          : undefined
      }
      onClick={(
        event,
      ) => {
        if (!hasLink) {
          event.preventDefault();
        }
      }}
      aria-label={
        social.label
      }
      title={
        hasLink
          ? social.label
          : `Add ${social.label} link`
      }
      className={`
        flex
        items-center
        justify-center
        rounded-full
        border
        border-[#e8e0dc]
        bg-white
        text-[#3c3632]
        transition-all
        duration-300
        hover:border-[#ffbdb6]
        hover:bg-[#fff0ed]
        hover:text-[#ff685b]

        ${
          mobile
            ? `
              h-11
              w-11
            `
            : `
              h-10
              w-10
            `
        }
      `}
    >
      <Icon
        size={
          mobile
            ? 14
            : 13
        }
      />
    </a>
  );
};

export default Navbar;