import axios from 'axios'

export const parkingAPI = axios.create({
    baseURL: "http://localhost:8899/api"
})