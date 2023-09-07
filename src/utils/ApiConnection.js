import axios from "axios";

const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://jsonplaceholder.typicode.com"
            : "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
