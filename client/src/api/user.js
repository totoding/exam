import request from './request';

export async function signUp(payload){
    const resp = await request().post("/api/sign/signUp", payload)
    return resp.data
}

export async function signIn(payload){
    const resp = await request().post("/api/sign/signIn", payload)
    return resp.data
}

export async function whoAmI(){
    const resp = await request().get("/api/sign")
    return resp.data
}

export async function logout(){
    localStorage.removeItem("token")
}