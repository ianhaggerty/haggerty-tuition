import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { selectEnquiryFormOpen } from "../../redux/query-string/query-string.selectors";
import { closeEnquiryForm } from "../../redux/query-string/query-string.actions";

import MapMarker from "../map-marker/map-marker.component";
import withOverlay from "../with-overlay/with-overlay";

import EnquiryNavigator from "../enquiry-navigator/enquiry-navigator.component";
import GoogleMapReact from "google-map-react";

import Icon from "../../components/icon/icon.component";

import {
  EnquiryFormWrapper,
  EnquiryFormHeader,
  EnquiryFormCloseButton,
  EnquiryFormParagraph,
  EnquiryPageWrap,
  Line
} from "./enquiry-form.styles";
import { EnquiryFormSubHeading } from "./enquiry-form.styles";

class EnquiryForm extends React.Component {
  state = {
    prevPage: 0,
    currPage: 0,
    completed: 0
  };

  nextPage = () => {
    this.setState(state => ({
      ...state,
      prevPage: state.currPage,
      currPage: state.currPage + 1
    }));
  };

  prevPage = () => {
    this.setState(state => ({
      ...state,
      prevPage: state.currPage,
      currPage: state.currPage - 1
    }));
  };

  render() {
    const { closeEnquiryForm } = this.props;

    return (
      <EnquiryFormWrapper>
        <EnquiryFormCloseButton onClick={closeEnquiryForm}>
          <Icon name="close" color="white" />
        </EnquiryFormCloseButton>
        <EnquiryFormHeader>
          <Line />
          Enquiries
          <Line />
        </EnquiryFormHeader>
        <CSSTransition
          in={this.state.currPage === 2}
          classNames="fade"
          timeout={500}
          unmountOnExit
        >
          <EnquiryPageWrap>
            <EnquiryFormSubHeading>Greetings!</EnquiryFormSubHeading>
            <EnquiryFormParagraph>
              Thank you for your interest in tuition.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              I am always happy to hear from potential clients.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              If you could fill out the following forms <br />
              as best you can.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              I will then get back to you shortly after.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              Many thanks,
              <br />
              Ian
            </EnquiryFormParagraph>
          </EnquiryPageWrap>
        </CSSTransition>

        <CSSTransition
          in={this.state.currPage === 1}
          classNames="fade"
          timeout={100}
          unmountOnExit
        >
          <EnquiryPageWrap>
            <EnquiryFormSubHeading>Greetings!</EnquiryFormSubHeading>
            <EnquiryFormParagraph>
              Thank you for your interest in TUITION.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              I am always happy to hear from potential clients.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              If you could fill out the following forms <br />
              as best you can&#8212;it shouldn't take you too long.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              I will then get back to you shortly after.
            </EnquiryFormParagraph>
            <EnquiryFormParagraph>
              Many thanks,
              <br />
              Ian
            </EnquiryFormParagraph>
          </EnquiryPageWrap>
        </CSSTransition>

        <CSSTransition
          in={this.state.currPage === 0}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <EnquiryPageWrap>
            <div style={{ height: "40rem", width: "50rem" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDdQfLu-xhHTi4LvXnW3w-t_fgnb6cUChI"
                }}
                defaultCenter={{
                  lat: 50.3804174,
                  lng: -4.1401219
                }}
                defaultZoom={14}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {}}
              >
                <MapMarker lat={50.3804174} lng={-4.1401219}></MapMarker>
              </GoogleMapReact>
            </div>
          </EnquiryPageWrap>
        </CSSTransition>

        <EnquiryNavigator
          onClickNext={this.nextPage}
          onClickPrevious={this.prevPage}
        />
      </EnquiryFormWrapper>
    );
  }
}

const EnquiryFormWithOverlay = withOverlay(EnquiryForm);

const mapStateToProps = createStructuredSelector({
  visible: selectEnquiryFormOpen
});

const mapDispatchToProps = dispatch => ({
  onClickOverlay: () => dispatch(closeEnquiryForm()),
  closeEnquiryForm: () => dispatch(closeEnquiryForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnquiryFormWithOverlay);
