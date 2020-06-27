import { URL, URLSearchParams } from 'url';
import fetch from 'node-fetch';
import {RequestWrapper} from './RequestWrapper';
import { isNullOrUndefined } from 'util';

export module ServiceWrapper {

    export function getResponse<T>(request: RequestWrapper): Promise<T> {
        let data = new Promise<T>(async (resolve, reject) => {
            try {
                var url = new URL(request.endPoint);

                if (!isNullOrUndefined(request.queryParams)) {
                    url.search = new URLSearchParams(request.queryParams).toString()
                }

                let response = await fetch(url, {
                    method: request.method,
                    body: JSON.stringify(request.body),
                    headers: request.headers
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                let data = await response.json();
                resolve(data as T);
            } catch (error) {
                reject(error);
            }
        });

        return data;
    }

}
