import Card from "../components/Card/Card";
import { currentYear } from "../utils/date";

type FooterProps = {
  classNames?: string;
}

const defaultClassNames = `lg:col-span-12`;

export default function Footer({ classNames = defaultClassNames }: Readonly<FooterProps>) {
  return (
    <Card classNames={`${classNames}  rounded-lg text-sm default-text-color text-center`}>
      <p className="text-center font-semibold">
        {currentYear} - Ricardo Gouveia - <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR" target="_blank" className="underline">CC BY-SA 4.0</a><span className="text-xs smooth-text-color font-normal block mt-1">(unless otherwise specified and/or in content replicated from other sources | Logos and trademarks belong to their respective owners)</span>
      </p>
      <p className="italic text-xs smooth-text-color mt-3">
        <a className="underline" href="https://github.com/ricardogouveia3/rcrd-beta" target="_blank">Source code</a> - Design inspired by <a className="underline" href="https://www.joshuabrigati.com/" target="_blank">Joshua Brigati</a>
      </p>
    </Card>
  );
}


