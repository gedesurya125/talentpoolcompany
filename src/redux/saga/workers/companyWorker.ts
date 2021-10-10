// import { AxiosError } from "axios";
import { put } from "redux-saga/effects";
import * as type from "../../actions/actionTypes";
import {
  unsetLoadingCompanyAction,
  setLoadingCompanyAction,
  setCompanyAction,
  addCompanyAction,
} from "../../actions/companyAction";
import { createCompanyAPI, getAllCompany } from "../../apis/companyAPI";

export function* getAllCompanyWorker(
  action: type.Action
): Generator<any, any, any> {
  try {
    yield put(setLoadingCompanyAction());
    const response = yield getAllCompany();
    if(response.data){
      yield put(setCompanyAction(response.data));
      yield put(unsetLoadingCompanyAction());
    }else{
      console.log('UNKNOWN DATA STRUCTURE', response);
      yield put(unsetLoadingCompanyAction());
    }
  } catch (err) {
    yield put(unsetLoadingCompanyAction());
  }
}

export function* createCompanyWorker(action:type.Action):Generator<any,any,any>{
  try{
    yield put(setLoadingCompanyAction());
    const response = yield createCompanyAPI(action.payload.data);
    if(response.data){
      yield put(addCompanyAction(response.data.dataCompany));
      yield put(unsetLoadingCompanyAction());
      action.callback && action.callback();
    }else{
      yield put(unsetLoadingCompanyAction());
      console.log('ERROR UNKNOWN DATA STRUCTURE detail:', response)
    }
  }catch(err:any){
    yield put(unsetLoadingCompanyAction());
    console.log('ERROR AT createCompanyWorker detail:', err.response)
  }
}