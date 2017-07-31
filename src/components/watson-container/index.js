import React from 'react';
import WatsonDetailCategory from './watson-detail-category/';
import { connect } from 'react-redux';

import './watson-detail-container.css';
import './watson-detail-container-responsive.css';

export class WatsonDetailContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showWatson: true,
            showInfobox: false,
            word_count: 3500,
            personality: [
                {
                    "name": "Openness",
                    "percentile": "100",
                    "children": [
                        {
                            "name": "Intellect",
                            "percentile": 0.9969154099030039
                        },
                        {
                            "name": "Emotionality",
                            "percentile": 0.9323083878559459
                        },
                        {
                            "name": "Artistic interests",
                            "percentile": 0.8968278476674921
                        },
                        {
                            "name": "Authority-challenging",
                            "percentile": 0.8656106431944579
                        },
                        {
                            "name": "Imagination",
                            "percentile": 0.37824940374867566
                        },
                        {
                            "name": "Adventurousness",
                            "percentile": 0.2944244219610599
                        }
                    ]
                },
                {
                    "name": "Conscientiousness",
                    "percentile": "100",
                    "children": [
                        {
                            "name": "Cautiousness",
                            "percentile": 0.9972224512121606
                        },
                        {
                            "name": "Dutifulness",
                            "percentile": 0.9951599895504624
                        },
                        {
                            "name": "Achievement striving",
                            "percentile": 0.9686976186278999
                        },
                        {
                            "name": "Self-discipline",
                            "percentile": 0.7796846985495476
                        },
                        {
                            "name": "Self-efficacy",
                            "percentile": 0.6825006517072691
                        },
                        {
                            "name": "Orderliness",
                            "percentile": 0.44921815221503447
                        }
                    ]
                },
                {
                    "name": "Emotional range",
                    "percentile": "100",
                    "children": [
                        {
                            "name": "Self-consciousness",
                            "percentile": 0.46180828312546673
                        },
                        {
                            "name": "Melancholy",
                            "percentile": 0.2267706108021441
                        },
                        {
                            "name": "Immoderation",
                            "percentile": 0.09429560830164135
                        },
                        {
                            "name": "Susceptible to stress",
                            "percentile": 0.0909818128988053
                        },
                        {
                            "name": "Prone to worry",
                            "percentile": 0.053497311821878724
                        },
                        {
                            "name": "Fiery",
                            "percentile": 0.0047989253872732784
                        }
                    ]
                },
                {
                    "name": "Agreeableness",
                    "percentile": "100",
                    "children": [
                        {
                            "name": "Sympathy",
                            "percentile": 0.9984531075858267
                        },
                        {
                            "name": "Uncompromising",
                            "percentile": 0.9983449836610148
                        },
                        {
                            "name": "Altruism",
                            "percentile": 0.9931098768799131
                        },
                        {
                            "name": "Cooperation",
                            "percentile": 0.9822374835323864
                        },
                        {
                            "name": "Trust",
                            "percentile": 0.9406965081616869
                        },
                        {
                            "name": "Modesty",
                            "percentile": 0.7308640116547437
                        }
                    ]
                },
                {
                    "name": "Extraversion",
                    "percentile": "100",
                    "children": [
                        {
                            "name": "Assertiveness",
                            "percentile": 0.8365107291042113
                        },
                        {
                            "name": "Activity level",
                            "percentile": 0.8062897235489186
                        },
                        {
                            "name": "Cheerfulness",
                            "percentile": 0.44938808862481333
                        },
                        {
                            "name": "Outgoing",
                            "percentile": 0.36558343957659784
                        },
                        {
                            "name": "Gregariousness",
                            "percentile": 0.06287172878629099
                        },
                        {
                            "name": "Excitement-seeking",
                            "percentile": 0.024548336011003258
                        }
                    ]
                }
            ],
            needs: [
                {
                    "name": "Curiosity",
                    "percentile": "91"
                },
                {
                    "name": "Structure",
                    "percentile": "76"
                },
                {
                    "name": "Closeness",
                    "percentile": "61"
                },
                {
                    "name": "Stability",
                    "percentile": "53"
                },
                {
                    "name": "Harmony",
                    "percentile": "51"
                },
                {
                    "name": "Ideal",
                    "percentile": "13"
                },
                {
                    "name": "Self-expression",
                    "percentile": "8"
                },
                {
                    "name": "Liberty",
                    "percentile": "6"
                },
                {
                    "name": "Love",
                    "percentile": "5"
                },
                {
                    "name": "Challenge",
                    "percentile": "3"
                },
                {
                    "name": "Practicality",
                    "percentile": "1"
                },
                {
                    "name": "Excitement",
                    "percentile": "1"
                }
            ],
            values: [
                {
                    "name": "Conservation",
                    "percentile": "73"
                },
                {
                    "name": "Self-transcendence",
                    "percentile": "39"
                },
                {
                    "name": "Openness to change",
                    "percentile": "22"
                },
                {
                    "name": "Hedonism",
                    "percentile": "1"
                },
                {
                    "name": "Self-enhancement",
                    "percentile": "0"
                }
            ]
        } // end state
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    closeContainer(){

        if(this.props.toggleDisplay)
            this.props.toggleDisplay();
        document.body.className="";
    }

    handleMouseEnter(){
        this.setState({
            showInfobox: true
        });
    }

    handleMouseLeave(){
        this.setState({
            showInfobox: false
        })
    }

    render(){

        let url = window.location.href;

        let watsonContainerBackgroundClass;

        if(url.indexOf('main') > -1 ) {
            watsonContainerBackgroundClass = 'watson-container-background userText';
        }
        else {
            watsonContainerBackgroundClass = 'watson-container-background ';
        }

        // const props = this.props;
        const wordCount = this.props.word_count;

        let analysisStrength = 'Weak Analysis';
        let wordCountInfobox = "With this many words, you can't get a fair read on someone's personality. Need at least 1500 to get a general impression.";
        let wordCountColor = 'red';
        
        if(wordCount >= 1200 && wordCount < 3500){
            analysisStrength = 'Decent Analysis';
            wordCountInfobox = "These results are a general impression of this person, and they should be taken with a grain of salt. Increase the word count to 3500 to get a strong one.";
            wordCountColor = 'grey';    
        }
        else if(wordCount >= 3500 && wordCount < 6000){
            analysisStrength = 'Strong Analysis';
            wordCountInfobox = "This is a confident read of someone's personality. It's statistically significant! Get to 6000 words for the best possible assessment.";
            wordCountColor = 'green';
        }
        else if(wordCount >= 6000){
            analysisStrength = 'Very Strong Analysis';
            wordCountInfobox ="A word count of 6000 or more is a high-quality assessment of someone's personality. It's statistically significant.";
            wordCountColor = 'green';
        }

        let show;
        if(!this.state.showInfobox)
            show = 'word-count-infobox-container hidden';
        else
            show = 'word-count-infobox-container'

        let details;
        if(this.props.watson.personality){
            details = (<div>
                <WatsonDetailCategory category="personality" data={this.props.watson.personality} />
                <WatsonDetailCategory category="needs" data={this.props.watson.needs} />
                <WatsonDetailCategory category="values" data={this.props.watson.values} />
            </div>)
        }


        return(

            <div className={watsonContainerBackgroundClass} >
                <div className="watson-container">
                    <div className='x' onClick={() => this.closeContainer()}>X</div>
                    <h3>Personality Portrait</h3>
                    <p className="word-count">{wordCount} words analyzed: <span className={wordCountColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>{analysisStrength}</span></p>
                    <div className={show}>
                        <div className={"arrow-up " + wordCountColor + "-arrow"}></div>
                        <div className={"word-count-infobox " + wordCountColor + "-background"}>{wordCountInfobox}</div>
                    </div>
                    { details }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        word_count: state.watson.watson.word_count,
        watson: state.watson.watson
    }
}

export default connect(mapStateToProps)(WatsonDetailContainer);