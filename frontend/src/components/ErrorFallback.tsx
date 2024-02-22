import { Button, Container, Typography } from "@mui/material";
import { ErrorFallbackProps } from "../types/types";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5" color="error" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography gutterBottom>
        {error.message}
      </Typography>
      <Button onClick={resetErrorBoundary} variant="contained" color="primary">
        Try Again
      </Button>
    </Container>
  );
}
