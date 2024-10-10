import { ReactNode } from "react";

type HeaderMenuProps = {
  children: ReactNode;
}

export default function HeaderMenu({ children }: Readonly<HeaderMenuProps>) {
  return (
    <nav className="rounded-full bg-white dark:bg-quartz-d60/75 flex border border-gray-300 dark:border-quartz-d10 p-[2px] max-w-lg">
      <ul className="flex gap-3 items-center">
        {children}
      </ul>
    </nav>
  );
}


