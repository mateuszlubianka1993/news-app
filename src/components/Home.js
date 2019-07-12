import React from 'react';
import {connect} from 'react-redux';
import {getTopHeadlines} from '../actions/index';
import './NewsItem';
import NewsItem from './NewsItem';

class Home extends React.Component {

    componentWillMount() {
        this.props.getTopHeadlines();
    };

    render() {
        const {topHeadlines} = this.props;
        const renderNews = topHeadlines.map((news, index) => <NewsItem key={index} news={news} />)
        return(
            <div>
                {renderNews}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        topHeadlines: state.topHeadlines
    }
};

export default connect(mapStateToProps, {getTopHeadlines}) (Home);
