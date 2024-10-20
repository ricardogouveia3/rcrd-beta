import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode,
  link: string,
  round?: 'sm' | 'md' | 'lg' | 'full',
}

export default function ButtonLink({ children, link, round }: Readonly<ButtonProps>) {
  let roundClassName = '';

  switch (round) {
    case 'lg':
      roundClassName = 'rounded-lg';
      break;
    case 'md':
      roundClassName = 'rounded-md';
      break;
    case 'sm':
      roundClassName = 'rounded';
      break;
    case 'full':
      roundClassName = 'rounded-full';
      break;
    default:
      break;
  }

  return (
    <a
      href={link}
      target="_blank"
      className={`flex justify-center items-center py-2 px-4 text-sm font-medium text-center default-text-color ${roundClassName} w-fit hover-background border default-border`}
    >
      {children}
    </a>
  );
}
