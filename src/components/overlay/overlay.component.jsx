import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import qs from "query-string";

import { CSSTransition } from "react-transition-group";

import { StyledOverlay } from "./overlay.styles";

class Overlay extends React.Component {
  isOverlayVisible = () => {
    const { location } = this.props;

    const currentQuery = location.search;
    const currentQueryParsed = qs.parse(currentQuery);
    return !!currentQueryParsed.overlay;
  };

  closeOverlay = () => {
    const { history, location } = this.props;

    const currentQuery = location.search;
    const currentQueryParsed = qs.parse(currentQuery);

    const newQueryParsed = {
      ...currentQueryParsed,
      overlay: undefined
    };

    const newQuery = qs.stringify(newQueryParsed);
    history.push({ search: newQuery });
  };

  render() {
    return (
      <CSSTransition
        in={this.isOverlayVisible()}
        classNames="fade"
        timeout={500}
        unmountOnExit
      >
        <StyledOverlay {...this.props} onClick={this.closeOverlay} />
      </CSSTransition>
    );
  }
}

const mapStateToProps = createStructuredSelector({});
export default withRouter(connect(mapStateToProps)(Overlay));
