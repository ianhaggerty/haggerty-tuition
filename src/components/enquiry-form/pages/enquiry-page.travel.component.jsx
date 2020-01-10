import React from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "../../map-marker/map-marker.component";

import {
  EnquiryPageWrap,
  EnquiryFormHeader,
  EnquiryFormHeaderLine,
  EnquiryFormSubHeading,
  EnquiryFormParagraph,
  EnquiryFormHighlight
} from "./enquiry-page.styles";

import {
  TravelPageColLeft,
  TravelPageColRight,
  TravelPageWrap,
  MAP_HEIGHT,
  MAP_WIDTH
} from "./enquiry-page.travel.styles";

const EnquiryPageTravel = () => (
  <EnquiryPageWrap>
    <EnquiryFormHeader>
      <EnquiryFormHeaderLine />
      Travel
      <EnquiryFormHeaderLine />
    </EnquiryFormHeader>
    <TravelPageWrap>
      <TravelPageColLeft>
        <EnquiryFormSubHeading>Address</EnquiryFormSubHeading>
        <EnquiryFormParagraph style={{ letterSpacing: ".1rem" }}>
          4 Maple Grove
          <br />
          Mutley
          <br />
          Plymouth
          <br />
          PL4 6PZ
        </EnquiryFormParagraph>
        <EnquiryFormSubHeading>Details</EnquiryFormSubHeading>
        <EnquiryFormParagraph className="hanging-punctuation">
          I can travel up to
          <EnquiryFormHighlight> 10 miles</EnquiryFormHighlight>
          <br />
          from my location
        </EnquiryFormParagraph>
        <EnquiryFormParagraph className="hanging-punctuation">
          Longer distances will require special consideration
        </EnquiryFormParagraph>
      </TravelPageColLeft>
      <TravelPageColRight>
        <div style={{ height: MAP_HEIGHT, width: MAP_WIDTH }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDdQfLu-xhHTi4LvXnW3w-t_fgnb6cUChI"
            }}
            defaultCenter={{
              lat: 50.3804174,
              lng: -4.1401219
            }}
            defaultZoom={14}
          >
            <MapMarker lat={50.3804174} lng={-4.1401219}></MapMarker>
          </GoogleMapReact>
        </div>
      </TravelPageColRight>
    </TravelPageWrap>
  </EnquiryPageWrap>
);

export default EnquiryPageTravel;
