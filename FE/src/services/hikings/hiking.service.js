import axios from "axios";
import { BASE_URL } from "../../BaseURL/url";

export const getHikings = async () => await axios.get(`${BASE_URL}/hiking`);

export const getHikingById = async (hikingId) =>
  await axios.get(`${BASE_URL}/hiking/${hikingId}`);

export const createHiking = async (hiking) =>
  await axios.post(`${BASE_URL}/hiking/`, hiking);

export const updateHiking = async (hikingId, hiking) =>
  await axios.put(`${BASE_URL}/hiking/${hikingId}`, hiking);

export const deleteHiking = async (hikingId) =>
  await axios.delete(`${BASE_URL}/hiking/${hikingId}`);

export const searchHiking = async (keyword) =>
  await axios.get(`${BASE_URL}/hiking/search/${keyword}`);
