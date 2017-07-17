import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';
import './navigation-responsive.css';

class Navigation extends React.Component {

    render(){
        let presidentClass;
        let userTextClass;

        if (this.props.match.params.userText === undefined) {
            presidentClass = 'active';
            userTextClass = 'not-active';
        }
        else {
            presidentClass = 'not-active';
            userTextClass = 'active';
        }

        const url = this.props.location.pathname;

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
    }
};

export default Navigation;