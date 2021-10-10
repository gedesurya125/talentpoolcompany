import * as type from '../actions/actionTypes';
// import { v4 as uuidv4 } from 'uuid';

type InitialState = {
  data: {
    dataTalent: any[]
  },
  loading: boolean
};


const initialState:InitialState = {
  data: {
    dataTalent:[]
  },
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
    case type.ADD_TALENT: return {
      ...state,
      data:{
        ...state.data,
        dataTalent:[
          ...state.data.dataTalent,
          action.payload.data
        ]
      }
    };
    case type.DELETE_TALENT: return {
      ...state,
      data:{
        ...state.data,
        dataTalent: state.data.dataTalent.filter(talent => talent._id !== action.payload.data)
      }
    }
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