import {
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";

/* =========================================================
   SERVICE OPTIONS
========================================================= */

const serviceOptions = [
  "Landing Page Development",
  "React Frontend Development",
  "Business Website",
  "WordPress Website",
  "Website Redesign",
  "Responsive Development",
  "Performance Optimization",
  "Website Maintenance",
  "Other",
];

/* =========================================================
   BUDGET OPTIONS
========================================================= */

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

/* =========================================================
   INITIAL FORM DATA
========================================================= */

const initialFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  const [
    formData,
    setFormData,
  ] = useState(
    initialFormData,
  );

  const [
    errors,
    setErrors,
  ] = useState({});

  const [
    isSubmitted,
    setIsSubmitted,
  ] = useState(false);

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (
    event,
  ) => {
    const {
      name,
      value,
    } = event.target;

    setFormData(
      (current) => ({
        ...current,
        [name]: value,
      }),
    );

    setIsSubmitted(false);

    if (errors[name]) {
      setErrors(
        (current) => ({
          ...current,
          [name]: "",
        }),
      );
    }
  };

  /* =======================================================
     BUDGET
  ======================================================= */

  const handleBudgetSelect = (
    budget,
  ) => {
    setFormData(
      (current) => ({
        ...current,
        budget,
      }),
    );

    setIsSubmitted(false);

    if (errors.budget) {
      setErrors(
        (current) => ({
          ...current,
          budget: "",
        }),
      );
    }
  };

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (
      formData.name
        .trim()
        .length < 2
    ) {
      newErrors.name =
        "Please enter your name.";
    }

    if (
      !formData.email.trim()
    ) {
      newErrors.email =
        "Please enter your email address.";
    } else {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailPattern.test(
          formData.email,
        )
      ) {
        newErrors.email =
          "Please enter a valid email address.";
      }
    }

    if (
      !formData.service
    ) {
      newErrors.service =
        "Please select a service.";
    }

    if (
      !formData.budget
    ) {
      newErrors.budget =
        "Please select an approximate budget.";
    }

    if (
      formData.message
        .trim()
        .length < 20
    ) {
      newErrors.message =
        "Please add a little more detail about your project.";
    }

    return newErrors;
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = (
    event,
  ) => {
    event.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(
        validationErrors,
      ).length > 0
    ) {
      setErrors(
        validationErrors,
      );

      const firstError =
        Object.keys(
          validationErrors,
        )[0];

      document
        .getElementById(
          `contact-${firstError}`,
        )
        ?.focus();

      return;
    }

    /*
      PHASE 9:

      Real email delivery will
      be connected here.

      Right now this only confirms
      frontend validation.
    */

    setErrors({});

    setIsSubmitted(true);
  };

  /* =======================================================
     RESET
  ======================================================= */

  const handleReset = () => {
    setFormData(
      initialFormData,
    );

    setErrors({});

    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#24201e]
        py-[72px]
        text-white

        sm:py-[90px]

        lg:py-[115px]

        xl:py-[130px]
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
          background-grid
          opacity-[0.08]

          sm:opacity-[0.11]
        "
      />

      {/* CORAL GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[160px]
          -top-[100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ff685b]/15
          blur-[100px]

          sm:h-[440px]
          sm:w-[440px]
          sm:blur-[130px]

          xl:h-[520px]
          xl:w-[520px]
          xl:blur-[160px]
        "
      />

      {/* BLUE GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          -left-[170px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[110px]

          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[140px]
        "
      />

      {/* DESKTOP SPHERE */}

      <motion.div
        aria-hidden="true"
        animate={{
          y: [
            0,
            -12,
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
          -right-24
          top-[25%]
          hidden
          h-[220px]
          w-[220px]
          rounded-full
          bg-gradient-to-br
          from-[#ff8976]
          to-[#ff5f53]
          opacity-75
          shadow-[0_40px_90px_rgba(255,104,91,0.20)]

          lg:block

          xl:h-[260px]
          xl:w-[260px]
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

            sm:gap-10

            lg:grid-cols-[0.58fr_1.42fr]
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
                  text-[#ff9388]

                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                Start a Project
              </span>
            </div>

            <p
              className="
                mt-4
                max-w-sm
                text-[12px]
                leading-6
                text-white/45

                sm:mt-5
                sm:text-sm
                sm:leading-7
              "
            >
              Share your idea,
              website requirement or
              redesign challenge and
              we can figure out the
              right next step.
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
                max-w-6xl
                break-words
                text-[clamp(3rem,14vw,4.5rem)]
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
                text-white

                sm:text-[clamp(4rem,10vw,5.8rem)]

                lg:text-[clamp(5rem,6.5vw,7.4rem)]
                lg:leading-[0.87]
              "
            >
              Have something
              <br />

              worth{" "}

              <span className="text-[#ff685b]">
                building?
              </span>
            </h2>

            <div
              className="
                mt-6
                border-t
                border-white/10
                pt-6

                sm:mt-8
                sm:pt-7
              "
            >
              <p
                className="
                  max-w-2xl
                  text-[12px]
                  leading-6
                  text-white/45

                  sm:text-[15px]
                  sm:leading-7
                "
              >
                Tell me where you are
                now, what you want to
                build and what the
                website needs to achieve.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN CONTACT
        =================================================== */}

        <div
          className="
            mt-12
            grid
            items-start
            gap-4

            sm:mt-14
            sm:gap-5

            lg:mt-16

            xl:grid-cols-[0.7fr_1.3fr]
          "
        >
          {/* =================================================
              INFORMATION PANEL
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
                border-white/10
                bg-white/[0.055]
                p-5
                shadow-[0_28px_80px_rgba(0,0,0,0.15)]
                backdrop-blur-[18px]

                sm:rounded-[34px]
                sm:p-7
                sm:backdrop-blur-[22px]

                lg:p-8

                xl:rounded-[36px]
              "
            >
              {/* GLOW */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-48
                  w-48
                  rounded-full
                  bg-[#ff685b]/10
                  blur-[70px]
                "
              />

              <div className="relative z-10">
                {/* TOP */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      bg-[#ff685b]
                      text-white
                      shadow-[0_12px_30px_rgba(255,104,91,0.22)]

                      sm:h-14
                      sm:w-14
                      sm:rounded-[18px]
                    "
                  >
                    <FaBriefcase
                      size={17}
                    />
                  </div>

                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-emerald-400/20
                      bg-emerald-400/[0.08]
                      px-2.5
                      py-2

                      sm:px-3
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
                          bg-emerald-400
                        "
                      />
                    </span>

                    <span
                      className="
                        text-[7px]
                        font-bold
                        text-emerald-300

                        min-[360px]:text-[8px]
                      "
                    >
                      Open for enquiries
                    </span>
                  </div>
                </div>

                {/* COPY */}

                <p
                  className="
                    mt-7
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.17em]
                    text-[#ff9287]

                    sm:mt-8
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  Project enquiries
                </p>

                <h3
                  className="
                    mt-3
                    max-w-md
                    text-[clamp(2.2rem,10vw,3.4rem)]
                    font-bold
                    leading-[0.96]
                    tracking-[-0.055em]
                    text-white

                    sm:mt-4
                    sm:text-[clamp(2.9rem,7vw,4rem)]

                    xl:text-[clamp(3rem,3.5vw,4.5rem)]
                  "
                >
                  Let&apos;s understand
                  your project first.
                </h3>

                <p
                  className="
                    mt-4
                    max-w-md
                    text-[11px]
                    leading-6
                    text-white/45

                    sm:mt-5
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  You don&apos;t need
                  to have everything
                  figured out. Share
                  what you know and
                  we&apos;ll start
                  from there.
                </p>

                {/* ===========================================
                    INFO ROWS
                =========================================== */}

                <div
                  className="
                    mt-6
                    border-t
                    border-white/10

                    sm:mt-7
                  "
                >
                  <InfoRow
                    icon={FaClock}
                    label="Project discussion"
                    value="Clear requirements before development"
                  />

                  <InfoRow
                    icon={FaGlobe}
                    label="Collaboration"
                    value="Remote project workflow"
                  />

                  <InfoRow
                    icon={FaEnvelope}
                    label="Best suited for"
                    value="Web design & frontend projects"
                  />
                </div>

                {/* ===========================================
                    WHAT TO INCLUDE
                =========================================== */}

                <div
                  className="
                    mt-6
                    rounded-[20px]
                    border
                    border-white/10
                    bg-black/[0.12]
                    p-4

                    sm:mt-7
                    sm:rounded-[24px]
                    sm:p-5
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[0.17em]
                      text-white/30

                      sm:text-[8px]
                      sm:tracking-[0.19em]
                    "
                  >
                    Useful details
                    to include
                  </p>

                  <div
                    className="
                      mt-4
                      grid
                      gap-2.5

                      min-[480px]:grid-cols-2

                      xl:grid-cols-1
                    "
                  >
                    <ContactPoint text="What your business does" />

                    <ContactPoint text="What you want to build" />

                    <ContactPoint text="Important pages or features" />

                    <ContactPoint text="Timeline or budget context" />
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* =================================================
              FORM OUTER CARD
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
              overflow-hidden
              rounded-[28px]
              border
              border-white/12
              bg-white/[0.07]
              p-1.5
              shadow-[0_30px_90px_rgba(0,0,0,0.16)]
              backdrop-blur-[18px]

              sm:rounded-[34px]
              sm:p-2
              sm:backdrop-blur-[24px]

              xl:rounded-[38px]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[23px]
                bg-[#fffdfc]
                text-[#292929]

                sm:rounded-[28px]

                xl:rounded-[32px]
              "
            >
              <AnimatePresence
                mode="wait"
              >
                {isSubmitted ? (
                  <SuccessState
                    key="success"
                    onReset={
                      handleReset
                    }
                  />
                ) : (
                  <motion.form
                    key="form"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    onSubmit={
                      handleSubmit
                    }
                    noValidate
                    className="
                      p-4

                      min-[360px]:p-5

                      sm:p-7

                      md:p-8

                      lg:p-9

                      xl:p-11
                    "
                  >
                    {/* =======================================
                        FORM HEADER
                    ======================================= */}

                    <div
                      className="
                        flex
                        flex-col
                        gap-4
                        border-b
                        border-[#eee7e3]
                        pb-6

                        sm:gap-5
                        sm:pb-7

                        md:flex-row
                        md:items-end
                        md:justify-between
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
                          Project brief
                        </p>

                        <h3
                          className="
                            mt-3
                            max-w-2xl
                            text-[clamp(2.25rem,10vw,3.4rem)]
                            font-bold
                            leading-[0.96]
                            tracking-[-0.055em]
                            text-[#292929]

                            sm:text-[clamp(3rem,7vw,4.2rem)]

                            lg:text-[clamp(3.4rem,4vw,4.8rem)]
                          "
                        >
                          Tell me what
                          you want to build.
                        </h3>
                      </div>

                      <div
                        className="
                          w-fit
                          shrink-0
                          rounded-full
                          border
                          border-[#eee7e3]
                          bg-[#faf7f5]
                          px-3
                          py-2
                        "
                      >
                        <span
                          className="
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.13em]
                            text-[#9f9792]

                            sm:text-[8px]
                            sm:tracking-[0.15em]
                          "
                        >
                          About 2–3 minutes
                        </span>
                      </div>
                    </div>

                    {/* =======================================
                        PERSONAL FIELDS
                    ======================================= */}

                    <div
                      className="
                        mt-7
                        grid
                        gap-5

                        md:grid-cols-2

                        sm:mt-8
                      "
                    >
                      <FormField
                        label="Your Name"
                        htmlFor="contact-name"
                        required
                        error={
                          errors.name
                        }
                      >
                        <InputWrapper
                          icon={FaUser}
                          error={
                            Boolean(
                              errors.name,
                            )
                          }
                        >
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={
                              formData.name
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="Your full name"
                            autoComplete="name"
                            aria-invalid={
                              Boolean(
                                errors.name,
                              )
                            }
                            aria-describedby={
                              errors.name
                                ? "contact-name-error"
                                : undefined
                            }
                            className="
                              h-full
                              w-full
                              bg-transparent
                              pl-11
                              pr-3
                              text-[12px]
                              text-[#292929]
                              outline-none
                              placeholder:text-[#aaa29d]

                              sm:pl-12
                              sm:pr-4
                              sm:text-sm
                            "
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField
                        label="Email Address"
                        htmlFor="contact-email"
                        required
                        error={
                          errors.email
                        }
                      >
                        <InputWrapper
                          icon={
                            FaEnvelope
                          }
                          error={
                            Boolean(
                              errors.email,
                            )
                          }
                        >
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={
                              formData.email
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="you@example.com"
                            autoComplete="email"
                            aria-invalid={
                              Boolean(
                                errors.email,
                              )
                            }
                            aria-describedby={
                              errors.email
                                ? "contact-email-error"
                                : undefined
                            }
                            className="
                              h-full
                              w-full
                              bg-transparent
                              pl-11
                              pr-3
                              text-[12px]
                              text-[#292929]
                              outline-none
                              placeholder:text-[#aaa29d]

                              sm:pl-12
                              sm:pr-4
                              sm:text-sm
                            "
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField
                        label="Company / Brand"
                        htmlFor="contact-company"
                      >
                        <InputWrapper
                          icon={
                            FaBuilding
                          }
                        >
                          <input
                            id="contact-company"
                            type="text"
                            name="company"
                            value={
                              formData.company
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="Optional"
                            autoComplete="organization"
                            className="
                              h-full
                              w-full
                              bg-transparent
                              pl-11
                              pr-3
                              text-[12px]
                              text-[#292929]
                              outline-none
                              placeholder:text-[#aaa29d]

                              sm:pl-12
                              sm:pr-4
                              sm:text-sm
                            "
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField
                        label="Required Service"
                        htmlFor="contact-service"
                        required
                        error={
                          errors.service
                        }
                      >
                        <div
                          className={`
                            relative
                            min-h-[52px]
                            overflow-hidden
                            rounded-[15px]
                            border
                            bg-[#fffaf8]
                            transition-all
                            duration-300
                            focus-within:border-[#ff685b]
                            focus-within:bg-white
                            focus-within:shadow-[0_0_0_4px_rgba(255,104,91,0.08)]

                            sm:min-h-[56px]
                            sm:rounded-[16px]

                            ${
                              errors.service
                                ? "border-red-300"
                                : "border-[#e8dfda]"
                            }
                          `}
                        >
                          <FaBriefcase
                            size={11}
                            className="
                              pointer-events-none
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#aaa29d]
                            "
                          />

                          <select
                            id="contact-service"
                            name="service"
                            value={
                              formData.service
                            }
                            onChange={
                              handleChange
                            }
                            aria-invalid={
                              Boolean(
                                errors.service,
                              )
                            }
                            aria-describedby={
                              errors.service
                                ? "contact-service-error"
                                : undefined
                            }
                            className="
                              h-[52px]
                              w-full
                              cursor-pointer
                              appearance-none
                              bg-transparent
                              pl-11
                              pr-9
                              text-[12px]
                              text-[#4f4844]
                              outline-none

                              sm:h-[56px]
                              sm:pl-12
                              sm:pr-10
                              sm:text-sm
                            "
                          >
                            <option value="">
                              Select a service
                            </option>

                            {serviceOptions.map(
                              (
                                service,
                              ) => (
                                <option
                                  key={
                                    service
                                  }
                                  value={
                                    service
                                  }
                                >
                                  {
                                    service
                                  }
                                </option>
                              ),
                            )}
                          </select>

                          <span
                            aria-hidden="true"
                            className="
                              pointer-events-none
                              absolute
                              right-4
                              top-1/2
                              -translate-y-1/2
                              text-[9px]
                              text-[#aaa29d]
                            "
                          >
                            ▼
                          </span>
                        </div>
                      </FormField>
                    </div>

                    {/* =======================================
                        BUDGET
                    ======================================= */}

                    <div
                      className="
                        mt-7

                        sm:mt-8
                      "
                    >
                      <FormField
                        label="Approximate Budget"
                        required
                        error={
                          errors.budget
                        }
                      >
                        <div
                          id="contact-budget"
                          className="
                            grid
                            grid-cols-1
                            gap-2

                            min-[390px]:grid-cols-2

                            sm:grid-cols-3

                            lg:grid-cols-2

                            xl:grid-cols-5
                          "
                        >
                          {budgetOptions.map(
                            (
                              budget,
                            ) => {
                              const isActive =
                                formData.budget ===
                                budget;

                              return (
                                <button
                                  key={
                                    budget
                                  }
                                  type="button"
                                  onClick={() =>
                                    handleBudgetSelect(
                                      budget,
                                    )
                                  }
                                  aria-pressed={
                                    isActive
                                  }
                                  className={`
                                    relative
                                    min-h-[48px]
                                    rounded-[14px]
                                    border
                                    px-3
                                    py-2.5
                                    text-[9px]
                                    font-bold
                                    leading-4
                                    transition-all
                                    duration-300

                                    sm:min-h-[52px]
                                    sm:rounded-[15px]
                                    sm:text-[10px]

                                    ${
                                      isActive
                                        ? `
                                          border-[#ff685b]
                                          bg-[#ff685b]
                                          text-white
                                          shadow-[0_10px_24px_rgba(255,104,91,0.17)]
                                        `
                                        : `
                                          border-[#e8dfda]
                                          bg-[#fffaf8]
                                          text-[#746d69]
                                          hover:-translate-y-0.5
                                          hover:border-[#ffc7c0]
                                          hover:bg-[#fff0ed]
                                          hover:text-[#ff685b]
                                        `
                                    }
                                  `}
                                >
                                  {
                                    budget
                                  }

                                  {isActive && (
                                    <span
                                      className="
                                        absolute
                                        right-2
                                        top-2
                                        flex
                                        h-4
                                        w-4
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-[#ff685b]
                                      "
                                    >
                                      <FaCheck
                                        size={6}
                                      />
                                    </span>
                                  )}
                                </button>
                              );
                            },
                          )}
                        </div>
                      </FormField>
                    </div>

                    {/* =======================================
                        MESSAGE
                    ======================================= */}

                    <div
                      className="
                        mt-7

                        sm:mt-8
                      "
                    >
                      <FormField
                        label="Tell Me About The Project"
                        htmlFor="contact-message"
                        required
                        error={
                          errors.message
                        }
                      >
                        <div
                          className={`
                            relative
                            overflow-hidden
                            rounded-[17px]
                            border
                            bg-[#fffaf8]
                            transition-all
                            duration-300
                            focus-within:border-[#ff685b]
                            focus-within:bg-white
                            focus-within:shadow-[0_0_0_4px_rgba(255,104,91,0.08)]

                            sm:rounded-[18px]

                            ${
                              errors.message
                                ? "border-red-300"
                                : "border-[#e8dfda]"
                            }
                          `}
                        >
                          <textarea
                            id="contact-message"
                            name="message"
                            value={
                              formData.message
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="Tell me about your business, what you want to build, important pages or features, and what you want the website to achieve..."
                            rows={7}
                            aria-invalid={
                              Boolean(
                                errors.message,
                              )
                            }
                            aria-describedby={
                              errors.message
                                ? "contact-message-error"
                                : "contact-message-count"
                            }
                            className="
                              min-h-[170px]
                              w-full
                              resize-y
                              bg-transparent
                              p-3.5
                              pb-9
                              text-[12px]
                              leading-6
                              text-[#292929]
                              outline-none
                              placeholder:text-[#aaa29d]

                              sm:min-h-[190px]
                              sm:p-4
                              sm:pb-10
                              sm:text-sm
                              sm:leading-7
                            "
                          />

                          <span
                            id="contact-message-count"
                            className="
                              pointer-events-none
                              absolute
                              bottom-3
                              right-3
                              text-[7px]
                              font-bold
                              text-[#b5ada8]

                              sm:right-4
                              sm:text-[8px]
                            "
                          >
                            {
                              formData
                                .message
                                .length
                            }{" "}
                            characters
                          </span>
                        </div>
                      </FormField>
                    </div>

                    {/* =======================================
                        FORM FOOTER
                    ======================================= */}

                    <div
                      className="
                        mt-7
                        flex
                        flex-col
                        gap-5
                        border-t
                        border-[#eee7e3]
                        pt-6

                        sm:mt-8
                        sm:pt-7

                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:gap-8
                      "
                    >
                      <div
                        className="
                          flex
                          max-w-md
                          items-start
                          gap-3
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
                            bg-[#effaf3]
                            text-[#35a56b]
                          "
                        >
                          <FaCheck
                            size={7}
                          />
                        </span>

                        <p
                          className="
                            text-[9px]
                            leading-5
                            text-[#8b837e]

                            sm:text-[10px]
                          "
                        >
                          Required fields are
                          marked with *. Your
                          information is used
                          only to understand
                          your project enquiry.
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="
                          group
                          relative
                          inline-flex
                          min-h-[52px]
                          w-full
                          shrink-0
                          items-center
                          justify-center
                          gap-3
                          overflow-hidden
                          rounded-full
                          bg-[#ff685b]
                          px-5
                          text-[10px]
                          font-bold
                          text-white
                          shadow-[0_12px_30px_rgba(255,104,91,0.20)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:bg-[#292929]

                          sm:min-h-[56px]
                          sm:w-fit
                          sm:px-7
                          sm:text-[11px]
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-y-0
                            -left-[70%]
                            w-[42%]
                            rotate-12
                            bg-gradient-to-r
                            from-transparent
                            via-white/40
                            to-transparent
                            transition-all
                            duration-700
                            group-hover:left-[130%]
                          "
                        />

                        <FaPaperPlane
                          size={10}
                          className="
                            relative
                            z-10
                          "
                        />

                        <span
                          className="
                            relative
                            z-10
                          "
                        >
                          Submit Project Brief
                        </span>

                        <FaArrowRight
                          size={9}
                          className="
                            relative
                            z-10
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM LINE
        =================================================== */}

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
            duration: 0.65,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-6

            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:pt-7
          "
        >
          <p
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-white/25

              sm:text-[8px]
              sm:tracking-[0.17em]
            "
          >
            Web Design • Frontend Development • Responsive UI
          </p>

          <p
            className="
              text-[9px]
              font-semibold
              leading-5
              text-white/35

              sm:text-[10px]
            "
          >
            Every project starts with
            understanding the problem.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   FORM FIELD
========================================================= */

const FormField = ({
  label,
  htmlFor,
  required = false,
  error,
  children,
}) => {
  const errorId =
    htmlFor
      ? `${htmlFor}-error`
      : undefined;

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="
          mb-2.5
          block
          text-[8px]
          font-extrabold
          uppercase
          tracking-[0.14em]
          text-[#77706c]

          sm:text-[9px]
          sm:tracking-[0.16em]
        "
      >
        {label}

        {required && (
          <span
            className="
              ml-1
              text-[#ff685b]
            "
          >
            *
          </span>
        )}
      </label>

      {children}

      <AnimatePresence>
        {error && (
          <motion.p
            id={errorId}
            initial={{
              opacity: 0,
              y: -3,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              mt-2
              text-[9px]
              font-semibold
              leading-4
              text-red-500

              sm:text-[10px]
            "
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =========================================================
   INPUT WRAPPER
========================================================= */

const InputWrapper = ({
  icon: Icon,
  error = false,
  children,
}) => {
  return (
    <div
      className={`
        relative
        h-[52px]
        overflow-hidden
        rounded-[15px]
        border
        bg-[#fffaf8]
        transition-all
        duration-300
        focus-within:border-[#ff685b]
        focus-within:bg-white
        focus-within:shadow-[0_0_0_4px_rgba(255,104,91,0.08)]

        sm:h-[56px]
        sm:rounded-[16px]

        ${
          error
            ? "border-red-300"
            : "border-[#e8dfda]"
        }
      `}
    >
      <Icon
        size={11}
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#aaa29d]

          sm:text-[12px]
        "
      />

      {children}
    </div>
  );
};

/* =========================================================
   INFO ROW
========================================================= */

const InfoRow = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div
      className="
        grid
        grid-cols-[38px_1fr]
        gap-3
        border-b
        border-white/10
        py-4

        sm:grid-cols-[44px_1fr]
        sm:gap-4
        sm:py-5
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-[12px]
          border
          border-white/10
          bg-white/[0.05]
          text-[#ff9186]

          sm:h-11
          sm:w-11
          sm:rounded-[14px]
        "
      >
        <Icon
          size={11}
        />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[7px]
            font-extrabold
            uppercase
            tracking-[0.14em]
            text-white/30

            sm:text-[8px]
            sm:tracking-[0.16em]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            text-[10px]
            font-semibold
            leading-5
            text-white/65

            sm:mt-1.5
            sm:text-[11px]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   CONTACT POINT
========================================================= */

const ContactPoint = ({
  text,
}) => {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-2.5
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
          bg-[#ff685b]/15
          text-[#ff9388]
        "
      >
        <FaCheck
          size={6}
        />
      </span>

      <span
        className="
          text-[9px]
          font-semibold
          leading-5
          text-white/50

          sm:text-[10px]
        "
      >
        {text}
      </span>
    </div>
  );
};

/* =========================================================
   SUCCESS STATE
========================================================= */

const SuccessState = ({
  onReset,
}) => {
  return (
    <motion.div
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
      }}
      transition={{
        duration: 0.4,
      }}
      role="status"
      aria-live="polite"
      className="
        relative
        flex
        min-h-[520px]
        items-center
        justify-center
        overflow-hidden
        p-5
        text-center

        sm:min-h-[620px]
        sm:p-8

        lg:min-h-[680px]
        lg:p-10

        xl:min-h-[720px]
        xl:p-12
      "
    >
      {/* GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff685b]/[0.07]
          blur-[80px]

          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-xl
        "
      >
        <motion.div
          initial={{
            scale: 0.75,
            rotate: -12,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#effaf3]
            text-[#35a56b]
            shadow-[0_15px_38px_rgba(53,165,107,0.10)]

            sm:h-20
            sm:w-20
          "
        >
          <FaCheck
            size={20}
          />
        </motion.div>

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
          Project brief completed
        </p>

        <h3
          className="
            mt-3
            text-[clamp(2.35rem,11vw,3.6rem)]
            font-bold
            leading-[0.94]
            tracking-[-0.06em]
            text-[#292929]

            sm:mt-4
            sm:text-[clamp(3.2rem,7vw,4.6rem)]

            lg:text-[clamp(3.8rem,4.5vw,5.4rem)]
          "
        >
          Your project details
          are ready.
        </h3>

        <p
          className="
            mx-auto
            mt-5
            max-w-lg
            text-[11px]
            leading-6
            text-[#77706c]

            sm:mt-6
            sm:text-sm
            sm:leading-7
          "
        >
          The form has passed
          frontend validation.
          Email delivery is not
          connected yet, so nothing
          has been sent.
        </p>

        <div
          className="
            mx-auto
            mt-6
            max-w-md
            rounded-[20px]
            border
            border-[#eee7e3]
            bg-[#faf7f5]
            p-4

            sm:mt-8
            sm:rounded-[22px]
            sm:p-5
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
            Phase 9
          </p>

          <p
            className="
              mt-2
              text-[11px]
              font-semibold
              leading-5
              text-[#4f4844]

              sm:text-sm
              sm:leading-6
            "
          >
            Real project enquiry
            delivery will be connected
            before the site is launched
            for clients.
          </p>
        </div>

        <button
          type="button"
          onClick={
            onReset
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
            text-[10px]
            font-bold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#ff685b]

            min-[480px]:w-fit

            sm:mt-8
            sm:min-h-[52px]
            sm:px-6
            sm:text-[11px]
          "
        >
          Edit / New Project Brief

          <FaArrowRight
            size={9}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;