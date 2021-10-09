
export interface Action {
  type: string;
  payload: {
    data:any
  }
}

//TALENT REDUCER
export const GET_TALENT = "GET_TALENT";
export const SET_TALENT = "SET_TALENT";
export const SET_LOADING_TALENT = "SET_LOADING_TALENT";
export const UNSET_LOADING_TALENT = "UNSET_LOADING_TALENT";

//COMPANY REDUCER
export const GET_COMPANY = "GET_COMPANY";
export const SET_COMPANY = "SET_COMPANY";
export const SET_LOADING_COMPANY = "SET_LOADING_COMPANY";
export const UNSET_LOADING_COMPANY = "UNSET_LOADING_COMPANY";