import * as type from './actionTypes';
import {PicData} from '../apis/picAPI'


export const getAllPicAction = () => ({type:type.GET_PIC});
export const setPicAction = (data:any) => ({type:type.SET_PIC, payload:{data}});
export const setLoadingPicAction = () => ({type: type.SET_LOADING_PIC});
export const unsetLoadingPicAction = () => ({type: type.UNSET_LOADING_PIC});

export const createPicAction = (data:PicData, callback=()=>{}):type.Action => ({type: type.CREATE_PIC, payload:{data}, callback});
export const addPicAction = (data:PicData):type.Action => ({type: type.ADD_PIC, payload:{data}});

export const removePicAction = (picId:string):type.Action => ({type: type.REMOVE_PIC, payload:{data:picId}});
export const deletePicAction = (picId:string):type.Action => ({type: type.DELETE_PIC, payload:{data:picId}});