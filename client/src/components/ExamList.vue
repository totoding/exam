<template>
    <div class="list_wrap">
        <div class="exam_item" v-for="(item, index) in examList" :key="index">
            <el-card shadow="hover" class="card">
                <div class="block">
                    <div class="left_info">
                        <div class="info title">
                            <span>{{ item.paperName }}</span>
                            <span>{{ item.isStart == 1 ? "进行中" : "未开始" }}</span>
                        </div>
                        <div class="info detail">
                            <span> 考试时间： {{ item.startTime }} </span>
                            <span> 当前报名人数 ： {{ item.signUp }} </span>
                        </div>
                    </div>
               
                    <div class="right_controller">
                        <el-button :type="item.isStart == 0 ? 'primary' :'warning'" size="mini" @click="changeExamStatus(item.id, item.isStart)">
                            {{ item.isStart == 1 ? "结束考试" : "开始考试" }}
                        </el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import * as exam from "@/api/exam.js";
import Moment from "moment";
export default {
    data() {
        return {
            examList: [],
        };
    },
    methods: {
        async getEaxmListData() {
            const resp = await exam.getExamList();
            resp.code == 0 ? (this.examList = resp.data) : (this.examList = []);
            this.examList.forEach((ele) => {
                ele.startTime = Moment(parseFloat(ele.startTime)).format(
                    "YYYY-MM-DD HH:mm:ss"
                )
            })
        },
        async changeExamStatus(id, status){
            const resp = await exam.changeExamStatus({id,status})
            this.getEaxmListData()
        }
    },
    created() {
        this.getEaxmListData()
    },
};
</script>

<style lang='scss' scoped>
.list_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
