<template>
    <div class="list_wrap">
        <div class="title">
            已报名的考试
        </div>
        <div class="exam_item" v-for="(item, index) in examList" :key="index">
            <el-card shadow="hover" class="card">
                <div class="block">
                    <div class="left_info">
                        <div class="info title">
                            <span>{{ item.Exam.paperName }}</span>
                            <span>{{ item.Exam.isStart == 1 ? "考试中" : "未开始" }}</span>
                        </div>
                        <div class="info detail">
                            <span> 考试时间： {{ item.Exam.startTime }} </span>
                            <span> 当前报名人数 ： {{ item.Exam.signUp }} </span>
                        </div>
                    </div>
                    <div class="right_controller">
                        <el-button  type="primary" size="mini" @click="startTest(item.id)">
                            开始考试
                        </el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import { getSigedExam, getPaperByExamId } from '@/api/examinee';
import Moment from "moment";
export default {
    data(){
        return {
            examList : []
        }
    },
    methods : {
        async getList(){
            const resp = await getSigedExam()
            this.examList = resp.data
            this.examList.forEach((ele) => {
                console.log(ele)
                ele.Exam.startTime = Moment(parseFloat(ele.Exam.startTime)).format(
                    "YYYY-MM-DD HH:mm:ss"
                )
            })
        },
        async startTest(id){
            this.$router.push({
                path : "/examing",
                query: {         
                    id,
                }
            })
        }

    },
    created(){
        this.getList()
    }
    
}
</script>

<style lang='scss' scoped>
.list_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        margin: 20px;
    }
    .exam_item {
        width: 90%;
        height: 100px;
        margin-bottom: 10px;
        cursor: pointer;
        .block{
            display: flex;
            height: 100%;
            .left_info{
                flex: 1;
                .title {
                    font-weight: 600;
                    margin: 0 10px 10px 10px;
                    display: flex;
                    justify-content: space-between;
                    span:last-child {
                        font-size: 13px;
                        font-weight: 400;
                    }
                }
                .detail{
                    color: rgb(179, 173, 173);
                    font-size: 13px;
                    margin: 0 10px;
                    span{
                        display: inline-block;
                        margin-right: 20px;
                    }
                }
            }
            .right_controller{
                width: 200px;
                height: 100%;
                box-sizing: border-box;
                padding: 10px 0 0 100px;
            }
        }
    }
}
</style>