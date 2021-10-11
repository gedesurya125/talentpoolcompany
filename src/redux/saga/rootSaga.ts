import { all } from "redux-saga/effects";
import { createCompanyWatcher, getAllCompanyWatcher, removeCompanyWatcher } from "./watchers/companyWatcher";
import { createPicWatcher, getAllPicWatcher, removePicWatcher } from "./watchers/picWatcher";
import { createTalentWatcher, getAllTalentWatcher, removeTalentWatcher } from "./watchers/talentWatcher";
import { getAllTrackerWatcher } from "./watchers/trackerWatcher";

export default function* rootSaga(){
  yield all([
    getAllTalentWatcher(),
    getAllCompanyWatcher(),
    getAllPicWatcher(),
    getAllTrackerWatcher(),
    createTalentWatcher(),
    removeTalentWatcher(),
    createPicWatcher(),
    removePicWatcher(),
    createCompanyWatcher(),
    removeCompanyWatcher(),
  ])
}