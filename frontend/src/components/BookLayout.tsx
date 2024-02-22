import { Navigate, Outlet, useParams } from "react-router-dom";
import { BookLayoutProps } from "../types/types";

export default function BookLayout({ books }: BookLayoutProps) {
  const { id } = useParams();
  const book = books.find((n) => parseInt(n.id) === parseInt(id!));

  if (book == null) return <Navigate to=".." />;

  return <Outlet context={book} />;
}
