<template>
    <div class="progress_wrap">
        <div class="pageBtn">
            <div class="prev page_item gray">上一题</div>
             <div class="next page_item">下一题</div>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.progress_wrap {
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0;
  .pageBtn {
    width: 200;
    height: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .box_item {
      width: 60%;
    }
    .current_pro {
      margin-bottom: 20px;
    }
  }
}
</style>