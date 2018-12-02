import io from 'socket.io-client';
import { createChartConfig } from './charts-utilis';
import { API_ROOT_URL } from '../config/constants';

export const mountSocket = (context) => {
    context.clientSocket = io(`${API_ROOT_URL}/watch`);
    if (context.clientSocket) {
        context.clientSocket.on('connect', () => {
            //to handle quick switching between tabs
            if (context.clientSocket && context.clientSocket.id) {
                // While subscribing, the state must be true
                context.clientSocket.emit('sub', { state: true });
                context.clientSocket.on('data', (data, ackCallback) => {
                    if (data) {
                        let options = createChartConfig([...[data], ...((context.state.options.originalData) || [])]);
                        context.setState({ options });
                        ackCallback(1);
                    }
                });
                context.clientSocket.on('error', function (error) {
                    console.error('Error: ' + error);
                    context.clientSocket.emit('unsub', { state: false });
                });
            }
        });
    }
}

export const unmountSocket = (context) => {
    context.clientSocket.emit('unsub', { state: false });
    context.clientSocket = null;
}