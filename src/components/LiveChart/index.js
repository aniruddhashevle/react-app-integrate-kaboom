import React, { Component, Fragment } from 'react';
import io from 'socket.io-client';
import CanvasJSChart from '../../utils/libraries/canvasjs.react';
import ChartIndicators from '../ChartIndicators';
import { createChartConfig } from '../../utils/home-utils';
import './live-chart.scss';

class LiveChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.clientSocket = null;
    }

    initSocket = () => {
        this.clientSocket = io('http://kaboom.rksv.net/watch');
        if (this.clientSocket) {
            this.clientSocket.on('connect', () => {
                //to handle quick switching between tabs
                if (this.clientSocket && this.clientSocket.id) {
                    // While subscribing, the state must be true
                    this.clientSocket.emit('sub', { state: true });
                    this.clientSocket.on('data', (data, ackCallback) => {
                        if (data) {
                            let options = createChartConfig([...[data], ...((this.state.options.originalData) || [])]);
                            this.setState({ options });
                            ackCallback(1);
                        }
                    });
                    this.clientSocket.on('error', function (error) {
                        console.error('Error: ' + error);
                        this.clientSocket.emit('unsub', { state: false });
                    });
                    this.clientSocket.on('message', function (message) {
                        console.log('message', message);
                    });
                }
            });
        }
    }

    componentDidMount = () => {
        this.initSocket();
    }

    componentWillUnmount = () => {
        if (this.clientSocket) {
            this.clientSocket.emit('unsub', { state: false });
            this.clientSocket = null;
        }
    }

    render() {
        return (
            <Fragment>
                <CanvasJSChart
                    options={this.state.options}
                />
                <ChartIndicators />
            </Fragment>
        );
    }
}

export default LiveChart;