// const EventEmitter = require('node:events');
import { EventEmitter } from "node:events";

import askUser from './user.js';
import express from 'express';

const app = express();
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});


myEmitter.on('hi', (name) => {
    console.log(`HI , ${name}`);
  });
myEmitter.emit('event');
myEmitter.emit('hi', "Sagar");

app.use("/",(req,res)=>{
    res.send("hello, response from server")
})

app.listen(8000,(error)=>{

    error ? console.log(error):console.log("http:// localhost:8000")
})