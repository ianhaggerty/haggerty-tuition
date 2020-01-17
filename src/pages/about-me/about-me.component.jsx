import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { COLOR_GREY_LIGHT } from "../../styles/variables";

import { Grid } from "./about-me.styles";
import Avatar from "../../components/avatar/avatar.component";
import { Article, Heading, Paragraph } from "../../components/article";
import ButtonInline from "../../components/button-inline/button-inline.component";
import LogoType from "../../components/logo-type/logo-type.component";

import { openEnquiryPage } from "../../redux/enquiry-page/enquiry-page.actions";

const StyledLogoType = styled(LogoType)`
  grid-column: col-left-start / col-right-end;
  grid-row: header-start / header-end;
`;

const StyledArticle = styled(Article)`
  grid-column: col-left-start / col-left-end;
  grid-row: about-me-start / about-me-end;
`;

const StyledAvatar = styled(Avatar)`
  grid-column: col-right-start / col-right-end;
  grid-row: about-me-start / about-me-end;
  margin-top: 3.5rem;
`;

const AboutMe = ({ openEnquiryPage }) => (
  <Grid>
    <StyledLogoType />
    <StyledArticle>
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
        <ButtonInline onClick={openEnquiryPage}>Enquire now</ButtonInline> or{" "}
        <ButtonInline color={COLOR_GREY_LIGHT}>read on</ButtonInline> to learn a
        little more about me.
      </Paragraph>
    </StyledArticle>
    <StyledAvatar />
  </Grid>
);

const mapDispatchToProps = dispatch => ({
  openEnquiryPage: () => dispatch(openEnquiryPage())
});

export default connect(null, mapDispatchToProps)(AboutMe);
