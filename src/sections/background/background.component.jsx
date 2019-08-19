import React from "react";

import { Article, Heading, Paragraph } from "../../components/article";

import withGrid from "../../components/with-grid/with-grid.component";

const FirstArticle = withGrid(Article)("right", "background");

const Background = () => (
  <React.Fragment>
    <FirstArticle>
      <Heading>My Background</Heading>
      <Paragraph>I’m a local here in Plymouth.</Paragraph>
      <Paragraph>
        I attended Hyde Park Junior School in my younger years and later Coombe
        Dean Secondary School.
      </Paragraph>
      <Paragraph>
        From an early age, I showed a natural proficiency in the
        sciences—especially mathematics. I had a great set of teachers who
        nurtured my talent & curiosity as I matured.
      </Paragraph>
      <Paragraph>
        I went on to study A-level Mathematics Further Mathematics; Physics and
        Chemistry.
      </Paragraph>
    </FirstArticle>
  </React.Fragment>
);

export default Background;
