<template>
    <div class="progress_wrap">
        <div class="progress">
            <div class="current_pro box_item">
                <div>当前进度</div>   0 / 100
            </div>
            <div class="remaining_time box_item">
                <div>剩余时间</div> 120分钟
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.progress_wrap{
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    .progress{
        width: 200px;
        height : 100%;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        .box_item{
            width: 60%;
        }
        .current_pro{
            margin-bottom: 20px ;
        }

    }
}
</style>