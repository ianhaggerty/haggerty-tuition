import styled from "styled-components";

import { COLOR_GREY_DARK } from "../../styles/variables";

export const MapMarkerWrapper = styled.a`
  position: relative;
  opacity: 0.8;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  transform: translateX(-50%) translateY(-100%);

  cursor: pointer;
  transition: ease 0.2s;
`;

export const MapMarkerBox = styled.div`
  width: 33rem;
  height: 7rem;
  background-color: ${COLOR_GREY_DARK};
  border-radius: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapMarkerTick = styled.div`
  display: inline-block;
  border-top: solid ${COLOR_GREY_DARK} 3.1rem;
  border-left: solid transparent 1.5rem;
  border-right: solid transparent 1.5rem;
  transform: translateY(-0.1rem);
`;
