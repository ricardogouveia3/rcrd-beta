import styles from "./Iconbar.module.css";
import RoundLink from "../RoundLink/RoundLink";

export default function IconBar() {
  return (
    <nav className={styles.iconBar}>
      <RoundLink
        icon="/mail.png"
        iconSize={30}
        buttonSize={60}
        altText="Mail icon"
        linkUrl={"/"}
      />
      <RoundLink
        icon="/linkedin.png"
        iconSize={30}
        buttonSize={60}
        backgroundColor="#4A4A4A"
        altText="LinkedIn icon"
        linkUrl={"/"}
      />
      <RoundLink
        icon="/github.png"
        iconSize={25}
        buttonSize={60}
        backgroundColor="#4ECDC4"
        altText="Github icon"
        linkUrl={"/"}
      />
    </nav>
  );
}
