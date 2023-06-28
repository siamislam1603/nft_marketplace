import { Box, Button, Stack, Typography, styled } from "@mui/material";

export const ExploreNowButtonStyled = styled(Button)`
  color: white;
  text-transform: initial;
  border-radius: 60px;
`;
export const DotImgStyled = styled(Box)(
  () => `
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    transform:translateX(-10%);
`
);

export const LeftStackedSlider = styled(Box)(({theme})=>`
  overflow: hidden;
  height: 100%;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    ${theme.breakpoints.down('md')}{
        height:400px;
    }
  }
`);
export const SliderCardContainer = styled(Box)(
  ({ translate_value, scale_value }) => `
  width:100%;
  position:absolute;
  top:0;
  left:0;
  transform: translateX(${translate_value}px) scaleY(${scale_value});
  padding-left:2.75rem;
  @media only screen and (max-width: 374.98px){
    padding-left:0.75rem;
  }
`
);

export const SliderCard = styled(Stack)(
  ({ theme, img }) => `
    width:300px;
    height:400px;
    background:url('../../../public/${img}');
    background-repeat:no-repeat;
    background-size:cover;
    border-radius:24px;
    padding:${theme.spacing(2)};
    color:white;
    flex-direction:column;
    justify-content:space-between;
    position:relative;
    @media only screen and (max-width: 374.98px){
        width:275px;
    }
`
);
export const TypographySmallStyled = styled(Typography)`
  font-size: 0.75rem;
`;

export const BidStatusStyled = styled(Stack)`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:0.9rem 1.63rem;
`;

export const SlideButtonContainerStyled=styled(Box)`
    position:absolute;
    left:0;
    bottom:20%;
    transform:translate(-50%,-50%);
    .MuiButtonBase-root{
        background-color:#FFE0D4;
        width:5.5rem;
        height:5.5rem;
        border-radius:100%;
        position:relative;
        :hover{
            background-color:#FFE0D4;
        }
    }
    @media only screen and (max-width: 374.98px){
        transform:translate(-14%,-50%);
    }
`
export const CirculateTextImgStyled=styled(Box)`
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    width:100%;
    height:100%;
    background-size:cover;
    background-repeat:no-repeat;
`