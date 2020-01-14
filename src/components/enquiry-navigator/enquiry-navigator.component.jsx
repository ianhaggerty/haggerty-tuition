import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  nextEnquiryPage,
  prevEnquiryPage
} from "../../redux/enquiry-page/enquiry-page.actions";

import { selectCurrentEnquiryPage } from "../../redux/enquiry-page/enquiry-page.selectors";
import { COLOR_PRIMARY, COLOR_GREY_LIGHT } from "../../styles/variables";

import { Button, ButtonIcon, ButtonText } from "../button/index";
import {
  EnquiryNavigatorWrapper,
  PageIndicatorWrapper
} from "./enquiry-navigator.styles";

import { CSSTransition } from "react-transition-group";

class EnquiryNavigator extends React.Component {
  getButtonText = () => {
    const { currentPage } = this.props;

    if (currentPage === "details") {
      return <ButtonText>Send</ButtonText>;
    } else return null;
  };

  render() {
    const { currentPage, nextEnquiryPage, prevEnquiryPage } = this.props;

    return (
      <EnquiryNavigatorWrapper>
        <PageIndicatorWrapper>
          <Button
            backgroundColor={COLOR_GREY_LIGHT}
            active={currentPage !== "welcome"}
            onClick={prevEnquiryPage}
          >
            <ButtonIcon name="arrow-round-back" />
          </Button>
          <Button
            backgroundColor={COLOR_PRIMARY}
            icon="arrow-round-forward"
            active={true}
            onClick={nextEnquiryPage}
          >
            {this.getButtonText()}
            <ButtonIcon name="arrow-round-forward" />
          </Button>
        </PageIndicatorWrapper>
      </EnquiryNavigatorWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentEnquiryPage
});

const mapDispatchToProps = dispatch => ({
  nextEnquiryPage: () => dispatch(nextEnquiryPage()),
  prevEnquiryPage: () => dispatch(prevEnquiryPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryNavigator);
