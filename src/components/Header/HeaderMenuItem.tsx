import { ReactNode } from "react";

type HeaderMenuItemProps = {
  children: ReactNode;
  item: string;
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
}

export default function HeaderMenuItem({
  children,
  item,
  selectedMenuItem,
  setSelectedMenuItem
}: Readonly<HeaderMenuItemProps>) {
  const isSelected = selectedMenuItem === item;
  const classNames = isSelected ? 'bg-gray-300 dark:bg-quartz-150 border-quartz-800 dark:border-quartz-450 lg:bg-transparent lg:dark:bg-transparent' : '';

  return (
    <li className="flex flex-grow">
      <button
        aria-current={isSelected ? 'page' : undefined}
        className={`${classNames} box-border text-black dark:text-white text-sm sm:rounded-full px-4 py-2 w-full z-10`}
        onClick={() => setSelectedMenuItem(item)}>
        {children}
      </button>
    </li>
  );
}
