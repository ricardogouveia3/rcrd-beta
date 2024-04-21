import Image from "next/image";
import styles from "./Header.module.css";
import RoundButton from "../RoundButton/RoundButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <Image
          className={styles.headerLogo}
          src="/logo.png"
          width={60}
          height={60}
          alt="RCRD logo"
        />
      </a>
      <ul className={styles.headerNav}>
        <li>
          <a href="/" className={styles.headerNavLink}>
            about
          </a>
        </li>
        <li>
          <a href="/" className={styles.headerNavLink}>
            portfolio
          </a>
        </li>
        <li>
          <a href="/" className={styles.headerNavLink}>
            labs
          </a>
        </li>
        <li>
          <a href="/" className={styles.headerNavLink}>
            posts
          </a>
        </li>
        <li>
          <a href="/" className={styles.headerNavLink}>
            contact
          </a>
        </li>
      </ul>
      <RoundButton
        icon={"/settings.png"}
        buttonSize={60}
        iconSize={35}
        altText={"Gear icon"}
      />
    </header>
  );
}
