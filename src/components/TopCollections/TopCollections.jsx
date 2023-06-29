import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CollectionsList from "./CollectionsList";
import WeeklyCollectionsList from "./WeeklyCollectionsList";

const TopCollections = () => {
  return (
    <Container maxWidth="xl">
      <Grid container my={10} spacing={5}>
        <Grid item xs={12} tablet={6} md={6} lg={4}>
          <Box
            component="img"
            src="assets/images/collection-1.svg"
            width="100%"
            height={400}
            sx={{objectFit:'cover',objectPosition:'center'}}
            borderRadius='24px'
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                component="img"
                src="assets/images/author.svg"
                width={48}
                height={48}
                borderRadius="100%"
                alt=""
              />
              <Box>
                <Typography variant="h6">The Futr Abstr</Typography>
                <Typography fontSize=".875rem" sx={{ color: "muted.dark" }}>
                  10 in the stock
                </Typography>
              </Box>
            </Stack>
            <Box>
              <Typography
                fontSize=".75rem"
                sx={{ color: "#3A3A3A" }}
                gutterBottom
              >
                Highest Bid
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  src="assets/images/eth-icon-black-straight.svg"
                  width={13}
                />
                <Typography
                  sx={{ color: "#3A3A3A" }}
                  fontWeight="fontWeightBold"
                >
                  0.25 ETH
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} tablet={6} md={6} lg={4}>
          <CollectionsList />
        </Grid>
        <Grid item xs={12} tablet={12} md={12} lg={4} sx={{ borderLeft: "1px solid #ECECEC" }}>
          <WeeklyCollectionsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopCollections;
