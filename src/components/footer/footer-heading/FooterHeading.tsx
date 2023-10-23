import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type FooterHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly heading: [string, string, string];
};
export const FooterHeading = ({ className, heading }: FooterHeadingProps) => {
  return (
    <h1
      className={clsx(
        "mb-[1.6rem] mt-[6.4rem] text-center font-primary text-[4rem]",
        "font-semibold not-italic leading-[4.2rem] tracking-[10.825px]",
        "text-primary-400",
        "desktop:mb-[3.2rem] desktop:mt-[7.1rem] desktop:text-justify",
        "desktop:text-[6.4rem] desktop:leading-[7.1rem]",
        "desktop:tracking-[17.321px]",
        className
      )}>
      <span
        className={clsx(
          "font-light text-primary-200",
          "desktop:leading-[6.4rem]"
        )}>
        {heading[0]}
      </span>
      <br />
      {heading[1]}
      <br />
      {heading[2]}
    </h1>
  );
};
