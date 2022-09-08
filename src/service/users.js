import axios from "./api";

export function getUsers() {
  return axios.get("?results=12");
}