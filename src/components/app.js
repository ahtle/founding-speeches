import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import MainContainer from './main-container';
import DetailContainer from './detail-container';
import SpeechTranscript from './speech-transcript';


export default function App() {

    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={MainContainer}/>
            <Route exact path="/detail/:presid" component={DetailContainer} />
            <Route exact path="/transcript/:speechid" component={SpeechTranscript} />
        </div>
    );
};