import React, { Component } from 'react';

import './d3-bars.css';

export default class Bars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            className: ''
        }
    }

    handleClick(text){
        if(this.props.changeText)
            this.props.changeText(text);

        this.setState({
            className: text
        });      
    }

    className(id){
        if(this.props.active === 'description' || this.props.active !== id)
            return 'bar';
        if(this.state.className === id || this.props.active === id)
            return 'bar active';
        return 'bar';
    }

    render() {
        const { scales, margins, data } = this.props;
        const { xScale, yScale } = scales;

        const bars = (
            data.map(datum =>
                <rect
                    className={this.className(datum.name)}
                    key={datum.name}
                    id={datum.name}
                    y={yScale(datum.name)}
                    height={yScale.bandwidth()}
                    x={0 + margins.left}
                    width={xScale(datum.percentile) - margins.left}
                    onClick={() => this.handleClick(datum.name)}
                />,
            )
        )

        return (
            <g>{bars}</g>
        )
    }
}