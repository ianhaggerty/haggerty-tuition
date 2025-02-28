import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTooltipActive } from "../../redux/tooltip/tooltip.selectors";

import {
  cancelActiveTimer,
  startActiveTimer,
  cancelInactiveTimer,
  startInactiveTimer
} from "../../redux/tooltip/tooltip.actions";

const mapStateToProps = createStructuredSelector({
  tooltipActive: selectTooltipActive
});

const mapDispatchToProps = dispatch => ({
  cancelActiveTimer: () => dispatch(cancelActiveTimer()),
  startActiveTimer: () => dispatch(startActiveTimer()),
  cancelInactiveTimer: () => dispatch(cancelInactiveTimer()),
  startInactiveTimer: () => dispatch(startInactiveTimer())
});

const withToolTipTimer = WrappedComponent => {
  class TooltipTimedComponent extends React.Component {
    mouseEnter = () => {
      const {
        tooltipActive,
        startActiveTimer,
        cancelInactiveTimer,
        onMouseEnter
      } = this.props;

      if (tooltipActive) {
        cancelInactiveTimer();
      } else {
        startActiveTimer();
      }

      if (onMouseEnter) {
        onMouseEnter();
      }
    };

    mouseLeave = () => {
      const {
        tooltipActive,
        cancelActiveTimer,
        startInactiveTimer,
        onMouseLeave
      } = this.props;

      if (tooltipActive) {
        startInactiveTimer();
      } else {
        cancelActiveTimer();
      }

      if (onMouseLeave) {
        onMouseLeave();
      }
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        />
      );
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(TooltipTimedComponent);
};

export default withToolTipTimer;
