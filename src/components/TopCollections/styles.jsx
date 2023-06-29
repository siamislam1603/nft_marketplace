import { Box, Grid, styled } from "@mui/material";

export const CollectionsListStyled = styled(Grid)(
  ({ theme }) => `
  .thumbnail-img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
  }
  .author-img{
    width:34px;
    height:34px;
    border-radius:100%;
  }
  .eth-badge{
    border:1px solid ${theme.palette.success.main};
    border-radius:6px;
    padding:${theme.spacing(0.5)};
    img{
        height:14px;
    }
    .MuiTypography-root{
        font-size:0.75rem;
        font-weight:${theme.typography.fontWeightBold};
        color:${theme.palette.success.main};
    }
  }
  .rating{
    font-size:.875rem;
    font-weight:${theme.typography.fontWeightLight};
    color:${theme.palette.muted.light};
  }
  .MuiButton-root{
    text-transform:initial;
    border-radius:50px;
  }
`
);

export const WeeklyCollectionsStyled=styled(Box)(({theme})=>`
  .section-title{
    text-transform:uppercase;
    font-family:Integral CF;
    line-height:normal;
  }
  .section-subtitle{
    font-size:1.125rem;
    font-weight:${theme.typography.fontWeightBold};
    color:${theme.palette.primary.main};
  }
  .collections-grid{
    display:grid;
    grid-template-columns: 95px calc(100% - 95px);
    row-gap:${theme.spacing(4)};
  }
  .serial{
    font-size:1.5rem;
    font-weight:${theme.typography.fontWeightBold};
    line-height:103%;
    letter-spacing:-0.0375rem;
  }
  .img-container{
    position:relative;
    display:flex;
    align-items:center; 
    .nft-img{
        width:60px;
        height:60px;
        border-radius:100%;
        object-fit:cover;
        object-position:center;
    }
    .verify-img{
        position:absolute;
        top:0;
        right:0;
        width:32px;
        height:32px;
        object-fit:cover;
        object-position:center;
        border-radius:100%;
        transform:translate(20%,-20%)
    }
  }
  .title{
    line-height: 103%;
    letter-spacing: -0.025rem;
  }
  .eth-icon{
    width:15px;
  }
  .eth-value{
    color: ${theme.palette.muted.main};
    font-size: 0.875rem;
    font-family: Poppins;
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: 103%;
    letter-spacing: -0.02188rem;
  }
  .ratio{
    font-family:Poppins;
    font-weight:${theme.typography.fontWeightMedium};
    text-align:right;
  }
`)