import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes'
import { createCompanyWorker, getAllCompanyWorker } from "../workers/companyWorker";


export function* getAllCompanyWatcher(){
  yield takeLatest(type.GET_COMPANY, getAllCompanyWorker);
}

export function* createCompanyWatcher(){
  yield takeLatest(type.CREATE_COMPANY, createCompanyWorker);
}