import { Toggle, SearchInput } from "../Ui/index";
import { Forcast } from "../index";

import {
  Dashboard as DashboardStyled,
  MainNav,
  Location,
  LocationIcon,
  UserInfo,
  UserInfoIcon,
} from "../../style/index";

import IconMap from "../../assets/map-pin.svg";
import IconBell from "../../assets/bell.svg";
import IconUser from "../../assets/user.svg";

export function Dashboard() {
  return (
    <DashboardStyled>
      <Toggle />
      <MainNav>
        <Location>
          <LocationIcon src={IconMap} alt="Icon Map-pin" />
          <p>Ethiopia, Addis Ababa</p>
        </Location>
        <SearchInput />
        <UserInfo>
          <UserInfoIcon src={IconBell} alt="Icon Bell" />
          <UserInfoIcon src={IconUser} alt="Icon User" />
        </UserInfo>
      </MainNav>
      <Forcast />
    </DashboardStyled>
  );
}
