import {takeLatest} from 'redux-saga/effects';
import * as type from '../../actions/actionTypes';
import { createPicWorker, getAllPicWorker, removePicWorker } from '../workers/picWorker';

export function* getAllPicWatcher(){
  yield takeLatest(type.GET_PIC, getAllPicWorker);
}

export function* createPicWatcher(){
  yield takeLatest(type.CREATE_PIC, createPicWorker);
}

export function* removePicWatcher(){
  yield takeLatest(type.REMOVE_PIC, removePicWorker);
}