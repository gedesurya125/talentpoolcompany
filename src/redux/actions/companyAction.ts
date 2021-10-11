import * as type from "./actionTypes";
import { CompanyType } from "../apis/companyAPI";

export const getAllCompanyAction = () => ({ type: type.GET_COMPANY }); //used by saga
export const setCompanyAction = (data: any) => ({
  type: type.SET_COMPANY,
  payload: { data },
});
export const setLoadingCompanyAction = () => ({
  type: type.SET_LOADING_COMPANY,
});
export const unsetLoadingCompanyAction = () => ({
  type: type.UNSET_LOADING_COMPANY,
});
export const createCompanyAction = (
  data: CompanyType,
  callback = () => {}
): type.Action => ({ type: type.CREATE_COMPANY, payload: { data }, callback });

export const addCompanyAction = (data: CompanyType): type.Action => ({
  type: type.ADD_COMPANY,
  payload: { data },
});

export const removeCompanyAction = (companyId:string):type.Action => ({ 
  type: type.REMOVE_COMPANY,
  payload: {data:companyId}
})

export const deleteCompanyAction = (companyId:string):type.Action => ({
  type: type.DELETE_COMPANY,
  payload: {data:companyId}
})