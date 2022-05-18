import axios from 'axios'

class HttpClient {
    constructor() {
        axios.create({
            baseURL: 'https://62848a9a6b6c317d5ba769cf.endapi.io/users_app',
        })
    }

    get(route, params, callback) {
        return axios
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
        return axios
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
        return axios
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
        return axios
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
