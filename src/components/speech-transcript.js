import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions/';
import { formatDate } from '../utils';
import WatsonDetailContainer from './watson-detail-container';
import './styles/speech-transcript.css';

class SpeechTranscript extends React.Component{
    constructor(props, context){
        super(props);

        this.state = {
            showWatsonInsight: false
        }
    }

    componentDidMount(){
        if(typeof this.props.president !== 'object'){
            this.props.actions.loadPresidents();
            this.props.actions.loadPresidentTranscripts(`https://founding-speeches-server.herokuapp.com/api/v1/transcripts/${this.props.match.params.presid}`);
        }
    }

    toggleDisplay(){
        console.log('speech-transcript toggleDisplay called');
        this.setState({
            showWatsonInsight: !this.state.showWatsonInsight
        })
    }

    handleWatsonClick(text){
        this.props.actions.getWatsonInsight(text);
        this.toggleDisplay();
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
                <input className="transcript-container-img" type="image" src="https://raw.githubusercontent.com/anhhtle/founding-speeches2/master/public/img/IBM-Watson-Logo2.png" onClick={() => this.handleWatsonClick(speech.text)} />
                <h3>{formatDate(speech.date)}: {speech.title}</h3>
                <h4>Transcript</h4>
                <p className="transcript-text" dangerouslySetInnerHTML={{__html: textFormatted}} />
                {watsonDetailContainer}
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
        watson: state.watson
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SpeechTranscript);