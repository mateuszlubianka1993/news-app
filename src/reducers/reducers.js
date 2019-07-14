import { combineReducers } from 'redux';
import topHeadlinesReducer from './topHeadlinesReducer';
import newsReducer from './newsReducer';
import inputValueReducer from './inputValueReducer';

export default combineReducers({
    topHeadlines: topHeadlinesReducer,
    news: newsReducer,
    searched: inputValueReducer
});
