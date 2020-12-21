<template>
    <div class="qesBank_wrap">
        <div class="top_new">
            <el-button type="success" @click="showNew = true"
                >新建题库</el-button
            >
            <el-dialog title="新建题库" :visible.sync="showNew" width="30%" center>
                <el-form :model="form" style="margin:0 auto; width:80%">
                    <el-form-item
                        label="题库名称"
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            v-model="form.name"
                            autocomplete="off"
                            style="width:80%"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="题库类型"
                        :label-width="formLabelWidth"
                    >
                        <el-select
                            v-model="form.type"
                            placeholder="请选择活动区域"
                              style="width:80%"
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
                    <el-button @click="showNew = false">取 消</el-button>
                    <el-button type="primary" @click="handleNewClick"
                        >确 定</el-button
                    >
                </span>
            </el-dialog>
        </div>
        <div class="qesBank_list"></div>
    </div>
</template>

<script>
export default {
    name: "qesBank",
    data() {
        return {
            showNew: false,
            form:{
                type : "0",
                name : ""
            },
            formLabelWidth:'120px'
        };
    },
    methods:{
        handleNewClick(){
            console.log(this.form.name)
            console.log(this.form.type)
        }
    }
};
</script>

<style lang='scss' scoped>
.qesBank_wrap {
    width: 100%;
    height: 100%;
}
</style>
