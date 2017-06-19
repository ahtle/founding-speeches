import React from 'react';
import {Link} from 'react-router-dom';

import './styles/navigation.css';

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
        })
        console.log(this.state.active);
    }

    render(){

        let navPresident = 'active';
        let navOwnText = '';

        if(this.state.active === 'ownText'){
            navPresident = '';
            navOwnText = 'active';
        }

        return (
            <nav>
                <ul>
                    <li className={navPresident} onClick={() => this.toggleActiveClass('president')} ><Link to="/">Presidents</Link></li>
                    <li className={navOwnText} onClick={() => this.toggleActiveClass('ownText')} ><Link to="/">Your own text</Link></li>
                </ul>
            </nav>
        );
    };
};