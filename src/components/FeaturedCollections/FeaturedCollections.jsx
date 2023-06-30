import { Container, Grid, Stack, Typography } from "@mui/material";
import featuredCollectionsData from "./featuredCollectionsData.json";
import {
  AuthorImgStyled,
  CollectionImgStyled,
  LineClamp,
  SectionStyled,
  ThumbnailStyled,
  TotalItemsButtonStyled,
} from "./styles";

const FeaturedCollections = () => {
  const { sectionTitle, collections } = featuredCollectionsData;
  return (
    <SectionStyled>
      <Container maxWidth="xl">
        <Typography variant="h5">{sectionTitle}</Typography>
        <Grid container spacing={4} mt={3}>
          {collections.map((collection, i) => (
            <Grid key={i} item xs={12} tablet={6} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <ThumbnailStyled
                    component="img"
                    src={collection.thumbnail}
                    alt=""
                  />
                </Grid>
                <Grid item xs={3}>
                  {collection.images.map((img, j) => (
                    <CollectionImgStyled
                      component="img"
                      key={j}
                      src={img}
                      alt=""
                    />
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" mt={3} mb={1} nowrap>
                    {collection.title}
                  </Typography>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={6} lg={8}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AuthorImgStyled
                          component="img"
                          src={collection.author.img}
                          alt=""
                        />
                        <LineClamp line={2} fontSize=".875rem">
                          by {collection.author.name}
                        </LineClamp>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} lg={4} textAlign='end'>
                      <TotalItemsButtonStyled variant="outlined" size="small">
                        Total {collection.totalItems} items
                      </TotalItemsButtonStyled>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionStyled>
  );
};

export default FeaturedCollections;
