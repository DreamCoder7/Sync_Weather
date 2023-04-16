import { useContext, useEffect } from "react";
import axios from "axios";

import {
  Map as MapStyled,
  MapNav,
  MapBtn,
  MapCont,
  MapTitle,
} from "../../../style/index";

import { ThemeContext } from "../../../Context/theme";

export const Map = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios(
      "https://maps.openweathermap.org/maps/2.0/weather/1h/TA2/4/1/6?appid=e33d8662676f8f16e8f623c45f49e64e"
    ).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <MapStyled>
      <MapNav>
        <MapTitle theme={theme}>Global Map</MapTitle>
        <MapBtn theme={theme}>View Mode</MapBtn>
      </MapNav>
      <MapCont theme={theme}>map</MapCont>
    </MapStyled>
  );
};
