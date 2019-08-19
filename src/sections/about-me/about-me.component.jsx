import React from "react";

import Avatar from "../../components/avatar/avatar.component";
import { Article, Heading, Paragraph } from "../../components/article";

import withGrid from "../../components/with-grid/with-grid.component";

const ArticleWithGrid = withGrid(Article)("left", "about-me");
const AvatarWithGrid = withGrid(Avatar)("right", "about-me");

const AboutMe = () => (
  <React.Fragment>
    <ArticleWithGrid>
      <Heading>About Me</Heading>
      <Paragraph>
        With over 9 years of experience, hundreds of students and thousands of
        hours clocked, I’m one of Plymouth’s most well known and trusted tutors.
      </Paragraph>
      <Paragraph>
        I’m a creative individual gifted with a deep understanding of
        mathematics & physics. With extensive subject knowledge and expert
        delivery, I help my students command the highest level of comprehension
        they can possibly attain.
      </Paragraph>
    </ArticleWithGrid>
    <AvatarWithGrid className="u-margin-top-small" />
  </React.Fragment>
);

export default AboutMe;
