import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as actions from '../../../actions/';
import WatsonDetailContainer from '../../watson-container/';
import Loader from 'react-loader';

import {scrollToTop, formatDate, wordCount} from '../../../utils';

import './speech-transcript.css';
import './speech-transcript-responsive.css';

export class SpeechTranscript extends React.Component{
    constructor(props, context){
        super(props);

        this.state = {
            showWatsonInsight: false
        }
    }

    componentDidMount(){
        // position page on top
        scrollToTop(1);

        if(typeof this.props.president !== 'object'){
            this.props.actions.loadPresidents();
            this.props.actions.loadPresidentTranscripts(`https://founding-speeches-server.herokuapp.com/api/v1/transcripts/${this.props.match.params.presid}`);
        }
    }

    toggleDisplay(){
        scrollToTop(400);

        this.setState({
            showWatsonInsight: !this.state.showWatsonInsight
        })
    }

    handleWatsonClick(text){

        // check word count
        let count = wordCount(text);

        if(count < 100){
            this.props.actions.clearWatsonState();
            return alert('This analysis needs at least 100 words');
        }

        // request watson data
        this.props.actions.getWatsonInsight(text);

        setTimeout(() => {
            // watson word count less than 100
            if('error' in this.props.watson){
                alert(this.props.watson.error.error);
                this.props.actions.clearWatsonState();
            }
            // watson return input
            else {
                this.toggleDisplay();
            }
        }, 2800);

    }

    render(){
        const props = this.props;
        const date = new Date();
        const { speech = {text: 'loading', title: 'loading', date: date.toISOString()}, president = {name: 'loading'} } = props;
        
        let watsonDetailContainer;
        if(this.state.showWatsonInsight)
            watsonDetailContainer = <WatsonDetailContainer toggleDisplay={() => this.toggleDisplay()}/>

        let textFormatted = speech.text.replace(/(?:\r\n|\r|\n)/g, '<br />');

        return(
            <div className="transcript-container">
                <p><Link to={`/detail/${props.match.params.presid}`}>{president.name}</Link> Precidency</p>
                <div className="watson-button-container">
                    <input className="transcript-container-img" type="image" alt="watson-icon" src="https://raw.githubusercontent.com/anhhtle/founding-speeches2/master/public/img/watson_logo.png" onClick={() => this.handleWatsonClick(speech.text)} />
                    <p onClick={() => this.handleWatsonClick(speech.text)}>IBM Watson</p>
                </div>
                <h3>{formatDate(speech.date)}: {speech.title}</h3>
                <h4 className="transcript">Transcript</h4>
                <p id="transcript-text" dangerouslySetInnerHTML={{__html: textFormatted}} />
                <Loader loaded={props.loaded} >
                    {watsonDetailContainer}
                </Loader >
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

const mapStateToProps = (state, props) => {
    return {
        speech: state.transcripts[props.match.params.speechid],
        president: state.presidents[props.match.params.presid - 1],
        watson: state.watson,
        loaded: state.loaded
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SpeechTranscript);