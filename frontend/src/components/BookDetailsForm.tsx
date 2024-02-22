import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BookData, BookDetailsFormProps } from "../types/types";
import { validationSchema } from "../constants/validation";

export default function BookDetailsForm({
  onSubmit,
  title = "",
  author = "",
  genre = "",
  description = "",
}: BookDetailsFormProps) {
  const formik = useFormik({
    initialValues: {
      title,
      author,
      genre,
      description,
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
