import { ReactNode, MouseEventHandler } from "react";

type HeaderButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function HeaderButton({ children, onClick }: Readonly<HeaderButtonProps>) {
  return (
    <button
      className="text-black dark:text-white text-xs font-semibold rounded-full px-4 py-1 bg-white dark:bg-gray-800/65 hover:bg-gray-100/85 dark:hover:bg-gray-700/85 border dark:border-gray-500 border-gray-300"
      onClick={onClick}>
      {children}
    </button>
  );
}