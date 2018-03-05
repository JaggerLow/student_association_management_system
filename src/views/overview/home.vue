<template>
  <div class="s-home">
    <div class="s-box">
      <div class="s-home__carousel">
        <div class="s-home__box">
          <el-carousel height="640px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }} 活动信息</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="s-home__news">
        <div class="s-home__box">
          公告/新闻/活动
        </div>
      </div>
      <div class="s-home__about">
        <div class="s-home__box">
          <div class="s-box__header">
            功能介绍
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-home {
    &__box {
      margin: 0 auto;
      width: 1200px;
    }
    &__carousel {
      background: $col-lighter-blue;
      height: 640px;
      min-width: 1200px;
    }
    &__news {
      line-height: 500px;
      height: 500px;
      text-align: center;
      min-width: 1200px;
    }
    &__about {
      height: 500px;
      min-width: 1200px;
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
