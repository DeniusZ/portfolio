import styled from "styled-components";
import { StyledLink } from "../components/StyledLink";

const Main = styled.main`
  min-height: 100dvh;
  background-color: #2b2b2b;
  position: relative;
  width: 100%;
`;

const StyledList = styled.ul``;

const StyledNav = styled.nav`
  width: 90rem;
  margin: 0 auto;
  height: 100%;
  padding-top: 25%;
`;

export const Homepage = () => {
  return (
    <Main>
      <StyledNav>
        <StyledList>
          <StyledLink to="about">about</StyledLink>
          <StyledLink to="styles">styles</StyledLink>
          <StyledLink to="photos">photos</StyledLink>
          <StyledLink to="contacts">contacts</StyledLink>
        </StyledList>
      </StyledNav>
    </Main>
  );
};
