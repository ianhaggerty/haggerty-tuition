import React from "react";
import { connect } from "react-redux";
import { setVisited } from "../../redux/enquiry-page/enquiry-page.actions";
import { selectCurrentEnquiryPage } from "../../redux/enquiry-page/enquiry-page.selectors";
import { createStructuredSelector } from "reselect";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { MIXIN_TRANSITION_FADE } from "../../styles/mixins.styles";

const wrapEnquiryPage = name => {
  return Component => {
    const StyledComponent = styled(Component)`
      ${MIXIN_TRANSITION_FADE}
    `;

    class ComponentWithLifeCycle extends React.Component {
      render() {
        const { children, setVisited, enquiryPage, ...otherProps } = this.props;
        const willRender = enquiryPage === name;

        if (willRender) setVisited(name);

        return (
          <CSSTransition
            in={willRender}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <StyledComponent {...otherProps}>{children}</StyledComponent>
          </CSSTransition>
        );
      }
    }

    const mapStateToProps = createStructuredSelector({
      enquiryPage: selectCurrentEnquiryPage
    });

    const mapDispatchToProps = dispatch => ({
      setVisited: name => dispatch(setVisited(name))
    });

    return connect(mapStateToProps, mapDispatchToProps)(ComponentWithLifeCycle);
  };
};

export default wrapEnquiryPage;
