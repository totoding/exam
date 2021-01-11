import request from './request';

export async function addExam(payload){
    const resp = await request().post("/api/exam",payload)
    return resp.data
}

export async function getExamList(){
    const resp = await request().get("/api/exam")
    return resp.data
}

export async function changeExamStatus(payload){
    const resp = await request().put("/api/exam", payload)
    return resp
}