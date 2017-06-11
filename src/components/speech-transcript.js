import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions/';
import './styles/speech-transcript.css';

class SpeechTranscript extends React.Component{
    constructor(props, context){
        super(props);
    }

    watsonAPI(){
        this.props.actions.getWatsonInsight(this.props.speech.text);
        setTimeout(() => {
            console.log(this.props.watson);
        }, 3000)
    }

    render(){
        const props = this.props;
        return(
            <div className="transcript-container">
                <button onClick={() => this.watsonAPI()}>Watson</button>
                <p><Link to={`/detail/${props.match.params.presid}`}>{props.president.name} Precidency</Link></p>
                <h3>{props.speech.date}: {props.speech.title}</h3>
                <h4>Transcript</h4>
                <p className="transcript-text">{props.speech.text}</p>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        speech: state.transcripts[props.match.params.speechid],
        president: state.presidents[props.match.params.presid - 1],
        watson: state.watson
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeechTranscript);