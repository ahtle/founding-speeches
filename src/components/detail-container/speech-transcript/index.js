import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as actions from '../../../actions/';
import WatsonDetailContainer from '../../watson-container/';

import {scrollToTop, formatDate} from '../../../utils';

import './speech-transcript.css';
import './speech-transcript-responsive.css';

export class SpeechTranscript extends React.Component{
    constructor(props, context){
        super(props);

        this.state = {
            reload: false,
            showWatsonInsight: this.getWindowWidth()
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount(){
        // position page on top
        scrollToTop(1);

        // function for window resize
        window.addEventListener('resize', this.updateWindowDimensions);

        // load president, transcript, and watson info
        if(typeof this.props.president !== 'object'){
            this.props.actions.loadPresidents();
            this.props.actions.loadPresidentTranscripts(`https://founding-speeches-server.herokuapp.com/api/v1/transcripts/${this.props.match.params.presid}`);
            return setTimeout(() => {
                if(this.props.speech.text)
                    this.props.actions.getWatsonInsight(this.props.speech.text);
            }, 3000);
        }
        this.props.actions.getWatsonInsight(this.props.speech.text);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        if(window.innerWidth <= 600 && this.state.showWatsonInsight === true){
            document.body.className="noscroll";
        }
        else
            document.body.className="";
    }

    getWindowWidth(){
        if(window.innerWidth <= 600 )
            return false;
        return true;
    }

    toggleDisplay(){
        scrollToTop(400);

        this.setState({
            showWatsonInsight: !this.state.showWatsonInsight
        })
    }

    handleWatsonClick(){

        this.toggleDisplay();

        if(window.innerWidth <= 600){
            document.body.className="noscroll";
        }

    }

    render(){
        const props = this.props;
        const date = new Date();
        const { speech = {text: 'loading', title: 'loading', date: date.toISOString()}, president = {name: 'loading'} } = props;
        
        let watsonDetailContainer;
        if(this.state.showWatsonInsight){
            if(this.props.watson.personality)
                watsonDetailContainer = <WatsonDetailContainer toggleDisplay={() => this.toggleDisplay()}/>;
            else{
                watsonDetailContainer = (
                    <div className="watson-status-background">
                        <div className="watson-status">
                            <div className='x' onClick={() => this.toggleDisplay()}>X</div>
                            <p>Watson status:</p>
                            <div>loading...</div>
                        </div>
                    </div>
                );
            }
        }

        if (this.props.watson.error){
            watsonDetailContainer = (
                <div className="watson-status-background">
                    <div className="watson-status">
                        <div className='x' onClick={() => this.toggleDisplay()}>X</div>
                        <p>Watson Error...</p>
                        <div>{this.props.watson.error.error}</div>
                    </div>
                </div>
            )
        }

        let textFormatted = speech.text.replace(/(?:\r\n|\r|\n)/g, '<br />');

        return(
            <div className="transcript-container">
                <section className={this.state.showWatsonInsight ? "transcript-section" : "transcript-section max-width"}>
                    <p><Link to={`/detail/${props.match.params.presid}`}>{president.name}</Link> Precidency</p>
                    <div className={this.state.showWatsonInsight ? "watson-button-container-hidden" : "watson-button-container"}>
                        <input className="transcript-container-img" type="image" alt="watson-icon" src="https://raw.githubusercontent.com/anhhtle/founding-speeches2/master/public/img/watson_logo.png" onClick={() => this.handleWatsonClick(speech.text)} />
                        <p onClick={() => this.handleWatsonClick(speech.text)}>IBM Watson</p>
                    </div>
                    <h3>{formatDate(speech.date)}: {speech.title}</h3>
                    <h4 className="transcript">Transcript</h4>
                    <p id="transcript-text" dangerouslySetInnerHTML={{__html: textFormatted}} />
                </section>
                <section className={this.state.showWatsonInsight ? "watson-section": "watson-section-hidden"}>
                    { watsonDetailContainer }
                </section>
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
        speech: state.transcripts.transcripts[props.match.params.speechid],
        president: state.presidents.presidents[props.match.params.presid - 1],
        watson: state.watson.watson,
        watson_error: state.watson.watson_error,
        loaded: state.watson.loaded
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SpeechTranscript);