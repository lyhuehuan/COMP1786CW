import axios from "axios";
import { BASE_URL } from "../../BaseURL/url";

export const getBooks = async () => await axios.get(`${BASE_URL}/book`);

export const getBookById = async (bookId) =>
  await axios.get(`${BASE_URL}/book/${bookId}`);

export const createBook = async (book) =>
  await axios.post(`${BASE_URL}/book/`, book);

export const updateBook = async (bookId, book) =>
  await axios.put(`${BASE_URL}/book/${bookId}`, book);

export const deleteBook = async (bookId) =>
  await axios.delete(`${BASE_URL}/book/${bookId}`);

export const searchBook = async (keyword) =>
  await axios.get(`${BASE_URL}/book/search/${keyword}`);
