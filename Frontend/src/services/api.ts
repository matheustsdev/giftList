import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD" ? "https://listacasanova-api.matheustsdev.com.br" : "http://localhost:5000",
});