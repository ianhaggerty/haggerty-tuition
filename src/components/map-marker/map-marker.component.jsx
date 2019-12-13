import React from "react";

import LogoType from "../logo-type/logo-type.component";
import {
  MapMarkerWrapper,
  MapMarkerBox,
  MapMarkerTick
} from "./map-marker.styles";

import { COLOR_WHITE_PURE } from "../../styles/variables";

const directionLink = `https://www.google.com/maps/dir//Haggerty+Tuition,+Maple+Grove,+Plymouth/@50.3803418,-4.2081321,12.04z/data=!4m9!4m8!1m0!1m5!1m1!1s0x486c93a0424c919d:0xfbe4952ddf2fc6f2!2m2!1d-4.1400085!2d50.3803868!3e0`;

const MapMarker = () => (
  <MapMarkerWrapper href={directionLink} target="_blank">
    <MapMarkerBox>
      <LogoType
        color={COLOR_WHITE_PURE}
        style={{ transform: "scale(.4)", marginTop: "10rem" }}
      />
    </MapMarkerBox>
    <MapMarkerTick />
  </MapMarkerWrapper>
);

export default MapMarker;
