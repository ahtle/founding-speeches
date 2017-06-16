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

    watsonAPI(text){
        this.props.actions.getWatsonInsight(text);

        setTimeout(() => {
            console.log(this.props.watson);
        }, 3000)
    }

    render(){
        const props = this.props;

        let textFormatted = props.speech.text.replace(/(?:\r\n|\r|\n)/g, '<br />');

        return(
            <div className="transcript-container">
                <button onClick={() => this.watsonAPI(props.speech.text)}>Watson</button>
                <p><Link to={`/detail/${props.match.params.presid}`}>{props.president.name} Precidency</Link></p>
                <h3>{props.speech.date}: {props.speech.title}</h3>
                <h4>Transcript</h4>
                <p className="transcript-text" dangerouslySetInnerHTML={{__html: textFormatted}} />
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