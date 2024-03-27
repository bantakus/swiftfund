import axios from "axios";


export const instance = axios.create({
    baseURL:"http://localhost:8080"
})

export const baseURL = "http://localhost:8080/api";