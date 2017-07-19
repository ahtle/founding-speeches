import React from 'react';
import Card from '../card/';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/';
import {scrollToTop} from '../../utils';
import Loader from 'react-loader';

import './main-container.css';
import './main-container-responsive.css';

export class MainContainer extends React.Component{
    constructor(props, context){
        super(props);

    }

    componentDidMount(){
        if(typeof this.props.president !== 'object') {
            this.props.actions.loadPresidents();
        }

        scrollToTop(10);
    };

    render(){
        let props = this.props;

        let cards;

        cards = props.presidents.map((president) => {
            return <Card history={props.history} img={president.thumbnail} startYear={president.startYear} endYear={president.endYear}
                name={president.name} snippet={president.snippet} key={president.presId} presId={president.presId} />
        });

        return (
            <section className="main-container">
                <div className="main-grid">
                    <Loader loaded={props.loaded} >
                        {cards}
                    </Loader >
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        history: props.history,
        presidents: state.presidents,
        loaded: state.loaded
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);