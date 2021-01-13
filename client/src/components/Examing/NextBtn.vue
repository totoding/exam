<template>
    <div class="progress_wrap">
        <div class="pageBtn">
            <div class="prev page_item gray">上一题</div>
             <div class="next page_item">下一题</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.progress_wrap {
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    .pageBtn {
        margin-top: 20px;
        width: 200px;
        height: 80px;
        background: #fff;
        border-radius: 4px;
        .page_item{
            text-align: center;
            height: 40px;
            line-height: 40px;
            padding: 0 5px;
            &:hover{
                color: #f9c318;
                cursor: pointer;
            }
            &.prev{
                border-bottom: 1px dotted rgb(180, 173, 173);
                width: 80px;
                margin: 0 auto;
            }
        }
    }
}
</style>