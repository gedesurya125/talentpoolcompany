import { api } from "./setupAPI";

export const getAllTalentAPI = () => api.get<any>('/talent');