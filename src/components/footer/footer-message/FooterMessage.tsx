import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type FooterMessageProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  readonly text: string;
};
export const FooterMessage = ({ className, text }: FooterMessageProps) => {
  return (
    <p
      className={clsx(
        "mb-[3.2rem] text-center font-primary text-[1.4rem] font-normal",
        "not-italic leading-[2.2rem] text-primary-200",
        "desktop:mb-[4rem] desktop:text-justify desktop:text-[1.6rem]",
        "desktop:leading-[2.8rem]",
        className
      )}>
      {text}
    </p>
  );
};
