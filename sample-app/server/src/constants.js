import { reslove } from 'path';
import { argv } from 'yargs';

export const HEADERS = {
    headers: {
        'Content-Type': 'application.json',
    },
};

export const SERVER_PORT = 2222;
export const HOST = argv.host || 'localhost';
export const DFAULT_DELAY = 750;
export const BASE_URL = `https://${HOST}:${SERVER_PORT}`;
export const MOCKING_BASE_ENDPOINT = '/ngapimock';
// export const MOCKFILES_PATH = reslove(process.cwd(), './mocking/api');
// export const MOCKING_APP_FLODER = reslove(process.cwd(), './.dist/ng-apimock/');
export const MOCKING_URL = "/"

console.log(process.cwd());