import { Link, Stack } from "@mui/material";

const menuItems = ["marketplace", "resource", "about"];
const MenuItems = ({ handleClick }) => {
  const handleOnLinkClick = () => {
    if (handleClick) handleClick();
  };
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={{ xs: 1, lg: 5 }}
      alignItems={{ xs: "start", lg: "center" }}
      sx={{ px: { xs: 3, lg: 0 } }}
    >
      {menuItems.map((menuItem, i) => (
        <Link
          key={i}
          sx={{ textTransform: "capitalize", color: "black" }}
          component="button"
          underline="hover"
          onClick={handleOnLinkClick}
        >
          {menuItem}
        </Link>
      ))}
    </Stack>
  );
};

export default MenuItems;
