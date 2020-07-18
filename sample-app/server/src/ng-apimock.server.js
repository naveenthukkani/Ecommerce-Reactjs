import 'babel-polyfill';
import express from 'express';
import ngApimock from 'ng-apimock';
import tcpPortUsed from 'tcp-port-used';
import { MOCKING_URL, SERVER_PORT } from './constants';
import cors from 'cors';
import Api from './api'

(async() => {
    const isPortInUse = await tcpPortUsed.check(SERVER_PORT, '127.0.0.1');
    console.log(isPortInUse);
    if (isPortInUse) {
        console.log("server is already in use");
        return process.exit(0);
    }
});

ngApimock().run({
    src: './mocking/api',
    outputDir: './.dist/ng-apimock/',
});

ngApimock().watch('./mocking/api');

const app = express();
app.set('port', SERVER_PORT);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use(MOCKING_URL, express.static('./.dist/ng-apimock/'));
app.listen(SERVER_PORT, async() => {

    console.log("mocking server is running")

    // await Api.delayALLResponses();

});