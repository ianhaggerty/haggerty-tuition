import React from "react";
import withEnquiryPageLifecycle from "../wrapEnquiryPage";

import {
  EnquiryFormSubHeading,
  EnquiryFormMessage,
  EnquiryFormSignature,
  EnquiryPageWrap
} from "./enquiry-page.styles";
import { InterludePageWrap } from "./enquiry-page.interlude.styles";

const EnquiryPageInterlude = () => (
  <EnquiryPageWrap>
    <InterludePageWrap>
      <EnquiryFormSubHeading>Looks good to you?</EnquiryFormSubHeading>
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
  </EnquiryPageWrap>
);

export default withEnquiryPageLifecycle("interlude")(EnquiryPageInterlude);
