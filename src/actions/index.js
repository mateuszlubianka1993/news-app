import newsAPI from '../apis/newsAPI';

export const getTopHeadlines = () => async dispatch => {
    const response = await newsAPI.get(`/top-headlines`, {
        params: {
            country: 'us',
            pageSize: 5,
        }
    });
    const result = response.data.articles;

    dispatch({type: 'GET_TOP_HEADLINES', payload: result })
};

export const getNews = (type) => async dispatch => {
    const response = await newsAPI.get('/top-headlines',{
        params: {
            country: 'us',
            pageSize: 6,
            category: type,
        }
    });
    const result = response.data.articles;

    dispatch({type: 'GET_NEWS', payload: result})
};

export const getInputValue = (data) => {
    return {
        type: 'GET_INPUT_VALUE',
        payload: data
    }
};

export const getSearched = (e, value) => async dispatch => {
    e.preventDefault();
    const response = await newsAPI.get('/everything',{
        params: {
            q: value,
            pageSize: 6,
        }
    });
    const result = response.data.articles;

    dispatch({type: 'GET_SEARCHED', payload: result})
};
