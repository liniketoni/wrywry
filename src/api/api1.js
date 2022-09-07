import axios from 'axios'
// import { Message } from 'element-ui';
// import router from '../router'
// //响应拦截器
// axios.interceptors.response.use(success=>{
//     //业务逻辑错误
//     if(success.status&&success.status==200){
//         if(success.data.code==500||success.data.code==401||success.data.code==403){
//             Message.error({message:success.data.Message});
//             return;
//         }
//         if(success.data.Message){
//             Message.success({message:success.data.Message});
//         }
//     }
//     return success.data;

// },error=>{
//     if(error.response.code==504||error.response.code==404){

//         Message.error({massage:'服务器被吃了'})
//     }else if(error.response.code==403){
//         Message.error({massage:'权限不足'})
//     }else if(error.response.code==401){
//         Message.error({massage:'尚未登录'})
//         router.replace('/')
//     }else{
//         if(error.response.data.Message){
//             Message.error({message:error.response.data.Message})
//         }else{
//             Message.error({message:'未知错误！'})
//         }
//     }
//     return;

// });
// let base='';

// export const postReuset=(url,parames)=>{
//     return axios({
//         method:'post',
//         url:'${base}${url}'
//     })
// }
// const ERR_OK=0;
// export const get=(url)=>{
//     axios.get(url).then(res=>{
//         const{
//             errno,
//             data,
//         } = res.data;
//     })
// }