import axios from "axios";

const jwt = JSON.parse(localStorage.getItem("jwt") || '{"token":"null"}');

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: { Authorization: `Bearer ${jwt?.token}` },
});
