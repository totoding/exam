import request from './request';

export async function getQesListByBankId(id){
    const resp = await request().get("/api/qesItem/"+id)
    return resp.data
}

export async function addQesByBankId(content){
    const resp = await request().post("/api/qesItem",content)
    return resp.data
}

export async function editQesByQesId(id,content){
    const resp = await request().put("/api/qesItem/"+id,content)
    return resp.data
}

export async function removeQesByQesId(id){
    const resp = await request().delete("/api/qesItem/"+id)
    return resp.data
}