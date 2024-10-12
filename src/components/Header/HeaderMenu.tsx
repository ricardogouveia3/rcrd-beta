import { ReactNode, useRef, useEffect, useState } from "react";

type HeaderMenuProps = {
  children: ReactNode;
  selectedMenuItem: string;
};

export default function HeaderMenu({ children, selectedMenuItem }: Readonly<HeaderMenuProps>) {
  const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", left: "0px" });
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const menuItems = menuRef.current?.children;
    if (menuItems) {
      Array.from(menuItems).forEach((menuItem) => {
        const button = menuItem.firstChild as HTMLButtonElement;
        if (button?.getAttribute("aria-current") === "page") {
          const { offsetWidth, offsetLeft } = button;
          setIndicatorStyle({
            width: `${offsetWidth}px`,
            left: `${offsetLeft}px`,
          });
        }
      });
    }
  }, [selectedMenuItem]);

  return (
    <nav className="relative rounded-lg sm:rounded-full bg-white dark:bg-quartz-d60/75 flex border border-gray-300 dark:border-quartz-d10 p-[2px] max-w-full overflow-hidden">
      <ul ref={menuRef} className="relative flex items-center sm:gap-2 flex-wrap sm:flex-nowrap box-border w-full">
        {children}
        <div
          className="hidden lg:inline-block absolute bottom-0 lg:h-full rounded-full transition-all duration-300 ease-in-out border border-quartz-l60 dark:border-quartz-d10 bg-gray-300 dark:bg-quartz-d70 z-0"
          style={{ ...indicatorStyle }}
        />
      </ul>
    </nav>
  );
}
