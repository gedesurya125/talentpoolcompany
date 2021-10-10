import * as type from "./actionTypes";
import { TalentValidator } from "../apis/talentAPI";
// interface Action<Type> {
//   type: string;
//   payload: Type
// }

export const getTalentAction = () => ({ type: type.GET_TALENT });
export const setTalentAction = <Type>(data: Type): type.Action => ({
  type: type.SET_TALENT,
  payload: { data },
});
export const setLoadingTalentAction = () => ({ type: type.SET_LOADING_TALENT });
export const unsetLoadingTalentAction = () => ({
  type: type.UNSET_LOADING_TALENT,
});

export const createTalentAction = (talent: TalentValidator, callback = () => {}):type.Action => ({
  type: type.CREATE_TALENT,
  payload: { data: talent },
  callback
});

export const addTalentAction = (talent: TalentValidator):type.Action => ({
  type: type.ADD_TALENT,
  payload: {data: talent}
})

export const removeTalentAction = (talentId:string):type.Action => ({ // USED BY SAGA
  type: type.REMOVE_TALENT,
  payload: {data:talentId}
}) 

export const deleteTalentAction = (talentId:string):type.Action => ({
  type: type.DELETE_TALENT,
  payload: {data:talentId}
})