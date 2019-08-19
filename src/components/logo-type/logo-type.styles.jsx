import styled from "styled-components";

export const LogoBox = styled.header`
  text-align: center;
  margin-top: 4rem;
  grid-column: 1 / -1;
  transform-origin: top;
  transform: scale(1.08);
`;

export const Title = styled.h1`
  font-family: adobe-caslon-pro, serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 6.4rem;
  margin-right: -6.4rem;
  color: ${props => props.theme.colorGreyDark};
`;

export const Subtitle = styled.h1`
  font-family: adobe-caslon-pro, serif;
  font-weight: 600;
  font-style: italic;
  font-size: 6.4rem;
  margin-top: -3.2rem;
  color: ${props => props.theme.colorGreyDark};
`;
