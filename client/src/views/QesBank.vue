<template>
    <div class="qesBank_wrap">
        <div class="top_new">
            <el-button type="success" @click="showDialog = true"
                >新建题库</el-button
            >
            <el-dialog :title="dialogTitle" :visible.sync="showDialog" width="30%" center>
                <el-form :model="form" style="margin:0 auto; width:80%">
                    <el-form-item
                        label="题库名称"
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            v-model="form.name"
                            autocomplete="off"
                            style="width:90%"
                        ></el-input>
                    </el-form-item>
                       <el-form-item
                        label="单题分数"
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            type="number"
                            v-model="form.itemCount"
                            autocomplete="off"
                            style="width:90%"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="题库类型"
                        :label-width="formLabelWidth"
                    >
                        <el-select
                            v-model="form.bankType"
                            placeholder="请选择活动区域"
                              style="width:90%"
                        >
                            <el-option
                                label="通用题库"
                                value="0"
                            ></el-option>
                            <el-option
                                label="专业题库"
                                value="1"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="handleNewClick"
                        >确 定</el-button
                    >
                </span>
            </el-dialog>
        </div>
        <div class="qesBank_list"   v-loading="loading">
            <div class="qesBank_item" v-for="(item,index) in qesBankList" :key="index">
                <el-card shadow="hover" style="height:100%;" :body-style="{padding:'0px'}" >
                    <div class="qesBank_item_name">
                        {{item.bankName}}
                    </div>
                    <div class="qesBank_item_set">
                        <div class="qesBank_item_set_edit">
                          <el-popover
                                placement="right"
                                width="60"
                                trigger="click">
                                <div style="margin-left:20px">
                                    <el-button type="warning" size="mini" @click="editBankInfo(item)">编辑题库信息</el-button>
                                </div> 
                                <div style="margin-top:10px;margin-left:20px"> 
                                    <el-button type="info" size="mini" @click="editQestions(item.id)">编辑试题信息</el-button>
                                </div>
                                <div slot="reference">编辑</div>
                                </el-popover>
                          </div>
                        <div class="qesBank_item_set_delete" @click="remove(item.id)">
                          
                            删除
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import * as qesBank from "@/api/qesBankapi.js"
export default {
    name: "qesBank",
    data() {
        return {
            showDialog: false,
            loading : false,
            dialogTitle : "新建题库",
            form:{
                bankType : "0",
                name : "",
                itemCount : null,               
            },
            qesBankList : [],
            formLabelWidth:'80px'
        }
    },
    methods:{
        async handleNewClick(){
            this.loading = true
            const resp = await qesBank.addBank({
                bankName : this.form.name,
                itemPoint : this.form.itemCount,
                bankType : this.form.bankType
            })
            if(resp.code == 0){
                this.$message({
                    message: '新建题库成功',
                    type: 'success'
                })
                this.initBankForm()
            }else{
                 this.$message({
                    message: '新建题库失败，请更换题库名重新添加',
                    type: 'warning'
                })
            }
        },
        async getQesList(){ 
            const resp = await qesBank.getBankList()
            if(resp.code == 0){
                this.qesBankList = resp.data
                this.loading = false
            }
        },
        editBankInfo(item){
            this.form.name = item.bankName
            this.form.bankType = item.bankType.toString()
            this.form.itemCount = item.itemPoint
            this.showDialog = true
            this.dialogTitle = "编辑题库"
        },
        remove(id){

        },
        initBankForm(){
            this.form.name = ""
            this.form.bankType = ""
            this.form.itemCount = null
            this.dialogTitle = "新建题库"
            this.showDialog = false
            this.getQesList()
        },
        cancel(){
            this.initBankForm()
        }
    },
    created(){
        this.loading = true
        this.getQesList()
    }
}
</script>

<style lang='scss' scoped>
.qesBank_wrap {
    width: 100%;
    height: 100%;
    .top_new{
        padding-left: 10px ;
    }
    .qesBank_list{
        box-sizing: border-box;
        padding-top:20px ;
        display: flex;
        flex-wrap: wrap;
        .qesBank_item{
            width: 240px;
            height: 120px;
            margin: 10px;
            .qesBank_item_name{
                text-align: center;
                height: 80px;
                line-height: 60px;
                border-bottom:1px solid #EBEEF5;
            }
            .qesBank_item_set{
                display: flex;
                box-sizing: border-box;
                cursor: pointer;
                text-align: center;
                height: 40px;
                line-height: 40px;
                .qesBank_item_set_edit{
                    box-sizing: border-box;
                    width: 50%;
                    border-right:1px solid #EBEEF5; 
                    &:hover{
                        color: #E6A23C;
                    }  
                }
                .qesBank_item_set_delete{
                    width: 50%;
                      &:hover{
                        color: #F56C6C;
                    }  
                }
            }
        }
    }
}
</style>
