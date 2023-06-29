import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { WeeklyCollectionsStyled } from "./styles";
import data from "./topCollectionsData.json";

const WeeklyCollectionsList = () => {
  return (
    <WeeklyCollectionsStyled>
      <Typography variant="h6" className="section-title" gutterBottom>
        Top collections over
      </Typography>
      <Typography className="section-subtitle">Last 7 days</Typography>
      <Box className="collections-grid" mt={4} alignItems="center">
        {data.map((collection, i) => (
          <Fragment key={i}>
            {i !== 0 ? (
              <Box sx={{ gridColumn: "1 / -1" }}>
                <Divider />
              </Box>
            ) : null}
            <Box>
              <Stack direction="row" spacing={2.5} alignItems="center">
                <Typography className="serial">{i + 1}</Typography>
                <Box className="img-container">
                  <Box
                    component="img"
                    src={collection.img}
                    alt=""
                    className="nft-img"
                  />
                  {collection.isVerified ? (
                    <Box
                      component="img"
                      src="assets/images/verify.svg"
                      alt=""
                      className="verify-img"
                    />
                  ) : null}
                </Box>
              </Stack>
            </Box>
            <Grid container alignItems="center">
              <Grid item xs={8} pl={2}>
                <Typography className="title" gutterBottom noWrap>
                  {collection.title}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    component="img"
                    src="assets/images/eth-icon-black-straight.svg"
                    alt=""
                    className="eth-icon"
                  />
                  <Typography className="eth-value">
                    {collection.eth}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  className="ratio"
                  sx={{
                    color: collection.ratioDeclined
                      ? "danger.main"
                      : "success.contrastText",
                  }}
                >
                  {collection.ratio}
                </Typography>
              </Grid>
            </Grid>
          </Fragment>
        ))}
      </Box>
    </WeeklyCollectionsStyled>
  );
};

export default WeeklyCollectionsList;
