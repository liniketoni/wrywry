import axios from "axios";

const request=axios.create({
    baseURL:"http://localhost:8081",
    //超时
    timeout: 1000000,
    withCredentials:true
})

export default request