import React from 'react';
import {connect} from 'react-redux';
import {getNews} from '../actions/index';
import NewsItem from './NewsItem';
import {Container} from 'react-bootstrap';

class Health extends React.Component {

    componentDidMount() {
        this.props.getNews('health');
    };

    render() {
        const {news} = this.props;
        const renderNews = news.map((news, index) => <NewsItem key={index} news={news} />)

        return(
            <Container className="news-container">
                <Container className="news-header">
                    <h2 className="news-header-txt">Health News</h2>
                </Container>
                {renderNews}
            </Container>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

export default connect(mapStateToProps, {getNews}) (Health);
