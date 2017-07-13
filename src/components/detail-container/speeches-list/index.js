import React from 'react';
import { formatDate } from '../../../utils';

import './speeches-list.css';
import './speeches-list-responsive.css';

export default function SpeechesList(props){

    function handleOnClick(){
        props.history.push(`/transcript/${props.presId}/${props.id}`);
    }

    return (
        <article>
            <div onClick={() => handleOnClick()}>
                <img src="asd" alt="delete-icon"/>
                <span className="title">{props.title}</span>
                <span className="date">{formatDate(props.date)}</span>
            </div>
        </article>
    );
};