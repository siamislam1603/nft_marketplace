import { Box, Container, Grid, Typography } from "@mui/material";
import NFTSlider from "./NFTSlider";
import Stats from "./Stats";
import bannerData from "./bannerData.json";
import { DotImgStyled, ExploreNowButtonStyled } from "./styles";
const Banner = () => {
  const { title, subTitle, stats, nfts } = bannerData;
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="h6"
            fontWeight="fontWeightLight"
            color="text.secondary"
          >
            {subTitle}
          </Typography>
          <Box mt={5} position="relative">
            <ExploreNowButtonStyled size="large" variant="contained">
              Explore Now
            </ExploreNowButtonStyled>
            <Stats stats={stats} />
            <DotImgStyled component="img" src="assets/images/Dot.svg" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <NFTSlider nfts={nfts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
