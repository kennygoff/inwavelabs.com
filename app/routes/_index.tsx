import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Inwave Labs" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-md px-6 py-12 leading-7 font-mono h-screen overflow-y-scroll md:text-lg md:leading-9 md:px-8 md:py-12 mx-auto max-w-5xl">
      <main>
        <section className="mb-12">
          <h1 className="mb-12 md:mb-6">
            <strong className="font-black">Inwave Labs</strong> is an
            independent software company.
          </h1>
        </section>
        <section className="mb-12">
          <p className="mb-3 md:mb-0">
            We craft software of all kinds — apps, games, tools and websites.
          </p>
        </section>
        <section className="mb-12">
          <p className="mb-3 md:mb-0">
            Inwave Labs is run by{" "}
            <a href="https://kennygoff.com" className="font-black underline">
              Kenny Goff
            </a>
            , a creative developer.
          </p>
          <p className="mb-3 md:mb-0">
            We made the game{" "}
            <a
              href="https://doubleturngame.com"
              className="font-black underline"
            >
              Double Turn
            </a>
            , a pro-wrestling platform fighter.
          </p>
          <p className="mb-4 md:mb-0">We are working on something new!</p>
        </section>
        <section className="mb-12">
          <h2 className="font-black">Working principles</h2>
          <div
            role="list"
            className="grid grid-cols-[18px_auto] md:grid-cols-[22px_auto] gap-x-2"
          >
            <div className="select-none" aria-hidden>
              1.
            </div>
            <div role="listitem">
              Build a sustainable business that will last
            </div>
            <div className="select-none" aria-hidden>
              2.
            </div>
            <div role="listitem">
              Care and dignity for people who work with us
            </div>
            <div className="select-none" aria-hidden>
              3.
            </div>
            <div role="listitem">Fight for independence and stay small</div>
            <div className="select-none" aria-hidden>
              4.
            </div>
            <div role="listitem">Trust must be perpetually earned</div>
            <div className="select-none" aria-hidden>
              5.
            </div>
            <div role="listitem">Unwelcome to the intolerant</div>
            <div className="select-none" aria-hidden>
              6.
            </div>
            <div role="listitem">Share in our victories</div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="font-black">Get in touch</h2>
          <p>
            <span
              aria-hidden
              className="select-none inline-block w-[18px] md:w-[22px] mr-2"
            >
              &rarr;{" "}
            </span>
            kenny@inwavelabs.com
          </p>
        </section>
      </main>
      <footer>
        <p>Crafted in Hoboken, NJ</p>
        Made with <span style={{ fontFamily: "none" }}>♥︎</span> by{" "}
        <a href="https://kennygoff.com" className="font-black underline">
          Kenny Goff
        </a>
        <p>Inwave Labs, LLC © 2017-2023</p>
      </footer>
    </div>
  );
}
