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

    handleWatsonClick(){
        this.props.actions.getWatsonInsight(this.text.value.trim());
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
                        <textarea className="user-textarea" ref={input => this.text = input}></textarea>
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