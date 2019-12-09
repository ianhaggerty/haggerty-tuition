import { css } from "styled-components";

export const MIXIN_CENTER_FLEX_CHILDREN = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MIXIN_CENTER_ABSOLUTE_SELF = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MIXIN_VERTICAL_CENTER_ABSOLUTE_SELF = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const MIXIN_FONT_MUSEO_BOLD = css`
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
`;

export const MIXIN_FONT_MUSEO_NORMAL = css`
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 300;
  font-style: normal;
`;

export const MIXIN_FONT_CASLON_NORMAL = css`
  font-family: adobe-caslon-pro, serif;
  font-weight: 400;
  font-style: normal;
`;

export const MIXIN_FONT_CASLON_BOLD_ITALIC = css`
  font-family: adobe-caslon-pro, serif;
  font-weight: 600;
  font-style: italic;
`;

export const MIXIN_FONT_CASLON_ITALIC = css`
  font-family: adobe-caslon-pro, serif;
  font-weight: 400;
  font-style: italic;
`;

export const MIXIN_FONT_CASLON_SEMIBOLD = css`
  font-family: adobe-caslon-pro, serif;
  font-weight: 600;
  font-style: normal;
`;
