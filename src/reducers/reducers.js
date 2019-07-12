import { combineReducers } from 'redux';
import topHeadlinesReducer from './topHeadlinesReducer';

export default combineReducers({
    topHeadlines: topHeadlinesReducer,
});
