<template>
    <div class="insertQes">
        <div class="title">录入题目信息</div>
        <div class="content">
            <el-form
                ref="form"
                :model="form"
                label-width="80px"
                label-position="top" 
                :rules="rules"
            >
                <el-form-item label="题目" prop="questionContent">
                    <el-input
                        type="textarea"
                        size="small"
                        v-model="form.questionContent"
                        @change="change"
                        validate-event
                    ></el-input>
                </el-form-item>
                <el-form-item label="选项A" prop="optionA">
                    <el-input
                        type="textarea"
                        size="small"
                        v-model="form.optionA"
                        @change="change"
                    ></el-input>
                </el-form-item>
                <el-form-item label="选项B" prop="optionB">
                    <el-input
                        type="textarea"
                        size="small"
                        v-model="form.optionB"
                        @change="change"
                    ></el-input>
                </el-form-item>
                <el-form-item label="选项C" prop="optionC">
                    <el-input
                        type="textarea"
                        size="small"
                        v-model="form.optionC"
                        @change="change"
                    ></el-input>
                </el-form-item>
                <el-form-item label="选项D" prop="optionD">
                    <el-input
                        type="textarea"
                        size="small"
                        v-model="form.optionD"
                        @change="change"
                    ></el-input>
                </el-form-item>
                <el-form-item label="答案（可多选）" prop="answer">
                    <el-checkbox-group v-model="form.answer" @change="change">
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
    props: {
        types: {
            type: String,
        },
        editData: {
            type: Object,
        },
    },
    data() {
        return {
            form: {
                answer: [],
                questionContent: "",
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: "",
            },
            rules: {
                questionContent: [
                    { required: true, message: "请输入题目", trigger: "blur" },
                ],
                optionA: [
                    { required: true, message: "请输入选项A", trigger: "blur" },
                ],
                optionB: [
                    { required: true, message: "请输入选项B", trigger: "blur" },
                ],
                optionC: [
                    { required: true, message: "请输入选项C", trigger: "blur" },
                ],
                optionD: [
                    { required: true, message: "请输入选项D", trigger: "blur" },
                ],
            },
        };
    },
    methods: {
        onEdit() {
            this.form = this.editData;
            this.change();
        },
        change() {
            this.$emit("transfer", this.form);
        },
        initForm() {
            this.form.answer = [];
            this.form.questionContent = "";
            this.form.optionA = "";
            this.form.optionB = "";
            this.form.optionC = "";
            this.form.optionD = "";
        },
    },
    created() {
        console.log(this.types);
    },
};
</script>

<style lang='scss' scoped>
.insertQes {
    width: 100%;
    height: 100%;
    .title {
        padding-bottom: 40px;
    }
    .content {
        width: 86%;
    }
}
</style>
