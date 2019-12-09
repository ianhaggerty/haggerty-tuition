import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransition } from "react-transition-group";

import { selectEnquiryFormOpen } from "../../redux/query-string/query-string.selectors";
import { closeOverlay } from "../../redux/query-string/query-string.actions";

import EnquiryNavigator from "../enquiry-navigator/enquiry-navigator.component";

import Icon from "../../components/icon/icon.component";

import {
  EnquiryFormWrapper,
  EnquiryFormHeader,
  EnquiryFormCloseButton,
  EnquiryFormParagraph,
  Line
} from "./enquiry-form.styles";
import { EnquiryFormSubHeading } from "./enquiry-form.styles";

class EnquiryForm extends React.Component {
  state = {
    page: 0,
    completed: 0
  };

  render() {
    const { enquiryFormOpen } = this.props;

    return (
      <CSSTransition
        in={enquiryFormOpen}
        classNames="grow"
        timeout={500}
        unmountOnExit
      >
        <EnquiryFormWrapper>
          <EnquiryFormCloseButton>
            <Icon name="close" color="white" />
          </EnquiryFormCloseButton>
          <EnquiryFormHeader>
            <Line />
            Enquiries
            <Line />
          </EnquiryFormHeader>
          <EnquiryFormSubHeading>Greetings!</EnquiryFormSubHeading>
          <EnquiryFormParagraph>
            Thank you for your interest in tuition.
          </EnquiryFormParagraph>
          <EnquiryFormParagraph>
            I am always happy to hear from potential clients.
          </EnquiryFormParagraph>
          <EnquiryFormParagraph>
            If you could fill out the following forms <br />
            as best you can&#8212;it shouldn't take you too long.
          </EnquiryFormParagraph>
          <EnquiryFormParagraph>
            I will then get back to you shortly after.
          </EnquiryFormParagraph>
          <EnquiryFormParagraph>
            Many thanks,
            <br />
            Ian
          </EnquiryFormParagraph>
          <EnquiryNavigator />
        </EnquiryFormWrapper>
      </CSSTransition>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  enquiryFormOpen: selectEnquiryFormOpen
});

const mapDispatchToProps = dispatch => ({
  closeEnquiryForm: () => dispatch(closeOverlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryForm);
