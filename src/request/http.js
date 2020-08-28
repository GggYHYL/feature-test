import axios from 'axios';
// 基本路径
axios.defaults.baseURL = process.env.VUE_APP_BASIC_API;
// 超时时间
axios.defaults.timeout = 10000

axios.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'sysPlatform': 'wap',
    "Cache-Control": "no-cache",
};

// 请求拦截器
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.token = token
    }
    return config
},error => Promise.error(error))
// 响应拦截器
axios.interceptors.response.use(    
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据 ,否则的话抛出错误
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),    
    // 服务器状态码不是2开头的的情况
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {                
                // 404请求不存在
                case 404:
                    console.log(error.response.status);     
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    console.log(error.response.status);     
            }
            return Promise.reject(error.response);
        }
    }    
)
// post请求
export const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => resolve(res.data)).catch(err => reject(err.data))
    })
}