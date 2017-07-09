import React from 'react';

import './styles/detail-banner.css';
import './styles/responsive/detail-banner-responsive.css';

export default function DetailBanner(props){
    const { startYear = '****', endYear = '****', name = 'loading', banner = 'placeholder.png', party = '****'} = props;
    return (
        <section className="detail-banner-container">
            <img className="banner" src={banner} alt="banner"/>
            <div className="detail-container">
                <div className="detail">
                    <h1>{name}</h1>
                    <h3>Party: {party}</h3>
                    <h3>Term: {startYear} - {endYear}</h3>
                </div>
            </div>
        </section>
    )
}