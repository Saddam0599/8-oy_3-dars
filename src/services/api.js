import axios from "axios"

// export const BASE_URL = "https://64f0b0178a8b66ecf77a03ee.mockapi.io"
export const BASE_URL = "https://670fdb94a85f4164ef2c3926.mockapi.io"

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // responseType: 'json',
    // timeout: 5000, 
})













