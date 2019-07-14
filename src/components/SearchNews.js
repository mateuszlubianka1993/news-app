import React from 'react';
import {connect} from 'react-redux';
import {getInputValue, getSearched} from '../actions';
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';
import NewsItem from './NewsItem';
import '../styles/main-news.css';
import '../styles/SearchNews.css';

class SearchNews extends React.Component {
    render() {
        const {inputValue, searched} = this.props;
        const renderNews = searched.map((news, index) => <NewsItem key={index} news={news} />)
        return(
            <Container className="news-container">
                <form onSubmit={(e)=>this.props.getSearched(e, inputValue)} className="news-form">
                <InputGroup className="mb-3" onChange={(e)=>this.props.getInputValue(e.target.value)}>
                    <FormControl
                        placeholder="Search News"
                        aria-label="Search News"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary" className="search-btn">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
                </form>
                {renderNews}
            </Container>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        searched: state.searched
    }
}

export default connect(mapStateToProps, {getInputValue, getSearched}) (SearchNews);
