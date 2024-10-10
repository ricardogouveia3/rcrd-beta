import { ReactNode } from "react";

type HeaderMenuProps = {
  children: ReactNode;
}

export default function HeaderMenu({ children }: Readonly<HeaderMenuProps>) {
  return (
    <nav className="rounded-full bg-gray-800/75 flex border border-gray-700 p-[2px] max-w-lg">
      <ul className="flex gap-3 items-center">
        {children}
      </ul>
    </nav>
  );
}


