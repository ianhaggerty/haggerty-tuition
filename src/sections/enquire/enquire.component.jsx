import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/button/button.component";
import Icon from "../../components/icon/icon.component";

import { Wrap } from "./enquire.styles";

const Enquire = props => (
  <Wrap {...props}>
    <Button backgroundColor="primary" className="u-margin-right-small">
      <Icon name="mail" />
      <span>Enquire Now</span>
    </Button>
    <Button backgroundColor="greyLight">
      <span>Read On</span>
      <Icon name="arrow-round-down" />
    </Button>
  </Wrap>
);

export default Enquire;
