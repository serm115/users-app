import axios from 'axios'

const defaults = {
    baseURL: 'https://62848a9a6b6c317d5ba769cf.endapi.io/',
    headers: () => ({
        //   'Content-Type': 'application/json',
        //   Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
    }),
    error: {
        code: 'INTERNAL_ERROR',
        message:
            'Something went wrong. Please check your internet connection or contact our support.',
        status: 503,
        data: {},
    },
}

const api = (method, url, variables) => {
    return new Promise((resolve, reject) => {
        axios({
            url: `${defaults.baseURL}${url}`,
            method,
            headers: defaults.headers(),
            params: method === 'get' ? variables : undefined,
            data: method !== 'get' ? variables : undefined,
        }).then(
            (response) => {
                resolve(response)
            },
            (error) => {
                if (error.response) {
                    console.log(error)
                    console.log('error')
                    reject(error.response.data)
                } else {
                    reject(defaults.error)
                }
            }
        )
    })
}

export default {
    get: (...args) => api('get', ...args),
    post: (...args) => api('post', ...args),
    put: (...args) => api('put', ...args),
    delete: (...args) => api('delete', ...args),
}
