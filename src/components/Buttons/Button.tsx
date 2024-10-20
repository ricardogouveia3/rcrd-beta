import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disabled: boolean;
}

export default function Button({ children, type, disabled }: Readonly<ButtonProps>) {
  const disabledClassnames = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-3 px-5 text-sm font-medium text-center text-black dark:text-white rounded-lg w-full hover-background card-border ${disabledClassnames}`}>
      {children}
    </button>
  );
}
