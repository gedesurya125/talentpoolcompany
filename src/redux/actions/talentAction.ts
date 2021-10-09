import * as type from './actionTypes';

// interface Action<Type> {
//   type: string;
//   payload: Type
// }

export const getTalentAction = () => ({type: type.GET_TALENT});
export const setTalentAction = <Type>(data:Type):type.Action => ({type: type.SET_TALENT, payload: {data}})
export const setLoadingTalentAction = () => ({type: type.SET_LOADING_TALENT});
export const unsetLoadingTalentAction = () => ({type: type.UNSET_LOADING_TALENT});