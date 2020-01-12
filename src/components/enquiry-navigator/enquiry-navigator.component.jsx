import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  nextEnquiryPage,
  prevEnquiryPage
} from "../../redux/enquiry-page/enquiry-page.actions";

import {
  selectInvalidEnquiryPages,
  selectVisitedEnquiryPages,
  selectMaxVisitedEnquiryPageIndex,
  selectMaxInvalidEnquiryPageIndex
} from "../../redux/enquiry-page/enquiry-page.selectors";

import { selectCurrentEnquiryPage } from "../../redux/query-string/query-string.selectors";

import { COLOR_PRIMARY, COLOR_GREY_LIGHT } from "../../styles/variables";

import { Button, ButtonIcon, ButtonText } from "../button/index";
import {
  EnquiryNavigatorWrapper,
  PageIndicatorWrapper,
  PageIndicator
} from "./enquiry-navigator.styles";

const EnquiryNavigator = ({
  nextLabel,
  previousLabel,
  nextAction,
  previousAction,
  currentPage,
  invalid,
  visited,
  maxVisitedIndex,
  maxInvalidIndex,
  nextEnquiryPage,
  prevEnquiryPage
}) => {
  return (
    <EnquiryNavigatorWrapper>
      <PageIndicatorWrapper>
        <Button
          backgroundColor={COLOR_GREY_LIGHT}
          active={currentPage !== "welcome"}
          // className={currentPage === "welcome" ? "hidden" : ""}
          onClick={prevEnquiryPage}
        >
          <ButtonIcon name="arrow-round-back" />
        </Button>
        {/* welcome */}
        <PageIndicator
          visible={maxVisitedIndex >= 1}
          active={currentPage === "welcome"}
          available={true}
        />
        {/* travel */}
        <PageIndicator
          visible={maxVisitedIndex >= 1}
          active={currentPage === "travel"}
          available={true}
        />
        {/* pricing */}
        <PageIndicator
          visible={maxVisitedIndex >= 2}
          active={currentPage === "pricing"}
          available={true}
        />
        {/* discounts */}
        <PageIndicator
          visible={maxVisitedIndex >= 3}
          active={currentPage === "discounts"}
          available={true}
        />
        {/* contact */}
        <PageIndicator
          visible={maxVisitedIndex >= 4}
          active={currentPage === "contact"}
          available={true}
          invalid={invalid.indexOf("contact") !== -1}
        />
        {/* location */}
        <PageIndicator
          visible={maxVisitedIndex >= 5}
          active={currentPage === "location"}
          available={maxInvalidIndex >= 5}
          invalid={invalid.indexOf("location") !== -1}
        />
        {/* details */}
        <PageIndicator
          visible={maxVisitedIndex >= 6}
          active={currentPage === "details"}
          available={maxInvalidIndex >= 6}
          invalid={invalid.indexOf("details") !== -1}
        />
        <Button
          backgroundColor={COLOR_PRIMARY}
          icon="arrow-round-forward"
          active={true}
          onClick={nextEnquiryPage}
        >
          {/* <ButtonText>Travel</ButtonText> */}
          <ButtonIcon name="arrow-round-forward" />
        </Button>
      </PageIndicatorWrapper>
    </EnquiryNavigatorWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentEnquiryPage,
  invalid: selectInvalidEnquiryPages,
  visited: selectVisitedEnquiryPages,
  maxVisitedIndex: selectMaxVisitedEnquiryPageIndex,
  maxInvalidIndex: selectMaxInvalidEnquiryPageIndex
});

const mapDispatchToProps = dispatch => ({
  nextEnquiryPage: () => dispatch(nextEnquiryPage()),
  prevEnquiryPage: () => dispatch(prevEnquiryPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryNavigator);
