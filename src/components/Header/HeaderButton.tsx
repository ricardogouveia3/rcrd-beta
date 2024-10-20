import { ReactNode, MouseEventHandler } from "react";

type HeaderButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
};

const defaultClassNames = `bg-white dark:bg-quartz-200 hover:bg-quartz-900 dark:hover:bg-quartz-500 dark:border-quartz-9500 border-quartz-800 rounded-full`;

export default function HeaderButton({ children, onClick, classNames = defaultClassNames }: Readonly<HeaderButtonProps>) {
  return (
    <button
      className={`${classNames} text-black dark:text-white font-semibold px-4 py-[2px] border`}
      onClick={onClick}>
      {children}
    </button>
  );
}