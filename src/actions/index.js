import newsAPI from '../apis/newsAPI';

const newsAPIkey = '7f49acd60acf4796b1d9b3dc9a3ef941';

export const getTopHeadlines = () => async dispatch => {
    const response = await newsAPI.get(`/top-headlines`, {
        params: {
            country: 'us',
            pageSize: 10,
            apiKey: newsAPIkey,
        }
    });
    const result = response.data.articles;

    dispatch({type: 'GET_TOP_HEADLINES', payload: result })
};

export const getNews = (type) => async dispatch => {
    const response = await newsAPI.get('/top-headlines',{
        params: {
            country: 'us',
            pageSize: 10,
            category: type,
            apiKey: newsAPIkey
        }
    });
    const result = response.data.articles;

    dispatch({type: 'GET_NEWS', payload: result})
};
