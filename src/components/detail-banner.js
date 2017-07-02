import React from 'react';

import './styles/detail-banner.css';

export default function DetailBanner(props){
    const { startYear = '19**', endYear = '19**', name = '***', banner = 'placeholder.png'} = props;
    return (
        <section className="detail-banner-container">
            <img className="banner" src={banner} alt="banner"/>
            <div className="detail-container">
                <div className="detail">
                    <h3>{startYear} - {endYear}</h3>
                    <h1>{name}</h1>
                </div>
            </div>
        </section>
    )
}