import {
  Button,
  Container,
  Divider,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import footerData from "./footerData.json";
import {
  CompanyDescriptionStyled,
  CopyrightStyled,
  FooterLinkStyled,
  SectionTitleStyled,
  SocialLogoStyled,
  SubscriptionDescriptionStyled,
  SubscriptionInputStyled,
} from "./styles";

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5} my={10}>
        <Grid
          item
          xs={12}
          tablet={5}
          lg={4}
          sx={{ order: { tablet: -2, lg: 0 } }}
        >
          <Typography variant="h5" textTransform="uppercase" fontSize="1.5rem">
            {footerData[0].sectionTitle}
          </Typography>
          <CompanyDescriptionStyled>
            {footerData[0].sectionDescription}
          </CompanyDescriptionStyled>
          <Stack direction="row" spacing={1.5} alignItems="center">
            {footerData[0].socialImages.map((image, i) => (
              <SocialLogoStyled component="img" src={image} key={i} alt="" />
            ))}
          </Stack>
        </Grid>
        {footerData.slice(1, 3).map((section, i) => (
          <Grid item xs={12} sm={6} tablet={6} lg={2} key={i}>
            <SectionTitleStyled variant="h6">
              {section.sectionTitle}
            </SectionTitleStyled>
            {section.items.map((item, j) => (
              <FooterLinkStyled key={j} component="button" underline="hover">
                {item}
              </FooterLinkStyled>
            ))}
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          tablet={7}
          lg={4}
          sx={{ order: { tablet: -1, lg: 0 } }}
        >
          <SectionTitleStyled variant="h6">
            {footerData[3].sectionTitle}
          </SectionTitleStyled>
          <SubscriptionDescriptionStyled>
            {footerData[3].sectionDescription}
          </SubscriptionDescriptionStyled>
          <SubscriptionInputStyled elevation={0} component="form">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter your email address.."
            />
            <Button
              type="button"
              size="small"
              variant="contained"
              sx={{ p: "10px" }}
            >
              Subscribe Now
            </Button>
          </SubscriptionInputStyled>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "#F4F4F4" }} />
      <CopyrightStyled>Copyright &copy; 2023 Siam Islam</CopyrightStyled>
    </Container>
  );
};

export default Footer;
