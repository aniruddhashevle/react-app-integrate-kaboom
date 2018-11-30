import React, { Component } from 'react';
import io from 'socket.io-client';
import './live-chart.scss';

class LiveChart extends Component {

    constructor(props) {
        super(props);
        this.clientSocket = null;
    }

    initSocket = () => {
        this.clientSocket = io('http://kaboom.rksv.net/watch');
        console.log('this.clientSocket', this.clientSocket.id);
        this.clientSocket.on('connect', () => {
            // While subscribing, the state must be true
            this.clientSocket.emit('sub', { state: true });
            this.clientSocket.on('data', (data, ackCallback) => {
                if (data) {
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
        });
    }

    componentDidMount = () => {
        this.initSocket();
    }

    componentWillUnmount = () => {
        this.clientSocket.emit('unsub', { state: false });
        this.clientSocket = null;
    }

    render() {
        return (
            <div>Coming Soon...</div>
        );
    }
}

export default LiveChart;