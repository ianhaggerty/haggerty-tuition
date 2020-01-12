import React from "react";
import withEnquiryPageLifecycle from "../withEnquiryPageLifecycle";

import { Wrap } from "./enquiry-page.thankyou.styles";
import {
  EnquiryFormSubHeading,
  EnquiryFormMessage
} from "./enquiry-page.styles";

const EnquiryPageThankyou = () => (
  <Wrap>
    <EnquiryFormSubHeading>Many thanks for your enquiry</EnquiryFormSubHeading>
    <EnquiryFormMessage>I will be in touch soon...</EnquiryFormMessage>
  </Wrap>
);

export default withEnquiryPageLifecycle("thank-you")(EnquiryPageThankyou);
