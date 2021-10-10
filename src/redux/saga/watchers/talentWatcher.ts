import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { createTalentWorker, getAllTalentWorker, removeTalentWorker } from "../workers/talentWorker";

export function* getAllTalentWatcher(){
  yield takeLatest(type.GET_TALENT, getAllTalentWorker);
}

export function* createTalentWatcher(){
  yield takeLatest(type.CREATE_TALENT, createTalentWorker);
}

export function* removeTalentWatcher(){
  yield takeLatest(type.REMOVE_TALENT, removeTalentWorker);
}