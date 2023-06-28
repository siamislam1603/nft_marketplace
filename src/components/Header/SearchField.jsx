import { IconButton, InputBase } from "@mui/material";
import { RiSearch2Line } from "react-icons/ri";
import { SearchFieldStyled } from "./styles";

const SearchField = () => {
  return (
    <SearchFieldStyled elevation={0} component="form">
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: "10px" }}>
        <RiSearch2Line />
      </IconButton>
    </SearchFieldStyled>
  );
};

export default SearchField;
