import { ReactNode } from "react";

type SocialLinkProps = {
  children: ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function SocialLink({ children, icon: Icon, link }: Readonly<SocialLinkProps>) {
  return (
    <a href={link} target="_blank" className="flex items-center px-3 py-2 border rounded-full gap-2 justify-center border-quartz-l80 dark:border-quartz-d10 hover:border-quartz-l90 hover:dark:border-quartz-d20 hover:bg-gray-300 hover:dark:bg-quartz-d70">
      {Icon && <Icon className="w-4 text-black dark:text-white" />}
      <span className="text-xs font-semibold text-black dark:text-white">{children}</span>
    </a>
  );
}
