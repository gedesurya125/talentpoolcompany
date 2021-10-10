import * as type from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false
};


const trackerReducer = (state=initialState, action:type.Action)=> {
  switch(action.type){
    case type.SET_TRACEKR: return {
      ...state,
      data: action.payload.data
    };
    case type.SET_LOADING_TRACKER: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_TRACKER: return {
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default trackerReducer