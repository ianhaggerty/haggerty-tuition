import React from "react";
import { Field, reduxForm } from "redux-form";
import withEnquiryPageLifecycle from "../wrapEnquiryPage";

import { FormPageWrap } from "./enquiry-page.form.styles";

import {
  DetailsParagraph,
  DetailsHeading,
  DetailsWrap,
  DetailsSubheading,
  LeftCol,
  CenterCol,
  RightCol,
  ParagraphBreak
} from "./enquiry-page.details.styles";

import {
  EnquiryFormHeader,
  EnquiryFormHeaderLine,
  EnquiryPageWrap
} from "./enquiry-page.styles";

const EnquiryPageDetails = () => (
  <EnquiryPageWrap>
    <FormPageWrap>
      <EnquiryFormHeader>
        <EnquiryFormHeaderLine />
        Details
        <EnquiryFormHeaderLine />
      </EnquiryFormHeader>
      <DetailsWrap>
        <LeftCol>
          <DetailsHeading>Tuition Details</DetailsHeading>
          <DetailsParagraph>
            Please give a brief description of your tuition request.
          </DetailsParagraph>
        </LeftCol>
        <CenterCol>
          <Field name="details" type="text" component="textarea" />
        </CenterCol>
        <RightCol>
          <DetailsSubheading>Points to consider</DetailsSubheading>
          <DetailsParagraph>Who is the tuition for?</DetailsParagraph>
          <DetailsParagraph>
            Why is it now you're getting a tutor?
          </DetailsParagraph>
          <ParagraphBreak />
          <DetailsParagraph>
            Are there any pending examinations?
          </DetailsParagraph>
          <DetailsParagraph>
            What school / institution are you studying with?
          </DetailsParagraph>
          <ParagraphBreak />
          <DetailsParagraph>
            Over what time period would you like tuition?
          </DetailsParagraph>
          <DetailsParagraph>And how frequently?</DetailsParagraph>
          <ParagraphBreak />
          <DetailsParagraph>
            What subject(s) would you like tuition in?
          </DetailsParagraph>
          <DetailsParagraph>
            What level of education? (GCSE, A-Level, etc)
          </DetailsParagraph>
        </RightCol>
      </DetailsWrap>
    </FormPageWrap>
  </EnquiryPageWrap>
);

export default reduxForm({ form: "details", destroyOnUnmount: false })(
  withEnquiryPageLifecycle("details")(EnquiryPageDetails)
);
