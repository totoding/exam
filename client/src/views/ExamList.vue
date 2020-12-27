<template>
    <div class="exam">
        <div class="create_exam_container">
            <div class="title">
                创建考试
            </div>
            <div class="block">
                <CreatEaxm/>
            </div>
        </div>
        <div class="examing"></div>
    </div>
</template>

<script>
import CreatEaxm from '@/components/CreatExam';

export default {
    name: "exam",
    components:{
        CreatEaxm,
    },
    data() {
        return {}
    },
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
