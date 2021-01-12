<template>
    <div class="home">
        <Header />
        <div class="content">
            <div class="left_enroll common_layout">
                <el-card style="width : 80%; height : 400px; margin-top:-20%" >
                 
                    <span @click="singExam">
                           考试报名
                    </span>
                </el-card>
            </div>
            <div class="right_exam common_layout">
                <el-card style="width : 80%; height : 400px; margin-top:-20%" >
                    <span @click="entrollExam">
                        进入考试
                    </span>
                    
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
    name: "Home",
    components: {
        Header,
    },
    data(){
        return {}
    },
    methods :{
        singExam(){
            
            this.$router.push({
                path : "/signExam"
            })
        },
        entrollExam(){
            this.$router.push({
                path  : "/loginExam"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
    width: 100%;
    .content{
    height: calc(100% - 50px);
    width: 100%;
    display: flex;
    .common_layout{
        height: 100%;
        width: 50%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }  
}
}


</style>