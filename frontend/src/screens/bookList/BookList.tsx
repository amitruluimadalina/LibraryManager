import { useMemo, useState } from "react";
import { Grid, TextField, Container, Typography, Box } from "@mui/material";
import BookCard from "./components/BookCard";
import { BookListProps } from "../../types/types";
import EmptyLibrary from "./components/EmptyLibrary";

export default function BookList({ books }: BookListProps) {
  const [title, setTitle] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      return (
        title === "" || book.title.toLowerCase().includes(title.toLowerCase())
      );
    });
  }, [title, books]);

  if (books.length === 0) return <EmptyLibrary />;

  return (
    <Container maxWidth="md">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            mt={2}
            fontWeight={600}
          >
            Find your next book
          </Typography>
        </Grid>
        <Grid item>
          <Box mb={2}>
            <TextField
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Search by title"
              fullWidth
              size="small"
              variant="outlined"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filteredBooks.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <BookCard
              id={book.id}
              title={book.title}
              description={book.description}
              genre={book.genre}
              author={book.author}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
