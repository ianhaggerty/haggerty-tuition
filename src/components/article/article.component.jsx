import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const Element = styled.article``;

export const Article = ({ children, ...props }) => (
  <Element {...props}>{children}</Element>
);
