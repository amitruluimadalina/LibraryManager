import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  genre: yup.string().required("Genre is required"),
  description: yup.string().required("Description is required"),
});
