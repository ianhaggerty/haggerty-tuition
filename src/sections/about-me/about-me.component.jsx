import React from "react";

import Avatar from "../../components/avatar/avatar.component";
import { Article, Heading, Paragraph } from "../../components/article";
import {
  Button,
  ButtonIcon,
  ButtonText,
  ButtonSlide
} from "../../components/button";
import InlineButton from "../../components/inline-button/inline-button.component";

const AboutMe = props => (
  <React.Fragment>
    <Article
      style={{
        gridColumn: "col-left-start / col-left-end",
        gridRow: "about-me-start / about-me-end"
      }}
    >
      <Heading>About Me</Heading>
      <Paragraph>
        With over 9 years of experience, hundreds of students and thousands of
        hours clocked, I’m one of Plymouth’s most well known and trusted tutors.
      </Paragraph>
      <Paragraph>
        Commanding extensive subject knowledge, profound insight and great
        communication skills—I help my students reach their highest levels of
        comprehension.
      </Paragraph>
      <Paragraph>
        <InlineButton>Enquire now</InlineButton> or{" "}
        <InlineButton color="grey-light">read on</InlineButton> to learn a
        little more about me.
      </Paragraph>
    </Article>
    <Avatar
      className="u-margin-top-small"
      style={{
        gridColumn: "col-right-start / col-right-end",
        gridRow: "about-me-start / about-me-end"
      }}
    />
  </React.Fragment>
);

export default AboutMe;
