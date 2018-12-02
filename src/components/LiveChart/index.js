import React, { Component, Fragment } from 'react';
import { mountSocket, unmountSocket } from '../../utils/socket-io-utils';
import CanvasJSChart from '../../utils/libraries/canvasjs.react';
import ChartIndicatorsHOC from '../ChartIndicatorsHOC';

class LiveChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: []
        }
        this.clientSocket = null;
    }

    componentDidMount = () => {
        //initiate the socket and after getting live OHLC data, this component's state's config is set
        mountSocket({ context: this, getChartConfig: true });
    }

    componentWillUnmount = () => {
        unmountSocket(this);
    }

    render() {
        return (
            <Fragment>
                <h3>Live Data</h3>
                <CanvasJSChart
                    options={this.state.config}
                />
            </Fragment>
        );
    }
}

export default ChartIndicatorsHOC(LiveChart);