import axios from 'axios'

const baseURL = 'http://103.252.136.203:8083'

export const server = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})