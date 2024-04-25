import RoundLink from "../RoundLink/RoundLink";
import styled, { useTheme } from "styled-components";

export default function IconBar() {
  const theme = useTheme();

  const IconBar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.spacing.gap25};
    padding: 0.25rem;
  `;

  return (
    <IconBar>
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
        backgroundColor={theme.colors.quartz}
        altText="LinkedIn icon"
        linkUrl={"/"}
      />
      <RoundLink
        icon="/github.png"
        iconSize={25}
        buttonSize={60}
        backgroundColor={theme.colors.mediumTurquoise}
        altText="Github icon"
        linkUrl={"/"}
      />
    </IconBar>
  );
}
