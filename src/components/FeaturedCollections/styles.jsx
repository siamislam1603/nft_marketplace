import { Box, styled,Typography,Button } from "@mui/material";
export const SectionStyled = styled(Box)(
  ({ theme }) => `
background: rgba(217, 224, 236, 0.20);
backdrop-filter: blur(25px);
padding:${theme.spacing(10, 0)};
margin:${theme.spacing(10, 0)};
`
);

export const ThumbnailStyled = styled(Box)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 11.001px;
`;

export const CollectionImgStyled = styled(Box)`
  width: 100%;
  height: calc(33.33% - 5px);
  object-fit: cover;
  object-position: center;
  border-radius: 11.001px;
`;
export const AuthorImgStyled = styled(Box)`
  width: 28px;
  height: 28px;
  object-fit:cover;
  object-position:center;
  border-radius: 100%;
`;
export const LineClamp=styled(Typography)(({line})=>`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
`)
export const TotalItemsButtonStyled=styled(Button)(({theme})=>`
    color:${theme.palette.info.main};
    border-color:${theme.palette.info.main} !important;
    text-transform:initial;
    border-radius:60px;
`)