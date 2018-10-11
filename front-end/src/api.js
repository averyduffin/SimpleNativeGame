import openSocket from 'socket.io-client';
import { IO_SERVER } from './constants';

const socket = openSocket(IO_SERVER);

export const subscribeToTimer = (cb) => {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
};