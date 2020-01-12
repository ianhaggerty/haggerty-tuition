import React from "react";
import { connect } from "react-redux";
import { setVisited } from "../../redux/enquiry-page/enquiry-page.actions";

const withLifecycle = name => {
  return Component => {
    class ComponentWithLifeCycle extends React.Component {
      componentDidMount() {
        const { setVisited } = this.props;
        setVisited(name);
      }

      render() {
        const { setVisited, ...otherProps } = this.props;
        return <Component {...otherProps} />;
      }
    }

    const mapDispatchToProps = dispatch => ({
      setVisited: name => dispatch(setVisited(name))
    });

    return connect(null, mapDispatchToProps)(ComponentWithLifeCycle);
  };
};

export default withLifecycle;
