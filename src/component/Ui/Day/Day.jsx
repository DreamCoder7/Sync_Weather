import { useContext } from "react";

import {
  Day as DayStyled,
  DayTitle,
  DayInfo,
  DayIcon,
  Wind,
  Pressure,
  Humidity,
  Temp,
  SunRise,
  SunSet,
} from "../../../style/index";
import IconSun from "../../../assets/sun.svg";

import { ThemeContext } from "../../../Context/theme";

const unixConverter = (unix) => {
  const date = new Date(unix);

  let hr = date.getHours();
  let min = date.getMinutes();
  let mph = hr > 12 ? "AM" : "PM";

  let time = `${hr}:${min} ${mph}`;
  return time;
};

export const Day = ({ pressure, temp, wind, sunSet, sunRise, humidity }) => {
  const { theme } = useContext(ThemeContext);
  const sunRiseFormatted = unixConverter(sunRise);
  const sunSetFormatted = unixConverter(sunSet);

  return (
    <DayStyled>
      <DayInfo theme={theme}>
        <Temp>
          <DayIcon src={IconSun} alt="" />
          <div>
            <DayTitle>Temprature</DayTitle>
            <p>{temp}</p>
          </div>
        </Temp>
        <Wind>
          <DayIcon src={IconSun} alt="" />
          <div>
            <DayTitle>Wind Speed</DayTitle>
            <p>{wind} MPH</p>
          </div>
        </Wind>
        <Pressure>
          <DayIcon src={IconSun} alt="" />
          <div>
            <DayTitle>Pressure</DayTitle>
            <p>{pressure}</p>
          </div>
        </Pressure>
        <Humidity>
          <DayIcon src={IconSun} alt="" />
          <div>
            <DayTitle>Humidity</DayTitle>
            <p>{humidity}%</p>
          </div>
        </Humidity>
        <SunSet>
          <DayIcon src={IconSun} alt="" />
          <div>
            <DayTitle>Sunset</DayTitle>
            <p>{sunSetFormatted}</p>
          </div>
        </SunSet>
        <SunRise>
          <DayIcon src={IconSun} alt="" />
          <div>
            <DayTitle>Sunrise</DayTitle>
            <p>{sunRiseFormatted}</p>
          </div>
        </SunRise>
      </DayInfo>
    </DayStyled>
  );
};
