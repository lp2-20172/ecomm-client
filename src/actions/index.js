import axios from "axios";

export const TOGGLE_THEME_SHADE = 'TOGGLE_THEME_SHADE'
export const toggleTheme = () => ({
    type: TOGGLE_THEME_SHADE,
})

const client = axios.create({
    baseURL: "http://localhost:8003",


})
client.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('userToken')
        if (token) {
            config.headers.common['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    (error) => Promise.reject(error)
)
//https://github.com/js-cookie/js-cookie
//https://github.com/nuxt/nuxt.js/issues/429
client.interceptors.response.use(
    response => response,
    (error) => {
        //console.log('interceptors error:' + JSON.stringify(error))
        
        /*
        //const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
      
          originalRequest._retry = true;
      
          const refreshToken = window.localStorage.getItem('refreshToken');
          return axios.post('http://localhost:8000/auth/refresh', { refreshToken })
            .then(({data}) => {
              window.localStorage.setItem('token', data.token);
              window.localStorage.setItem('refreshToken', data.refreshToken);
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
              originalRequest.headers['Authorization'] = 'Bearer ' + data.token;
              return axios(originalRequest);
            });
        }*/
        if (error.response.status === 401) {
            console.log('interceptors error 401')
        }
        return Promise.reject(error);
    }
);

export default client 