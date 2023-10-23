import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type FooterErrorProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  readonly text: string;
};
export const FooterError = ({ className, text }: FooterErrorProps) => {
  return (
    <p
      className={clsx(
        "mb-[7.1rem] w-max pl-[2.4rem] font-primary text-[1.3rem] font-normal",
        "leading-normalize text-primary-500",
        "desktop:leading-[2.8rem]",
        className
      )}>
      {text}
    </p>
  );
};
