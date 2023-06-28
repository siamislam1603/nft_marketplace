import { AppBar, IconButton, Paper, Typography, styled } from "@mui/material";

export const NavbarStyled = styled(AppBar)(
  ({ theme }) => `
    background-color:white;
    border-bottom: 1px solid #EFEFEF;
    .MuiContainer-root{
        padding: 0;
    }
    .MuiToolbar-root{
        gap: ${theme.spacing(3)};
        align-items:center;
        ${theme.breakpoints.down("sm")}{
            gap:${theme.spacing(1)};
        }
    }
    .btns{
        border-radius:60px;
        padding:${theme.spacing(1, 3)};
        font-size:.875rem;
        font-weight:${theme.typography.fontWeightBold};
        text-transform:initial;
        .MuiButton-startIcon{
            margin:0;
            ${theme.breakpoints.up("md")}{
                display:none;
            }
        }
        ${theme.breakpoints.down("md")}{
            flex-direction:column;
            border-radius:0;
        }
        ${theme.breakpoints.down("md")}{
            padding:5px;
        }
    }
`
);

export const MenuButtonStyled = styled(IconButton)(
  ({ theme }) => `
    background-color:${theme.palette.secondary.contrastText};
    color:black;
    ${theme.breakpoints.up("lg")}{
        display:none;
    }
`
);

export const CompanyNameStyled = styled(Typography)(
  ({ theme }) => `
    text-transform:uppercase;
    color:${theme.palette.primary.main};
    font-family:Integral CF;
    font-size:1.5rem;
    font-weight:${theme.typography.fontWeightBold};
    border-right:1px solid #F4F4F4;
    padding-right:${theme.spacing(3)};
    ${theme.breakpoints.down("sm")}{
        padding-right:${theme.spacing(2)};
    }
`
);

export const SearchFieldStyled = styled(Paper)(
  ({ theme }) => `
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid #EFEFEF;
    border-radius:100px;
    padding-left: ${theme.spacing(2)};
    padding-right: ${theme.spacing(1)};
    svg{
        font-size:20px;
    }
`
);
