import { CircularProgress, Container, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <CircularProgress size={80} thickness={4} />
      <Typography variant="h5" color="primary" mt={2}>
        Loading...
      </Typography>
    </Container>
  );
}
