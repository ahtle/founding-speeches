import React from 'react';
import {Link} from 'react-router-dom';

import './styles/landing-page.css';

export default function LandingPage(){

    return(
        <div className="landing-page-container">
            <section className="section-one">
                <h3>In-depth Analysis of Presidential Speeches</h3>
            </section>
            <div className="ibm-div">
                <p>Powered by <span className="ibm">IBM Watson</span></p>
            </div>
            <section className="section-two">
                <div>
                    <h3>Comprehensive database</h3>
                    <p>Easily browse and view transcript of famous speeches. Use <span className="watson">Watson</span> 
                        <span className="personality-insights">Personality Insight</span> to analyze the transcript based on: Big Five personality, Needs, and Values.
                    </p>
                    <Link to="">Get Started</Link>
                </div>
            </section>
            <section className="section-three">
                <div className="left"/>
                <div className="center">
                    <p>Use Watson Personality Insight on your own text of interest</p>
                </div>
            </section>
        </div>
    )
}