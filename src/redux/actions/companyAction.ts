import * as type from './actionTypes';

export const getAllCompanyAction = () => ({type: type.GET_COMPANY}); //used by saga
export const setCompanyAction = (data:any) => ({type: type.SET_COMPANY, payload: {data}});
export const setLoadingCompanyAction = () => ({type: type.SET_LOADING_COMPANY});
export const unsetLoadingCompanyAction = () => ({type: type.UNSET_LOADING_COMPANY});
