import * as type from "../actions/actionTypes";
import { CompanyType } from "../apis/companyAPI";

interface InitialState {
  data: {
    dataCompany: CompanyType[];
  };
  loading: boolean;
}
const initialState: InitialState = {
  data: {
    dataCompany: [],
  },
  loading: false,
};

const companyReducer = (state = initialState, action: type.Action) => {
  switch (action.type) {
    case type.SET_COMPANY:
      return {
        ...state,
        data: action.payload.data,
      };
    case type.ADD_COMPANY:
      return {
        ...state,
        data:{
          ...state.data,
          dataCompany: [...state.data.dataCompany, action.payload.data]
        }
      };
    case type.DELETE_COMPANY: return {
      ...state,
      data: {
        ...state.data,
        dataCompany: state.data.dataCompany.filter(comp => comp._id !== action.payload.data)
      }
    }
    case type.SET_LOADING_COMPANY:
      return {
        ...state,
        loading: true,
      };
    case type.UNSET_LOADING_COMPANY:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default companyReducer;
