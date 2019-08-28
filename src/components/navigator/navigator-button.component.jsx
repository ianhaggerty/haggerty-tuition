import React, { useState } from "react";

import { Button, ButtonIcon, ButtonTooltip } from "../button";

import { ButtonWithTooltip } from "./navigator.styles";
import withToolTipTimer from "../with-tooltip-timer/with-tooltip-timer";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTooltipActive } from "../../redux/tooltip/tooltip.selectors";

import { CSSTransition } from "react-transition-group";

const ButtonWithTimer = withToolTipTimer(Button);

const NavigatorButton = props => {
  const [hover, setHover] = useState(false);

  return (
    <ButtonWithTooltip {...props}>
      <CSSTransition
        in={props.tooltipActive && hover && props.active}
        classNames="tooltip"
        timeout={400}
        unmountOnExit
      >
        <ButtonTooltip color={props.backgroundColor}>
          {props.tooltip}
        </ButtonTooltip>
      </CSSTransition>
      {/* If not active, just use a regular button */}
      {props.active ? (
        <ButtonWithTimer
          backgroundColor={props.backgroundColor}
          active={props.active}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <ButtonIcon name={props.icon} />
        </ButtonWithTimer>
      ) : (
        <Button
          backgroundColor={props.backgroundColor}
          active={props.active}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <ButtonIcon name={props.icon} />
        </Button>
      )}
    </ButtonWithTooltip>
  );
};

const mapStateToProps = createStructuredSelector({
  tooltipActive: selectTooltipActive
});

export default connect(mapStateToProps)(NavigatorButton);
