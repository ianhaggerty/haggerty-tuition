import styled from "styled-components";
import { math } from "polished";

import {
  SIDEBAR_TRANSITION,
  SIDEBAR_WIDTH_CLOSED,
  COLOR_WHITE_PURE,
} from "../../styles/variables";

export const Wrap = styled.div`
  width: ${SIDEBAR_WIDTH_CLOSED};
  height: ${SIDEBAR_WIDTH_CLOSED};
  position: relative;
  cursor: pointer;
  display: inline-block;
`;

const lineLength = "4rem";
const lineWidth = "0.4rem";
const borderRadius = math(`${lineWidth} / 2`);
const translateY = "1.4rem";

export const Line = styled.div`
  background-color: ${COLOR_WHITE_PURE};
  border-radius: ${borderRadius};

  height: ${lineWidth};
  width: ${lineLength};

  position: absolute;
  left: calc(${SIDEBAR_WIDTH_CLOSED} / 2 - ${lineLength} / 2);
  top: calc(${SIDEBAR_WIDTH_CLOSED} / 2 - ${lineWidth} / 2);

  transition: ${SIDEBAR_TRANSITION};

  ${Wrap}.close & {
    &:first-child {
      transform: translateY(0) rotate(45deg);
    }

    &:nth-child(2) {
      width: 0rem;
      &:nth-child(2) {
        left: calc(${SIDEBAR_WIDTH_CLOSED} / 2);
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
