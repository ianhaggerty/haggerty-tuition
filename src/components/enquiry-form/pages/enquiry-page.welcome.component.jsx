import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import {
  EnquiryPageWrap,
  EnquiryFormSubHeading,
  EnquiryFormParagraph
} from "./enquiry-page.styles";

const EnquiryPageWelcome = props => (
  <CSSTransition in={true} classNames="fade" timeout={500} unmountOnExit>
    <EnquiryPageWrap>
      <EnquiryFormSubHeading>Greetings!</EnquiryFormSubHeading>
      <EnquiryFormParagraph>
        Thank you for your interest in tuition.
      </EnquiryFormParagraph>
      <EnquiryFormParagraph>
        I warmly invite correspondence
        <br />
        from all potential clients.
      </EnquiryFormParagraph>
      <EnquiryFormParagraph>
        Please take a moment to review my
        <br />
        pricing & travel details.
      </EnquiryFormParagraph>
      <EnquiryFormParagraph>
        After which,
        <br />
        you're welcome to make an enquiry.
      </EnquiryFormParagraph>
      <EnquiryFormParagraph>
        Many thanks,
        <br />
        Ian
      </EnquiryFormParagraph>
    </EnquiryPageWrap>
  </CSSTransition>
);

export default connect()(EnquiryPageWelcome);
