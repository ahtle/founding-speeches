import React from 'react';
import { Link } from 'react-router-dom';

import './styles/navigation.css';
import './styles/responsive/navigation-responsive.css';

//export default class Navigation extends React.Component{

export default function Navigation(props) {

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

    return (
        <nav>
            <ul>
                <li className={presidentClass} ><Link to="/main">Presidents</Link></li>
                <li className={userTextClass} ><Link to="/main/userText">Your own text</Link></li>
            </ul>
        </nav>
    );
};