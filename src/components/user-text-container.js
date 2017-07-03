import React from 'react';
import WatsonDetailContainer from './watson-detail-container';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/';

import './styles/user-text-container.css'

class UserTextContainer extends React.Component{
    constructor(props, context){
        super(props);

        this.state = {
            showWatsonInsight: false
        }
    }

    toggleDisplay(){
        this.setState({
            showWatsonInsight: !this.state.showWatsonInsight
        })
    }

    // wordCount(str){
    //     let count = 0;

    //     for (var i = 0; i < str.length; i++){
    //         if (str[i] === " ") {
    //             count = +1;
    //         }
    //     }
    //     return (count + 1); // add 1 to count to account for extra space since 1 space = 2 words
    // }

    handleWatsonClick(){
        let input = this.text.value.trim()
        //this.wordCount(input);
        // let count = this.wordCount(input);
        // if (count < 100){
        //     alert(`Currently ${count} words... need at least 100 words`);
        // }
        this.props.actions.getWatsonInsight(input);
        this.toggleDisplay();
    }

    render(){

        let watsonDetailContainer;
        if(this.state.showWatsonInsight)
            watsonDetailContainer = <WatsonDetailContainer toggleDisplay={() => this.toggleDisplay()}/>

        return (
            <section className="user-text-container">
                <div className="grid">
                    <h3>Try it for yourself!</h3>
                    <p>Paste in any text you are interested in and see what Watson have to say about the writer's personality.</p>
                    <p>You will need at least 100 words, but the best analysis requires 6000 words or more.</p>
                    <div className="textarea-container">
                        <textarea className="user-textarea" id="textarea" ref={input => this.text = input}></textarea>
                        <button className="user-text-button" onClick={() => this.handleWatsonClick()}>Analyze</button>
                    </div>
                    {watsonDetailContainer}
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
};

const mapStateToProps = (state, props) => {
    return {
        watson: state.watson
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTextContainer);