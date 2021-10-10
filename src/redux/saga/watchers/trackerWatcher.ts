import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { getAllTrackerWorker } from "../workers/trackerWorker";

export function* getAllTrackerWatcher(){
  yield takeLatest(type.GET_TRACKER, getAllTrackerWorker);
}