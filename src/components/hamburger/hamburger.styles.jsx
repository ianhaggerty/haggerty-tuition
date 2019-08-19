import styled from "styled-components";
import { parser } from "css-math";

export const Wrap = styled.div`
  width: ${props => props.theme.sidebarWidthClosed};
  height: ${props => props.theme.sidebarWidthClosed};
  position: relative;
  cursor: pointer;
`;

const lineLength = "4rem";
const lineWidth = ".4rem";
const borderRadius = parser(`${lineWidth} / 2`);
const translateY = "1.4rem";

export const Line = styled.div`
  background-color: ${props => props.theme.colorWhitePure};
  border-radius: ${borderRadius};

  height: ${lineWidth};
  width: ${lineLength};

  position: absolute;
  left: ${props =>
    parser(`${props.theme.sidebarWidthClosed} / 2 - ${lineLength} / 2`)};
  top: ${props =>
    parser(`${props.theme.sidebarWidthClosed} / 2 - ${lineWidth} / 2`)};

  transition: 0.5s ease;

  ${Wrap}.close & {
    &:first-child {
      transform: translateY(0) rotate(45deg);
    }

    &:nth-child(2) {
      width: 0rem;
      &:nth-child(2) {
        left: ${props => parser(`${props.theme.sidebarWidthClosed} / 2`)};
      }
    }

    &:last-child {
      transform: translateY(0) rotate(-45deg);
    }
  }

  ${Wrap}.menu & {
    &:first-child {
      transform: translateY(-${translateY});
    }

    &:last-child {
      transform: translateY(${translateY});
    }
  }

  ${Wrap}.arrow-left & {
    &:first-child {
      transform-origin: left;
      transform: rotate(-40deg) scaleX(0.7) translateY(1px);
    }

    &:last-child {
      transform-origin: left;
      transform: rotate(40deg) scaleX(0.7) translateY(-1px);
    }
  }
`;
