import styled from "styled-components";
import { COLOR_GREY_MEDIUM } from "../../styles/variables";
import { MIXIN_FONT_MUSEO_NORMAL } from "../../styles/mixins.styles";

export const Paragraph = styled.p`
  ${MIXIN_FONT_MUSEO_NORMAL}
  color: ${COLOR_GREY_MEDIUM};

  font-size: 1.8rem;
  line-height: 2.7rem;
  margin-bottom: 2rem;
`;
