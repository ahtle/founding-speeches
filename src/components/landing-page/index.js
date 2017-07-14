import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/';

import './landing-page.css';
import './landing-page-responsive.css';

class LandingPage extends React.Component {

    constructor(props, context){
        super(props);

        this.state = {
            showAdmin: false
        }
    }

    componentDidMount(){
        localStorage.setItem('admin', false);
        if(typeof this.props.president !== 'object') {
           this.props.actions.loadPresidents();
        }
    };

    toogleAdminVisibility(){
        this.setState({
            showAdmin: !this.state.showAdmin
        })
        window.scrollTo(0,document.body.scrollHeight);
    }

    handleAdminLogin(e){
        e.preventDefault();

        if(this.adminPW.value === 'admin'){
            localStorage.setItem('admin', true);
            this.props.history.push(`/main/`);
        }
        else {
            alert('Oops, try again');
        }
    }

    render() {
        return (
            <div className="landing-page-container">
                <section className="section-one">
                    <h3>In-depth analysis of Founding Speeches</h3>
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
                            <a href="https://www.ibm.com/watson/developercloud/doc/personality-insights/usecases.html" target="_blank" rel="noopener noreferrer">Learn more</a>
                        </div>
                    </div>
                </section>
                <footer>
                    <a href="https://github.com/anhhtle/founding-speeches2" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/anhhtle/founding-speeches2/master/public/img/github.png" alt="github" /></a>
                    <div className={this.state.showAdmin ? "admin-show" : "admin"}>
                        <p className={this.state.showAdmin ? "hidden" : ""} onClick={() => this.toogleAdminVisibility()}>Admin</p>
                        <form className={this.state.showAdmin ? "admin-form" : "hidden"}>
                            <input type="text" className={this.state.showAdmin ? "" : "hidden"} ref={input => this.adminPW = input} />
                            <button type="submit" className={this.state.showAdmin ? "" : "hidden"} onClick={(e) => this.handleAdminLogin(e)}>OK</button>
                            <input type="button" className={this.state.showAdmin ? "" : "hidden"} onClick={() => this.toogleAdminVisibility()} value="Cancel"/>
                        </form>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

// updateInput = val => this.setState({ inputVal: val })
//   render() {
//     return (
//       <form>
//         <input
//           onChange={this.updateInput}
//           type="text
//           value={this.state.inputVal} />
//         <button
//           onClick={this.resetForm}
//           type="button">Cancel</button>
//         <button
//           onClick={this.submitForm}
//           type="submit">Submit</button>
//       </form>
//     )
//   }
// }