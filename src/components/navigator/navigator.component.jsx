import React from "react";
import { Button, ButtonIcon, ButtonTooltip } from "../button";

import { StyledNavigator } from "./navigator.styles";
import withToolTipTimer from "../with-tooltip-timer/with-tooltip-timer";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTooltipActive } from "../../redux/tooltip/tooltip.selectors";
import { CSSTransition } from "react-transition-group";

import ButtonWithTooltip from "./button-with-tool-tip.component";

const ButtonWithTooltipTimer = withToolTipTimer(Button);

class Navigator extends React.Component {
  render() {
    return (
      <StyledNavigator>
        <ButtonWithTooltip
          backgroundColor="grey-light"
          tooltip="Previous"
          icon="arrow-round-back"
          active={false}
          className="u-margin-right-small"
        />
        <ButtonWithTooltip
          backgroundColor="primary"
          tooltip="Get in touch"
          icon="mail"
          active={true}
          className="u-margin-right-small"
        />
        <ButtonWithTooltip
          backgroundColor="grey-light"
          tooltip="Next"
          icon="arrow-round-forward"
          active={true}
        />
      </StyledNavigator>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tooltipActive: selectTooltipActive
});

export default connect(mapStateToProps)(Navigator);
