import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransition } from "react-transition-group";

import {
  nextEnquiryPage,
  prevEnquiryPage
} from "../../redux/enquiry-page/enquiry-page.actions";

import {
  selectCurrentEnquiryPage,
  selectContactFormValidated,
  selectDetailsFormValidated,
  selectLocationFormValidated
} from "../../redux/enquiry-page/enquiry-page.selectors";
import { COLOR_PRIMARY, COLOR_GREY_LIGHT } from "../../styles/variables";

import { Button, ButtonIcon, ButtonText } from "../button/index";
import {
  EnquiryNavigatorWrapper,
  PageIndicatorWrapper
} from "./enquiry-navigator.styles";

import styled from "styled-components";
import { widthTransition } from "../../styles/transitions";

class EnquiryNavigator extends React.Component {
  getButtonText = () => {
    // const { currentPage } = this.props;
    // if (currentPage === "details") {
    //   return <ButtonText>Send</ButtonText>;
    // } else return null;
    // const StyledButtonText = styled(ButtonText)`
    //   ${widthTransition({ start: "0rem", end: "7rem" })}
    // `;
    // return (
    //   <CSSTransition
    //     in={["details", "spinner", "thank-you"].includes(currentPage)}
    //     unmountOnExit
    //     classNames="width"
    //     timeout={300}
    //   >
    //     <StyledButtonText>Send</StyledButtonText>
    //   </CSSTransition>
    // );
  };

  render() {
    const {
      currentPage,
      nextEnquiryPage,
      prevEnquiryPage,
      contactValidated,
      locationValidated,
      detailsValidated
    } = this.props;

    // very hacky, need a big refactor
    let isError = false;
    if (currentPage === "contact" && !contactValidated) {
      isError = true;
    }
    if (currentPage === "location" && !locationValidated) {
      isError = true;
    }
    if (currentPage === "details" && !detailsValidated) {
      isError = true;
    }

    let forwardIcon = "arrow-round-forward";
    if (currentPage === "details") {
      forwardIcon = "mail";
    }
    return (
      <CSSTransition
        in={currentPage !== "thank-you"}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
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
              active={!isError}
              onClick={nextEnquiryPage}
            >
              <ButtonIcon name={forwardIcon} />
            </Button>
          </PageIndicatorWrapper>
        </EnquiryNavigatorWrapper>
      </CSSTransition>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentEnquiryPage,
  contactValidated: selectContactFormValidated,
  detailsValidated: selectDetailsFormValidated,
  locationValidated: selectLocationFormValidated
});

const mapDispatchToProps = dispatch => ({
  nextEnquiryPage: () => dispatch(nextEnquiryPage()),
  prevEnquiryPage: () => dispatch(prevEnquiryPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryNavigator);
