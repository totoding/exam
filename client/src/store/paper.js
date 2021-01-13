import * as paper  from '../api/examing.js';

export default {
    namespaced: true,
    state : {
        paper : null,
        completed : []
    },
    mutations : {
        setPaperData(state, payload){
            state.paper = payload
            state.completed = payload.map((ele, i)=>{
                return {
                    state : 0,
                    index : i + 1,
                    answer : [],
                    id : ele.id
                }
            })
        },
        setCompletedData(state, payload){
            // 装入已答完的题目
        }
    },
    actions : {
        async getPaperData( { commit }, payload){
            // 请求试题数据
            const resp = await paper.getPaperData()
            commit("setPaperData", resp.data)
            return resp.data
        },
        setCompletedData( { commit }, index){
            commit()
        }
    }
}
