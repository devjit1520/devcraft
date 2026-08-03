import {
  lazy,
  Suspense,
} from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ServiceMarquee from "../components/common/ServiceMarquee";

/* =========================================================
   LAZY-LOADED BELOW-FOLD SECTIONS

   These components are separated into their own
   JavaScript chunks by Vite.

   They do not need to be part of the critical
   Navbar + Hero bundle.
========================================================= */

const Services = lazy(() =>
  import(
    "../components/services/Services"
  ),
);

const WhyDevCraft = lazy(() =>
  import(
    "../components/why/WhyDevCraft"
  ),
);

const FeaturedWork = lazy(() =>
  import(
    "../components/projects/FeaturedWork"
  ),
);

const About = lazy(() =>
  import(
    "../components/about/About"
  ),
);

const Process = lazy(() =>
  import(
    "../components/process/Process"
  ),
);

const FAQ = lazy(() =>
  import(
    "../components/faq/FAQ"
  ),
);

const Contact = lazy(() =>
  import(
    "../components/contact/Contact"
  ),
);

const Footer = lazy(() =>
  import(
    "../components/footer/Footer"
  ),
);

/* =========================================================
   HOME PAGE
========================================================= */

const HomePage = () => {
  return (
    <div
      className="
        min-h-screen
        overflow-x-clip
        bg-[#fffdfc]
        text-[#292929]
      "
    >
      {/* =====================================================
          CRITICAL CONTENT

          Keep these loaded immediately because visitors
          see them as soon as the website opens.
      ===================================================== */}

      <Navbar />

      <main>
        <Hero />

        <ServiceMarquee />

        {/* ===================================================
            SERVICES
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="white"
              label="Loading services"
            />
          }
        >
          <Services />
        </Suspense>

        {/* ===================================================
            WHY DEVCRAFT
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="warm"
              label="Loading section"
            />
          }
        >
          <WhyDevCraft />
        </Suspense>

        {/* ===================================================
            FEATURED WORK
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="white"
              label="Loading projects"
            />
          }
        >
          <FeaturedWork />
        </Suspense>

        {/* ===================================================
            PROCESS
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="warm"
              label="Loading process"
            />
          }
        >
          <Process />
        </Suspense>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="white"
              label="Loading about section"
            />
          }
        >
          <About />
        </Suspense>

        {/* ===================================================
            FAQ
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="white"
              label="Loading questions"
            />
          }
        >
          <FAQ />
        </Suspense>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <Suspense
          fallback={
            <SectionFallback
              tone="dark"
              label="Loading contact section"
            />
          }
        >
          <Contact />
        </Suspense>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Suspense
        fallback={
          <SectionFallback
            tone="dark"
            label="Loading footer"
            compact
          />
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
};

/* =========================================================
   SECTION FALLBACK

   Lightweight placeholder displayed only if a
   lazy chunk has not finished loading yet.

   It prevents an ugly blank flash without adding
   another loading library or heavy animation.
========================================================= */

const SectionFallback = ({
  tone = "white",
  label = "Loading",
  compact = false,
}) => {
  const toneStyles = {
    white: `
      bg-[#fffdfc]
      text-[#a79f9a]
    `,

    warm: `
      bg-[#f8f4f1]
      text-[#9d958f]
    `,

    dark: `
      bg-[#24201e]
      text-white/30
    `,
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden

        ${
          compact
            ? `
              min-h-[120px]
              sm:min-h-[150px]
            `
            : `
              min-h-[220px]
              sm:min-h-[280px]
              lg:min-h-[320px]
            `
        }

        ${
          toneStyles[
            tone
          ] ||
          toneStyles.white
        }
      `}
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-3
        "
      >
        {/* ===================================================
            SMALL LOADER
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            flex
            items-center
            gap-1.5
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-[#ff685b]
            "
          />

          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-current
              [animation-delay:150ms]
            "
          />

          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-current
              [animation-delay:300ms]
            "
          />
        </div>

        <span
          className="
            text-[7px]
            font-extrabold
            uppercase
            tracking-[0.16em]

            sm:text-[8px]
            sm:tracking-[0.18em]
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default HomePage;