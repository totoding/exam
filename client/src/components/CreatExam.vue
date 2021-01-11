<template>
    <div class="creat_exam_wrap">
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="考试名称" prop="paperName">
                <el-input v-model="form.paperName" ></el-input>
            </el-form-item>
            <el-form-item label="考试日期">
                <el-date-picker
                    style="width:100%"
                    v-model="form.startTime"
                    type="datetime"
                    value-format="timestamp"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="考试时长" prop="duration">
                <el-input v-model="form.duration" placeholder="单位分钟"></el-input>
            </el-form-item>
             <el-form-item label="总分" prop="totalScore">
                <el-input type="number" v-model="form.totalScore" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="选择题库">
                <el-select v-model="form.bankInfo" multiple clearable  filterable placeholder="可搜索" @change="changeSelect" style="width:100%">
                    <el-option :label="`${item.bankName}（${item.bankType==0?'专业':'通用'}）`" :value="item.id" v-for="(item , index) in bankList" :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题库分数占比" label-width="100px">
                <div class="bank_item" v-for="ele in checkedBank" :key="ele.id">
                    <div class="bank_name">{{`${ele.bankName} -----单题 ${ele.itemPoint}分 `}}</div>
                    <div class="bank_percentag">
                        <el-select placeholder="请选择"  v-model="ele.score" @change="changeScorePer"  >
                            <el-option
                                v-for="item in totalList"
                                :key="item"
                                :label="`${item}%`"
                                :value="item">
                            </el-option>
                         </el-select>
                    </div>
                </div>    
            </el-form-item>
            <el-form-item label=" ">
                <el-button type="primary" @click="submitExam">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { getBankList } from "@/api/qesBankapi.js"
import { addExam } from "@/api/exam.js"
export default {
    data() {
        return {
            form: {
                bankInfo : [],
                duration : "",
                totalScore: null,
                startTime : "",
                paperName : "",
            },
            rules : {
                paperName : [{required: true, message: '请输入考试名称', trigger: 'blur'}],
                duration : [{required: true, message: '请输入考试时长', trigger: 'blur'}],
                totalScore : [{required: true, message: '请输入总分', trigger: 'blur'}]
            },
            bankList : [],
            checkedBank : [],
            totalList : [10,20,30,40,50,60,70,80,90,100],
        }
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
            }  
        },
        changeScorePer(val){
            this.$forceUpdate()
        },
        checkScorePercent(){
            const checkedBankArr = Object.values(this.checkedBank)
            if(checkedBankArr.length > 0){
                let checkHundredPercent = 0
                let checktotal = {}
                let bankInfo = []
                checkedBankArr.forEach(ele=>{
                    checkHundredPercent += ele.score
                    const res = ( ele.score / 100) * this.form.totalScore / ele.itemPoint
                    if(!Number.isInteger(res)){
                        checktotal.msg = ele.bankName
                    }else{
                        bankInfo.push({
                            bankId : ele.id,
                            qesCount : res
                        })
                    }   
                })
                if(checkHundredPercent != 100){
                    alert("题库占比有误， 请调整题库总占比为100%")
                    return false
                }
                if(checktotal.msg){
                    alert(checktotal.msg + "所占分数与单题分数无法整除， 请调整题库单题分数，或占比")
                    return false
                }
                this.bankInfo = bankInfo
                return true
            }
            alert("请选择题库")
            return false
        },
        async submitExam(){
            const allowSub = this.checkScorePercent()
            const checkedBankArr = Object.values(this.checkedBank)
            if(allowSub){
                const data = {
                    paperName : this.form.paperName,
                    startTime : this.form.startTime.toString(),
                    duration : this.form.duration,
                    totalScore : this.form.totalScore,
                    bankInfo : JSON.stringify(this.bankInfo)
                }
                const resp = await addExam(data)
                if(resp.code == 0){
                    alert("创建考试成功")
                    this.form = {} 
                    this.checkedBank = {}
                    this.$emit('initList')
                }
            }
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
