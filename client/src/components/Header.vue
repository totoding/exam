<template>
    <div class="head_wrap">
        <div class="container">
            <div class="logo">
                考试系统
            </div>
            <div class="user">
                <span>
                    当前用户 : {{ this.$store.state.user.data ? this.$store.state.user.data.username : "未登录" }}
                </span>
                <el-button type="primary" size="mini" @click="logOut">注销</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: "",
        }
    },
    methods:{
        logOut(){
           this.$store.dispatch("user/logout")
        }
    },
 
};
</script>

<style lang='scss' scoped>
.head_wrap {
    height: 50px;
    width: 100%;

    .container {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user{
            span{
                display: inline-block;
                margin-right:20px ;
            }
        }
    }
}
</style>
