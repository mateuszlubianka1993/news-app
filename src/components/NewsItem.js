import React from 'react';
import {Card, Container, Button} from 'react-bootstrap';
import '../styles/NewsItem.css';

class NewsItem extends React.Component {
    render() {
        const {news} = this.props;
        return(
            <Container>
                <Card className="bg-dark text-white card-box">
                    <Card.Img variant="top" src={news.urlToImage} alt="Card image" className="news-img"/>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>
                            {news.description}
                        </Card.Text>
                        <Card.Text>{news.content}</Card.Text>
                        <Card.Link href={news.url} target="_blank" >
                            <Button >Full News</Button>
                        </Card.Link>
                        <footer className="blockquote-footer card-footer">
                            <cite title="Source Title">Published at: {news.publishedAt}</cite>
                            <Card.Text>{news.author}</Card.Text>
                        </footer>
                </Card>
            </Container>
        );
    };
}

export default NewsItem;
