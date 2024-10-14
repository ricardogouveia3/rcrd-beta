import MarqueeContent from "./MarqueeContent";

type MarqueeElementProps = {
  darkMode?: boolean;
};

export default function MarqueeElement({ darkMode = true }: Readonly<MarqueeElementProps>) {
  return (
    <section className="p-4 lg:p-6" aria-labelledby="marquee-header">
      <p id="marquee-header" className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white">
        I can work with:
      </p>
      <MarqueeContent darkMode={darkMode} />
    </section>
  );
}
