import axios from 'axios';
import React from 'react';
import { useEffect ,navigate} from 'react';

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

// axiosClient.interceptors.request.use((config)=>{
//     const token='123'
// config.headers.Authorization=`Bearer${token}`;
// return config;
// });
// axiosClient.interceptors.response.use(response=>{
//     return response;
// },error=>{
//     if(error.response && error.response.status===401){
// navigate("login");
// return error;
//     }
//     throw error;
// })

export default axiosClient;