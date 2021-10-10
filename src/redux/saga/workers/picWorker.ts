import {put} from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { addPicAction, deletePicAction, setLoadingPicAction, setPicAction, unsetLoadingPicAction } from '../../actions/picAction';
import { createPicAPI, getAllPic, removePicAPI } from '../../apis/picAPI';

export function* getAllPicWorker(action:type.Action):Generator<any, any, any>{
  try{
    yield put(setLoadingPicAction());
    const response = yield getAllPic();
    if(response.data){
      yield put(setPicAction(response.data));
      yield put(unsetLoadingPicAction());
    }else{
      console.log('UNKNOWN DATA STRUCTURE AT GET ALL PIC WORKER :',response)
      yield put(unsetLoadingPicAction());
    }
  }catch(err){
    console.log('ERROR AT GET ALL PIC WORKER DETAILS: ', err);
    yield put(unsetLoadingPicAction())
  }
}

export function* createPicWorker(action:type.Action):Generator<any,any,any>{
  try{
    yield put(setLoadingPicAction());
    const response = yield createPicAPI(action.payload.data);
    if(response.data){
      yield put(addPicAction(response.data.dataPIC));
      yield put(unsetLoadingPicAction());
      action.callback && action.callback();
    }else{
      yield put(unsetLoadingPicAction());
      console.log('UNKNOWN DATA STRUCTURE AT createPicWorker, details', response);
    }
  }catch(err:any){
    yield put(unsetLoadingPicAction());
    console.log('ERR AT createPicWorker, DETAILS: ', err.response)
  }
}

export function* removePicWorker(action:type.Action):Generator<any,any,any>{
  try{
    yield put(setLoadingPicAction());
    const response = yield removePicAPI(action.payload.data);
    if(response.data){
      yield put(deletePicAction(action.payload.data));
      yield put(unsetLoadingPicAction());
    }else{
      console.log('UNKNOWN DATA STRUCTURE AT removePicWorker : ', response)
    }

  }catch(err:any){
    yield put(unsetLoadingPicAction());
    console.log('ERR AT REMOVE PIC WORKER', err.response)
  }
}