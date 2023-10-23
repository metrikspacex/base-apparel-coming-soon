import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { useAppSelector } from "@hooks/useAppSelector";

import { FooterError } from "./footer-error/FooterError";
import { FooterForm } from "./footer-form/FooterForm";
import { FooterHeading } from "./footer-heading/FooterHeading";
import { FooterMessage } from "./footer-message/FooterMessage";

type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Footer = ({ className }: FooterProps) => {
  const { error } = useAppSelector((state) => state.base_apparel_slice);

  return (
    <footer
      className={clsx(
        "mx-auto w-full max-w-[37.5rem] px-[3.2rem]",
        "desktop:mx-0 desktop:ml-[16.5rem] desktop:max-w-[44.5rem]",
        "desktop:px-0",
        className
      )}>
      <FooterHeading
        className={clsx("")}
        heading={["WE'RE", "COMING", "SOON"]}
      />
      <FooterMessage
        className={clsx("")}
        text={
          "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
        }
      />
      <FooterForm placeholder="Email Address" />
      {error ? (
        <FooterError className={clsx("")} text="Please provide a valid email" />
      ) : null}
    </footer>
  );
};
