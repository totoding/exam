<template>
    <div class="insertQes">
        <div class="title">录入题目信息</div>
        <div class="content">
             <el-form ref="form" :model="form" label-width="80px" label-position="top" >
                <el-form-item label="题目" >
                    <el-input type="textarea" size="small" v-model="form.qeustionContent" @change="change"></el-input>
                </el-form-item>
                 <el-form-item label="选项A" >
                    <el-input type="textarea" size="small" v-model="form.optionA"  @change="change"></el-input>
                </el-form-item>
                 <el-form-item label="选项B" >
                    <el-input type="textarea" size="small" v-model="form.optionB"  @change="change"></el-input>
                </el-form-item>
                 <el-form-item label="选项C" >
                    <el-input type="textarea" size="small" v-model="form.optionC"  @change="change"></el-input>
                </el-form-item>
                 <el-form-item label="选项D" >
                    <el-input type="textarea" size="small" v-model="form.optionD"  @change="change"></el-input>
                </el-form-item>
                <el-form-item label="答案（可多选）" >
                     <el-checkbox-group v-model="form.answer"  @change="change">
                        <el-checkbox label="A" name="type"></el-checkbox>
                        <el-checkbox label="B" name="type"></el-checkbox>
                        <el-checkbox label="C" name="type"></el-checkbox>
                        <el-checkbox label="D" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
             
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "insertQes",
    props:{
        types:{
            type: String
        }
    },
    data() {
        return {
            form:{
                answer : [],
                qeustionContent : "",
                optionA : "",
                optionB : "",
                optionC : "",
                optionD : ""
            }
        }
    },
    methods: {
        onSubmit(){
            
        },
        change(){
            this.$emit("transfer", this.form)
        }
    },
    created(){
        console.log(this.types)
    }
    
}
</script>

<style lang='scss' scoped>
.insertQes{
    width: 100%;
    height: 100%;
    .title{
        padding-bottom:40px ;
    }
    .content{
        width: 86%;
    }
}
</style>
