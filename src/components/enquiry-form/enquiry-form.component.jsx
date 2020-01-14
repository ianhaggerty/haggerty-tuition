import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCurrentEnquiryPage,
  selectEnquiryPageOpen
} from "../../redux/enquiry-page/enquiry-page.selectors";
import { closeEnquiryPage } from "../../redux/enquiry-page/enquiry-page.actions";

import withOverlay from "../with-overlay/with-overlay";
import EnquiryNavigator from "../enquiry-navigator/enquiry-navigator.component";
import Icon from "../../components/icon/icon.component";

import EnquiryPageWelcome from "./pages/enquiry-page.welcome.component";
import EnquiryPageTravel from "./pages/enquiry-page.travel.component";
import EnquiryPagePricing from "./pages/enquiry-page.pricing.component";
import EnquiryPageDiscounts from "./pages/enquiry-page.discounts.component";
import EnquiryPageInterlude from "./pages/enquiry-page.interlude.component";
import EnquiryPageContact from "./pages/enquiry-page.contact.component";
import EnquiryPageLocation from "./pages/enquiry-page.location.component";
import EnquiryPageDetails from "./pages/enquiry-page.details.component";
import EnquiryPageThankyou from "./pages/enquiry-page.thankyou.component";

import {
  EnquiryFormWrapper,
  EnquiryFormCloseButton
} from "./enquiry-form.styles";

class EnquiryForm extends React.Component {
  render() {
    const { closeEnquiryPage } = this.props;

    return (
      <EnquiryFormWrapper>
        <EnquiryFormCloseButton onClick={closeEnquiryPage}>
          <Icon name="close" color="white" />
        </EnquiryFormCloseButton>
        <EnquiryPageWelcome />
        <EnquiryPageTravel />
        <EnquiryPagePricing />
        <EnquiryPageDiscounts />
        <EnquiryPageInterlude />
        <EnquiryPageContact />
        <EnquiryPageLocation />
        <EnquiryPageDetails />
        <EnquiryPageThankyou />
        <EnquiryNavigator
          onClickNext={this.nextPage}
          onClickPrevious={this.prevPage}
        />
      </EnquiryFormWrapper>
    );
  }
}

const EnquiryFormWithOverlay = withOverlay(EnquiryForm);

const mapStateToProps = createStructuredSelector({
  visible: selectEnquiryPageOpen,
  query: selectCurrentEnquiryPage
});

const mapDispatchToProps = dispatch => ({
  onClickOverlay: () => dispatch(closeEnquiryPage()),
  closeEnquiryPage: () => dispatch(closeEnquiryPage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnquiryFormWithOverlay);
