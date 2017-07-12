import React from 'react';

export default ChartComponent => (
    class ResponsiveChart extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                containerWidth: null,
                containerHeight: 360
            }

            this.fitParentContainer = this.fitParentContainer.bind(this)
        }

        componentDidMount() {
            this.fitParentContainer()
            window.addEventListener('resize', this.fitParentContainer)
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.fitParentContainer)
        }

        fitParentContainer() {
            const { containerWidth } = this.state
            const currentContainerWidth = this.chartContainer
                .getBoundingClientRect().width;
            
            let currentContainerHeight = 360;

            const shouldResize = containerWidth !== currentContainerWidth
            

            if (shouldResize) {

                if(currentContainerWidth <= 500){
                    currentContainerHeight = 295;
                }

                this.setState({
                    containerWidth: currentContainerWidth,
                    containerHeight: currentContainerHeight
                })
            }
        }

        renderChart() {
            const parentWidth = this.state.containerWidth;
            const parentHeight = this.state.containerHeight;

            return (
                <ChartComponent {...this.props} parentWidth={parentWidth} parentHeight={parentHeight} />
            )
        }

        render() {
            const { containerWidth } = this.state
            const shouldRenderChart = containerWidth !== null

            return (
                <div
                    ref={(el) => { this.chartContainer = el }}
                    className="Responsive-wrapper"
                >
                    {shouldRenderChart && this.renderChart()}
                </div>
            )
        }
    }
)