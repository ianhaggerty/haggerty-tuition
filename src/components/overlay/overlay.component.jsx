import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOverlayVisible } from "../../redux/overlay/overlay.selectors";

import { CSSTransition } from "react-transition-group";

import { StyledOverlay } from "./overlay.styles";

const Overlay = ({ overlayVisible, ...otherProps }) => (
  <CSSTransition
    in={overlayVisible}
    classNames="fade"
    timeout={500}
    unmountOnExit
  >
    <StyledOverlay {...otherProps} />
  </CSSTransition>
);
const mapStateToProps = createStructuredSelector({
  overlayVisible: selectOverlayVisible
});

export default connect(mapStateToProps)(Overlay);
