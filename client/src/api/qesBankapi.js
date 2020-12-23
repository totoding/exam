import request from './request';

export async function addBank(payload){
    const resp = await request().post("/api/qesBank",payload)
    return resp.data
}

export async function getBankList(){
    const resp = await request().get("/api/qesBank")
    return resp.data
}