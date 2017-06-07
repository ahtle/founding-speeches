import React from 'react';
import {connect} from 'react-redux';
import './styles/add-speech-form.css';

export function AddSpeechForm(props){

    function submitForm(e){
        e.preventDefault();
        console.log('submit pressed');
    }

    function onClose(e){
        e.preventDefault();
        if(props.onClose){
            props.onClose();
        }
    }

    return(
        <section className="add-form-container">
            <form onSubmit={e => submitForm(e)}>
                <div className="add-form-div" >
                    <input className="add-form-title" type="text" placeholder="title"/>
                    <input className="add-form-date" type="date"/>
                </div>
                <textarea name="transcript" id="transcript" cols="30" rows="10"></textarea>
                <div className="add-form-div" >
                    <input className="add-form-submit" type="submit"/>
                    <button className="add-form-cancel" onClick={e => onClose(e)}>Cancel</button>
                </div>
            </form>
        </section>
    );
};

export default connect()(AddSpeechForm);