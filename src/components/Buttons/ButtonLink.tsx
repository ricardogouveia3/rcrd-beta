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
      className={`flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-black dark:text-white ${roundClassName} w-fit hover:bg-quartz-950 dark:hover:bg-quartz-100 border card-border`}
    >
      {children}
    </a>
  );
}
