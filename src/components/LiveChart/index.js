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
        this.clientSocket.on('connect', () => {
            this.clientSocket.emit('ping', {});
            // While subscribing, the state must be true
            this.clientSocket.emit('sub', { state: true });
            this.clientSocket.on('data', data => {
                console.log('Socket Response: ' + data);
                if (data) {
                    this.clientSocket.emit(1);
                }
            });
            this.clientSocket.on('error', function (error) {
                console.error('Error: ' + error);
            });
        });
    }

    componentDidMount = () => {
        //To be done later
        // this.initSocket();
    }

    componentWillUnmount = () => {
        //To be done later
        // this.clientSocket.emit('unsub', { state: false });
        // this.clientSocket = null;
    }

    render() {
        return (
            <div>Coming Soon...</div>
        );
    }
}

export default LiveChart;