import { useContext, useRef } from "react";

import { Search, InputIcon } from "../../../style/index";
import { ThemeContext } from "../../../Context/theme";

import IconSearch from "../../../assets/magnifying-glass.svg";

export const SearchInput = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);

  return (
    <Search theme={theme}>
      <InputIcon src={IconSearch} alt="Magnifying-glass Icon" />
      <input type="text" placeholder="Search city..." ref={inputRef} />
      <button onClick={() => onClick(inputRef.current.value)}>Search</button>
    </Search>
  );
};
