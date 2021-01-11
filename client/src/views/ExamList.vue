<template>
    <div class="exam">
        <div class="create_exam_container">
            <div class="title">
                创建考试
            </div>
            <div class="block">
                <CreatEaxm @initList="initList"/>
            </div>
        </div>
        <div class="examing">
             <div class="title">
                已创建考试
            </div>
            <div class="block">
                <ExamList ref="list"/>
            </div>
        </div>
    </div>
</template>

<script>
import CreatEaxm from '@/components/CreatExam'
import ExamList from '@/components/ExamList'

export default {
    name: "exam",
    components:{
        CreatEaxm,
        ExamList
    },
    data() {
        return {}
    },
    methods : {
        initList(){
            this.$refs.list.getEaxmListData()
        }
    }
};
</script>

<style lang='scss' scoped>
.exam {
    width: 100%;
    height: 100%;
    display: flex;
    .examing {
        flex: 1;
    }
    .create_exam_container {
        width: 550px;
        height: 100%;
        border-right: 1px solid violet;
    }
}
</style>
