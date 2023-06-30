import FilterListIcon from "@mui/icons-material/FilterList";
import { Grid, Tab } from "@mui/material";
import { useState } from "react";
import nftsData from "./nftsData.json";
import { CategoriesTabsStyled, FiltersButtonStyled } from "./styles";

const FiltersCategories = () => {
  const { categories } = nftsData;
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2} mt={3}>
      <Grid item xs={12} tablet={9}>
        <CategoriesTabsStyled
          value={value}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          onChange={handleChange}
        >
          {categories.map((category, i) => (
            <Tab key={i} label={category} />
          ))}
        </CategoriesTabsStyled>
      </Grid>
      <Grid item xs={12} tablet={3} sx={{ textAlign: "end" }}>
        <FiltersButtonStyled startIcon={<FilterListIcon />}>
          All Filters
        </FiltersButtonStyled>
      </Grid>
    </Grid>
  );
};

export default FiltersCategories;
