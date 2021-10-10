import { api } from "./setupAPI";

export interface TalentValidator {
  photo: string;
  username: string;
  fullname: string;
  address: string;
  phone: string;
  education: string[] | null;
  experience: any[] | null;
}

const headers = {
  "Content-Type": "application/json",
};

export const getAllTalentAPI = () => api.get<any>("/talent");
export const createNewTalentAPI = (talent: TalentValidator) =>
  api.post("/talent", talent, {
    headers,
  });
export const removeTalentAPI = (talentId:string) => api.delete(`/talent/${talentId}`);