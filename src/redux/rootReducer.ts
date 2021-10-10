import {combineReducers} from 'redux'
import companyReducer from './reducers/companyReducer';
import picReducer from './reducers/picReducer';
import talentReducer from './reducers/talentReducer';
import trackerReducer from './reducers/trackerReducer';

const rootReducer = combineReducers({
talent: talentReducer,
company: companyReducer,
pic: picReducer,
tracker: trackerReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>