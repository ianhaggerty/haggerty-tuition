import React from "react";
import withEnquiryPageLifecycle from "../wrapEnquiryPage";

import { PricingPageWrap, PricingTable } from "./enquiry-page.pricing.styles";
import ButtonInline from "../../button-inline/button-inline.component";

import { nextEnquiryPage } from "../../../redux/enquiry-page/enquiry-page.actions";
import { connect } from "react-redux";

import {
  EnquiryFormHeader,
  EnquiryFormHeaderLine,
  EnquiryFormParagraph,
  EnquiryFormHighlight,
  EnquiryPageWrap
} from "./enquiry-page.styles";

const EnquiryPagePricing = ({ nextPage }) => (
  <EnquiryPageWrap>
    <PricingPageWrap>
      <EnquiryFormHeader>
        <EnquiryFormHeaderLine />
        Pricing
        <EnquiryFormHeaderLine />
      </EnquiryFormHeader>
      <PricingTable>
        <tbody>
          <tr>
            <th>Hourly Rates</th>
            <th>KS3</th>
            <th>GCSE</th>
            <th>A-Level</th>
            <th>University</th>
          </tr>
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
            <td colSpan="4">
              <EnquiryFormParagraph>
                For further{" "}
                <EnquiryFormHighlight>
                  discounts and adjustments
                </EnquiryFormHighlight>{" "}
                <br />
                &#8212; please see the{" "}
                <ButtonInline onClick={nextPage}>next page</ButtonInline>
              </EnquiryFormParagraph>
            </td>
          </tr>
        </tbody>
      </PricingTable>
    </PricingPageWrap>
  </EnquiryPageWrap>
);

const mapDispatchToProps = dispatch => ({
  nextPage: () => dispatch(nextEnquiryPage())
});

export default connect(
  null,
  mapDispatchToProps
)(withEnquiryPageLifecycle("pricing")(EnquiryPagePricing));
