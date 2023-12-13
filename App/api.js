import axios from "axios";

const client =axios.create({
    baseURL: "https://api.aexample.com",
    timeout: 7000
})

client.interceptors.request.use(config)

