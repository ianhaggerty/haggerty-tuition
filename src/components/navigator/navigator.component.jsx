import React from "react";
import { ButtonSlide, ButtonText, ButtonIcon } from "../button";

import { StyledNavigator } from "./navigator.styles";

class Navigator extends React.Component {
  render() {
    return (
      <StyledNavigator>
        <ButtonSlide>
          <ButtonIcon name="arrow-round-back" />
          <ButtonText>Previous</ButtonText>
        </ButtonSlide>
        <ButtonSlide>
          <ButtonIcon name="mail" />
          <ButtonText>Enquire</ButtonText>
        </ButtonSlide>
        <ButtonSlide>
          <ButtonIcon name="arrow-round-forward" />
          <ButtonText>Next</ButtonText>
        </ButtonSlide>
      </StyledNavigator>
    );
  }
}
export default Navigator;
