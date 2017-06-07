import React from 'react';
import { connect } from 'react-redux';
import './styles/detail-container.css';

import DetailBanner from './detail-banner';
import SpeechesList from './speeches-list';
import AddSpeechForm from './add-speech-form';

class DetailContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSpeechFormVisible: false
        };
    }

    toogleAddSpeechForm() {
        this.setState({
            isSpeechFormVisible: !this.state.isSpeechFormVisible
        });
    }

    render() {
        const { isSpeechFormVisible } = this.state;
        const props = this.props;

        const speechesList = props.speeches.map((speech, index) => {
            return <SpeechesList history={props.history} date={speech.date} title={speech.title} key={index} id={speech.id} />
        });

        return (
            <section>
                <DetailBanner banner={props.president.banner} date={props.president.date} name={props.president.name} />
                <section className="detail-speeches-list">
                    {speechesList}
                    <button onClick={() => this.toogleAddSpeechForm()} className="btn-add-speech">Add a speech</button>
                </section>
                {isSpeechFormVisible && <AddSpeechForm onClose={() => this.toogleAddSpeechForm()}/>}
            </section>
        );
    }
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.presid;
    return {
        history: props.history,
        toggleAddSpeechForm: state.toggleAddSpeechForm,
        president: state.presidents[id - 1],
        speeches: state.presidents[id - 1].speeches
    };
};

export default connect(mapStateToProps)(DetailContainer);