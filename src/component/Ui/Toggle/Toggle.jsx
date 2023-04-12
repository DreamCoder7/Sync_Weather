import { useContext } from "react";

import { Toggle as ToggleStyled } from "../../../style/index";
import { ThemeContext } from "../../../Context/theme";

import IconSun from "../../../assets/sun.svg";
import IconMoon from "../../../assets/moon.svg";

export function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ToggleStyled onClick={setTheme} theme={theme}>
      {theme === "light" ? <img src={IconSun} /> : <img src={IconMoon} />}
    </ToggleStyled>
  );
}
