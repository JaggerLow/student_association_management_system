<template>
  <div class="s-box__context">
    <div class="s-club__wrap">
      <div class="s-club__info flex">
        <div class="s-club__header">
          <img/>
        </div>
        <div class="s-club__name">社团名称</div>
        <div class="s-club__num">社团号</div>
      </div>
      <div class="clearfix">
        <div class="s-club__content">
          <div class="s-club__item">
            <div class="s-club__title">
              <span class="s-club__span"></span>
              666
            </div>
            <div class="s-club__article">111111111111111111111111111111111111111111</div>
          </div>
          <div class="s-club__item">
            <div class="s-club__title">
              <span class="s-club__span"></span>
              666
            </div>
            <div class="s-club__article"></div>
          </div>
        </div>
        <div class="s-club__sidebar">
          <div class="s-club__item">
            <div class="s-club__title">
              <span class="s-club__span"></span>
              666
            </div>
            <div class="s-club__article"></div>
          </div>
          <div class="s-club__item">
            <div class="s-club__title">
              <span class="s-club__span"></span>
              666
            </div>
            <div class="s-club__article"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Club'
}
</script>
<style lang="scss" scoped>
  .s-club {
    &__article {
      padding: 20px;
      word-break: break-all;
    }
    &__content {
      float: left;
      width: 660px;
    }
    &__info {
      width: 100%;
      text-align: center;
    }
    &__item {
      background: #fff;
      border: 1px solid #d0dde5;
      width: 100%;
      margin-bottom: 20px;
      min-height: 100px;
    }
    &__header {
      margin-top: 30px;
      img {
        display: block;
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border: 4px solid #7fc9f5;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
      }
    }
    &__name {
      margin-top: 12px;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }
    &__num {
      font-size: 14px;
      color: #eee;
      text-align: center;
      margin-top: 12px;
      line-height: 1;
    }
    &__span {
      display: block;
      position: absolute;
      width: 4px;
      height: 20px;
      top: 50%;
      left: -20px;
      margin-top: -10px;
      background: #36baff;
    }
    &__sidebar {
      float: right;
      width: 220px;
    }
    &__title {
      height: 49px;
      line-height: 49px;
      border-bottom: 1px solid #d0dde5;
      margin: 0 20px;
      color: #333333;
      font-size: 18px;
      position: relative;
    }
    &__wrap {
      margin: 30px 0;
      background: #999;
      border: {
        width: 0 1px;
        color: #d3d3d3;
        style: solid;
      }
      min-height: 900px;
    }
  }
  .clearfix {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 150px;
    overflow: auto;
    zoom: 1;
  }
  .flex {
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
