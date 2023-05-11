import axios from "axios";

const APIURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: APIURL,
});

export const getServerStatus = () => {
  return instance.get("/health");
};
