<template>
  <div class="s-dynamic">
    <div class="s-dynamic__news">
      社团新闻
    </div>
    <div class="s-dynamic__list">
      社团列表
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dynamic'
}
</script>
<style lang="scss" scoped>

  .s-dynamic {
    &__news {
      background: #999;
      line-height: 400px;
      height: 400px;
      text-align: center;
      width: 100%;
    }
    &__list {
      background: #666;
      line-height: 500px;
      height: 500px;
      text-align: center;
      width: 100%;
    }
  }
</style>
