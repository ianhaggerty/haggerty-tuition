import React from "react";
import Icon from "../../icon/icon.component";
import withEnquiryPageLifecycle from "../withEnquiryPageLifecycle";
import {
  DiscountsPageWrap,
  DiscountsGrid,
  DiscountItem,
  DiscountHeader
} from "./enquiry-page.discounts.styles";
import {
  EnquiryFormHeader,
  EnquiryFormHeaderLine,
  EnquiryFormSubHeading,
  EnquiryFormParagraph,
  EnquiryFormHighlight
} from "./enquiry-page.styles";

const EnquiryPageDiscounts = () => (
  <DiscountsPageWrap>
    <EnquiryFormHeader>
      <EnquiryFormHeaderLine />
      Discounts
      <EnquiryFormHeaderLine />
    </EnquiryFormHeader>
    <DiscountsGrid>
      <DiscountItem>
        <DiscountHeader>
          <EnquiryFormSubHeading>First Hour</EnquiryFormSubHeading>
          <Icon name="discountFirstHour" size="4rem" />
        </DiscountHeader>
        <EnquiryFormParagraph>
          I'm pleased to offer the first hour of tuition at{" "}
          <EnquiryFormHighlight>half the usual price</EnquiryFormHighlight>.
        </EnquiryFormParagraph>
        <EnquiryFormParagraph>
          No further obligation necessary.
        </EnquiryFormParagraph>
      </DiscountItem>
      <DiscountItem>
        <DiscountHeader>
          <EnquiryFormSubHeading>Double Lessons</EnquiryFormSubHeading>
          <Icon name="discountDoubleLesson" size="8.65rem" />
        </DiscountHeader>
        <EnquiryFormParagraph>
          <EnquiryFormHighlight>£5 discount</EnquiryFormHighlight> for double
          lessons.
        </EnquiryFormParagraph>
        <EnquiryFormParagraph>
          These are back-to-back hours, with a small break in between.
        </EnquiryFormParagraph>
      </DiscountItem>
      <DiscountItem>
        <DiscountHeader>
          <EnquiryFormSubHeading>Two at a Time</EnquiryFormSubHeading>
          <Icon name="discountTwoStudent" size="6.82rem" />
        </DiscountHeader>
        <EnquiryFormParagraph style={{ fontStyle: "italic" }}>
          Why not rope in a friend?
        </EnquiryFormParagraph>
        <EnquiryFormParagraph>
          For an <EnquiryFormHighlight>extra £5 per hour</EnquiryFormHighlight>,
          I can teach two students at a time.
        </EnquiryFormParagraph>
      </DiscountItem>
      <DiscountItem>
        <DiscountHeader>
          <EnquiryFormSubHeading>Travel to Me</EnquiryFormSubHeading>
          <Icon name="discountTravelToMe" size="11rem" />
        </DiscountHeader>
        <EnquiryFormParagraph>
          If you're able to travel to my house &#8212; I can offer a{" "}
          <EnquiryFormHighlight>£5 discount</EnquiryFormHighlight> for the
          entire session.
        </EnquiryFormParagraph>
      </DiscountItem>
    </DiscountsGrid>
  </DiscountsPageWrap>
);

export default withEnquiryPageLifecycle("discounts")(EnquiryPageDiscounts);
