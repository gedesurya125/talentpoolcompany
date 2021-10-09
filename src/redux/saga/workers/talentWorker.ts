import * as type from '../../actions/actionTypes';
import {put} from 'redux-saga/effects';
import { setLoadingTalentAction, setTalentAction, unsetLoadingTalentAction } from '../../actions/talentAction';
import { getAllTalentAPI } from '../../apis/talentAPI';



export function* getAllTalentWorker(action:type.Action):Generator<any, any, any>{
  try{
    yield put(setLoadingTalentAction());
    const response = yield getAllTalentAPI();
    if(response.data){
      yield put(setTalentAction(response.data));
      yield put(unsetLoadingTalentAction());
    }else{
      yield put(unsetLoadingTalentAction());
    }
  }catch(err){
    yield put(unsetLoadingTalentAction());
  }
}

