import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import Navigation from './navigation';
import MainContainer from './main-container';
import DetailContainer from './detail-container';
import SpeechTranscript from './speech-transcript';
//import WatsonDetailContainer from './watson-detail-container';
import UserTextContainer from  './user-text-container';
import LandingPage from './landing-page';


export default function App() {

    return (
        <div className="App">
            <Header />
            <LandingPage />
            <Route path="/" component={Navigation}/>
            <Route exact path="/" component={MainContainer}/>
            <Route path="/:userText" component={Navigation}/>
            <Route exact path="/:userText" component={UserTextContainer} />
            <Route exact path="/detail/:presid" component={DetailContainer} />
            <Route exact path="/transcript/:presid/:speechid" component={SpeechTranscript} />
        </div>
    );
};