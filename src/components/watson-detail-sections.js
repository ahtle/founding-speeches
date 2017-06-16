import React from 'react';
import WatsonGraph from './watson-graph';
import {description} from '../utils/'
import './styles/watson-detail-sections.css';


class WatsonDetailSections extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            display: 'description',
            text: description
        }
    }

    changeText(newDisplay){
        this.setState({
            display: newDisplay
        });
        console.log(this.state.display);
    }

    render(){
        const props = this.props;
        let text = this.state.text[this.props.category][this.state.display];
        // let infoboxHeader = 
        
        return(
            <section className="watson-section-container">
                <div className="flexbox">
                    <div className="graph-container">
                        <h4 className="graph-container-header" onClick={() => this.changeText('description')}>{this.state.text[props.category].title}</h4>
                        <WatsonGraph changeText={e => this.changeText(e)} data={props.data} />
                    </div>
                    <div className="watson-section-infobox" >
                        <div className="infobox-header">
                            {this.state.display === 'description' ? 'Model': this.state.display} description
                        </div>
                        <div dangerouslySetInnerHTML={{__html: text}} />
                    </div>
                </div>
            </section>
        )
    }
}

export default WatsonDetailSections;