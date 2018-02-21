<template>
  <div class="s-home">
    <div class="s-box">
      <div class="s-home__carousel">
        <el-carousel height="640px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }} 活动信息</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="s-home__news">
        公告/新闻/活动
      </div>
      <div class="s-home__about">
        功能介绍
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .s-home {
    &__carousel {
      background: #ddd;
      height: 640px;
      width: 100%;
    }
    &__news {
      background: #999;
      line-height: 500px;
      height: 500px;
      text-align: center;
      width: 100%;
    }
    &__about {
      background: #666;
      line-height: 500px;
      height: 500px;
      text-align: center;
      width: 100%;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 640px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
