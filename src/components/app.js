import React from 'react';
import {Route} from 'react-router-dom';

import LandingPage from './landing-page';
import Header from './header';
import Navigation from './navigation';
import MainContainer from './main-container';
import DetailContainer from './detail-container';
import SpeechTranscript from './speech-transcript';
import WatsonDetailContainer from './watson-detail-container';
import UserTextContainer from  './user-text-container';


export default function App() {

    return (
        <div className="App">
            <Route exact path="/" component={LandingPage}/>
            <Route path="/main" component={Header}/>
            <Route exact path="/main" component={Navigation}/>
            <Route exact path="/main" component={MainContainer}/>
            <Route exact path="/main/:userText" component={Navigation}/>
            <Route exact path="/main/:userText" component={UserTextContainer} />
            <Route path="/detail/" component={Header}/>
            <Route exact path="/detail/:presid" component={DetailContainer} />
            <Route exact path="/transcript/:presid/:speechid" component={SpeechTranscript} />
        </div>
    );
};