import styled from "styled-components";

import { MIXIN_FONT_CASLON_NORMAL } from "../../../styles/mixins.styles";
import { COLOR_WHITE_PURE, COLOR_ACCENT } from "../../../styles/variables";

import { inputStyles } from "./enquiry-page.form.styles";

export const DetailsWrap = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const DetailsParagraph = styled.p`
  color: ${COLOR_WHITE_PURE};
  font-size: 1.9rem;
  line-height: 2.3rem;
  margin-top: 0.7rem;
`;

export const ParagraphBreak = styled.div`
  height: 1.2rem;
`;

export const DetailsHeading = styled.h2`
  color: ${COLOR_ACCENT};
  ${MIXIN_FONT_CASLON_NORMAL}
  font-size: 2.8rem;
`;

export const DetailsSubheading = styled(DetailsParagraph)`
  color: ${COLOR_ACCENT};
`;

export const LeftCol = styled.div`
  display: inline-block;
  width: 18rem;

  text-align: right;
  margin-left: 4rem;
  padding-top: 0.3rem;
`;

export const CenterCol = styled.div`
  display: inline-block;
  margin: 0 2rem;

  textarea {
    ${inputStyles}
    width: 36rem;
    height: 46rem;
    padding-top: 1.2rem;
    resize: none;

    font-size: 1.9rem;
    line-height: 2.5rem;
  }
`;

export const RightCol = styled.div`
  display: inline-block;
  width: 22rem;
  padding-top: 0.3rem;
`;
