import React from 'react';
import { formatDate } from '../utils';

import './styles/speeches-list.css';
import './styles/responsive/speeches-list-responsive.css';

export default function SpeechesList(props){

    function handleOnClick(){
        props.history.push(`/transcript/${props.presId}/${props.id}`);
    }

    return (
        <article>
            <p onClick={() => handleOnClick()}><span className="title">{props.title}</span><span className="date">{formatDate(props.date)}</span> </p>
        </article>
    );
};