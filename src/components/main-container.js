import React from 'react';
import Card from './card';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/';

import './styles/main-container.css';

class MainContainer extends React.Component{
    constructor(props, context){
        super(props);

    }

    componentDidMount(){
        this.props.actions.loadPresidents();
    };

    render(){
        const props = this.props;
        let cards;
        cards = props.presidents.map((president) => {
            return <Card history={props.history} img={president.thumbnail} startYear={president.startYear} endYear={president.endYear}
                name={president.name} snippet={president.snippet} key={president.presId} id={president.presId} />
        });

        return (
            <section className="main-container">
                <div className="main-grid">
                    {cards}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        //...state.main,
        history: props.history,
        presidents: state.presidents 
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);