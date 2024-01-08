import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD" ? "http://listacasanova.matheustsdev.com.br:5000" : "http://localhost:5000",
});