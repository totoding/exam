import request from './request';

export async function signExam(payload){
    const resp = await request().post("/api/examinee/singIn",payload)
    return resp.data
}

export async function getSigedExam(){
    const resp = await request().get("/api/examinee")
    return resp.data
}

export async function getPaperByExamId(payload){
    const resp = await request().post("/api/examinee/login", payload)
    return resp.data
}