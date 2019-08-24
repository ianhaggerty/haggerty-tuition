import React from "react";
import styled from "styled-components";

import Icon from "../icon/icon.component";

const StyledIcon = styled(Icon)`
  /* width: calc(${props => props.theme.iconWidth} * 0.85) !important; */

  &:not(:only-child):first-child {
    margin-left: 0.5rem;
  }

  &:not(:only-child):last-child {
    margin-right: 0.5rem;
  }
`;

const ButtonIcon = props => <StyledIcon {...props} />;

export default ButtonIcon;
