import React from "react";

import { Article, Heading, Paragraph } from "../../components/article";

const MyBackground = () => (
  <React.Fragment>
    <Article style={{ gridCol: "col-left-start / col-right-end;" }}>
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
    </Article>
  </React.Fragment>
);

export default MyBackground;
