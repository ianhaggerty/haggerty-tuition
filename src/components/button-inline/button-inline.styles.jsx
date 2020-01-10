import styled from "styled-components";

import { MIXIN_FONT_MUSEO_BOLD } from "../../styles/mixins.styles";

export const StyledButtonInline = styled.span`
  /* ${MIXIN_FONT_MUSEO_BOLD} */
  color: ${props => props.color};
  font-weight: 500;

  cursor: pointer;

  margin-bottom: -0.4rem;
  border-bottom: 0.2rem solid rgba(0, 0, 0, 0);

  transition: 0.2s ease;
  &:hover {
    border-bottom: 0.2rem solid ${props => props.color};
  }
`;
