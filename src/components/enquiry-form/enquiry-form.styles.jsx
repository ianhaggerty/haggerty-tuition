import styled from "styled-components";

import { COLOR_GREY_DARK } from "../../styles/variables";

export const EnquiryFormWrapper = styled.div`
  position: relative;

  background-color: ${COLOR_GREY_DARK};
  width: 90rem;
  height: 72rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EnquiryFormCloseButton = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;
