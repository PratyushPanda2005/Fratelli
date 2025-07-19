import React from "react";

const SectionHeading = ({
  title,
  titleClass,
  subtitle,
  subtitleClass,
  context,
  contextClass,
  className,
  fillColour
}: {
  title: string;
  titleClass: string;
  subtitle: string;
  subtitleClass: string;
  context: string;
  contextClass: string;
  className: string;
  fillColour?: string;
}) => {
  return (
    <div className={`${className}`}>
      <h1 className={`uppercase flex justify-center gap-1 items-center font-clashdisplay font-medium ${titleClass}`}>
        <span className="h-[0.5em] w-[0.5em] inline-block ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 15"
            fill="none"
          >
            <circle cx="7" cy="7.5" r="7" fill={fillColour} />
          </svg>
        </span>
        {title}
      </h1>
      <h2 className={`uppercase font-clashdisplay font-semibold text-4xl text-center ${subtitleClass}`}>
        {subtitle}
      </h2>
      <h3 className={`font-sheffield text-8xl  text-center ${contextClass}`}>
        {context}
      </h3>
    </div>
  );
};

export default SectionHeading;
