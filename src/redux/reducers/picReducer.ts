import * as type from "../actions/actionTypes";
// import {v4 as uuidv4} from 'uuid';

interface InitialState {
  data: {
    dataPIC: any[];
  };
  loading: boolean;
}

const initialState: InitialState = {
  data: {
    dataPIC: [],
  },
  loading: false,
};

const picReducer = (state = initialState, action: type.Action) => {
  switch (action.type) {
    case type.SET_PIC:
      return {
        ...state,
        data: action.payload.data,
      };
    case type.ADD_PIC:
      return {
        ...state,
        data: {
          dataPIC: [...state.data.dataPIC, action.payload.data],
        },
      };
    
    case type.DELETE_PIC: return {
      ...state,
      data: {
        ...state.data,
        dataPIC: state.data.dataPIC.filter(pic => pic._id !== action.payload.data)
      }
    }
    case type.SET_LOADING_PIC:
      return {
        ...state,
        loading: true,
      };
    case type.UNSET_LOADING_PIC:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default picReducer;
