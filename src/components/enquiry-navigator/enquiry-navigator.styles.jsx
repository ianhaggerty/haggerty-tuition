import styled, { css } from "styled-components";
import {
  COLOR_GREY_LIGHT,
  COLOR_WHITE_PURE,
  COLOR_TRANSPARENT
} from "../../styles/variables";

export const EnquiryNavigatorWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const PageIndicatorWrapper = styled.div`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const notAvailableStyles = css`
  background-color: ${COLOR_TRANSPARENT};
  cursor: not-allowed;
`;

const radius = "1.5rem";
export const PageIndicator = styled.div`
  border: 0.2rem solid white;
  border-radius: 100%;
  height: ${radius};
  width: ${radius};
  margin: 0 1.4rem;

  cursor: pointer;

  background-color: ${props =>
    props.active ? COLOR_WHITE_PURE : COLOR_GREY_LIGHT};

  ${props => (!props.available ? notAvailableStyles : "")}
`;
