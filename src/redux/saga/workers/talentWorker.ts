import * as type from '../../actions/actionTypes';
import {put} from 'redux-saga/effects';
import { addTalentAction, deleteTalentAction, setLoadingTalentAction, setTalentAction, unsetLoadingTalentAction } from '../../actions/talentAction';
import { createNewTalentAPI, getAllTalentAPI, removeTalentAPI } from '../../apis/talentAPI';



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

export function* createTalentWorker(action:type.Action):Generator<any, any, any>{
  try{
    yield put(setLoadingTalentAction());
    console.log('DATA YANG DIKIRIM', action.payload.data);
    const response = yield createNewTalentAPI(action.payload.data);
    if(response.data){
      yield put(addTalentAction(response.data.dataTalent));
      yield put(unsetLoadingTalentAction());
      action.callback && action.callback();
    }else{
      console.log('UNKNOWN DATA STRUCTURE AT CREATE TALENT WORKER', response)
      yield put(unsetLoadingTalentAction());
    }
  }catch(err:any){
    console.log('ERROR CREATE NEW TALENT AT CREATETALENTWORKER DETAIL:', err.response)
    yield put(unsetLoadingTalentAction())
  }
};

export function* removeTalentWorker (action:type.Action):Generator<any,any,any>{
  try{
    yield put(setLoadingTalentAction());
    const response = yield removeTalentAPI(action.payload.data) // data containt talent._id
    if(response.data){
      yield put(deleteTalentAction(action.payload.data));
      yield put(unsetLoadingTalentAction());
    }else{
      yield put(unsetLoadingTalentAction());
      console.log('UNKNOWN DATA STRUCTURE RECEIVED');
    }
  }catch(err:any){
    yield put(unsetLoadingTalentAction());
    console.log('ERROR AT DELETE DATA TALENT WORKER', err.response)
  }
}

