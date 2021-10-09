import { all } from "redux-saga/effects";
import { getAllCompanyWatcher } from "./watchers/companyWatcher";
import { getAllTalentWatcher } from "./watchers/talentWatcher";

export default function* rootSaga(){
  yield all([
    getAllTalentWatcher(),
    getAllCompanyWatcher()
  ])
}