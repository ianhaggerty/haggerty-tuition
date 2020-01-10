import React, { Fragment } from "react";

import {
  Label,
  LabelItalic,
  LabelWrap,
  ErrorMessage
} from "./enquiry-page.form.styles";

const lastError = {};
const EnquiryField = ({
  input,
  label,
  type,
  meta: { touched, error },
  italic,
  textarea,
  ...props
}) => {
  const isError = touched && error;
  const className = isError ? "error" : "";
  if (isError) {
    lastError[input.name] = error;
  }
  let LabelComponent;
  if (italic) {
    LabelComponent = LabelItalic;
  } else {
    LabelComponent = Label;
  }
  return (
    <Fragment>
      <LabelWrap className={className}>
        <LabelComponent htmlFor={input.name}>{label}</LabelComponent>
        <ErrorMessage htmlFor={input.name}>
          {isError ? error : lastError[input.name]}
        </ErrorMessage>
      </LabelWrap>
      {textarea ? (
        <textarea
          className={className}
          type={type}
          id={input.name}
          {...props}
          {...input}
        />
      ) : (
        <input
          className={className}
          type={type}
          id={input.name}
          {...props}
          {...input}
        />
      )}
    </Fragment>
  );
};

export default EnquiryField;
