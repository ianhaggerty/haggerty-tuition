import React from "react";

import { COLOR_PRIMARY, COLOR_GREY_LIGHT } from "../../styles/variables";

import ButtonWithTooltip from "../navigator/navigator-button.component";
import {
  EnquiryNavigatorWrapper,
  PageIndicatorWrapper,
  PageIndicator
} from "./enquiry-navigator.styles";

const EnquiryNavigator = ({ currentPage, completedPage, pages }) => {
  return (
    <EnquiryNavigatorWrapper>
      <ButtonWithTooltip
        backgroundColor={COLOR_GREY_LIGHT}
        tooltip="Previous"
        icon="arrow-round-back"
        active={false}
      />
      <PageIndicatorWrapper>
        <PageIndicator active={true} available={true} />
        <PageIndicator available={true} />
        <PageIndicator available={false} />
      </PageIndicatorWrapper>
      <ButtonWithTooltip
        backgroundColor={COLOR_PRIMARY}
        tooltip="Next"
        icon="arrow-round-forward"
        active={true}
      />
    </EnquiryNavigatorWrapper>
  );
};

export default EnquiryNavigator;
