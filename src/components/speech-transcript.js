import React from 'react';
import {connect} from 'react-redux';
import './styles/speech-transcript.css';

export function SpeechTranscript(props){

    return(
        <div className="transcript-container">
            <h3>{props.speech.date}: {props.speech.title}</h3>
            <h3>Transcript</h3>
            <p>{props.speech.text}</p>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    const speechId = props.match.params.speechid;
    const index = state.transcripts.findIndex(obj => obj.id == speechId);

    return {
        speech: state.transcripts[index]
    }
};

export default connect(mapStateToProps)(SpeechTranscript);