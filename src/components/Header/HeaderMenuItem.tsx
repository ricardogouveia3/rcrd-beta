import { ReactNode } from "react";

type HeaderMenuItemProps = {
  children: ReactNode;
  selected?: boolean;
}

export default function HeaderMenuItem({ children, selected = false }: Readonly<HeaderMenuItemProps>) {
  const classNames = selected ? 'font-semibold border border-gray-500 bg-gray-700/75' : 'hover:bg-gray-700/85';

  return (
    <li>
      <button className={`${classNames} box-border text-white text-sm rounded-full px-4 py-2`}>{children}</button>
    </li>
  );
}


