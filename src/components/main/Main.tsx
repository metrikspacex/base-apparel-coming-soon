import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { MainHero } from "./main-hero/MainHero";

type MainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Main = ({ className }: MainProps) => {
  return (
    <main
      className={clsx(
        "mx-auto w-full max-w-[37.5rem]",
        "desktop:max-w-full",
        className
      )}>
      <MainHero
        className={clsx("")}
        media={1440}
        src="/base-apparel-coming-soon/hero-mobile.jpg"
        srcSet="/base-apparel-coming-soon/hero-desktop.jpg"
      />
    </main>
  );
};
