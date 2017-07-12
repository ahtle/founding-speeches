import React from 'react';
import Axis from './d3-axis';

export default ({ scales, margins, svgDimensions }) => {
    const { width } = svgDimensions

    // const xProps = {
    //     orient: 'Bottom',
    //     scale: scales.xScale,
    //     translate: `translate(0, 342)`,
    //     tickSize: height - margins.top - margins.bottom,
    // }

    const yProps = {
        orient: 'Left',
        scale: scales.yScale,
        translate: `translate(${margins.left}, 0)`,
        tickSize: width - margins.left - margins.right,
    }

    return (
        <g className="axis">
            {/*<Axis {...xProps} />*/}
            <Axis {...yProps} />
        </g>
    )
}