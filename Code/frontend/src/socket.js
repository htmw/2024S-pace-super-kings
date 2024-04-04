import { io } from 'socket.io-client';
import { base } from './variables';

 const socket = io(base);

socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  export { socket };
