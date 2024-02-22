import { useOutletContext } from "react-router-dom";
import { Book } from "../types/types";

export function useBook(): Book {
  return useOutletContext<Book>();
}
