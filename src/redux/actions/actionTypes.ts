
export interface Action {
  type: string;
  payload: {
    data:any
  },
  callback?: () => void  
}

//TALENT REDUCER
export const GET_TALENT = "GET_TALENT"; //used ny saga
export const SET_TALENT = "SET_TALENT";
export const SET_LOADING_TALENT = "SET_LOADING_TALENT";
export const UNSET_LOADING_TALENT = "UNSET_LOADING_TALENT";

export const CREATE_TALENT = "CREATE_TALENT"; //used by saga
export const ADD_TALENT = "ADD_TALENT"; //add talent object to reducer 
export const REMOVE_TALENT = "REMOVE_TALENT" //used by saga
export const DELETE_TALENT = "DELETE_TALENT"; //delete talent data on reducer 

//COMPANY REDUCER
export const GET_COMPANY = "GET_COMPANY";
export const SET_COMPANY = "SET_COMPANY";
export const SET_LOADING_COMPANY = "SET_LOADING_COMPANY";
export const UNSET_LOADING_COMPANY = "UNSET_LOADING_COMPANY";

//PIC
export const GET_PIC = "GET_PIC";
export const SET_PIC = "SET_PIC";
export const SET_LOADING_PIC = "SET_LOADING_PIC";
export const UNSET_LOADING_PIC = "UNSET_LOADING_PIC";


export const CREATE_PIC = "CREATE_PIC";
export const ADD_PIC = "ADD_PIC";
export const REMOVE_PIC = "REMOVE_PIC";
export const DELETE_PIC = "DELETE_PIC";

//TRACKER
export const GET_TRACKER = "GET_TRACKER";
export const SET_TRACEKR = "SET_TRACEKR";
export const SET_LOADING_TRACKER = "SET_LOADING_TRACKER";
export const UNSET_LOADING_TRACKER = "UNSET_LOADING_TRACKER";