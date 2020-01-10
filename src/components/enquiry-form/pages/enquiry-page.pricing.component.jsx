import React from "react";

import { PricingPageWrap, PricingTable } from "./enquiry-page.pricing.styles";
import ButtonInline from "../../button-inline/button-inline.component";

import {
  EnquiryFormHeader,
  EnquiryFormHeaderLine,
  EnquiryFormParagraph,
  EnquiryFormHighlight
} from "./enquiry-page.styles";

const EnquiryPagePricing = () => (
  <PricingPageWrap>
    <EnquiryFormHeader>
      <EnquiryFormHeaderLine />
      Pricing
      <EnquiryFormHeaderLine />
    </EnquiryFormHeader>
    <PricingTable>
      <thead>
        <th>Hourly Rates</th>
        <th>KS3</th>
        <th>GCSE</th>
        <th>A-Level</th>
        <th>University</th>
      </thead>
      <tr>
        <th>Mathematics</th>
        <td>£30</td>
        <td>£30</td>
        <td>£30</td>
        <td>£30</td>
      </tr>
      <tr>
        <th>Physics</th>
        <td>£30</td>
        <td>£30</td>
        <td>£30</td>
        <td>£30</td>
      </tr>
      <tr>
        <th>Chemistry</th>
        <td>£25</td>
        <td>£25</td>
        <td>£25</td>
        <td>N/A</td>
      </tr>
      <tr>
        <th></th>
        <td colspan="4">
          <EnquiryFormParagraph>
            For further{" "}
            <EnquiryFormHighlight>
              discounts and adjustments
            </EnquiryFormHighlight>{" "}
            <br />
            &#8212; please see the <ButtonInline>next page</ButtonInline>
          </EnquiryFormParagraph>
        </td>
      </tr>
    </PricingTable>
  </PricingPageWrap>
);

export default EnquiryPagePricing;
