import axios, { Axios } from "axios";

const service = axios.create({
  baseURL: 'http://192.168.0.83:3000',// 地址
  timeout: 60000, // 请求时长
});

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      return res
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
