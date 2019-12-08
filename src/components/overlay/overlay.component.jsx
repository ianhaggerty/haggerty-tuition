import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransition } from "react-transition-group";

import {
  selectOverlay,
  selectOverlayOpen,
  selectSidebarOpen
} from "../../redux/query-string/query-string.selectors";
import { closeOverlay } from "../../redux/query-string/query-string.actions";

import { StyledOverlay } from "./overlay.styles";

class Overlay extends React.Component {
  render() {
    const { overlayOpen, closeOverlay, sidebarOpen } = this.props;

    return (
      <CSSTransition
        in={overlayOpen}
        classNames="fade"
        timeout={500}
        unmountOnExit
      >
        <StyledOverlay {...this.props} onClick={closeOverlay} />
      </CSSTransition>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  overlay: selectOverlay,
  overlayOpen: selectOverlayOpen,
  sidebarOpen: selectSidebarOpen
});

const mapDispatchToProps = dispatch => ({
  closeOverlay: () => dispatch(closeOverlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
