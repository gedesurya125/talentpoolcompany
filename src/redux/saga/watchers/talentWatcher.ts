import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { getAllTalentWorker } from "../workers/talentWorker";

export function* getAllTalentWatcher(){
  yield takeLatest(type.GET_TALENT, getAllTalentWorker);
}