import axios from "axios";

export const getPokemon = (url: string) => {
  return axios.get(url);
};
