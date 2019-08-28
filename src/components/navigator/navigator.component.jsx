import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTooltipActive } from "../../redux/tooltip/tooltip.selectors";

import ButtonWithTooltip from "./navigator-button.component";
import { StyledNavigator } from "./navigator.styles";

import { COLOR_PRIMARY, COLOR_GREY_LIGHT } from "../../styles/variables";

class Navigator extends React.Component {
  render() {
    return (
      <StyledNavigator>
        <ButtonWithTooltip
          backgroundColor={COLOR_GREY_LIGHT}
          tooltip="Previous"
          icon="arrow-round-back"
          active={false}
        />
        <ButtonWithTooltip
          backgroundColor={COLOR_PRIMARY}
          tooltip="Get in touch"
          icon="mail"
          active={true}
        />
        <ButtonWithTooltip
          backgroundColor={COLOR_GREY_LIGHT}
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
