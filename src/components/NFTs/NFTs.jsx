import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FiltersCategories from "./FiltersCategories";
import nftsData from "./nftsData.json";
import { NFTCard, NFTSSectionStyled } from "./styles";

const NFTs = () => {
  const { titles, images } = nftsData;
  return (
    <NFTSSectionStyled>
      <Container maxWidth="xl">
        <Typography variant="h3" textTransform="uppercase">
          Discover more NFTs
        </Typography>
        <FiltersCategories />
        <Grid container my={4} spacing={4}>
          {[...new Array(12)].map((_, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <NFTCard>
                <Box position="relative">
                  <Box
                    component="img"
                    src={images[Math.floor(Math.random() * images.length)]}
                    className="nft-img"
                  />
                  <AvatarGroup total={4} sx={{ justifyContent: "start" }}>
                    {[...new Array(4)].map((_, j) => (
                      <Avatar
                        key={j}
                        alt=""
                        src={`assets/images/author-bordered-${j + 1}.svg`}
                        sx={{ width: 31, height: 31 }}
                      />
                    ))}
                  </AvatarGroup>
                </Box>
                <Box px="5px">
                  <Typography className="title" noWrap gutterBottom>
                    {titles[Math.floor(Math.random() * titles.length)]}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        component="img"
                        src="assets/images/eth-icon-success.svg"
                        height={16}
                      />
                      <Typography className="eth-text">0.25 ETH</Typography>
                    </Stack>
                    <Typography className="eth-serial">1 of 321</Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    mt={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Button className="timer-button">3h 50m 2s left</Button>
                    <Button className="place-bid-button">Place a bid</Button>
                  </Stack>
                </Box>
              </NFTCard>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" justifyContent="center">
          <Button
            variant="outlined"
            size="large"
            sx={{ borderRadius: "3.125rem" }}
          >
            More NFTs
          </Button>
        </Stack>
      </Container>
    </NFTSSectionStyled>
  );
};

export default NFTs;
