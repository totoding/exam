<template>
    <div class="sign_wrap">

        <div class="container">
            <SignComp  :inputData="inputData" :type="type" @changeType="changeType" />
        </div>
    </div>
</template>

<script>

import SignComp from "@/components/SignComp";
export default {
    name: "sign",
    components:{
        SignComp
    },
    data() {
        return {
            type : true,
            inputData : [
                {name : "请输入用户名", type : "username", value: ""},
                {name : "请输入密码", type : "password",  value: ""}
            ]
        }
    },
    methods : {
        changeType(){
            this.type = !this.type
            this.type ? this.inputData.pop() : this.inputData.push({name : "请确认密码", type : "password",  value: ""})
        }
    }
};
</script>

<style lang='scss' scoped>
.sign_wrap{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        width: 600px;
        height: 400px;
        border: 1px solid;
    }
}
</style>
