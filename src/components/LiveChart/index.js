import React, { Component, Fragment } from 'react';
import { mountSocket, unmountSocket } from '../../utils/socket-io-utils';
import CanvasJSChart from '../../utils/libraries/canvasjs.react';
import ChartIndicators from '../ChartIndicators';
import './live-chart.scss';

class LiveChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.clientSocket = null;
    }

    componentDidMount = () => {
        mountSocket(this);
    }

    componentWillUnmount = () => {
        unmountSocket(this);
    }

    render() {
        return (
            <Fragment>
                <h3>Live Data</h3>
                <CanvasJSChart
                    options={this.state.options}
                />
                <ChartIndicators />
            </Fragment>
        );
    }
}

export default LiveChart;