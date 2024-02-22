import { Container, Typography } from "@mui/material";
import BookDetailsForm from "../../components/BookDetailsForm";
import { NewBookProps } from "../../types/types";

export default function NewBook({ onSubmit }: NewBookProps) {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center" sx={{ margin: 2 }}>
        Create book
      </Typography>
      <BookDetailsForm onSubmit={onSubmit} />
    </Container>
  );
}
