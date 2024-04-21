import { ReactNode } from "react";
import styles from "./SlideMain.module.css";

interface ComponentProps {
  children?: ReactNode;
}

export default function Home({ children }: Readonly<ComponentProps>) {
  return <section className={styles.section}>{children}</section>;
}
