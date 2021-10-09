import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes'
import { getAllCompanyWorker } from "../workers/companyWorker";


export function* getAllCompanyWatcher(){
  yield takeLatest(type.GET_COMPANY, getAllCompanyWorker);
}