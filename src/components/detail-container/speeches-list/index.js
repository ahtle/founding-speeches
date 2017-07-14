import React from 'react';
import { formatDate } from '../../../utils';

import './speeches-list.css';
import './speeches-list-responsive.css';

export default function SpeechesList(props){

    function handleOnClick(){
        props.history.push(`/transcript/${props.presId}/${props.index}`);
    }

    function handleDelete(){
        if(props.delete){
            props.delete();
        }
    }

    return (
        <article>
            <div>
                <img className={localStorage.admin === "true" ? "delete-icon" : "hidden"} onClick={() => handleDelete()} src="https://raw.githubusercontent.com/anhhtle/founding-speeches2/master/public/img/delete-icon.png" alt="delete-icon"/>
                <span className="title" onClick={() => handleOnClick()} >{props.title}</span>
                <span className="date" onClick={() => handleOnClick()} >{formatDate(props.date)}</span>
            </div>
        </article>
    );
};