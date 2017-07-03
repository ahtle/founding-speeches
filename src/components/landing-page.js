import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/';

import './styles/landing-page.css';
import './styles/responsive/landing-page-responsive.css';

class LandingPage extends React.Component {

    constructor(props, context){
        super(props);

    }

    componentDidMount(){
        if(typeof this.props.president !== 'object') {
           this.props.actions.loadPresidents();
        }
    };

    render() {
        return (
            <div className="landing-page-container">
                <section className="section-one">
                    <h3>In-depth Analysis of Presidential Speeches</h3>
                </section>
                <div className="ibm-div">
                    <p>Powered by <span className="ibm">IBM Watson</span></p>
                </div>
                <section className="section-two">
                    <div>
                        <h3>Comprehensive database</h3>
                        <p>Easily browse and view transcript of famous speeches. Use <span className="watson">Watson </span>
                            <span className="personality-insights">Personality Insight</span> to analyze the transcript based on: Big Five personality, Needs, and Values.
                    </p>
                        <Link to="/main">Get Started</Link>
                    </div>
                </section>
                <section className="section-three">
                    <div className="left" />
                    <div className="center">
                        <p>Use Watson Personality Insight on your own text of interest.<br /><br />Leverage d3.js for user-friendly data visualization.</p>
                        <Link to="/main/:userText">Analyze</Link>
                    </div>
                    <div className="right">
                        <div className="top" />
                        <div className="bottom">
                            <p>Be impowered to make informed decisions:</p>
                            <p>Targeted marketing</p>
                            <p>Customer care</p>
                            <p>Personal connections</p>
                            <a href="https://www.ibm.com/watson/developercloud/doc/personality-insights/usecases.html" target="_blank">Learn more</a>
                        </div>
                    </div>
                </section>
                <footer>
                    <a href="https://github.com/anhhtle/founding-speeches2" target="_blank"><img src="https://raw.githubusercontent.com/anhhtle/founding-speeches2/master/public/img/github.png" alt="github" /></a>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        presidents: state.presidents
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);