import { server } from "../configurations/AxiosConfigurations";

export const login = async (email, password) => {
    try {
        const response = await server.post('/auth/login', { email, password })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const register = async (fullname, email, password, activated) => {
    try {
        const response = await server.post('/auth/register', { fullname, email, password, activated })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const getUser = async () => {
    try {
        const response = await server.get('/auth', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        return response.data
    } catch (error) {
        return error.response.data
    }
}