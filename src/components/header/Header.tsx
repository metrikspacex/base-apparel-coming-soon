import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { HeaderLogo } from "./header-logo/HeaderLogo";

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={clsx(
        "mx-auto w-full max-w-[37.5rem] pl-[3.2rem] pt-[3.1rem]",
        "desktop:mx-0 desktop:my-auto desktop:ml-[16.5rem]",
        "desktop:max-w-[44.5rem] desktop:pl-0 desktop:pt-0",
        className
      )}>
      <HeaderLogo
        className={clsx("")}
        src="/base-apparel-coming-soon/logo.svg"
      />
    </header>
  );
};
