import Card from "./Card/Card";

export default function Footer() {
  return (
    <Card classNames="lg:col-span-4 rounded-lg text-sm text-black dark:text-white text-center" contentClassnames={"p-3 flex flex-col gap-3"}>
      <p className="text-center font-semibold">
        2024 - Ricardo Gouveia - <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR" target="_blank" className="underline">CC BY-SA 4.0</a><span className="text-xs text-gray-500 font-normal block mt-1">(unless otherwise specified and/or in content replicated from other sources | Logos and trademarks belong to their respective owners)</span>
      </p>
      <p>
        <a className="underline" href="https://github.com/ricardogouveia3/rcrd-beta" target="_blank">Source code</a> - Design inspired by <a className="underline" href="https://www.joshuabrigati.com/" target="_blank">Joshua Brigati</a>
      </p>
    </Card>
  );
}


