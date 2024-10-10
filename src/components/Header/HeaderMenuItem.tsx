import { ReactNode } from "react";

type HeaderMenuItemProps = {
  children: ReactNode;
  selected?: boolean;
}

export default function HeaderMenuItem({ children, selected = false }: Readonly<HeaderMenuItemProps>) {
  const classNames = selected ? 'font-semibold border border-gray-300 dark:border-gray-500 dark:bg-gray-700/75 bg-gray-300/75' : 'hover:bg-gray-300/85 dark:hover:bg-gray-700/85';

  return (
    <li>
      <button className={`${classNames} box-border text-black dark:text-white text-sm rounded-full px-4 py-2`}>{children}</button>
    </li>
  );
}


