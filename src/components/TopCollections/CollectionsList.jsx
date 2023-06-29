import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { CollectionsListStyled } from "./styles";

const CollectionsList = () => {
  return (
    <CollectionsListStyled container alignItems="center" spacing={2}>
      {[...new Array(3)].map((_, i) => (
        <Fragment key={i}>
          <Grid item xs={4} sm={3} tablet={5}>
            <Box
              component="img"
              src={`assets/images/banner-${i + 1}.svg`}
              alt=""
              className="thumbnail-img"
            />
          </Grid>
          <Grid item xs={8} sm={9} tablet={7}>
            <Typography variant="h6" lineHeight="normal" gutterBottom>
              The Futr Abstr
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <Box
                component="img"
                src="assets/images/author.svg"
                className="author-img"
                alt=""
              />
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className="eth-badge"
              >
                <Box
                  component="img"
                  src="assets/images/eth-icon-success.svg"
                  alt=""
                />
                <Typography>0.25 ETH</Typography>
              </Stack>
              <Typography className="rating">1 of 8</Typography>
            </Stack>
            <Button variant="outlined">Place a bid</Button>
          </Grid>
        </Fragment>
      ))}
    </CollectionsListStyled>
  );
};

export default CollectionsList;
