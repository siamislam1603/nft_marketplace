import { Box, Link, Paper, Typography, styled } from "@mui/material";

export const SocialLogoStyled = styled(Box)`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
`;

export const FooterLinkStyled = styled(Link)`
  display: block;
  margin-bottom: 0.025rem;
  color: #3d3d3d;
  font-size: 0.875rem;
  line-height: 200%;
`;

export const SectionTitleStyled = styled(Typography)(
  ({ theme }) => `
    font-size:1.125rem;
    text-transform:capitalize;
    margin-bottom:${theme.spacing(3)};
`
);

export const SubscriptionDescriptionStyled = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.muted.dark};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
`
);

export const SubscriptionInputStyled = styled(Paper)(
  ({ theme }) => `
      display:flex;
      align-items:center;
      justify-content:space-between;
      border:1px solid #EFEFEF;
      border-radius:100px;
      margin-top:${theme.spacing(3)};
      padding: ${theme.spacing(0.5, 0.5)};
      .MuiButtonBase-root{
        border-radius: 2.84969rem;
        background: ${theme.palette.info.main};
        padding: 0.94988rem 1.89981rem;
        color:white;
        text-transform:initial;
      }
  `
);

export const CopyrightStyled = styled(Typography)(
  ({ theme }) => `
    margin:${theme.spacing(2, 0)};
    text-align:center;
    color: #A4A4A4;
    font-size: 0.875rem;
    font-family: Averta Demo PE Cutted Demo;
    font-weight: 400;
    line-height: 160%;
`
);

export const CompanyDescriptionStyled = styled(Typography)(
  ({ theme }) => `
    font-family:Averta Demo PE Cutted Demo;
    color:${theme.palette.text.secondary};
    font-size:.875rem;
    font-weight:400;
    line-height:160%;
    margin:${theme.spacing(3, 0)};
`
);
