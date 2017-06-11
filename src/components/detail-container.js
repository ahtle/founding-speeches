import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/';
import './styles/detail-container.css';

import DetailBanner from './detail-banner';
import SpeechesList from './speeches-list';
import AddSpeechForm from './add-speech-form';

class DetailContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSpeechFormVisible: false,
            reload: false
        };
    }

    componentDidMount(){
        this.props.actions.loadPresidentTranscripts(`https://founding-speeches-server.herokuapp.com/transcripts/${this.props.match.params.presid}`);
    }

    toogleAddSpeechForm() {
        this.setState({
            isSpeechFormVisible: !this.state.isSpeechFormVisible
        });
        this.props.actions.loadPresidentTranscripts(`https://founding-speeches-server.herokuapp.com/transcripts/${this.props.match.params.presid}`);
        setTimeout(() => {
            this.setState({
                reload: !this.reload
            })
        }, 2000)
    }

    render() {
        const { isSpeechFormVisible } = this.state;
        const props = this.props;

        const speechesList = props.transcripts.map((transcript, index) => {
            return <SpeechesList history={props.history} date={transcript.date} title={transcript.title} key={index} presId={props.match.params.presid} id={index}/>
        });

        return (
            <section>
                <DetailBanner banner={props.president.banner} startYear={props.president.startYear} endYear={props.president.endYear} name={props.president.name} />
                <section className="detail-speeches-list">
                    {speechesList}
                    <button onClick={() => this.toogleAddSpeechForm()} className="btn-add-speech">Add a speech</button>
                </section>
                {isSpeechFormVisible && <AddSpeechForm presId={props.president.presId} onClose={() => this.toogleAddSpeechForm()}/>}
            </section>
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
    const id = props.match.params.presid;
    return {
        history: props.history,
        president: state.presidents[id - 1],
        transcripts: state.transcripts
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);