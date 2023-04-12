import { Search, InputSearch, InputIcon } from "../../../style/index";

import IconSearch from "../../../assets/magnifying-glass.svg";

export const SearchInput = () => {
  return (
    <Search>
      <InputIcon src={IconSearch} alt="Magnifying-glass Icon" />
      <InputSearch type="text" placeholder="Search city..." />
    </Search>
  );
};
