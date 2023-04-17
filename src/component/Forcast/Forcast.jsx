import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Day } from "../Ui/index";
import { Forcast as ForcastStyled, ForcastNav } from "../../style/index";
import { ThemeContext } from "../../Context/theme";

const dummyData = {
  pressure: "12hpa",
  temp: "20oc",
  humidity: "10%",
  sunrise: "2:30Am",
  sunset: "4:00pm",
  wind: "12km/hr",
};

export const Forcast = ({ location }) => {
  const [weatherData, setWeatherData] = useState({});
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API
      }`
    ).then((data) => {
      console.log(data);
      const formattedData = {
        ...weatherData,
        pressure: data.data.main.pressure,
        temp: data.data.main.temp.toFixed(),
        humidity: data.data.main.humidity,
        sunrise: data.data.sys.sunrise,
        sunset: data.data.sys.sunset,
        wind: data.data.wind.speed.toFixed(),
      };
      setWeatherData(formattedData);
    });
  }, [location]);

  return (
    <ForcastStyled>
      <ForcastNav theme={theme}>
        <p>Today Overview</p>
        <a href="#">More Detail</a>
      </ForcastNav>
      <div>
        <Day
          humidity={weatherData.humidity}
          pressure={weatherData.pressure}
          sunRise={weatherData.sunrise}
          sunSet={weatherData.sunset}
          temp={weatherData.temp}
          wind={weatherData.wind}
        />
      </div>
    </ForcastStyled>
  );
};
