import React from "react";
import timelineData from "../../data/franchiseTimeline.json";

const FranchiseTimeline = () => {
  const steps = timelineData.steps || [];

  // Steps 1..N-1 stay on the timeline
  const normalSteps = steps.slice(0, -1);
  // Last step is rendered BELOW the timeline
  const lastStep = steps[steps.length - 1];

  return (
    <section className="bg-white">
      <div className="c-space py-12 md:py-16 lg:py-20">
        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[36px] font-headingNew text-[#E51E26] uppercase">
          Outlet Open
        </h2>

        <div className="mt-10 md:mt-14">
          {/* ========= TIMELINE + NORMAL STEPS WRAPPER ========= */}
          <div className="relative pb-24">
            {/* 1) VERTICAL LINE (behind everything) */}
            <div
              className="
                pointer-events-none
                absolute top-0 bottom-0
                left-[18px] md:left-1/2 md:-translate-x-1/2
                z-0
              "
            >
              <div className="h-full w-1 bg-gray-300 mx-auto" />
            </div>

            {/* 2) BOTTOM DOT (above line, same layer as steps) */}
            <span
              className="
                pointer-events-none
                absolute
                left-3 md:left-1/2 md:-translate-x-1/2
                bottom-0
                w-4 h-4 bg-[#E51E26] rounded-full
                z-20
              "
            />

            {/* 3) STICKY MASCOT (top of everything) */}
            <div
              className="
                pointer-events-none
                absolute top-0 bottom-0
                left-[22px] md:left-1/2 md:-translate-x-1/2
                z-40
              "
            >
              <div className="sticky top-1/2 -translate-y-1/2">
                <img
                  src="/assets/images/franchise/timeline-icon.png"
                  alt="Happy Potato Mascot"
                  className="
                    w-14 md:w-20 h-auto
                    relative
                    -left-9 
                    md:left-1/2 md:-translate-x-1/2
                  "
                />
              </div>
            </div>

            {/* 4) NORMAL STEPS (1..N-1) */}
            <div className="space-y-16 md:space-y-24 relative z-20">
              {normalSteps.map((step, index) => {
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={step.id}
                    className={`relative flex flex-col md:flex-row items-center 
                                gap-8 md:gap-10 pl-12 md:pl-0 
                                ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Dot in middle of each row — left on mobile, center on md+ */}
                    <span
                      className="
                        absolute 
                        left-3 md:left-1/2 
                        top-1/2 -translate-y-1/2 md:-translate-x-1/2
                        w-4 h-4 md:w-[18px] md:h-[18px] bg-[#E51E26] rounded-full
                        z-30 
                      "
                    />

                    {/* Image side */}
                    <div
                      className={`md:w-1/2 flex justify-center 
                        ${isEven ? "md:pl-[50px]" : "md:pr-[50px]"}
                      `}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full max-w-xl object-cover"
                      />
                    </div>

                    {/* Text side */}
                    <div
                      className={`
                        w-full md:w-1/2
                        text-left
                        ${
                          isEven
                            ? "md:text-right md:pr-[50px]"
                            : "md:text-left md:pl-[50px]"
                        }
                      `}
                    >
                      <p className="text-[16px] md:text-[19px] font-semibold text-[#1F4FA3] uppercase font-headingNew">
                        {step.step}
                      </p>

                      <h3 className="mt-1 text-[18px] md:text-[28px] font-headingNew text-[#E51E26] uppercase leading-tight">
                        {step.title}
                      </h3>

                      {step.duration && (
                        <p className="mt-2 text-[13px] md:text-[15px] text-black">
                          ({step.duration})
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========= LAST STEP — FULL WIDTH, BELOW LINE ========= */}
          {lastStep && (
            <div className="relative z-20 mt-4 lg:mt-20">
              {/* Last step TEXT ABOVE image */}
              <div className="w-full max-w-3xl mx-auto px-4 md:px-0 text-left md:text-center">
                <p className="text-[16px] md:text-[19px] font-semibold text-[#1F4FA3] uppercase">
                  {lastStep.step}
                </p>

                <h3 className="mt-1 text-[18px] md:text-[24px] font-headingNew text-[#E51E26] uppercase leading-tight">
                  {lastStep.title}
                </h3>

                {lastStep.duration && (
                  <p className="mt-2 text-[13px] md:text-[15px] text-black">
                    ({lastStep.duration})
                  </p>
                )}
              </div>

              {/* Last step FULL-WIDTH IMAGE */}
              <div className="mt-4 w-full flex justify-center">
                <img
                  src={lastStep.image}
                  alt={lastStep.title}
                  className="w-full max-w-5xl mx-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FranchiseTimeline;
