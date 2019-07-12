import React from 'react';
import {Card, Container} from 'react-bootstrap';
import '../styles/NewsItem.css';

class NewsItem extends React.Component {
    render() {
        const {news} = this.props;
        return(
            <Container>
                <Card className="bg-dark text-white card-box">
                    <Card.Img variant="top" src={news.urlToImage} alt="Card image" />
                    {/* <Card.ImgOverlay className="mask"> */}
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>
                            {news.description}
                        </Card.Text>
                        <Card.Text>{news.content}</Card.Text>
                        <footer className="blockquote-footer card-footer">
                            <cite title="Source Title">Published at: {news.publishedAt}</cite>
                            <Card.Text>{news.author}</Card.Text>
                        </footer>
                    {/* </Card.ImgOverlay> */}
                </Card>
            </Container>
        );
    };
}

export default NewsItem;
