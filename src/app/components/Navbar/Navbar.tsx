import theme from "@/app/styles/theme";
import RoundButton from "../RoundButton/RoundButton";
import styled from "styled-components";

type ComponentProps = {
  centerButton?: boolean;
};

const NavbarComponent = styled.nav`
  border: 1px solid ${theme.colors.pureBlack};
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
    </NavbarComponent>
  );
}
