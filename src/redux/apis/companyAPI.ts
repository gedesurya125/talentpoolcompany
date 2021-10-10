import { api } from "./setupAPI";

export interface CompanyType {
  name: string;
  photo: any;
  address: string;
  website: string;
  phone: string;
  jobVacancy:
    | [
        {
          roleOpen: string[] | [] | null;
          requirement: string[] | [] | null;
          description: string;
          dateCreated: string;
          hiringStatus: boolean;
        }
      ]
    | []
    | null;
}

export interface JobVacancyType {
  roleOpen: string[] | [] | null;
  requirement: string[] | [] | null;
  description: string;
  dateCreated: string;
  hiringStatus: boolean;
}
export const getAllCompany = () => api.get("/company");
export const createCompanyAPI = (company: CompanyType) =>
  api.post("/company", company);
