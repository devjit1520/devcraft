import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import emailjs from "@emailjs/browser";

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
   INITIAL FORM
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
   SERVICE OPTIONS
========================================================= */

const serviceOptions = [
  "Business Website",
  "Landing Page",
  "Website Redesign",
  "Frontend Development",
  "React Development",
  "WordPress Website",
  "Portfolio Website",
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
    isSending,
    setIsSending,
  ] = useState(false);

  const [
    submitStatus,
    setSubmitStatus,
  ] = useState(null);

  /* =======================================================
     ENV VARIABLES
  ======================================================= */

  const serviceId =
    import.meta.env
      .VITE_EMAILJS_SERVICE_ID;

  const templateId =
    import.meta.env
      .VITE_EMAILJS_TEMPLATE_ID;

  const publicKey =
    import.meta.env
      .VITE_EMAILJS_PUBLIC_KEY;

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
      (previous) => ({
        ...previous,

        [name]: value,
      }),
    );

    /*
      Remove the error as soon as
      the user corrects that field.
    */

    if (errors[name]) {
      setErrors(
        (previous) => ({
          ...previous,

          [name]: "",
        }),
      );
    }

    /*
      Hide previous success/error
      if visitor starts editing again.
    */

    if (submitStatus) {
      setSubmitStatus(
        null,
      );
    }
  };

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    /* NAME */

    if (
      !formData.name.trim()
    ) {
      newErrors.name =
        "Please enter your name.";
    } else if (
      formData.name
        .trim()
        .length < 2
    ) {
      newErrors.name =
        "Please enter at least 2 characters.";
    }

    /* EMAIL */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.email.trim()
    ) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !emailPattern.test(
        formData.email.trim(),
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    /* SERVICE */

    if (
      !formData.service
    ) {
      newErrors.service =
        "Please choose a service.";
    }

    /* MESSAGE */

    if (
      !formData.message.trim()
    ) {
      newErrors.message =
        "Please tell me a little about your project.";
    } else if (
      formData.message
        .trim()
        .length < 20
    ) {
      newErrors.message =
        "Please provide at least 20 characters.";
    }

    setErrors(
      newErrors,
    );

    return newErrors;
  };

  /* =======================================================
     FOCUS FIRST ERROR
  ======================================================= */

  const focusFirstError = (
    currentErrors,
  ) => {
    const firstError =
      Object.keys(
        currentErrors,
      )[0];

    if (!firstError) {
      return;
    }

    const element =
      document.getElementById(
        `contact-${firstError}`,
      );

    element?.focus();
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    setSubmitStatus(
      null,
    );

    const currentErrors =
      validateForm();

    if (
      Object.keys(
        currentErrors,
      ).length > 0
    ) {
      focusFirstError(
        currentErrors,
      );

      return;
    }

    /* ===============================================
       CHECK EMAILJS CONFIGURATION
    =============================================== */

    if (
      !serviceId ||
      !templateId ||
      !publicKey
    ) {
      console.error(
        "EmailJS configuration is missing.",
      );

      setSubmitStatus(
        "error",
      );

      return;
    }

    setIsSending(
      true,
    );

    try {
      /* =============================================
         TEMPLATE PARAMETERS

         These names match the EmailJS template.
      ============================================= */

      const templateParams = {
        name:
          formData.name.trim(),

        email:
          formData.email.trim(),

        company:
          formData.company.trim() ||
          "Not provided",

        service:
          formData.service,

        budget:
          formData.budget ||
          "Not specified",

        message:
          formData.message.trim(),

        submitted_at:
          new Date().toLocaleString(
            "en-IN",
            {
              dateStyle:
                "medium",

              timeStyle:
                "short",
            },
          ),

        page_url:
          window.location.href,
      };

      /* =============================================
         SEND EMAIL
      ============================================= */

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        },
      );

      /* =============================================
         SUCCESS
      ============================================= */

      setSubmitStatus(
        "success",
      );

      setErrors({});

      setFormData(
        initialFormData,
      );
    } catch (error) {
      console.error(
        "EMAILJS ERROR:",
        error,
      );

      setSubmitStatus(
        "error",
      );
    } finally {
      setIsSending(
        false,
      );
    }
  };

  return (
    <section
      id="contact"
      className="
        section-spacing
        relative
        overflow-hidden
        bg-[#24201e]
        text-white
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
          top-12
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#ff685b]/[0.09]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-0
          h-[340px]
          w-[340px]
          rounded-full
          bg-white/[0.035]
          blur-[100px]
        "
      />

      <div
        className="
          site-container
          relative
          z-10
        "
      >
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16

            xl:grid-cols-[0.78fr_1.22fr]
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* LABEL */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/60
                "
              >
                Open for enquiries
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-6
                max-w-[560px]
                text-[clamp(2.2rem,6vw,4.8rem)]
                font-black
                leading-[0.98]
                tracking-[-0.06em]
                text-white
              "
            >
              Have a project
              <span
                className="
                  block
                  text-[#ff685b]
                "
              >
                in mind?
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[520px]
                text-[13px]
                leading-7
                text-white/48

                sm:text-[14px]
              "
            >
              Tell me what
              you&apos;re planning.
              I&apos;ll review your
              enquiry and get back to
              you to discuss the right
              direction for your
              website.
            </p>

            {/* =============================================
                CONTACT BENEFITS
            ============================================= */}

            <div
              className="
                mt-8
                grid
                gap-3

                sm:grid-cols-2

                lg:grid-cols-1

                xl:grid-cols-2
              "
            >
              <InfoCard
                icon={
                  FaClock
                }
                title="Clear communication"
                text="Project details stay organized."
              />

              <InfoCard
                icon={
                  FaGlobe
                }
                title="Remote friendly"
                text="Work with clients from anywhere."
              />

              <InfoCard
                icon={
                  FaBriefcase
                }
                title="Project focused"
                text="Web design and frontend work."
              />

              <InfoCard
                icon={
                  FaCheck
                }
                title="Responsive first"
                text="Every screen matters."
              />
            </div>
          </motion.div>

          {/* =================================================
              FORM CARD
          ================================================= */}

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
              duration: 0.65,
              delay: 0.08,
            }}
            className="
              rounded-[26px]
              border
              border-white/10
              bg-white
              p-4
              text-[#292929]
              shadow-[0_35px_100px_rgba(0,0,0,0.20)]

              sm:rounded-[30px]
              sm:p-6

              lg:p-7

              xl:p-8
            "
          >
            {/* FORM HEADER */}

            <div
              className="
                flex
                flex-col
                gap-4
                border-b
                border-[#eee7e3]
                pb-6

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-[#ff685b]
                  "
                >
                  Start a project
                </p>

                <h3
                  className="
                    mt-2
                    text-[24px]
                    font-black
                    tracking-[-0.04em]
                    text-[#292929]

                    sm:text-[28px]
                  "
                >
                  Tell me about your
                  project.
                </h3>
              </div>

              <div
                className="
                  w-fit
                  rounded-full
                  bg-[#fff0ed]
                  px-3
                  py-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#ff685b]
                "
              >
                Secure enquiry
              </div>
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {submitStatus ===
              "success" && (
              <div
                role="status"
                className="
                  mt-6
                  rounded-[18px]
                  border
                  border-emerald-200
                  bg-emerald-50
                  p-5
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-100
                      text-emerald-600
                    "
                  >
                    <FaCheck
                      size={12}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[13px]
                        font-extrabold
                        text-emerald-900
                      "
                    >
                      Enquiry sent
                      successfully.
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        leading-5
                        text-emerald-700
                      "
                    >
                      Thank you for
                      contacting DevCraft.
                      I&apos;ll review your
                      project information
                      and get back to you.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================
                ERROR MESSAGE
            ================================================= */}

            {submitStatus ===
              "error" && (
              <div
                role="alert"
                className="
                  mt-6
                  rounded-[18px]
                  border
                  border-red-200
                  bg-red-50
                  p-5
                "
              >
                <p
                  className="
                    text-[12px]
                    font-extrabold
                    text-red-700
                  "
                >
                  Your enquiry could not
                  be sent.
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    leading-5
                    text-red-600
                  "
                >
                  Please try again in a
                  moment.
                </p>
              </div>
            )}

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={
                handleSubmit
              }
              noValidate
              className="
                mt-6
              "
            >
              {/* =============================================
                  NAME + EMAIL
              ============================================= */}

              <div
                className="
                  grid
                  gap-4

                  md:grid-cols-2
                "
              >
                <FormField
                  id="contact-name"
                  label="Your name"
                  icon={
                    FaUser
                  }
                  required
                  error={
                    errors.name
                  }
                >
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Your full name"
                    className={
                      inputClasses(
                        errors.name,
                      )
                    }
                  />
                </FormField>

                <FormField
                  id="contact-email"
                  label="Email address"
                  icon={
                    FaEnvelope
                  }
                  required
                  error={
                    errors.email
                  }
                >
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="you@example.com"
                    className={
                      inputClasses(
                        errors.email,
                      )
                    }
                  />
                </FormField>
              </div>

              {/* =============================================
                  COMPANY + SERVICE
              ============================================= */}

              <div
                className="
                  mt-4
                  grid
                  gap-4

                  md:grid-cols-2
                "
              >
                <FormField
                  id="contact-company"
                  label="Company"
                  icon={
                    FaBuilding
                  }
                  error={
                    errors.company
                  }
                >
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={
                      formData.company
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Company name (optional)"
                    className={
                      inputClasses(
                        errors.company,
                      )
                    }
                  />
                </FormField>

                <FormField
                  id="contact-service"
                  label="Service"
                  icon={
                    FaBriefcase
                  }
                  required
                  error={
                    errors.service
                  }
                >
                  <select
                    id="contact-service"
                    name="service"
                    value={
                      formData.service
                    }
                    onChange={
                      handleChange
                    }
                    className={
                      inputClasses(
                        errors.service,
                      )
                    }
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
                          {service}
                        </option>
                      ),
                    )}
                  </select>
                </FormField>
              </div>

              {/* =============================================
                  BUDGET
              ============================================= */}

              <div
                className="
                  mt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-[#817975]
                  "
                >
                  Approximate budget

                  <span
                    className="
                      ml-1
                      font-medium
                      normal-case
                      tracking-normal
                      text-[#aaa29d]
                    "
                  >
                    (optional)
                  </span>
                </p>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {budgetOptions.map(
                    (
                      option,
                    ) => {
                      const selected =
                        formData.budget ===
                        option;

                      return (
                        <button
                          key={
                            option
                          }
                          type="button"
                          onClick={() => {
                            setFormData(
                              (
                                previous,
                              ) => ({
                                ...previous,

                                budget:
                                  previous.budget ===
                                  option
                                    ? ""
                                    : option,
                              }),
                            );
                          }}
                          className={`
                            rounded-full
                            border
                            px-3.5
                            py-2.5
                            text-[9px]
                            font-bold
                            transition-all
                            duration-300

                            ${
                              selected
                                ? `
                                  border-[#ff685b]
                                  bg-[#ff685b]
                                  text-white
                                `
                                : `
                                  border-[#eae3df]
                                  bg-[#faf8f7]
                                  text-[#776f6a]
                                  hover:border-[#ffc3bc]
                                  hover:bg-[#fff0ed]
                                  hover:text-[#ff685b]
                                `
                            }
                          `}
                        >
                          {option}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* =============================================
                  MESSAGE
              ============================================= */}

              <div
                className="
                  mt-5
                "
              >
                <FormField
                  id="contact-message"
                  label="Project details"
                  required
                  error={
                    errors.message
                  }
                >
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={
                      formData.message
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Tell me about your business, the website you need, your goals, preferred features or anything else that would help me understand the project."
                    className={`
                      ${inputClasses(
                        errors.message,
                      )}

                      min-h-[150px]
                      resize-y
                      py-4
                      leading-6
                    `}
                  />
                </FormField>
              </div>

              {/* =============================================
                  SUBMIT
              ============================================= */}

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-4

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-[360px]
                    text-[9px]
                    leading-5
                    text-[#9c938e]
                  "
                >
                  By submitting this
                  form, you&apos;re
                  sharing your project
                  details so I can
                  respond to your
                  enquiry.
                </p>

                <button
                  type="submit"
                  disabled={
                    isSending
                  }
                  className="
                    group
                    inline-flex
                    min-h-[52px]
                    shrink-0
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#ff685b]
                    px-6
                    text-[10px]
                    font-extrabold
                    text-white
                    shadow-[0_12px_30px_rgba(255,104,91,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#f45448]
                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:min-w-[170px]
                  "
                >
                  {isSending ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane
                        size={10}
                      />

                      Send enquiry

                      <FaArrowRight
                        size={8}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   FORM FIELD
========================================================= */

const FormField = ({
  id,
  label,
  icon: Icon,
  required = false,
  error,
  children,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2.5
          flex
          items-center
          gap-2
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.12em]
          text-[#817975]
        "
      >
        {Icon && (
          <Icon
            size={10}
            className="
              text-[#ff685b]
            "
          />
        )}

        {label}

        {required && (
          <span
            className="
              text-[#ff685b]
            "
          >
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          className="
            mt-2
            text-[10px]
            font-semibold
            text-red-500
          "
        >
          {error}
        </p>
      )}
    </div>
  );
};

/* =========================================================
   INPUT CLASSES
========================================================= */

const inputClasses = (
  error,
) => `
  w-full
  rounded-[14px]
  border
  bg-[#faf8f7]
  px-4
  py-3.5
  text-[12px]
  font-medium
  text-[#292929]
  outline-none
  transition-all
  duration-300
  placeholder:text-[#b7afa9]

  focus:bg-white
  focus:ring-4
  focus:ring-[#ff685b]/[0.07]

  ${
    error
      ? `
        border-red-300
        focus:border-red-400
      `
      : `
        border-[#eae3df]
        focus:border-[#ff9a90]
      `
  }
`;

/* =========================================================
   INFORMATION CARD
========================================================= */

const InfoCard = ({
  icon: Icon,
  title,
  text,
}) => {
  return (
    <div
      className="
        rounded-[18px]
        border
        border-white/[0.07]
        bg-white/[0.035]
        p-4
        backdrop-blur-sm
      "
    >
      <div
        className="
          flex
          items-start
          gap-3
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-[11px]
            bg-[#ff685b]/10
            text-[#ff8b80]
          "
        >
          <Icon
            size={11}
          />
        </div>

        <div>
          <p
            className="
              text-[10px]
              font-extrabold
              text-white/82
            "
          >
            {title}
          </p>

          <p
            className="
              mt-1
              text-[9px]
              leading-5
              text-white/35
            "
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;