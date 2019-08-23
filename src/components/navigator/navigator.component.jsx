import React from "react";
import { ButtonSlide, ButtonText, ButtonIcon } from "../button";

class Navigator extends React.Component {
  render() {
    return (
      <nav>
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
      </nav>
    );
  }
}
export default Navigator;
