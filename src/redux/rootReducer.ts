import {combineReducers} from 'redux'
import companyReducer from './reducers/companyReducer';
import talentReducer from './reducers/talentReducer';

const rootReducer = combineReducers({
talent: talentReducer,
company: companyReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>