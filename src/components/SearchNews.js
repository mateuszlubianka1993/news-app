import React from 'react';
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';

class SearchNews extends React.Component {
    render() {
        return(
            <Container className="news-container">
                <form>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search News"
                        aria-label="Search News"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
                </form>
            </Container>
        );
    };
}

export default SearchNews;
