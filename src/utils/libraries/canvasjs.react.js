import React, { Component } from 'react';

class CanvasJSChart extends Component {
	constructor(props) {
		super(props);
		this.options = props.options ? props.options : {};
		this.chart = null;
	}
	componentDidMount() {
		//Create Chart and Render
		this.chart = new window.CanvasJS.Chart('chartContainer', this.options);
		this.chart.render();
		if (this.props.onRef) this.props.onRef(this.chart);
	}
	componentDidUpdate() {
		//Update Chart Options & Render
		this.chart.options = this.props.options;
		this.chart.render();
	}
	render() {
		return (
			<div id="chartContainer" style={{ minHeight: 300 + "px", width: 100 + "%" }}>
			</div>
		)
	}
}

export default CanvasJSChart;