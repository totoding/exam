<template>
    <div class="newQesBankItem">
        <div class="left_qes">
            <InsertQes :types="type" :editData.sync="editData" @transfer="transfer" ref="insert"  />
        </div>
        <div class="right_view">
            <div class="right_top_count">
                <div class="item" v-for="(item,index) in qesList" :key="index">
                    <el-tag
                        :key="index"
                        size="medium"
                        :disable-transitions="true"
                        @click="initEditItem(item)"
                        :type="activeTag == item.id ? 'success' : ''"
                        style="width:40px; text-align: center; "
                    >
                        {{index+1}}
                    </el-tag>
                   
                </div> 
                <div class="item" v-show="activeTag!=0">
                     <el-button  class="button-new-tag" size="small" @click="initToAdd" >+ 添加</el-button>
                </div>
            </div>
            <div class="right_bottom_view">
                <div class="title">预览</div>
                <div class="content">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>{{ form.qeustionContent }} </span>
                        </div>
                        <div class="text item">A. {{ form.optionA }}</div>
                        <div class="text item">B. {{ form.optionB }}</div>
                        <div class="text item">C. {{ form.optionC }}</div>
                        <div class="text item">D. {{ form.optionD }}</div>
                    </el-card>
                    <div class="answer">答案 : {{ answer }}</div>
                    <div>
                        <el-button type="primary" @click="onSubmit">{{msg}}</el-button>
                        <el-button type="danger" v-show="activeTag!=0" @click="removeQes">删除本题</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InsertQes from "@/components/InsertQes";
import QesCountList from "@/components/QesCountList";
import QesView from "@/components/QesView";
import * as qesApi from '@/api/qesItemapi';
export default {
    name: "newQes",
    components: {
        InsertQes,
        QesCountList,
        QesView,
    },
    data() {
        return {
            type: "new",
            form: {},
            qesList : [],
            bankId : null,
            point : 0,
            editData:{},
            activeTag : 0,
            msg : "新增本题"
        };
    },
    computed: {
        answer() {
            let answerStr = "";
            if (this.form.answer) {
                this.form.answer.forEach((item) => {
                    answerStr += "," + item + "";
                });
                answerStr = answerStr.substr(1);
            }
            return this.form.answer ? answerStr : "";
        },
    },
    methods: {
        transfer(val) {
            this.form = val;
        },
        initToAdd(){
            this.$refs.insert.initForm()
            this.type = "new"
            this.msg = "新增本题"
            this.activeTag = 0
            this.form = {}
            this.getQesList()
        },
        initEditItem({questionContent,optionA,optionB,optionC,optionD,answer,id}) {
            this.editData = {
                optionA,
                optionB,
                optionC,
                optionD,
                questionContent,
                answer : JSON.parse(answer)
            }
            setTimeout(()=>{
                this.$refs.insert.onEdit();
            })
            this.activeTag = id
            this.type = "edit"
            this.msg = "确认修改"
        },
        async onSubmit(){
            const answer = JSON.stringify(this.form.answer)
            const data = {...this.form, bankId : this.bankId , point:this.point}
            delete data.answer
            data.answer = answer
            this.type == "new" ?  this.addNewQes(data) : this.editQes(data)
        },
        async addNewQes (data){
            const resp =await qesApi.addQesByBankId(data)
            if(resp.code == 0){
                this.initToAdd()
                this.$refs.insert.initForm()
            }
        },
        async editQes(data){
            const resp = await qesApi.editQesByQesId(this.activeTag,data)
            if(resp.code == 0){
                this.initToAdd()
                alert("修改成功")
            }
        },
        async removeQes(){
            const resp = await qesApi.removeQesByQesId(this.activeTag)
            if(resp.code == 0){
                this.initToAdd()
                alert("删除成功")
            }
        },
        async getQesList(){
            const resp = await qesApi.getQesListByBankId(this.bankId)
            if(resp.code == "0"){
                this.qesList = resp.data
            }
        },
    
    },
    created(){
        this.bankId =  this.$router.currentRoute.params.id
        this.point =  this.$router.currentRoute.query.point
        this.getQesList() 
    }
};
</script>

<style lang='scss' scoped>
.newQesBankItem {
    width: 100%;
    height: 100%;
    display: flex;
    .left_qes {
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        border-right: 1px sienna solid;
    }
    .right_view {
        flex: 1;
        height: 100%;
        .right_top_count {
            height: 300px;
            border-bottom: 1px solid black;
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
                align-content: flex-start; 
            .item {
                margin: 5px;
                height: 30px;
            }
        }
        .right_bottom_view {
            padding: 20px;
            .content {
                padding: 20px 0;
                .text {
                    font-size: 14px;
                }
                .item {
                    padding: 18px 0;
                }
            }
            .answer {
                padding: 10px 0;
            }
        }
    }
}
</style>
