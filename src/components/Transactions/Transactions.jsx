import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TransactionsSectionStyled } from "./styles";
import transactionsData from "./transactions.json";

const Transactions = () => {
  const { sectionTitle, transactions } = transactionsData;
  return (
    <TransactionsSectionStyled>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">{sectionTitle}</Typography>
          </Grid>
          {transactions.map((transaction, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Stack direction="row" spacing={2} alignItems='start'>
                <Box component="img" src={transaction.img} alt="" />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {transaction.title}
                  </Typography>
                  <Typography
                    fontSize=".875rem"
                    lineHeight="160%"
                    color="text.disabled"
                  >
                    {transaction.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TransactionsSectionStyled>
  );
};

export default Transactions;
