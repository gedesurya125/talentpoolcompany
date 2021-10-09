import * as type from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false
};

interface Action {
  type: string;
  payload:{
    data:any
  }
}


const talentReducer = (state = initialState, action:Action) => {
  switch(action.type){
    case type.SET_TALENT: return{
      ...state,
      data: action.payload.data,
    };
    case type.SET_LOADING_TALENT: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_TALENT: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default talentReducer;