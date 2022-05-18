import axios from 'axios'

class HttpClient {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://62848a9a6b6c317d5ba769cf.endapi.io/users_app',
        })
    }

    get(route, params, callback) {
        return this.axiosInstance
            .get(route, params)
            .then((response) => {
                if ('function' === typeof callback) {
                    return callback(response)
                }

                return response
            })
            .catch((error) => console.log(error))
    }

    post(route, body, callback) {
        return this.axiosInstance
            .post(route, body)
            .then((response) => {
                if ('function' === typeof callback) {
                    return callback(response)
                }

                return response
            })
            .catch((error) => console.log(error))
    }

    put(route, body, callback) {
        return this.axiosInstance
            .put(route, body)
            .then((response) => {
                if ('function' === typeof callback) {
                    return callback(response)
                }

                return response
            })
            .catch((error) => console.log(error))
    }

    delete(route, callback) {
        return this.axiosInstance
            .delete(route)
            .then((response) => {
                if ('function' === typeof callback) {
                    return callback(response)
                }

                return response
            })
            .catch((error) => console.log(error))
    }
}

export const httpClient = new HttpClient()
