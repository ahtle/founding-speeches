import React from 'react';
import {description} from '../utils/'

import Chart from './d3-chart';

import './styles/watson-detail-category.css';
import './styles/responsive/watson-detail-category-responsive.css';

class WatsonDetailCategory extends React.Component{
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

    }

    render(){
        const props = this.props;
        let text = this.state.text[this.props.category][this.state.display];
        
        return(
            <section className="watson-section-container">
                <div className="flexbox">
                    <div className="graph-container">
                        <h4 className={this.state.display === 'description' ? 'graph-container-header-active': 'graph-container-header'} onClick={() => this.changeText('description')}>{this.state.text[props.category].title}</h4>
                        <Chart data={props.data} changeText={(text) => this.changeText(text)} active={this.state.display}/>
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

export default WatsonDetailCategory;