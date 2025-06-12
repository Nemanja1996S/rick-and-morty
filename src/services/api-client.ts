import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

export {CanceledError}