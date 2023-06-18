import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Inwave Labs" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-sm px-6 py-12 leading-6 font-mono h-screen overflow-y-scroll md:text-lg md:leading-9 md:px-8 md:py-12 mx-auto max-w-5xl">
      <main>
        <section className="mb-12">
          <h1 className="mb-4 md:mb-0">
            <strong className="font-black">Inwave Labs</strong> is an
            independent software company.
          </h1>
          <p className="mb-4 md:mb-0">
            It is run by{" "}
            <a href="https://kennygoff.com" className="font-black underline">
              Kenny Goff
            </a>
            , a developer and designer.
          </p>
          <p className="mb-4 md:mb-0">
            We craft software of all kinds — apps, games, tools and websites.
          </p>
          <p className="mb-4 md:mb-0">
            We made the game <strong className="font-black">Double Turn</strong>
            , a pro-wrestling platform fighter.
          </p>
          <p className="mb-4 md:mb-0">We are working on something new!</p>
        </section>
        <section className="mb-12">
          <h2 className="font-black">Working principles</h2>
          <ol className="list-decimal list-inside">
            <li>Build a sustainable business that will last</li>
            <li>Care and dignity for people who work for or with us</li>
            <li>Fight for independence and stay small</li>
            <li>Trust must be perpetually earned</li>
            <li>Unwelcome to the intolerant</li>
            <li>Share in our victories</li>
          </ol>
        </section>
        <section className="mb-12">
          <h2 className="font-black">Get in touch</h2>
          <p>
            <span aria-hidden className="select-none">
              &rarr;{" "}
            </span>
            kenny@inwavelabs.com
          </p>
        </section>
      </main>
      <footer>
        <p>Crafted in Hoboken, NJ</p>
        Made with <span style={{ fontFamily: "none" }}>❤</span> by{" "}
        <a href="https://kennygoff.com" className="font-black underline">
          Kenny Goff
        </a>
        <p>Inwave Labs, LLC © 2017-2023</p>
      </footer>
    </div>
  );
}
