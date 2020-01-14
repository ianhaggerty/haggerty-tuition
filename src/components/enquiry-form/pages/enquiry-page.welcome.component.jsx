import React from "react";
import withEnquiryPageLifecycle from "../wrapEnquiryPage";

import {
  EnquiryFormSubHeading,
  EnquiryFormMessage,
  EnquiryFormSignature,
  EnquiryPageWrap
} from "./enquiry-page.styles";

import { WelcomePageWrap } from "./enquiry-page.welcome.styles";

const EnquiryPageWelcome = () => (
  <EnquiryPageWrap>
    <WelcomePageWrap>
      <EnquiryFormSubHeading>Welcome</EnquiryFormSubHeading>
      <EnquiryFormMessage>
        Thank you for your interest in tuition.
      </EnquiryFormMessage>
      <EnquiryFormMessage>
        I warmly invite correspondence
        <br />
        from all potential clients.
      </EnquiryFormMessage>
      <EnquiryFormMessage>
        Please take a moment to review my
        <br />
        pricing & travel details.
      </EnquiryFormMessage>
      <EnquiryFormMessage>
        After which,
        <br />
        you're welcome to make an enquiry.
      </EnquiryFormMessage>
      <EnquiryFormSignature>Ian</EnquiryFormSignature>
    </WelcomePageWrap>
  </EnquiryPageWrap>
);

export default withEnquiryPageLifecycle("welcome")(EnquiryPageWelcome);
