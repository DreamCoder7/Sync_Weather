import { useContext, useState } from "react";

import { Toggle, SearchInput, Map } from "../Ui/index";
import { Forcast } from "../index";
import { ThemeContext } from "../../Context/theme";

import {
  Dashboard as DashboardStyled,
  MainNav,
  Location,
  LocationIcon,
  UserInfo,
  UserInfoIcon,
  OtherInfo,
  OtherInfoBtn,
  OtherInfoItem,
  OtherInfoList,
  OtherInfoNav,
  OtherInfoTitle,
  Rain,
  RainList,
  RainTitle,
  RainProgress,
  Time,
} from "../../style/index";

import IconMap from "../../assets/map-pin.svg";
import IconBell from "../../assets/bell.svg";
import IconUser from "../../assets/user.svg";

export function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [inputVal, setInputVal] = useState({ countryN: "ethiopia" });

  const inputChangeHandler = (inputVal) => {
    setInputVal({
      ...inputVal,
      countryN: inputVal,
    });
  };

  return (
    <DashboardStyled>
      <Toggle />
      <MainNav>
        <Location theme={theme}>
          <LocationIcon src={IconMap} alt="Icon Map-pin" />
          <p>Ethiopia, Addis Ababa</p>
        </Location>
        <SearchInput onClick={(inputVal) => inputChangeHandler(inputVal)} />
        <UserInfo>
          <UserInfoIcon src={IconBell} alt="Icon Bell" />
          <UserInfoIcon src={IconUser} alt="Icon User" />
        </UserInfo>
      </MainNav>
      <Forcast location={inputVal.countryN} />
      <Rain>
        <RainTitle theme={theme}>Chance of Rain</RainTitle>
        <RainList>
          <li>
            <p>Rainy</p>
          </li>
          <li>
            <p>Sunny</p>
          </li>
          <li>
            <p>Heavy</p>
          </li>
        </RainList>
        <RainProgress>
          <ul>
            <li>
              <Time height={5}>10Am</Time>
            </li>
            <li>
              <Time height={8}>5Am</Time>
            </li>
            <li>
              <Time height={14}>5Am</Time>
            </li>
            <li>
              <Time height={6}>12Am</Time>
            </li>
            <li>
              <Time height={12}>2Am</Time>
            </li>
          </ul>
        </RainProgress>
      </Rain>
      <Map />
      <OtherInfo>
        <OtherInfoNav>
          <OtherInfoTitle theme={theme}>Other large cities</OtherInfoTitle>
          <OtherInfoBtn theme={theme}>Show All</OtherInfoBtn>
        </OtherInfoNav>
        <OtherInfoList>
          <OtherInfoItem theme={theme}>
            <span>Us</span>
            <p>California</p>
            <p>Mostly sunny</p>
          </OtherInfoItem>
          <OtherInfoItem theme={theme}>
            <span>China</span>
            <p>Beijing</p>
            <p>Cloudy</p>
          </OtherInfoItem>
          <OtherInfoItem theme={theme}>
            <span>Jerusalem</span>
            <p>California</p>
            <p>Sunny</p>
          </OtherInfoItem>
        </OtherInfoList>
      </OtherInfo>
    </DashboardStyled>
  );
}
