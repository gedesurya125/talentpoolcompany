import { api } from "./setupAPI";

export const getAllCompany = () => api.get('/company');
