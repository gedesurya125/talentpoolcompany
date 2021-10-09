import * as type from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false
}

const companyReducer = (state = initialState, action:type.Action) =>{
  switch(action.type){
    case type.SET_COMPANY: return {
      ...state,
      data: action.payload.data
    };
    case type.SET_LOADING_COMPANY: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_COMPANY: return {
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default companyReducer;