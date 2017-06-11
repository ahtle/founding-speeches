import React from 'react';
import './styles/header.css';
import {Link} from 'react-router-dom';

export default function Header(){

    return (
        <header>
            <div>
                <img src="/public/img/icon.png" alt="icon"/>
                <h1 className="app-name"><Link to="/">Founding Speeches</Link></h1>
            </div>
        </header>
    )
}