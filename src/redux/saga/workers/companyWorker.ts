import { put } from "redux-saga/effects";
import * as type from "../../actions/actionTypes";
import {
  unsetLoadingCompanyAction,
  setLoadingCompanyAction,
  setCompanyAction,
} from "../../actions/companyAction";
import { getAllCompany } from "../../apis/companyAPI";

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
