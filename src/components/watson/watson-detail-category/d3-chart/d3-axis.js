import React from 'react';
import * as d3Axis from 'd3-axis';
import { select, selectAll } from 'd3-selection';

import './d3-axis.css';

export default class Axis extends React.Component {

    componentDidMount() {
        this.renderAxis();

    }

    componentDidUpdate() {
        this.renderAxis();
    }

    handleClick(text){
        if(this.props.changeText)
            this.props.changeText(text);
    }

    renderAxis() {
        const axisType = `axis${this.props.orient}`
        const axis = d3Axis[axisType]()
            .scale(this.props.scale);

        select(this.axisElement).call(axis);
        
        selectAll(`.${this.props.category} .tick`)
            .on('click', (d) => {
                this.handleClick(d)
            });
    }

    render() {

        return (

            <g
                className={`Axis Axis-${this.props.orient} ${this.props.category}`}
                ref={(el) => { this.axisElement = el; }}
                transform={this.props.translate}
            />
        )
    }
}