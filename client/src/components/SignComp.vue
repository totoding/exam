<template>
    <div class="sign_in_wrap">
        <div class="title">
            {{ type ? "登录" : "注册" }}
        </div>
        <div class="input_wrap" v-for="(item, index) in inputData" :key="index">
            <el-input
                v-model="item.value"
                :placeholder="item.name"
                :type="item.type"
            ></el-input>
        </div>
        <div class="btn_box">
            <el-button
                :type="type ? 'primary' : 'success'"
                style="width: 100%"
                @click="submit"
                >{{ type ? "登 录" : "注 册" }}</el-button
            >
            <div class="tips">
                <span> {{ type ? "没有账号? 请先 " : "已有账号去 " }} </span>
                <span class="change_btn" @click="changeType"
                    >{{ type ? "注册" : "登陆" }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import * as user from "@/api/user.js";
export default {
    props: {
        title: String,
        inputData: Array,
        type: Boolean,
    },
    data() {
        return {};
    },
    methods: {
        changeType() {
            this.$emit("changeType");
        },
        async submit() {
            const username = this.inputData[0].value;
            const password = this.inputData[1].value;
            let verify = "";
            try {
                verify = this.inputData[2].value;
            } catch (error) {
                verify = "";
            }
            if (!username) {
                alert("请输入用户名");
                return false;
            }
            if (!password) {
                alert("请输入密码");
                return false;
            }
            if (this.type) {
                this.$store.dispatch("user/login", {
                    username: username,
                    password: password,
                }).then((res)=>{
                    if(res){
                        alert("登录成功")
                    }
                })
            } else {
                if (verify == password) {
                    const resp = await user.signUp({username, password})
                    if(resp.code == 0){
                        confirm("注册成功，去登陆?") ? this.changeType() : this.inputData.forEach(ele=>{
                            ele.value = ""
                        })  
                    }
                } else {
                    alert("两次密码输入不一致");
                }
            }
        },
    },
};
</script>

<style lang='scss' scoped>
.sign_in_wrap {
    width: 100%;
    height: 100%;
    .title {
        width: 100px;
        margin: 10px auto;
        text-align: center;
        letter-spacing: 5px;
        font-size: 20px;
    }
    .input_wrap,
    .btn_box {
        width: 60%;
        margin: 20px auto;
        .tips {
            width: 100%;
            text-align: right;
            margin-top: 5px;
            font-size: 13px;
            .change_btn {
                color: #67c23a;
                cursor: pointer;
            }
        }
    }
}
</style>
