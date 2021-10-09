import axios from 'axios';

export const baseURL = "https://talent-tracker-app.herokuapp.com";
export const api = axios.create({
  baseURL
})
