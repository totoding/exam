<template>
    <div class="creat_exam_wrap">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="考试名称">
                <el-input v-model="form.paperName" ></el-input>
            </el-form-item>
            <el-form-item label="考试日期">
                <el-input v-model="form.startTime" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="考试时间">
                <el-input v-model="form.duration" placeholder="单位分钟"></el-input>
            </el-form-item>
             <el-form-item label="总分">
                <el-input type="number" v-model="form.totalScore" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="选择题库">
                <el-select v-model="form.bankInfo" multiple clearable  filterable placeholder="可搜索" @change="changeSelect">
                    <el-option :label="`${item.bankName}（${item.bankType==0?'专业':'通用'}）`" :value="item.id" v-for="(item , index) in bankList" :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题库分数占比" label-width="100px">
         
                    <div class="bank_item" v-for="ele in checkedBank" :key="ele.id">
                        <div class="bank_name">{{ele.bankName}}</div>
                        <div class="bank_percentag">
                            <el-select placeholder="请选择"  v-model="ele.score" @change="changeScorePer">
                                <el-option
                                v-for="item in totalList"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
               
                
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {getBankList} from "@/api/qesBankapi.js"
export default {
    name: "",
    data() {
        return {
            form: {
                bankInfo : [],
                duration : "",
                totalScore: null,
                startTime : "",
                paperName : ""

            },
            bankList : [],
            checkedBank : [],
            totalList : [10,20,30,40,50,60,70,80,90,100],
        }
    },
    computed:{
        
    },
    methods:{
        async initSelectData(){
            const resp = await getBankList()
            if(resp.code == 0){
                this.bankList = resp.data
            }
        },
        changeSelect(val){
            if(val){
                let tmpArr = []
                val.forEach(ele=>{
                    const res =  this.bankList.find(item=>item.id == ele )
                    tmpArr.push(res)
                })
                tmpArr.forEach(ele=>{
                    ele.score = 10
                })

                this.checkedBank = {...tmpArr}

                console.log(this.checkedBank)
            }
           
        },
        changeScorePer(val){
            console.log(val)
            this.$forceUpdate()
        }
    },
    created(){
        this.initSelectData()
    }
};
</script>

<style lang='scss' scoped>
.creat_exam_wrap {
    width: 90%;
    height: 100%;
    .bank_item{
        width: 100%;
        margin-bottom:8px ;
        display: flex;
        .bank_name{
            width: 75%;
            padding-left: 10px;
        }
        .bank_percentag{
            flex: 1;
        }
    }
}
</style>
