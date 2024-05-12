import theme from "@/app/styles/theme";
import RoundButton from "../RoundButton/RoundButton";
import styled from "styled-components";

type ComponentProps = {
  centerButton?: boolean;
};

const NavbarComponent = styled.nav`
  border: 1px solid ${theme.colors.black};
  border-radius: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.25rem;
  height: 100%;
`;

export default function Navbar({
  centerButton = true,
}: Readonly<ComponentProps>) {
  return (
    <NavbarComponent>
      <RoundButton
        icon="img/icons/arrow-up.png"
        iconSize={35}
        buttonSize={60}
        altText="Arrow up icon"
        animation="arrow-bounce"
      />
      {centerButton && (
        <RoundButton
          icon="img/icons/center.png"
          iconSize={25}
          buttonSize={60}
          altText="Center icon"
        />
      )}
      <RoundButton
        icon="img/icons/arrow-down.png"
        iconSize={35}
        buttonSize={60}
        altText="Arrow down icon"
        animation="arrow-bounce"
      />
    </NavbarComponent>
  );
}
