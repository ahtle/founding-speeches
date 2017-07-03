import React from 'react';
import {Link} from 'react-router-dom';

import './styles/navigation.css';
import './styles/responsive/navigation-responsive.css';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            active: 'president'
        }
    }

    toggleActiveClass(activeTab){
        this.setState({
            active: activeTab
        });
    }

    render(){

        console.log(this.props.match.params.userText);

        let presidentClass;
        let userTextClass;

        if(this.props.match.params.userText === undefined){
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
                    <li className={presidentClass} onClick={() => this.toggleActiveClass('president')} ><Link to="/main">Presidents</Link></li>
                    <li className={userTextClass} onClick={() => this.toggleActiveClass('ownText')} ><Link to="/main/userText">Your own text</Link></li>
                </ul>
            </nav>
        );
    };
};