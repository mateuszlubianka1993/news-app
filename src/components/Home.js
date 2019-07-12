import React from 'react';
import {connect} from 'react-redux';
import {getTopHeadlines} from '../actions/index';

class Home extends React.Component {

    componentWillMount() {
        this.props.getTopHeadlines();
    };

    render() {
        const {topHeadlines} = this.props;
        const renderX = topHeadlines.map((x)=><div>{x.title}</div>)
        return(
            <div>
                Home
                {renderX}
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
