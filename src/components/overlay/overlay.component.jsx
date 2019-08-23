import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidebarOpen } from "../../redux/sidebar/sidebar.selectors";
import { CSSTransition } from "react-transition-group";

import { StyledOverlay } from "./overlay.styles";

const Overlay = ({ sidebarOpen, ...otherProps }) => (
  <CSSTransition in={sidebarOpen} classNames="fade" timeout={500} unmountOnExit>
    <StyledOverlay {...otherProps} />
  </CSSTransition>
);
const mapStateToProps = createStructuredSelector({
  sidebarOpen: selectSidebarOpen
});

export default connect(mapStateToProps)(Overlay);
