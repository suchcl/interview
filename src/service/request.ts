import axios from "axios";

const request = axios.create({
    baseURL: "//api.ynotes.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default request;