import { Box, Stack, Typography } from "@mui/material";

const Stats = ({ stats }) => {
  return (
    <Stack
      direction="row"
      spacing={2.5}
      alignItems="center"
      mt={3}
      flexWrap={{ xs: "wrap", sm: "nowrap" }}
    >
      {stats.map((stat, i) => (
        <Box key={i}>
          <Typography variant="h2" letterSpacing="0.125rem">
            {stat.value}
            <Box component="span" sx={{ fontFamily: "DM Sans" }}>
              +
            </Box>
          </Typography>
          <Typography
            variant="h6"
            fontWeight="fontWeightLight"
            lineHeight="160%"
            color="text.secondary"
            textTransform="capitalize"
          >
            {stat.text}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default Stats;
