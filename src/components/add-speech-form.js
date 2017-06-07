import React from 'react';
import {connect} from 'react-redux';

export function AddSpeechForm(props){

    function submitForm(e){
        e.preventDefault();
        console.log('submit pressed');
    }

    function toogleAddSpeechForm(e){
        e.preventDefault();
        console.log('cancel pressed');
    }

    return(
        <div className="add-form-wrapper">
            <form onSubmit={e => submitForm(e)}>
                <input type="text" placeholder="title"/>
                <input type="date"/>
                <textarea name="transcript" id="transcript" cols="30" rows="10"></textarea>
                <input type="submit"/>
                <a onClick={e => toogleAddSpeechForm(e)}>Cancel</a>
            </form>
        </div>
    );
};

export default connect()(AddSpeechForm);