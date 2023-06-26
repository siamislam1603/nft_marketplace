import {AppBar, Paper, Typography, styled} from '@mui/material'

export const NavbarStyled = styled(AppBar)(
  ({theme}) => `
    background-color:white;
    border-bottom: 1px solid #EFEFEF;
    .MuiToolbar-root{
        gap: ${theme.spacing(3)};
        align-items:center;
    }
    .btns{
        border-radius:60px;
        padding:${theme.spacing(1,3.5)};
        font-size:.875rem;
        font-weight:${theme.typography.fontWeightBold};
        text-transform:initial;
        ${theme.breakpoints.down('sm')}{
            flex-direction:column;
        }
    }
`
)

export const CompanyNameStyled = styled(Typography)(
  ({theme}) => `
    text-transform:uppercase;
    color:${theme.palette.primary.main};
    font-family:Integral CF;
    font-size:1.5rem;
    font-weight:${theme.typography.fontWeightBold};
    border-right:1px solid #F4F4F4;
    padding-right:${theme.spacing(3)};
`
)

export const SearchFieldStyled=styled(Paper)(({theme})=>`
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
`)