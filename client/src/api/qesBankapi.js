import request from './request';

export async function addBank(payload){
    const resp = await request().post("/api/qesBank",payload)
    return resp.data
}

export async function getBankList(){
    const resp = await request().get("/api/qesBank")
    return resp.data
}

export async function editBankByBankId(id,content){
    const resp = await request().put("/api/qesBank/" + id,content)
    return resp.data
}

export async function removeBankByBankId(id){
    const resp = await request().delete("/api/qesBank/"+id)
    return resp.data
}
