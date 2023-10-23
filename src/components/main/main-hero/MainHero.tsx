import clsx from "clsx";
import type {
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
  SourceHTMLAttributes,
} from "react";

type MainHeroProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPictureElement>,
  HTMLPictureElement
> & {
  readonly media: number;
  readonly src: ImgHTMLAttributes<HTMLImageElement>["src"];
  readonly srcSet: SourceHTMLAttributes<HTMLSourceElement>["srcSet"];
};
export const MainHero = ({ className, media, src, srcSet }: MainHeroProps) => {
  return (
    <picture className={clsx("h-full w-full", className)}>
      <source
        className={clsx("h-full w-full")}
        media={`(min-width:${media}px)`}
        srcSet={srcSet}
      />
      <img alt="hero" className={clsx("h-full w-full")} src={src} />
    </picture>
  );
};
