// const {io} = require('socket.io-client')
import {io} from "socket.io-client";

export const socket = io("http://localhost:5000");
// export default io;