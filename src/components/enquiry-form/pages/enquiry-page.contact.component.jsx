import React from "react";
import { Field, reduxForm } from "redux-form";
import withEnquiryPageLifecycle from "../withEnquiryPageLifecycle";

import EnquiryField from "./enquiry-page.field.component";
import {
  isEmail,
  confirmEmail,
  isNumber,
  isRequired
} from "./enquiry-page.validators";

import { FormPageWrap, ContactPageGrid } from "./enquiry-page.form.styles";

import {
  EnquiryFormHeader,
  EnquiryFormHeaderLine
} from "./enquiry-page.styles";

class EnquiryPageContact extends React.Component {
  render() {
    return (
      <FormPageWrap>
        <EnquiryFormHeader>
          <EnquiryFormHeaderLine />
          Enquiry
          <EnquiryFormHeaderLine />
        </EnquiryFormHeader>
        <ContactPageGrid>
          <Field
            name="firstName"
            label="First Name"
            component={EnquiryField}
            type="text"
            style={{ width: "60%" }}
            validate={[isRequired("First name")]}
          />
          <Field
            name="lastName"
            label="Last Name"
            component={EnquiryField}
            type="text"
            style={{ width: "60%" }}
            validate={[isRequired("Last name")]}
            italic
          />
          <div></div>
          <div></div>
          <Field
            name="email"
            label="Email"
            component={EnquiryField}
            type="text"
            validate={[isRequired("Email"), isEmail]}
          />
          <Field
            name="confirmEmail"
            label="Confirm Email"
            component={EnquiryField}
            type="text"
            validate={[confirmEmail]}
            italic
            autocomplete="anyrandomstring"
          />
          <Field
            name="mob-number"
            label="Mob. No"
            component={EnquiryField}
            type="tel"
            validate={[isNumber]}
          />
        </ContactPageGrid>
      </FormPageWrap>
    );
  }
}

export default reduxForm({ form: "contact", destroyOnUnmount: false })(
  withEnquiryPageLifecycle("contact")(EnquiryPageContact)
);
