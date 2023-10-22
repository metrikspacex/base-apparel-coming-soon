import clsx from "clsx";

export const Page = () => {
  const error = true;

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[37.5rem]",
        "grid-rows-[8.4rem_min-content_min-content] place-content-center",
        "desktop:h-[80rem] desktop:grid-cols-[83rem_61rem]",
        "desktop:grid-rows-[16.3rem_20.1rem_min-content] "
      )}>
      <header
        className={clsx(
          "col-1 row-1 mx-auto w-full max-w-[37.5rem] pl-[3.2rem] pt-[3.1rem]",
          "desktop:col-1 desktop:row-1 desktop:mx-0 desktop:my-auto",
          "desktop:ml-[16.5rem] desktop:max-w-[44.5rem] desktop:pl-0",
          "desktop:pt-0"
        )}>
        <img
          alt="logo"
          className={clsx(
            "h-[2.1rem] w-[10rem]",
            "desktop:h-[3.3rem] desktop:w-[15.8rem]"
          )}
          src="/base-apparel-coming-soon/logo.svg"
        />
      </header>
      <main
        className={clsx(
          "col-1 row-2 mx-auto w-full max-w-[37.5rem]",
          "desktop:col-2 desktop:row-full desktop:max-w-full"
        )}>
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet="/base-apparel-coming-soon/hero-desktop.jpg"
          />
          <img
            alt="hero"
            className={clsx("")}
            src="/base-apparel-coming-soon/hero-mobile.jpg"
          />
        </picture>
      </main>
      <footer
        className={clsx(
          "col-1 row-3 mx-auto w-full max-w-[37.5rem] px-[3.2rem]",
          "desktop:col-1 desktop:row-[2/-1] desktop:mx-0 desktop:ml-[16.5rem]",
          "desktop:max-w-[44.5rem] desktop:px-0"
        )}>
        <h1
          className={clsx(
            "mb-[1.6rem] mt-[6.4rem] text-center font-primary text-[4rem]",
            "font-semibold not-italic leading-[4.2rem] tracking-[10.825px]",
            "text-primary-400",
            "desktop:mb-[3.2rem] desktop:mt-[7.1rem] desktop:text-justify",
            "desktop:text-[6.4rem] desktop:leading-[7.1rem]",
            "desktop:tracking-[17.321px]"
          )}>
          <span
            className={clsx(
              "font-light text-primary-200",
              "desktop:leading-[6.4rem]"
            )}>
            WE&apos;RE
          </span>
          <br />
          COMING
          <br />
          SOON
        </h1>
        <p
          className={clsx(
            "mb-[3.2rem] text-center font-primary text-[1.4rem] font-normal",
            "not-italic leading-[2.2rem] text-primary-200",
            "desktop:mb-[4rem] desktop:text-justify desktop:text-[1.6rem]",
            "desktop:leading-[2.8rem]"
          )}>
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <form
          className={clsx(
            "relative h-[4.8rem] w-full",
            {
              "mb-[0.8rem]": error,
            },
            "desktop:h-[5.6rem]"
          )}>
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
            placeholder="Email Address"
            type="text"
          />
          <button
            className={clsx(
              "absolute right-0 top-0 h-[4.8rem] w-[6.4rem] bg-button",
              "flex items-center justify-center rounded-[2.8rem] shadow-button",
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
        {error ? (
          <p
            className={clsx(
              "mb-[7.1rem] pl-[2.4rem] font-primary text-[1.3rem] font-normal",
              "leading-normalize text-primary-500",
              "desktop:leading-[2.8rem]"
            )}>
            Please provide a valid email
          </p>
        ) : null}
      </footer>
    </div>
  );
};
