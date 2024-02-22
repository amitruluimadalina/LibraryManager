import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Alert,
  Paper,
  Divider,
  Tooltip,
} from "@mui/material";
import { Edit, Delete, ArrowBack } from "@mui/icons-material";
import { useBook } from "../../hooks/useBook";
import { BookProps } from "../../types/types";
import theme from "../../theme";

export default function ViewBook({ onDelete }: BookProps) {
  const book = useBook();

  return (
    <>
      <IconButton
        component={Link}
        to="/list"
        color="inherit"
        aria-label="back"
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          borderRadius: "50%",
          margin: 3,
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          },
        }}
      >
        <ArrowBack
          fontSize="medium"
          sx={{ color: theme.palette.background.default }}
        />
      </IconButton>

      <Container maxWidth="md">
        <Alert
          severity="warning"
          sx={{ marginBottom: 2, backgroundColor: theme.palette.warning.main }}
        >
          <Typography variant="subtitle1">
            Heads up! Editing or deleting details can alter the space-time
            continuum!
          </Typography>
        </Alert>

        <Paper
          elevation={3}
          sx={{ padding: 2, marginBottom: 10, marginTop: 5 }}
        >
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ wordWrap: "break-word", fontWeight: "bold" }}
              >
                Title:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                gutterBottom
                align="right"
                color={theme.palette.text.secondary}
                sx={{ wordWrap: "break-word" }}
              >
                {book.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 1 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                sx={{ wordWrap: "break-word", fontWeight: "bold" }}
              >
                Author:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                gutterBottom
                align="right"
                color={theme.palette.text.secondary}
                sx={{ wordWrap: "break-word" }}
              >
                {book.author}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 1 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                sx={{ wordWrap: "break-word", fontWeight: "bold" }}
              >
                Description:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                gutterBottom
                align="right"
                color={theme.palette.text.secondary}
                sx={{ wordWrap: "break-word" }}
              >
                {book.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 1 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                sx={{ wordWrap: "break-word", fontWeight: "bold" }}
              >
                Genre:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                gutterBottom
                align="right"
                color={theme.palette.text.secondary}
                sx={{ wordWrap: "break-word" }}
              >
                {book.genre}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
          <Grid container justifyContent="space-between">
            <Tooltip title="Delete">
              <IconButton
                color="error"
                size="medium"
                onClick={() => onDelete(book.id)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <Link to={`/${book.id}/edit`}>
                <IconButton color="primary" size="medium">
                  <Edit />
                </IconButton>
              </Link>
            </Tooltip>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
