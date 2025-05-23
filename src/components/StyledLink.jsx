import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLetter = styled.span`
  color: #e5e5e5;
  font-size: 4rem;
  font-weight: 400;
  /* transition-property: color, text-shadow; */
  /* transition-duration: 0.25s; */
  transition: all 0.25s;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  font-size: 3em;
  letter-spacing: 0.08em;
  cursor: pointer;
  font-weight: 500;

  &:hover ${StyledLetter} {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #fff;
    font-size: 4.4rem;
  }
`;

export const StyledLink = ({ children, to }) => {
  const spans = children.split("").map((letter, i) => (
    <StyledLetter
      key={i}
      style={{
        transitionDelay: `${i * 40}ms`,
      }}
    >
      {letter}
    </StyledLetter>
  ));
  return (
    <li>
      <StyledNavLink to={to}>{spans}</StyledNavLink>
    </li>
  );
};
