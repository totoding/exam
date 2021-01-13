<template>
    <div class="examing">
        <div class="examing_container">
            <Examing/>
        </div>
    </div>

</template>

<script>
import Examing from '@/components/Examing/Examing';
import Login from '@/components/Examing/Login';
export default {
    components:{
        Examing,
        Login
    },
    data(){
        return {}
    },
    created(){
        
        console.log(this.$route.query.id)
    }
}
</script>

<style lang="scss" scoped>
.examing{
    width: 100%;
    height: 100%;
    background: #EFF3F7;
}
</style>