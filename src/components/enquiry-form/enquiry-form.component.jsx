import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransition } from "react-transition-group";

import { selectEnquiryFormOpen } from "../../redux/query-string/query-string.selectors";
import { closeOverlay } from "../../redux/query-string/query-string.actions";

import {
  EnquiryFormWrapper,
  EnquiryFormHeader,
  Line
} from "./enquiry-form.styles";

class EnquiryForm extends React.Component {
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
          <EnquiryFormHeader>
            <Line />
            Enquiries
            <Line />
          </EnquiryFormHeader>
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
