import React from "react";
import { Button, ButtonIcon, ButtonTooltip } from "../button";

import { StyledNavigator, RelativeDiv } from "./navigator.styles";

class Navigator extends React.Component {
  state = {
    reveal: "none"
  };

  hide = () => {
    this.setState({
      reveal: "none"
    });
  };

  reveal = name => {
    this.setState({
      reveal: name
    });
  };

  render() {
    const { hidden } = this.state;
    return (
      <StyledNavigator>
        <RelativeDiv className="u-margin-right-small">
          <ButtonTooltip color="grey-light" alignment="center">
            Previous
          </ButtonTooltip>

          <Button backgroundColor="grey-light" active={true}>
            <ButtonIcon name="arrow-round-back" />
          </Button>
        </RelativeDiv>
        <RelativeDiv className="u-margin-right-small">
          <ButtonTooltip color="primary" alignment="center">
            Get in touch
          </ButtonTooltip>
          <Button backgroundColor="primary" active={true}>
            <ButtonIcon name="mail" />
          </Button>
        </RelativeDiv>
        <RelativeDiv>
          <ButtonTooltip color="grey-light">Next</ButtonTooltip>
          <Button backgroundColor="grey-light" active={true}>
            <ButtonIcon name="arrow-round-forward" />
          </Button>
        </RelativeDiv>
      </StyledNavigator>
    );
  }
}
export default Navigator;

/*
<div
          style={{
            flexGrow: 1,
            flexBasis: 0,
            display: "flex",
            justifyContent: "flex-end"
          }}
        />
<ButtonSlide
            width="7.8rem"
            hidden={this.state.reveal !== "previous"}
            onMouseEnter={() => this.reveal("previous")}
            onMouseLeave={() => this.hide()}
          >
            <ButtonIcon name="arrow-round-back" />
            <ButtonText>&nbsp;&nbsp;Previous</ButtonText>
          </ButtonSlide>
        </div>

        <ButtonSlide
          width="7.2rem"
          style={{ margin: "0 1rem" }}
          hidden={this.state.reveal !== "enquire"}
          onMouseEnter={() => this.reveal("enquire")}
          onMouseLeave={() => this.hide()}
        >
          <ButtonIcon name="mail" />
          <ButtonText>&nbsp;&nbsp;Enquire</ButtonText>
        </ButtonSlide>
        <div
          style={{
            flexGrow: 1,
            flexBasis: 0,
            display: "flex"
          }}
        >
          <ButtonSlide
            width="5rem"
            hidden={this.state.reveal !== "next"}
            onMouseEnter={() => this.reveal("next")}
            onMouseLeave={() => this.hide()}
          >
            <ButtonText>&nbsp;&nbsp;Next</ButtonText>
            <ButtonIcon name="arrow-round-forward" />
          </ButtonSlide>
          */
