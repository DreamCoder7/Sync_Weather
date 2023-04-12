import { Day } from "../Ui/index";

const wheather = [
  {
    date: "Monday",
    time: "11:08:20",
    temp: "16c",
    sunSet: "6:02Am",
    sunRise: "5:04Pm",
  },
  {
    date: "Tuseday",
    time: "11:08:20",
    temp: "16c",
    sunSet: "6:02Am",
    sunRise: "5:04Pm",
  },
  {
    date: "Wensday",
    time: "11:08:20",
    temp: "16c",
    sunSet: "6:02Am",
    sunRise: "5:04Pm",
  },
  {
    date: "Thursday",
    time: "11:08:20",
    temp: "16c",
    sunSet: "6:02Am",
    sunRise: "5:04Pm",
  },
];

export const Forcast = () => {
  return wheather.map((w) => (
    <Day
      date={w.date}
      time={w.time}
      temp={w.temp}
      sunSet={w.sunSet}
      sunRise={w.sunRise}
    />
  ));
};
