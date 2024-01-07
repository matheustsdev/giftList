import axios from "axios";

export const api = axios.create({
    baseURL: process.env.ENVIRONMENT === "PROD" ? "http://listacasanova.matheustsdev.com.br:8080" : "http://localhost:8080",
});