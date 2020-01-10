import React from "react";
import { Field, reduxForm } from "redux-form";

import { COLOR_SECONDARY } from "../../../styles/variables";

import Icon from "../../icon/icon.component";

import {
  FormPageWrap,
  LocationPageGrid,
  RadioGrid,
  RadioLabel,
  RadioIconWrap,
  RadioItem
} from "./enquiry-page.form.styles";

import {
  EnquiryFormHeader,
  EnquiryFormHeaderLine
} from "./enquiry-page.styles";

import EnquiryField from "./enquiry-page.field.component";
import { isRequired, isPostcode } from "./enquiry-page.validators";

const EnquiryPageLocation = () => (
  <FormPageWrap>
    <EnquiryFormHeader>
      <EnquiryFormHeaderLine />
      Enquiry
      <EnquiryFormHeaderLine />
    </EnquiryFormHeader>
    <LocationPageGrid>
      <Field
        name="address"
        label="Address"
        component={EnquiryField}
        type="text"
        textarea
        validate={[isRequired("Address")]}
        style={{
          // height: "14rem",
          resize: "none",
          gridRowStart: "1",
          gridRowEnd: "span 2",
          gridColumnStart: "2",
          gridColumnEnd: "3",
          width: "100%"
        }}
      />
      <div></div>
      <Field
        name="postcode"
        label="Postcode"
        component={EnquiryField}
        type="text"
        style={{ width: "60%" }}
        validate={[isRequired("Postcode"), isPostcode]}
      />
      <div></div>
      <div></div>
    </LocationPageGrid>
    <RadioGrid>
      <RadioItem>
        <Field
          name="travel"
          type="radio"
          component="input"
          id="to-student"
          value="to-student"
        />
        <RadioIconWrap htmlFor="to-student">
          <Icon name="uncheckedBox" color={COLOR_SECONDARY} />
          <Icon name="checkedBox" color={COLOR_SECONDARY} />
        </RadioIconWrap>

        <RadioLabel htmlFor="to-student">
          The tutor will travel to you
        </RadioLabel>
      </RadioItem>
      <RadioItem>
        <Field
          name="travel"
          type="radio"
          component="input"
          id="to-tutor"
          value="to-tutor"
        />
        <RadioIconWrap htmlFor="to-tutor">
          <Icon name="uncheckedBox" color={COLOR_SECONDARY} />
          <Icon name="checkedBox" color={COLOR_SECONDARY} />
        </RadioIconWrap>
        <RadioLabel htmlFor="to-tutor">You will travel to the tutor</RadioLabel>
      </RadioItem>
      <RadioItem>
        <Field
          name="travel"
          type="radio"
          component="input"
          id="unsure"
          value="unsure"
        />
        <RadioIconWrap htmlFor="unsure">
          <Icon name="uncheckedBox" color={COLOR_SECONDARY} />
          <Icon name="checkedBox" color={COLOR_SECONDARY} />
        </RadioIconWrap>
        <RadioLabel htmlFor="unsure">Not sure yet</RadioLabel>
      </RadioItem>
    </RadioGrid>
  </FormPageWrap>
);

export default reduxForm({
  form: "location",
  destroyOnUnmount: false
})(EnquiryPageLocation);
