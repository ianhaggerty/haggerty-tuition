import React from "react";

export const Article = ({ children, ...props }) => (
  <article {...props}>{children}</article>
);
