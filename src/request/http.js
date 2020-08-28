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
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { redirect: router.currentRoute.fullPath } 
                    });
                    break;             
                // 403 token过期                
                // 登录过期对用户进行提示                
                // 清除本地token和清空vuex中token对象                
                // 跳转登录页面                
                case 403:                     
                    Toast({                        
                        message: '登录过期，请重新登录',                        
                        duration: 1000,                        
                        forbidClick: true                    
                    });                    
                    // 清除token                    
                    localStorage.removeItem('token');                    
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 
                // 404请求不存在                
                case 404:                    
                    Toast({                        
                        message: '网络请求不存在',                        
                        duration: 1500,                        
                        forbidClick: true                    
                    });                    
                break;                
                // 其他错误，直接抛出错误提示                
                default:                    
                    Toast({                        
                        message: error.response.data.errMsg,                        
                        duration: 1500,                        
                        forbidClick: true                    
                    });     
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