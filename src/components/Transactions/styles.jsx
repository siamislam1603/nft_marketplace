import { Box, styled } from "@mui/material";

export const TransactionsSectionStyled=styled(Box)(({theme})=>`
    padding:${theme.spacing(10,0)};
    background: rgba(217, 224, 236, 0.20);
    backdrop-filter: blur(25px);
    margin:${theme.spacing(10,0)};
`)
