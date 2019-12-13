import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEnquiryFormOpen } from "../../redux/query-string/query-string.selectors";
import { closeEnquiryForm } from "../../redux/query-string/query-string.actions";

import withOverlay from "../with-overlay/with-overlay";
import EnquiryNavigator from "../enquiry-navigator/enquiry-navigator.component";
import Icon from "../../components/icon/icon.component";

import EnquiryPageWelcome from "./pages/enquiry-page.welcome.component";

import {
  EnquiryFormWrapper,
  EnquiryFormHeader,
  EnquiryFormCloseButton,
  Line
} from "./enquiry-form.styles";

class EnquiryForm extends React.Component {
  render() {
    const { closeEnquiryForm } = this.props;

    return (
      <EnquiryFormWrapper>
        <EnquiryFormCloseButton onClick={closeEnquiryForm}>
          <Icon name="close" color="white" />
        </EnquiryFormCloseButton>
        <EnquiryFormHeader>
          <Line />
          Enquiries
          <Line />
        </EnquiryFormHeader>
        <EnquiryPageWelcome />
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
  visible: selectEnquiryFormOpen
});

const mapDispatchToProps = dispatch => ({
  onClickOverlay: () => dispatch(closeEnquiryForm()),
  closeEnquiryForm: () => dispatch(closeEnquiryForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnquiryFormWithOverlay);
