import theme from "@/app/styles/theme";
import RoundLink from "../RoundLink/RoundLink";
import styled from "styled-components";

const IconBarComponent = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing.gap25};
  padding: 0.25rem;
`;

export default function IconBar() {
  return (
    <IconBarComponent>
      <RoundLink
        icon="img/icons/mail.png"
        iconSize={30}
        buttonSize={60}
        altText="Mail icon"
        linkUrl={"/"}
      />
      <RoundLink
        icon="img/logos/linkedin.png"
        iconSize={30}
        buttonSize={60}
        backgroundColor={theme.colors.quartz}
        altText="LinkedIn icon"
        linkUrl={"https://www.linkedin.com/in/ricardogouveia3/"}
        newTab={true}
      />
      <RoundLink
        icon="img/logos/github.png"
        iconSize={25}
        buttonSize={60}
        backgroundColor={theme.colors.mediumTurquoise}
        altText="Github icon"
        linkUrl={"https://github.com/ricardogouveia3"}
        newTab={true}
      />
    </IconBarComponent>
  );
}
