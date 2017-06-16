import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/';
import './styles/add-speech-form.css';

class AddSpeechForm extends React.Component {
    constructor(props, context){
        super(props);

    }

    submitForm(e){
        e.preventDefault();
        let date = moment.utc(this.date.value)._d

        let query = {
            presId: this.props.presId,
            date,
            title: this.title.value.trim(),
            text: this.text.value.trim()
        };
        
        this.props.actions.postNewTranscript(query);

        this.onClose();
    }

    onClose(){
        if(this.props.onClose){
            this.props.onClose();
        }
    }

    render(){

        return(
            <section className="add-form-container">
                <form onSubmit={e => this.submitForm(e)}>
                    <div className="add-form-div" >
                        <input className="add-form-title" type="text" placeholder="title" ref={input => this.title = input} required />
                        <input className="add-form-date" type="date" ref={input => this.date = input} required/>
                    </div>
                    <textarea name="transcript" id="transcript" cols="30" rows="10" ref={input => this.text = input} required></textarea>
                    <div className="add-form-div" >
                        <input className="add-form-submit" type="submit"/>
                        <button className="add-form-cancel" onClick={() => this.onClose()}>Cancel</button>
                    </div>
                </form>
            </section>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
}

const mapStateToProps = (state, props) => {
    return {
        transcripts: state.transcripts 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpeechForm);