import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectEnquiryPageOpen,
  selectCurrentEnquiryPage
} from "../../redux/query-string/query-string.selectors";
import { closeEnquiryForm } from "../../redux/query-string/query-string.actions";

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
  getPage() {
    const { query } = this.props;

    switch (query) {
      case "welcome":
        return <EnquiryPageWelcome />;
      case "travel":
        return <EnquiryPageTravel />;
      case "pricing":
        return <EnquiryPagePricing />;
      case "discounts":
        return <EnquiryPageDiscounts />;
      case "interlude":
        return <EnquiryPageInterlude />;
      case "contact":
        return <EnquiryPageContact />;
      case "location":
        return <EnquiryPageLocation />;
      case "details":
        return <EnquiryPageDetails />;
      case "thank-you":
        return <EnquiryPageThankyou />;
      default:
        return null;
    }
  }

  render() {
    const { closeEnquiryForm } = this.props;

    return (
      <EnquiryFormWrapper>
        <EnquiryFormCloseButton onClick={closeEnquiryForm}>
          <Icon name="close" color="white" />
        </EnquiryFormCloseButton>
        {this.getPage()}
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
  onClickOverlay: () => dispatch(closeEnquiryForm()),
  closeEnquiryForm: () => dispatch(closeEnquiryForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnquiryFormWithOverlay);
