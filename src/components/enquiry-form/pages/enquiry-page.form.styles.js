import styled, { css } from "styled-components";

import {
  COLOR_WHITE_PURE,
  COLOR_GREY_DARK,
  COLOR_SECONDARY,
  COLOR_ACCENT
} from "../../../styles/variables";
import {
  MIXIN_FONT_CASLON_NORMAL,
  MIXIN_FONT_MUSEO_NORMAL
} from "../../../styles/mixins.styles";

export const FormPageWrap = styled.div``;

export const inputStyles = css`
  border-radius: 0.4rem;
  height: 100%;
  outline: none;
  border: none;
  ${MIXIN_FONT_MUSEO_NORMAL}
  font-size: 2.3rem;
  padding: 0 1.6rem;

  box-shadow: 0 0.4rem 3rem rgba(255, 255, 255, 0.2);
  color: ${COLOR_GREY_DARK};
`;

const MIXIN_ERROR_TRANSITION = css`
  transition: 0.3s ease;
`;

export const ContactPageGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr 1.5rem 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  align-items: center;
  margin-top: 3.8rem;

  input {
    ${inputStyles}
    padding: 0 1.6rem;

    &.error {
      background-color: ${COLOR_ACCENT};
    }
  }

  textarea {
    ${inputStyles}
    padding: 1.6rem;

    &.error {
      background-color: ${COLOR_ACCENT};
    }
  }
`;

export const LocationPageGrid = styled(ContactPageGrid)`
  grid-template-rows: repeat(3, 1fr);
`;

export const DetailsPageGrid = styled(ContactPageGrid)`
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: 1fr;
`;

export const LabelWrap = styled.div``;

export const Label = styled.label`
  ${MIXIN_FONT_CASLON_NORMAL}
  color: ${COLOR_WHITE_PURE};
  font-size: 2.8rem;
  text-align: right;
  padding-top: .9rem;
  display: block;

  ${MIXIN_ERROR_TRANSITION}

  .error > & {
    transform: translateY(-1.1rem);
  }
`;

export const LabelItalic = styled(Label)`
  font-style: italic;
`;

export const ErrorMessage = styled.label`
  ${MIXIN_FONT_MUSEO_NORMAL}
  color: ${COLOR_SECONDARY};
  font-size: 2rem;
  display: block;
  text-align: right;
  height: 0;
  opacity: 0;
  position: relative;
  bottom: 1.6rem;

  ${MIXIN_ERROR_TRANSITION}

  .error > & {
    opacity: 1;
    transform: translateY(-1.1rem);
  }
`;

export const RadioGrid = styled(ContactPageGrid)`
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1rem;
  margin-top: 2rem;
`;

export const RadioItem = styled(ContactPageGrid)`
  grid-template-rows: 1fr;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 0;

  input {
    display: none;
  }

  input ~ * {
    transition: 0.3s ease;
  }

  input:not(:checked) ~ * {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    &:hover ~ * {
      opacity: 1;
    }
  }

  input:checked ~ * {
    color: ${COLOR_ACCENT};

    & > svg {
      fill: ${COLOR_ACCENT} !important;
    }
  }

  label {
    cursor: pointer;
  }
`;

export const RadioIconWrap = styled.label`
  text-align: right;

  height: 100%;
  position: relative;
  justify-self: end;
  padding-top: 0.5rem;

  svg {
    transition: 0.3s ease;

    &:last-child {
      position: absolute;
      right: 0;
    }
  }

  input:checked + & {
    svg:first-child {
      opacity: 0;
    }
  }

  input:not(:checked) + & {
    svg:last-child {
      opacity: 0;
    }
  }
`;

export const RadioLabel = styled.label`
  ${MIXIN_FONT_MUSEO_NORMAL}
  color: ${COLOR_SECONDARY};
  font-size: 2.2rem;
`;
