import React from "react";

import { COLOR_PRIMARY, COLOR_GREY_LIGHT } from "../../styles/variables";

import Button from "../button/button.component";
import ButtonIcon from "../button/button-icon.component";
import {
  EnquiryNavigatorWrapper,
  PageIndicatorWrapper,
  PageIndicator
} from "./enquiry-navigator.styles";

const EnquiryNavigator = ({
  currentPage,
  completedPage,
  pages,
  onClickNext,
  onClickPrevious
}) => {
  return (
    <EnquiryNavigatorWrapper>
      <Button
        backgroundColor={COLOR_GREY_LIGHT}
        active={false}
        onClick={onClickPrevious}
      >
        <ButtonIcon name="arrow-round-back" />
      </Button>
      <PageIndicatorWrapper>
        <PageIndicator active={true} available={true} />
        <PageIndicator available={true} />
        <PageIndicator available={false} />
      </PageIndicatorWrapper>
      <Button
        backgroundColor={COLOR_PRIMARY}
        icon="arrow-round-forward"
        active={true}
        onClick={onClickNext}
      >
        <ButtonIcon name="arrow-round-forward" />
      </Button>
    </EnquiryNavigatorWrapper>
  );
};

export default EnquiryNavigator;
