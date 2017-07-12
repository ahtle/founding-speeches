import React from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './d3-axes';
import Bars from './d3-bars';
import ResponsiveWrapper from './d3-responsive-wrapper';

class Chart extends React.Component {

    constructor(props) {
        super(props);

        this.yScale = scaleBand();
        this.xScale = scaleLinear();
    }

    changeText(text){
        if(this.props.changeText)
            this.props.changeText(text);
    }

    render() {

        const data = this.props.data;

        const margins = { top: 0, right: 0, bottom: 0, left: 90 };
        const svgDimensions = {
            width: Math.max(this.props.parentWidth, 200),
            height: this.props.parentHeight
        };

        // scaleBand type
        const yScale = this.yScale
            // scaleBand domain should be an array of specific values
            // in our case, we want to use movie titles
            .domain(data.map(d => d.name))
            .rangeRound([svgDimensions.height, 0]).paddingInner(0.5);

        // scaleLinear type
        const xScale = this.xScale
            // scaleLinear domain required at least two values, min and max       
            .domain([0, 100])
            .range([margins.left, svgDimensions.width - margins.right])

        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <Axes
                    scales={{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions}
                />
                <Bars
                    scales={{ xScale, yScale }}
                    margins={margins}
                    data={data}
                    svgDimensions={svgDimensions}
                    changeText={(text) => this.changeText(text)}
                    active={this.props.active}
                />
            </svg>
        )
    }
};

export default ResponsiveWrapper(Chart);
