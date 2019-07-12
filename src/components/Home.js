import React from 'react';
import {connect} from 'react-redux';
import {getTopHeadlines} from '../actions/index';

class Home extends React.Component {

    componentDidMount() {
        this.props.getTopHeadlines();
    };

    render() {
        return(
            <div>
                Home
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
