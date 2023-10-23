import clsx from "clsx";

import { Footer } from "@components/footer/Footer";
import { Header } from "@components/header/Header";
import { Main } from "@components/main/Main";

export const Page = () => {
  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[37.5rem]",
        "grid-rows-[8.4rem_min-content_min-content] place-content-center",
        "desktop:h-[80rem] desktop:grid-cols-[83rem_61rem]",
        "desktop:grid-rows-[16.3rem_20.1rem_min-content] "
      )}>
      <Header className={clsx("col-1 row-1", "desktop:col-1 desktop:row-1")} />
      <Main className={clsx("col-1 row-2", "desktop:col-2 desktop:row-full")} />
      <Footer
        className={clsx("col-1 row-3", "desktop:col-1 desktop:row-[2/-1]")}
      />
    </div>
  );
};
