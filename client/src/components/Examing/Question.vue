<template>
    <div class="qes_warp" v-show="active == 0">
        <div class="qes_title">
            问题 ： {{qesItem.questionContent}}
        </div>
        <el-checkbox-group v-model="checked" size="medium ">
            <div class="option">
                <el-checkbox v-model="checked" >A. {{qesItem.optionA}}</el-checkbox>
            </div>
            <div class="option">
                <el-checkbox v-model="checked">A. {{qesItem.optionA}}</el-checkbox>
            </div>
            <div class="option">
                <el-checkbox v-model="checked">A. {{qesItem.optionA}}</el-checkbox>
            </div>
            <div class="option">
                <el-checkbox v-model="checked">A. {{qesItem.optionA}}</el-checkbox>
            </div>
        </el-checkbox-group>
    </div>
</template>
<script>

export default {
    props:{
        active : 0,

    },
    data(){
        return {
            qesItem : {
                questionContent : 1,
                optionA : 2,
                optionB : 3,
                optionC : 4,
                optionD : 5,
            },
            checked : []
        }
    }
}
</script>

<style lang="scss" scoped>
.qes_warp {
    width: 100%;
    height: 700px;
    background: #fff;
}
</style>