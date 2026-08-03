import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaLightbulb,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: FaComments,
    short: "Understand your business goals and requirements.",
    details:
      "We discuss your business, target audience, goals, features and the kind of experience you want your visitors to have.",
  },
  {
    id: 2,
    title: "Strategy & Design",
    icon: FaLightbulb,
    short: "Plan structure, style and user journey.",
    details:
      "I create the right direction for layout, hierarchy, sections, user flow and premium design language before development starts.",
  },
  {
    id: 3,
    title: "Development",
    icon: FaLaptopCode,
    short: "Build a responsive and polished website.",
    details:
      "Your website is developed with clean, scalable frontend code, smooth interactions and responsive layouts across every device.",
  },
  {
    id: 4,
    title: "Launch & Support",
    icon: FaRocket,
    short: "Deploy, test and refine the final experience.",
    details:
      "After testing and review, the website goes live. I also help with revisions, polishing and deployment support when needed.",
  },
];

function InteractiveProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="process"
      className="
        section-spacing
        relative
        overflow-hidden
        bg-[#fcf8f6]
      "
    >
      <div className="site-container">
        <div className="text-center">
          <p
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#ff685b]
            "
          >
            Process
          </p>

          <h2
            className="
              font-display
              mt-4
              text-[clamp(2rem,5vw,4rem)]
              font-extrabold
              leading-[1]
              tracking-[-0.05em]
              text-[#1f1c1a]
            "
          >
            A simple process,
            <span className="text-[#ff685b]"> done beautifully.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[720px]
              text-[15px]
              leading-8
              text-[#6f6661]
            "
          >
            I keep the workflow clear, collaborative and easy
            to understand — so clients always know what happens next.
          </p>
        </div>

        <div className="mt-14">
          {/* Desktop step rail */}
          <div className="hidden lg:block">
            <div className="relative">
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-[30px]
                  h-[2px]
                  bg-[#eadfd9]
                "
              />

              <div
                className="
                  grid
                  grid-cols-4
                  gap-6
                "
              >
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.id;
                  const isCompleted = activeStep > step.id;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onMouseEnter={() =>
                        setActiveStep(step.id)
                      }
                      onClick={() =>
                        setActiveStep(step.id)
                      }
                      className="relative text-left"
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <div
                          className={`
                            flex
                            h-[62px]
                            w-[62px]
                            items-center
                            justify-center
                            rounded-full
                            border-2
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "border-[#ff685b] bg-[#ff685b] text-white shadow-[0_18px_35px_rgba(255,104,91,0.25)]"
                                : isCompleted
                                  ? "border-[#ff685b]/30 bg-[#fff1ef] text-[#ff685b]"
                                  : "border-[#eadfd9] bg-white text-[#8b827d]"
                            }
                          `}
                        >
                          <Icon size={18} />
                        </div>
                      </div>

                      <div className="mt-5 text-center">
                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#a49b96]
                          "
                        >
                          Step {index + 1}
                        </p>

                        <h3
                          className={`
                            mt-2
                            font-display
                            text-[20px]
                            font-bold
                            tracking-[-0.04em]
                            ${
                              isActive
                                ? "text-[#ff685b]"
                                : "text-[#26211f]"
                            }
                          `}
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-[13px]
                            leading-6
                            text-[#726864]
                          "
                        >
                          {step.short}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet cards */}
          <div className="grid gap-4 lg:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`
                    rounded-[24px]
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "border-[#ffb7b0] bg-[#fff4f1] shadow-[0_16px_35px_rgba(0,0,0,0.04)]"
                        : "border-[#ece3de] bg-white"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${
                          isActive
                            ? "bg-[#ff685b] text-white"
                            : "bg-[#faf5f2] text-[#ff685b]"
                        }
                      `}
                    >
                      <Icon size={16} />
                    </div>

                    <div className="flex-1">
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-[#a39a95]
                        "
                      >
                        Step {index + 1}
                      </p>

                      <h3
                        className="
                          font-display
                          mt-2
                          text-[22px]
                          font-bold
                          tracking-[-0.04em]
                          text-[#24201e]
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[13px]
                          leading-6
                          text-[#6d6460]
                        "
                      >
                        {step.short}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="
              mt-10
              rounded-[30px]
              border
              border-[#ebe1dc]
              bg-white
              p-6
              shadow-[0_25px_55px_rgba(0,0,0,0.05)]
              sm:p-8
            "
          >
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#ff685b]
              "
            >
              Current Step
            </p>

            <h3
              className="
                font-display
                mt-3
                text-[28px]
                font-bold
                tracking-[-0.05em]
                text-[#1f1c1a]
                sm:text-[36px]
              "
            >
              {steps.find((step) => step.id === activeStep)?.title}
            </h3>

            <p
              className="
                mt-4
                max-w-[820px]
                text-[15px]
                leading-8
                text-[#6f6661]
              "
            >
              {steps.find((step) => step.id === activeStep)?.details}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveProcessTimeline;