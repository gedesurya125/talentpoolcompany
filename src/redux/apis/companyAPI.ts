import { api } from "./setupAPI";

export interface JobVacancyType {
  roleOpen: string[] | [] | null;
  requirement: string[] | [] | null;
  description: string;
  dateCreated: string;
  hiringStatus: boolean;
}

export interface CompanyType {
  _id?:string;
  name: string;
  photo: any;
  address: string;
  website: string;
  phone: string;
  jobVacancy: JobVacancyType[]
    | [];
}


export const getAllCompany = () => api.get("/company");
export const createCompanyAPI = (company: CompanyType) =>
  api.post("/company", company);

export const removeCompanyAPI = (companyId:string) => api.delete(`/company/${companyId}`);
