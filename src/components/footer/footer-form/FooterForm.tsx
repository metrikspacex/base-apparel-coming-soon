import clsx from "clsx";
import type { DetailedHTMLProps, FormEvent, FormHTMLAttributes } from "react";

import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { baseApparelActions } from "@slices/baseApparelSlice";

type FooterFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {};
export const FooterForm = ({ className, placeholder }: FooterFormProps) => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.base_apparel_slice);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("email") as string;
    dispatch(baseApparelActions.setEmailAddress(value));
  };

  return (
    <form
      className={clsx(
        "relative h-[4.8rem] w-full",
        {
          "mb-[0.8rem]": error,
        },
        "desktop:h-[5.6rem]",
        className
      )}
      onSubmit={handleOnSubmit}>
      <input
        className={clsx(
          "h-full w-full rounded-[2.8rem] border-[0.1rem] border-solid",
          "pl-[2.4rem] pr-[10.4rem] font-primary",
          "text-[1.4rem] font-normal not-italic leading-[2.8rem]",
          "text-primary-400 outline-none placeholder:text-primary-200",
          "placeholder:opacity-50",
          {
            "border-primary-200": !error,
            "border-primary-500": error,
          },
          "desktop:border-[0.2rem] desktop:pr-[15.6rem]",
          "desktop:text-[1.6rem]"
        )}
        name="email"
        placeholder={placeholder}
        type="text"
      />
      <button
        className={clsx(
          "absolute right-0 top-0 flex h-[4.8rem] w-[6.4rem]",
          "touch-none items-center justify-center rounded-[2.8rem]",
          "bg-button shadow-button hover:opacity-50",
          "desktop:h-[5.6rem] desktop:w-[10rem]"
        )}
        type="submit">
        <img
          alt="arrow pointing right"
          className={clsx("h-[1.8rem] w-[0.9]")}
          src="/base-apparel-coming-soon/icon-arrow.svg"
        />
      </button>
      {error ? (
        <img
          alt="exclamation mark"
          className={clsx(
            "absolute right-[7.2rem] top-[1.2rem] h-[2.4rem] w-[2.4rem]",
            "desktop:right-[11.6rem] desktop:top-[1.6rem]"
          )}
          src="/base-apparel-coming-soon/icon-error.svg"
        />
      ) : null}
    </form>
  );
};
