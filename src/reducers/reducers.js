import { combineReducers } from 'redux';
import topHeadlinesReducer from './topHeadlinesReducer';
import newsReducer from './newsReducer';

export default combineReducers({
    topHeadlines: topHeadlinesReducer,
    news: newsReducer
});
