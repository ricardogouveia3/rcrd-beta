import { ReactNode, MouseEventHandler } from "react";

type HeaderButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function HeaderButton({ children, onClick }: Readonly<HeaderButtonProps>) {
  return (
    <button
      className="text-white text-xs font-semibold rounded-full px-4 py-1 bg-gray-800/65 hover:bg-gray-700/85 border border-gray-500"
      onClick={onClick}>
      {children}
    </button>
  );
}