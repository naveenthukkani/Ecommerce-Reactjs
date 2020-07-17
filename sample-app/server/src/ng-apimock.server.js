import 'babel-polyfill';
import express from 'express';
import ngApimock from 'ng-apimock';
import tcpPortUsed from 'tcp-port-used';
import { MOCKFILES_PATH, MOCKING_APP_FLODER, MOCKING_URL, SERVER_PORT } from './constants';

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
app.use(require('ng-apimock/lib/utils').ngApimockRequest);

app.use(MOCKING_URL, express.static('./.dist/ng-apimock/'));
app.listen(SERVER_PORT, async() => {

    console.log("mocking server is running")

});