import { Container, Typography } from "@mui/material";
import BookDetailsForm from "../../components/BookDetailsForm";
import { useBook } from "../../hooks/useBook";
import { EditBookProps } from "../../types/types";

export default function EditBook({ onSubmit }: EditBookProps) {
  const book = useBook();
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center" sx={{ margin: 2 }}>
        Edit {book.title}
      </Typography>
      <BookDetailsForm
        title={book.title}
        author={book.author}
        description={book.description}
        genre={book.genre}
        type={book.type}  
        minutes={book.minutes}
        pages={book.pages}
        onSubmit={(data) => onSubmit(book.id, data)}/>
    </Container>
  );
}
