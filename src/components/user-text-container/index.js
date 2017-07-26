import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/';
import {wordCount, scrollToTop} from '../../utils/';
import Loader from 'react-loader';

import WatsonDetailContainer from '../watson-container/';

import './user-text-container.css';
import './user-text-container-responsive.css';

export class UserTextContainer extends React.Component{
    constructor(props, context){
        super(props);

        this.state = {
            showWatsonInsight: false,
            wordCount: 0,
            wordCountColor: 'red'
        }
    }

    componentDidMount(){
        this.props.actions.setStateLoaded(true);
        scrollToTop(400);
    };

    toggleDisplay(){
        this.setState({
            showWatsonInsight: !this.state.showWatsonInsight
        })
    }

    handleWatsonClick(){

        let input = this.text.value.trim();

        // check word count
        if(this.state.wordCount < 100){
            this.props.actions.clearWatsonState();
            return alert('This analysis needs at least 100 words');
        }

        // make request

        this.props.actions.getWatsonInsight(input);

        setTimeout(() => {
            // watson word count less than 100
            if('error' in this.props.watson){
                alert(this.props.watson.error.error);
                this.props.actions.clearWatsonState();
            }
            // watson return input
            else {
                scrollToTop(500);
                this.toggleDisplay();
            }
        }, 2800);
    }

    liveWordCount(){
        let input = this.text.value.trim();
        let count = wordCount(input);
        let wordCountColor = 'red';

        if(count >= 100){
            wordCountColor = 'grey';
        }

        if(count >= 3500){
            wordCountColor = 'green';
        }

        this.setState({
            wordCount: count,
            wordCountColor
        });
    }

    render(){

        // ****************

        let watsonDetailContainer;
        if(this.state.showWatsonInsight)
            watsonDetailContainer = <WatsonDetailContainer toggleDisplay={() => this.toggleDisplay()}/>

        return (
            <section className="user-text-container">
                <div className="grid">
                    <h3>Try it for yourself!</h3>
                    <p>Paste in any text you are interested in and see what Watson have to say about the writer's personality.</p>
                    <p>You will need at least 100 words, but the best analysis requires 6000 words or more.</p>
                    <div className="textarea-container">
                        <textarea className="user-textarea" onChange={() => this.liveWordCount()} ref={input => this.text = input} placeholder="Enter your text..."></textarea>
                        <button className="user-text-button" onClick={() => this.handleWatsonClick()}>Analyze</button>
                        <p>Word count*: <span id="word-count" className ={this.state.wordCountColor} >{this.state.wordCount}</span></p>
                    </div>
                    <Loader loaded={this.props.loaded} >
                        {watsonDetailContainer}
                    </Loader >
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

const mapStateToProps = (state, props) => {
    return {
        watson: state.watson.watson,
        loaded: state.watson.loaded
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTextContainer);