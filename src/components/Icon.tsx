import { flags, icons, logos } from "@assets/images";
import { FlagKey, IconKey, IconProps, LogoKey } from "../types/Icon";

export default function Icon({ name, className = "w-4 default-text-color" }: Readonly<IconProps>) {
  const icon =
    logos[name as LogoKey] ||
    icons[name as IconKey] ||
    flags[name as FlagKey];

  if (!icon) {
    console.warn(`Ícone "${name}" não encontrado.`);
    return null;
  }

  const IconComponent = icon;
  return <IconComponent className={className} />;
}
