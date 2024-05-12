import SlideMain from "../../components/SlideMain/SlideMain";
import { ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
}

export default function SectionMain({ children }: Readonly<ComponentProps>) {
  return <SlideMain>{children}</SlideMain>;
}
