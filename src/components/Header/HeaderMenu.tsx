import { ReactNode } from "react";

type HeaderMenuProps = {
  children: ReactNode;
}

export default function HeaderMenu({ children }: Readonly<HeaderMenuProps>) {
  return (
    <nav className="rounded-lg sm:rounded-full bg-white dark:bg-quartz-d60/75 flex border border-gray-300 dark:border-quartz-d10 p-[2px] max-w-full">
      <ul className="flex items-center sm:gap-2 flex-wrap sm:flex-nowrap box-border">
        {children}
      </ul>
    </nav>
  );
}


