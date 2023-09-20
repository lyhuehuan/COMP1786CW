import React, { useState, createContext, useEffect } from "react";
import {
  getBooks,
  getBookById,
  createBook as create,
  updateBook as update,
  deleteBook as deleteApi,
  searchBook as searchApi,
} from "./book.service";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    setIsLoading(true);
    getBooks()
      .then((books) => {
        setIsLoading(false);
        setBooks(books.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const loadBook = (id) => {
    setIsLoading(true);
    getBookById(id)
      .then((books) => {
        setIsLoading(false);
        setBook(books.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const creatBook = (book) => {
    setIsLoading(true);
    create(book)
      .then((res) => {
        setIsLoading(false);
        loadBooks();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const updateBook = (id, book) => {
    setIsLoading(true);
    update(id, book)
      .then((res) => {
        setIsLoading(false);
        loadBooks();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const deleteBook = (id) => {
    setIsLoading(true);
    deleteApi(id)
      .then((res) => {
        setIsLoading(false);
        loadBooks();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (keyword.length === 0) {
      loadBooks();
      return;
    }
    if (!keyword.length) {
      return;
    }

    setTimeout(() => {
      searchApi(keyword)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [keyword]);

  return (
    <BookContext.Provider
      value={{
        loadBooks,
        loadBook,
        creatBook,
        updateBook,
        deleteBook,
        onSearch,
        books,
        book,
        isLoading,
        error,
        keyword,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
