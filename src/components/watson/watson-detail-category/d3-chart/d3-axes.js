import React from 'react';
import Axis from './d3-axis';

export default ({ scales, margins, svgDimensions, changeText, category }) => {
    const { width } = svgDimensions

    const yProps = {
        orient: 'Left',
        scale: scales.yScale,
        translate: `translate(${margins.left}, 0)`,
        tickSize: width - margins.left - margins.right,
        changeText: changeText,
        category: category
    }

    return (
        <g className="axis">
            <Axis {...yProps} />
        </g>
    )
}