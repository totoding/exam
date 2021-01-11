import request from './request';

export async function signExam(payload){
    const resp = await request().post("/api/examinee/singIn",payload)
    return resp.data
}

