import fetch from 'node-fetch';
import { BASE_URL, DEFAULT_DELAY, HEADERS, MOCKING_BASE_ENDPOINT } from './constants';

export default class api {

    static async delayResponse(identifier, delay = 0) {
        return this.execute('PUT', '/mocks', { identifier, delay }, 'could not delay the response');
    }
    static async delayALLResponses(delay = 0) {
        const response = await (await this.getAllMocks()).json();
        for (const mock of response.mocks) {
            await this.delayResponse(mock.identifier, DEFAULT_DELAY);
        }
    }
    static setGlobalVariables(variables) {
        return this.execute(
            'PUT',
            '/variables', {
                key: 'variable',
                value: variables,
            },
            'could not add or update variables',
        );

    }
    static async getAllMocks() {
        return this.execute('GET', '/mocks', undefined, 'could not retrieve all the mocks');
    }
    static async execute(httpMethod, urlSuffix, options, errorMessage) {
        const data = {
            ...HEADERS,
            method: httpMethod,
        };
        if (options !== undefined) {
            data.body = JSON.stringify(options);
        }
        return this.handleRequest(urlSuffix, data, errorMessage);

    }
    static async handleRequest(urlsuffix, data, errorMessage) {
        const response = await fetch(BASE_URL + MOCKING_BASE_ENDPOINT + urlsuffix, data);
        if (response.status !== 200) {
            throw new Error(errorMessage);
        }
        return response;
    }

}