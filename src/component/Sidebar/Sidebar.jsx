import { useContext } from "react";

import {
  Sidebar as SidebarStyled,
  Nav,
  NavList,
  NavListItem,
  NavIcon,
  NavLink,
  System,
  SystemTitle,
  SystemIcon,
  SystemLink,
  SystemList,
  SystemListItem,
} from "../../style/index";
import { ThemeContext } from "../../Context/theme";
import { Logo } from "../Ui/index";

// Icons
import HouseIcon from "../../assets/house.svg";
import InfoIcon from "../../assets/info.svg";
import FileIcon from "../../assets/file-arrow-down.svg";
import CompassIcon from "../../assets/compass.svg";
import SettingIcon from "../../assets/gear.svg";
import SignoutIcon from "../../assets/sign-out.svg";

export function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <SidebarStyled theme={theme}>
      <Logo />
      <Nav>
        <NavList>
          <NavListItem>
            <NavIcon src={HouseIcon} alt="Icon House" />
            <NavLink href="#">Home</NavLink>
          </NavListItem>
          <NavListItem>
            <NavIcon src={CompassIcon} alt="Icon Compass" />
            <NavLink href="#">Navigate</NavLink>
          </NavListItem>
          <NavListItem>
            <NavIcon src={FileIcon} alt="Icon Location" />
            <NavLink href="#">Saved Location</NavLink>
          </NavListItem>
          <NavListItem>
            <NavIcon src={InfoIcon} alt="Icon Info" />
            <NavLink href="#">Info</NavLink>
          </NavListItem>
        </NavList>
      </Nav>
      <System>
        <SystemTitle>System</SystemTitle>
        <SystemList>
          <SystemListItem>
            <SystemIcon src={SettingIcon} alt="Icon Gear" />
            <SystemLink href="#">Setting</SystemLink>
          </SystemListItem>
          <SystemListItem>
            <SystemIcon src={SignoutIcon} alt="Icon Sign-out" />
            <SystemLink href="#">Logout</SystemLink>
          </SystemListItem>
        </SystemList>
      </System>
    </SidebarStyled>
  );
}
