import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';
import './navigation-responsive.css';

//export default class Navigation extends React.Component{

export default function Navigation(props) {

    console.log(props.location.pathname)

    let presidentClass;
    let userTextClass;

    if (props.match.params.userText === undefined) {
        presidentClass = 'active';
        userTextClass = 'not-active';
    }
    else {
        presidentClass = 'not-active';
        userTextClass = 'active';
    }

    const url = props.location.pathname;
    console.log(url.substring(0, 7));


    if (url.substring(0,7) === '/detail' ){
        presidentClass = 'not-active';
        userTextClass = 'not-active';
    }

    return (
        <nav>
            <ul>
                <li className={presidentClass} ><Link to="/main">Presidents</Link></li>
                <li className={userTextClass} ><Link to="/main/userText">Your own text</Link></li>
            </ul>
        </nav>
    );
};