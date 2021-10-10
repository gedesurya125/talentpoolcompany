import {put} from 'redux-saga/effects';
import * as type from '../../actions/actionTypes';
import { setLoadingTrackerAction, setTrackerAction, unsetLoadingTrackerAction } from '../../actions/trackerAction';
import { getAllTracker } from '../../apis/trackerAPI';

export function* getAllTrackerWorker(action:type.Action):Generator<any, any, any>{
  try{
    yield put(setLoadingTrackerAction());
    const response = yield getAllTracker();
    if(response.data){
      yield put(setTrackerAction(response.data));
      yield put(unsetLoadingTrackerAction());
    }else{
      console.log('UNKNOWN DATA STRUCTURE ERROR: ', response);
      yield put(unsetLoadingTrackerAction())
    }
  }catch(err){
    console.log('ERR AT GET ALL TRACKER WORKER DETAILS:', err);
    yield put(unsetLoadingTrackerAction())
  }
}