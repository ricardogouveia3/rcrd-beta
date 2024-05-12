import Image from "next/image";
import { styled } from "styled-components";

import RoundButton from "../RoundButton/RoundButton";
import theme from "@/app/styles/theme";

const HeaderComponent = styled.header`
  border: 1px solid ${theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  margin-bottom: ${theme.spacing.gap100};
  align-items: center;
  border-radius: 10vh;
`;

const LogoContainer = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Image)`
  margin-left: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing.gap50};
  text-transform: uppercase;
  text-decoration: none;
  list-style-type: none;
`;

const NavListLink = styled.a`
  color: ${theme.colors.quartz};
  text-decoration: none;
  &:hover {
    text-decoration: line-through;
  }
`;

const HeaderOptionsButton = styled.a`
  margin-right: 0.125rem;
  border-radius: 5vh;
  padding: 0.25rem;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <LogoContainer href="/">
        <Logo src="img/logos/logo.png" width={60} height={60} alt="RCRD logo" />
      </LogoContainer>
      <NavList>
        <li>
          <NavListLink href="/">about</NavListLink>
        </li>
        <li>
          <NavListLink href="/">portfolio</NavListLink>
        </li>
        <li>
          <NavListLink href="/">labs</NavListLink>
        </li>
        <li>
          <NavListLink href="/">posts</NavListLink>
        </li>
        <li>
          <NavListLink href="/">contact</NavListLink>
        </li>
      </NavList>
      <RoundButton
        icon={"img/icons/settings.png"}
        buttonSize={60}
        iconSize={35}
        altText={"Gear icon"}
        animation="gear-rotate"
      />
    </HeaderComponent>
  );
}
