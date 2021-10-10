import { api } from "./setupAPI";

export interface PicData {
  username: string;
  fullname: string;
  photo: any | null;
  address: string;
}

export const getAllPic = () => api.get("/pic");

export const createPicAPI = (data:PicData) => api.post("/pic", data);
export const removePicAPI = (picId:string) => api.delete(`/pic/${picId}`);
