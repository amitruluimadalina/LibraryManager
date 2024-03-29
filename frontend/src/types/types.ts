import { AxiosResponse } from "axios";

export type BookListProps = {
  books: Book[];
};

export type EditBookProps = {
  onSubmit: (id: string, data: AudioBookData | PaperBookData) => void;
};

export type Book = {
  id: string;
} & BookData;

export type BookData = {
  title: string;
  author: string;
  genre: string;
  description: string;
  type: "Audio" | "Paper"; 
  minutes?: number; 
  pages?: number; 
};

export type AudioBookData = Omit<BookData, "pages">;
export type PaperBookData = Omit<BookData, "minutes">;


export type NewBookProps = {
  onSubmit: (data: AudioBookData | PaperBookData) => void;
};

export type BookProps = {
  onDelete: (id: string) => void;
};

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export type BookLayoutProps = {
  books: Book[];
};

export type Api = {
  get: () => Promise<Book[]>;
  post: (data: BookData) => Promise<AxiosResponse<Book>>;
  put: (url: string, data: BookData) => Promise<AxiosResponse<Book>>;
  remove: (url: string) => Promise<AxiosResponse<void>>;
};

export type BookDetailsFormProps = {
  onSubmit: (values: BookData) => void;
  title?: string;
  author?: string;
  genre?: string;
  description?: string;
  type?: "Audio" | "Paper"; 
  minutes?: number;
  pages?: number;
};

export type DrawerMenuProps = {
  open: boolean;
  onClose: () => void;
};
