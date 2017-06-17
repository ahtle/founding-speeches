import React from 'react';

import './styles/detail-banner.css';

export default function DetailBanner(props){
    const { startYear = '19**', endYear = '19**', name = '***', banner} = props;
    return (
        <section className="detail-banner-container">
            <img className="banner" src={getBannerAddress(banner)} alt="banner"/>
            <div className="detail-container">
                <div className="detail">
                    <h3>{startYear} - {endYear}</h3>
                    <h1>{name}</h1>
                </div>
            </div>
        </section>
    )
}

function getBannerAddress(banner) {
  return banner ? `https://raw.githubusercontent.com/anhhtle/Founding-Speeches/master/public/img/banners/${banner}` : '';
}