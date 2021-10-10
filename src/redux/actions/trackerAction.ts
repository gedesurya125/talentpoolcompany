import * as type from './actionTypes';

export const getAllTracekrAction = () => ({type: type.GET_TRACKER}); //used by saga
export const setTrackerAction = (data:any):type.Action => ({type: type.SET_TRACEKR, payload:{data}});
export const setLoadingTrackerAction = () => ({type: type.SET_LOADING_TRACKER});
export const unsetLoadingTrackerAction = () => ({type: type.UNSET_LOADING_TRACKER});