import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  BookData,
  BookDetailsFormProps,
} from "../types/types";
import { validationSchema } from "../constants/validation";
import { MenuItem } from "@mui/material";

export default function BookDetailsForm({
  onSubmit,
  title = "",
  author = "",
  genre = "",
  description = "",
  type = "Audio",
  minutes = type === "Audio" ? 0 : undefined,
  pages = type === "Paper" ? 0 : undefined,
}: BookDetailsFormProps) {
  const formik = useFormik({
    initialValues: {
      title,
      author,
      genre,
      description,
      type,
      minutes,
      pages,
    },
    validationSchema: validationSchema,
    onSubmit: (values: BookData) => {
      onSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ maxWidth: 400, margin: "auto" }}
    >
      <TextField
        fullWidth
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        fullWidth
        id="author"
        name="author"
        label="Author"
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        fullWidth
        id="genre"
        name="genre"
        label="Genre"
        value={formik.values.genre}
        onChange={formik.handleChange}
        error={formik.touched.genre && Boolean(formik.errors.genre)}
        helperText={formik.touched.genre && formik.errors.genre}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        fullWidth
        id="type"
        name="type"
        label="Type"
        select
        value={formik.values.type}
        onChange={formik.handleChange}
        sx={{ marginBottom: 3 }}
      >
        <MenuItem value="Audio">Audio</MenuItem>
        <MenuItem value="Paper">Paper</MenuItem>
      </TextField>
      {formik.values.type === "Audio" && (
        <TextField
          fullWidth
          id="minutes"
          name="minutes"
          label="Minutes"
          type="number"
          inputProps={{
            min: 0,
            step: 1,
            onKeyDown: (event) => {
              event.preventDefault();
            },
          }}
          value={formik.values.minutes }
          onChange={formik.handleChange}
          sx={{ marginBottom: 3 }}
        />
      )}
      {formik.values.type === "Paper" && (
        <TextField
          fullWidth
          id="pages"
          name="pages"
          label="Pages"
          type="number"
          inputProps={{
            min: 0,
            step: 1,
            onKeyDown: (event) => {
              event.preventDefault();
            },
          }}
          value={formik.values.pages}
          onChange={formik.handleChange}
          sx={{ marginBottom: 3 }}
        />
      )}
      <Button
        color="success"
        variant="contained"
        fullWidth
        type="submit"
        disabled={
          !formik.dirty ||
          !!formik.errors.title ||
          !!formik.errors.author ||
          !!formik.errors.genre ||
          !!formik.errors.description
        }
      >
        Submit
      </Button>
      <Link to="/list">
        <Button
          variant="contained"
          fullWidth
          type="button"
          sx={{ marginTop: 3 }}
        >
          Cancel
        </Button>
      </Link>
    </form>
  );
}
