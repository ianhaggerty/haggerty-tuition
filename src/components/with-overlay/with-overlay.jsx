import React from "react";

import { CSSTransition } from "react-transition-group";

import {
  StyledOverlay,
  ClickableOverlay,
  TRANSITION_TIME
} from "./with-overlay.styles";

const withOverlay = WrappedComponent => {
  return ({ visible = false, onClickOverlay, ...props }) => (
    <CSSTransition
      in={visible}
      classNames="fade"
      timeout={TRANSITION_TIME}
      unmountOnExit
    >
      <StyledOverlay>
        <ClickableOverlay onClick={onClickOverlay} />
        <WrappedComponent {...props} />
      </StyledOverlay>
    </CSSTransition>
  );
};

export default withOverlay;