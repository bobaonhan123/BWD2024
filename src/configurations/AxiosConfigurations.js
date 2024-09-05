import axios from 'axios'

const baseURL = 'http://103.252.136.203:8083'

export const server = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const AIServerURL = 'http://103.252.136.203:4000'

export const GeminiServerURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`