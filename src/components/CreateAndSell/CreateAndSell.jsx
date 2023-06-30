import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import ImgContainerLayout from "./ImgContainerLayout";

const CreateAndSell = () => {
  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
      <Grid container spacing={5.5} alignItems="center">
        <Grid item xs={12} tablet={7} lg={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Stack direction="column" alignItems="end" spacing={2}>
                <ImgContainerLayout
                  authorImg={"assets/images/author-bordered-1.svg"}
                  img={"assets/images/banner-1.svg"}
                  imgStyles={{ width: "100%" }}
                />
                <ImgContainerLayout
                  authorImg={"assets/images/author-bordered-2.svg"}
                  img={"assets/images/banner-3.svg"}
                  imgStyles={{ width: "70%" }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} alignSelf="center">
              <ImgContainerLayout
                authorImg={"assets/images/author-bordered-2.svg"}
                img={"assets/images/banner-2.svg"}
                imgStyles={{ width: "100%", height: '50%', objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} tablet={5} lg={6}>
          <Typography variant="h4" maxWidth={300}>
            Create and sell your NFTs
          </Typography>
          <Typography
            fontSize="1.125rem"
            fontWeight="fontWeightLight"
            lineHeight="160%"
            sx={{ color: "muted.main" }}
            mt={3.5}
            mb={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "initial",
              borderRadius: "50px",
              color: "white",
            }}
          >
            Sign Up Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateAndSell;
