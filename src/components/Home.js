import React from 'react';
import {connect} from 'react-redux';
import {getTopHeadlines} from '../actions/index';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Card, Container} from 'react-bootstrap';
import '../styles/Home.css';
import '../styles/main-news.css';

class Home extends React.Component {

    componentWillMount() {
        this.props.getTopHeadlines();
    };

    render() {
        const {topHeadlines} = this.props;
        const renderNews = topHeadlines.map((news, index) => {
            return(
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-photo"
                        src={news.urlToImage}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-txt">
                        <h3>{news.title}</h3>
                        <p>{news.description}</p>
                        <Card.Link href={news.url} target="_blank" >
                            <Button >Full News</Button>
                        </Card.Link>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
        return(
            <Container className="news-container">
                <Container className="news-header">
                    <h2 className="news-header-txt">Top Headlines</h2>
                </Container>
                <Carousel className="news-carousel">
                    {renderNews}
                </Carousel>
            </Container>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        topHeadlines: state.topHeadlines
    }
};

export default connect(mapStateToProps, {getTopHeadlines}) (Home);
