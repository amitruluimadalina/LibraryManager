import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import useSWR, { mutate } from "swr";
import toast, { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { createApi } from "./api/booksApi";
import { baseURL, booksKey } from "./constants/api";
import Loading from "./components/Loading";
import { AudioBookData, PaperBookData } from "./types/types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const BookList = lazy(() => import("./screens/bookList/BookList"));
const BookLayout = lazy(() => import("./components/BookLayout"));
const ViewBook = lazy(() => import("./screens/viewBook/ViewBook"));
const EditBook = lazy(() => import("./screens/editBook/EditBook"));
const Home = lazy(() => import("./screens/home/Home"));
const NewBook = lazy(() => import("./screens/newBook/NewBook"));

export default function App() {
  const api = createApi(baseURL);
  const navigate = useNavigate();
  const { data: books } = useSWR(booksKey, api.get, { fallbackData: [] });

  const handleCreateBook = async (data: AudioBookData | PaperBookData) => {
    try {
      console.log(data);
      await api.post(data);
      mutate(booksKey);
      navigate("/list");
    } catch (error) {
      toast.error("Error creating book");
    }
  };

  const handleUpdateBook = async (
    id: string,
    data: AudioBookData | PaperBookData
  ) => {
    try {
      await api.put(`${id}`, data);
      mutate(booksKey);
      navigate(-1);
    } catch (error) {
      toast.error(`Error updating book with ID ${id}`);
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await api.remove(`${id}`);
      mutate(booksKey);
      navigate("/list");
    } catch (error) {
      toast.error(`Error deleting book with ID ${id}`);
    }
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<BookList books={books} />} />
          <Route
            path="/new"
            element={<NewBook onSubmit={handleCreateBook} />}
          />
          <Route path="/:id" element={<BookLayout books={books} />}>
            <Route index element={<ViewBook onDelete={handleDeleteBook} />} />
            <Route
              path="edit"
              element={<EditBook onSubmit={handleUpdateBook} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
