import { Box, Button, Stack, Typography } from "@mui/material";
import {
  BidStatusStyled,
  CirculateTextImgStyled,
  LeftStackedSlider,
  SlideButtonContainerStyled,
  SliderCard,
  SliderCardContainer,
  TypographySmallStyled,
} from "./styles";
import { useState } from "react";

const NFTSlider = ({ nfts }) => {
  const [auctions, setAuctions] = useState(nfts);
  const handleSlideChange = () => {
    const [firstAuction, ...restAuctions] = auctions;
    setAuctions([...restAuctions, firstAuction]);
  };
  return (
    <LeftStackedSlider>
      <Box className="container">
        {auctions.map((auction, i) => (
          <SliderCardContainer
            key={i}
            translate_value={i * 20}
            scale_value={Math.max(0, (100 - i * 10) / 100)}
            sx={{ zIndex: auctions.length - i }}
          >
            <SliderCard img={auction.thumbnail}>
              <Box>
                <Typography
                  variant="h5"
                  letterSpacing="-0.0875rem"
                  fontFamily="DM Sans"
                  noWrap
                >
                  {auction.title}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    component="img"
                    src={auction.author.img}
                    width={32}
                    height={32}
                    borderRadius={"100%"}
                  />
                  <Typography variant="h6" noWrap>
                    {auction.author.name}
                  </Typography>
                </Stack>
              </Box>
              <BidStatusStyled>
                <Box>
                  <TypographySmallStyled>Current Bid</TypographySmallStyled>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      component="img"
                      src="assets/images/eth-icon.svg"
                      alt=""
                    />
                    <Typography fontWeight="fontWeightBold">
                      {auction.currentBid}
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <TypographySmallStyled>Ends In</TypographySmallStyled>
                  <Typography fontWeight="fontWeightBold">
                    {auction.endsIn}
                  </Typography>
                </Box>
              </BidStatusStyled>
              {i === 0 ? (
                <SlideButtonContainerStyled onClick={handleSlideChange}>
                  <Button>
                    <Box
                      component="img"
                      src="assets/images/eth-icon-black.svg"
                    />
                    <CirculateTextImgStyled
                      component="img"
                      src="assets/images/circulate-text.svg"
                      alt=""
                    />
                  </Button>
                </SlideButtonContainerStyled>
              ) : null}
            </SliderCard>
          </SliderCardContainer>
        ))}
      </Box>
    </LeftStackedSlider>
  );
};

export default NFTSlider;
