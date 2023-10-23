import clsx from "clsx";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type HeaderLogoProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {};
export const HeaderLogo = ({ className, src }: HeaderLogoProps) => {
  return (
    <img
      alt="logo"
      className={clsx(
        "h-[2.1rem] w-[10rem]",
        "desktop:h-[3.3rem] desktop:w-[15.8rem]",
        className
      )}
      src={src}
    />
  );
};
