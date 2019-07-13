import React from 'react';
import {connect} from 'react-redux';
import {getNews} from '../actions/index';
import NewsItem from './NewsItem';

class Entertainment extends React.Component {

    componentDidMount() {
        this.props.getNews('entertainment');
    };
    
    render() {
        const {news} = this.props;
        const renderNews = news.map((news, index) => <NewsItem key={index} news={news} />)
        return(
            <div>
                {renderNews}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

export default connect(mapStateToProps, {getNews}) (Entertainment);
