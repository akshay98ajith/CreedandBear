import axios from "axios";
import { baseURL } from "./url";

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export default instance