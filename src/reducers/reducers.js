import { combineReducers } from 'redux';
import topHeadlinesReducer from './topHeadlinesReducer';
import newsReducer from './newsReducer';
import inputValueReducer from './inputValueReducer';
import searchedReducer from './searchedReducer';

export default combineReducers({
    topHeadlines: topHeadlinesReducer,
    news: newsReducer,
    inputValue: inputValueReducer,
    searched: searchedReducer
});
