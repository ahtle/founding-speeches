import React from 'react';

import './styles/detail-banner.css';

export default function DetailBanner(props){

    return (
        <section className="detail-banner-container">
            <img className="banner" src={`https://raw.githubusercontent.com/anhhtle/Founding-Speeches/master/public/img/banners/${props.banner}`} alt="banner"/>
            <div className="detail-container">
                <div className="detail">
                    <h3>{props.date}</h3>
                    <h1>{props.name}</h1>
                </div>
            </div>
        </section>
    )
}