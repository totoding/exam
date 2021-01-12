<template>
    <div class="logined_wrap">
123
    </div>
</template>

<script>
import { getSigedExam, getPaperByExamId } from '@/api/examinee';
export default {
    data(){
        return {}
    },
    methods : {
        async getList(){
            console.log(111)
            const resp = await getSigedExam()
        },
        async startTest(id){
            const examId = 9
            const realName = "周"
            const identityCard = "202100090004"
            const resp = await getPaperByExamId({
                realName,
                identityCard,
                id,
                examId            
            })
        }
    },
    created(){
        console.log(123)
        // this.getList()
        this.startTest(7)
    }
    
}
</script>

<style lang="scss" scoped>

</style>