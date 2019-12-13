import React from "react";
import { CSSTransition } from "react-transition-group";
import GoogleMapReact from "google-map-react";

import MapMarker from "../../map-marker/map-marker.component";

import { EnquiryPageWrap } from "./enquiry-page.styles";

const EnquiryPageTravel = () => (
  <CSSTransition
    in={this.state.currPage === 1}
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
);

export default EnquiryPageTravel;
