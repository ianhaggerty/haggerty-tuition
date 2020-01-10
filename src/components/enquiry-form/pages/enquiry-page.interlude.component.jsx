import React from "react";

import {
  EnquiryFormSubHeading,
  EnquiryFormMessage,
  EnquiryFormSignature
} from "./enquiry-page.styles";
import { InterludePageWrap } from "./enquiry-page.interlude.styles";

const EnquiryPageInterlude = () => (
  <InterludePageWrap>
    <EnquiryFormSubHeading>All set?</EnquiryFormSubHeading>
    <EnquiryFormMessage>
      Please continue to the next few pages
      <br />
      to make an enquiry.
    </EnquiryFormMessage>
    <EnquiryFormMessage>
      I can't guarantee we'll find a mutually
      <br />
      convenient time.
    </EnquiryFormMessage>
    <EnquiryFormMessage>
      But I'll do my best to make it work.
    </EnquiryFormMessage>
    <EnquiryFormSignature>Ian</EnquiryFormSignature>
  </InterludePageWrap>
);

export default EnquiryPageInterlude;
