import React from 'react';
import * as d3 from 'd3';

import './styles/watson-graph.css';

class WatsonGraph extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            values: [
                {
                    "name": "Conservation",
                    "percentile": 73
                },
                {
                    "name": "Self-transcendence",
                    "percentile": 39
                },
                {
                    "name": "Openness to change",
                    "percentile": 22
                },
                {
                    "name": "Hedonism",
                    "percentile": 1
                },
                {
                    "name": "Self-enhancement",
                    "percentile": 0
                }
            ]
        };
    }

    componentDidMount() {
        this.setContext();
    }

    handleClick(text){
        if(this.props.changeText)
            this.props.changeText(text);
    }

    // svg canvas
    setContext() {

        let data = this.props.data;

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 15,
            bottom: 15,
            left: 110
        };

        var width = 490 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        const svg = d3.select(this.refs.svg).append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear()
            .range([0, 350])
            .domain([0, 100]);

        var y = d3.scaleBand()
            .rangeRound([height, 0]).paddingInner(0.3)
            .domain(data.map(d => {return d.name;}));

        //make y axis to show bar names
        var yAxis = d3.axisLeft(y);

        svg.append("g")
            .attr("class", "y-axis")
            .call(yAxis)
        
        //click on axis tick
        svg.selectAll("text")
            .on("click", (d) => this.handleClick(d));
        
        //make bars
        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")

        bars.append("rect")
            .attr("class", "bar")
            .attr("y", (d) => {return y(d.name);})
            .attr("height", y.bandwidth())
            .attr("x", 0)
            .attr("width", (d) => {return x(d.percentile);})
            .on("click", (d) => this.handleClick(d.name));

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", (d) => {
                return y(d.name) + y.bandwidth() / 2 + 4;
            })
            //x position is 5 pixels to the right of the bar
            .attr("x", (d) => {
                return x(d.percentile) + 5;
            })
            .text( (d) => {
                return d.percentile;
            });

    }

    render() {
        return (
            <div ref="svg"></div>
        )
    }

};

export default WatsonGraph;