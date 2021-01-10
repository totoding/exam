import axios from 'axios';

export default ()=>{
    const token = localStorage.getItem("token")
    let instance = axios
    if(token){
        instance = axios.create({
            headers:{
                authorization: token
            }
        })
    }

    instance.interceptors.response.use(
        (res)=>{
            if(res.headers.authorization){
                localStorage.setItem("token", res.headers.authorization)
            }
            return res
        },
        (err) =>{
            if(err.response.data.code == 403){
                localStorage.removeItem("token")
            }
            return Promise.reject(err)
        }
    )
    return instance
}