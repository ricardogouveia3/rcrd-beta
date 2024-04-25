import RoundButton from "../RoundButton/RoundButton";
import styled, { useTheme } from "styled-components";

type ComponentProps = {
  centerButton?: boolean;
};

export default function Navbar({ centerButton }: Readonly<ComponentProps>) {
  const theme = useTheme();

  const Navbar = styled.nav`
    border: 1px solid ${theme.colors.pureBlack};
    border-radius: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.25rem;
    height: 100%;
  `;

  return (
    <Navbar>
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
    </Navbar>
  );
}

Navbar.defaultProps = {
  centerButton: true,
};
