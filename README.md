# "Founding Speeches" 
In-depht analysis of presidential speeches.

## Overview
This web app houses an extensive database of US presidents and their speech transcripts. Not only can the user quickly find the important speeches throughout history, the transcripts are also analyzied by IBM Watson's Personality Insight to return the president's Big Five personality attributes, Needs, and Values. Furthermore, the user can try the Watson API on their own text of choice.

## Working version and screenshot
Use this link to try the app for yourself! https://founding-speeches.herokuapp.com/

![alt tag](https://github.com/anhhtle/founding-speeches/blob/master/public/img/screenshot.jpg)

## Technology
This is a MERN stack.

### Client
The front-end is coded with HTML and CSS and runs with Javascript framework React.js. Unit testing with Enzyme. Continuous integration with Travis CI and deploys to Heroku. Personality analysis is done with IBM Watson Personality Insight. The data is graphed with d3.js for easy visualization.

The app is fully responsive with flexbox.

### Server
The server uses REST API and is coded with Nodejs with the express framework. The database of choice is Mongo and the app is hosted on Heroku. Git for server is at: https://github.com/anhhtle/founding-speeches-server

