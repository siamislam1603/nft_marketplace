import { Box, styled, Tabs,Button } from "@mui/material";

export const NFTSSectionStyled = styled(Box)(
  ({ theme }) => `
  background: rgba(217, 224, 236, 0.2);
  backdrop-filter: blur(25px);
  padding: ${theme.spacing(6, 0)};
`
);

export const CategoriesTabsStyled = styled(Tabs)(
  ({ theme }) => `
    .MuiTabs-flexContainer{
        gap:${theme.spacing(2)};
    }
    .MuiTabScrollButton-root.Mui-disabled{
        display:none;
    }
    .MuiTabs-indicator{
        display:none;
    }
    .MuiTab-root{
        background-color:${theme.palette.secondary.contrastText};
        color:black;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.09075rem;
        text-transform:capitalize;
        border-radius:100px;
        padding:10px 20px;
        &.Mui-selected{
            background-color:${theme.palette.primary.main};
            color:white;
        }
    }
`
);

export const FiltersButtonStyled=styled(Button)(({theme})=>`
    background-color:${theme.palette.secondary.contrastText};
    color:${theme.palette.primary.dark};
    border-radius:100px;
    padding:10px 20px;
`)

export const NFTCard=styled(Box)(({theme})=>`
    background:white;
    border-radius:13.165px;
    padding:${theme.spacing(1)};
    .nft-img{
        width:100%;
        height:223px;
        object-fit:cover;
        object-position:center;
        border-radius:12px;
    }
    .MuiAvatarGroup-root{
        padding:0 5px;
        position:absolute;
        bottom:0;
        transform:translateY(50%);
    }
    .title{
        font-size: 1.23419rem;
        font-weight: 700;
        line-height: 1.19663rem;
        margin-top:26px;
    }
    .eth-text{
        color:${theme.palette.success.main};
        font-size: 0.68569rem;
        font-weight: 700;
    }
    .eth-serial{
        color: ${theme.palette.muted.contrastText};
        text-align: right;
        font-size: 0.82281rem;
        line-height: 1.19663rem;
    }
    .MuiDivider-root{
        padding:${theme.spacing(1,0,2,0)};
        border-color:#F4F4F4;
    }
    .MuiButton-root{
        text-transform:initial;
        &.timer-button{
            border-radius: 6.85663rem;
            background: #F5F5F5;
            padding: 0.27425rem 0.68569rem;
            font-size: 0.68569rem;
            font-weight: 700;
            line-height: 1.19663rem;
        }
        &.place-bid-button{
            color: ${theme.palette.secondary.light};
            font-size: 0.95994rem;
        }
    }
`)