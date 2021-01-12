<template>
    <div class="examing_wrap">
        考试主体
    </div>

</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        // const id =  this.$route.params.id
        console.log(this.$route.query.id)
    }
}
</script>

<style>
</style>