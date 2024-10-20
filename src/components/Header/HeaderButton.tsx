import { ReactNode, MouseEventHandler } from "react";

type HeaderButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
};

const defaultClassNames = `bg-white dark:bg-quartz-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-500 border-gray-300 rounded-full`;

export default function HeaderButton({ children, onClick, classNames = defaultClassNames }: Readonly<HeaderButtonProps>) {
  return (
    <button
      className={`${classNames} text-black dark:text-white font-semibold px-4 py-[2px] border`}
      onClick={onClick}>
      {children}
    </button>
  );
}