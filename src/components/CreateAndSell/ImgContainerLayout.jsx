import { Box, Stack } from "@mui/material";
import { AuthorImgStyled } from "./styles";

const ImgContainerLayout = ({ authorImg, img, imgStyles }) => {
  return (
    <Stack direction='row' justifyContent='end' position="relative" pr="40px" pb="40px">
      <Box
        component="img"
        src={img}
        borderRadius='12px'
        sx={{ objectFit: "contain", objectPosition: "center", ...imgStyles }}
      />
      <AuthorImgStyled component="img" src={authorImg} alt="" />
    </Stack>
  );
};

export default ImgContainerLayout;
