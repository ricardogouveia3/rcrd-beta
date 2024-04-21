import styles from "./Navbar.module.css";
import RoundButton from "../RoundButton/RoundButton";

type ComponentProps = {
  centerButton?: boolean;
};

export default function Navbar({ centerButton }: Readonly<ComponentProps>) {
  return (
    <nav className={styles.navbar}>
      <RoundButton
        icon="/arrow-up.png"
        iconSize={35}
        buttonSize={60}
        altText="Arrow up icon"
      />
      {centerButton && (
        <RoundButton
          icon="/center.png"
          iconSize={25}
          buttonSize={60}
          altText="Center icon"
        />
      )}
      <RoundButton
        icon="/arrow-down.png"
        iconSize={35}
        buttonSize={60}
        altText="Arrow down icon"
      />
    </nav>
  );
}

Navbar.defaultProps = {
  centerButton: true,
};
