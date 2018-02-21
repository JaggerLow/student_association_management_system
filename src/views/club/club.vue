<template>
  <div class="c-bg">
    <div class="c-wrap">

      <div class="c-info flex">
        <div class="c-header">
          <img/>
        </div>
        <div class="c-name">社团名称</div>
        <div class="c-num">社团号</div>
      </div>
      <div class="clearfix">
        <div class="c-content">
          <div class="c-item">
            <div class="c-title">
              <span class="c-span"></span>
              666
            </div>
            <div class="c-article">111111111111111111111111111111111111111111</div>
          </div>
          <div class="c-item">
            <div class="c-title">
              <span class="c-span"></span>
              666
            </div>
            <div class="c-article"></div>
          </div>
        </div>
        <div class="c-sidebar">
          <div class="c-item">
            <div class="c-title">
              <span class="c-span"></span>
              666
            </div>
            <div class="c-article"></div>
          </div>
          <div class="c-item">
            <div class="c-title">
              <span class="c-span"></span>
              666
            </div>
            <div class="c-article"></div>
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
  .clearfix {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 150px;
    overflow: auto;
    zoom: 1;
  }
  .flex{
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
  .c-bg{
    width: 100%;
    background-color: #f5f5f5;
  }
  .c-wrap{
    width: 1200px;
    margin: 0 auto;background: -webkit-linear-gradient(top, blue , white);
    border: {
      width: 0 1px;
      color: #d3d3d3;
      style: solid;
    }
    min-height: 500px;
  }
  .c-info{
    width: 100%;
    text-align: center;
  }
  .c-header{
    margin-top: 30px;
  }
  .c-header img{
    display: block;
    margin: 0 auto;
    width: 120px;
    height: 120px;
    border: 4px solid #7fc9f5;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
  .c-name{
    margin-top: 12px;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
  .c-num{
    font-size: 14px;
    color: #eee;
    text-align: center;
    margin-top: 12px;
    line-height: 1;
  }
  .c-content{
    float: left;
    width: 660px;
  }
  .c-sidebar{
    float: right;
    width: 220px;
  }
  .c-item{
    background: #fff;
    border: 1px solid #d0dde5;
    width: 100%;
    margin-bottom: 20px;
    min-height: 100px;
  }
  .c-title{
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #d0dde5;
    margin: 0 20px;
    color: #333333;
    font-size: 18px;
    position: relative;
  }
  .c-span{
    display: block;
    position: absolute;
    width: 4px;
    height: 20px;
    top: 50%;
    left: -20px;
    margin-top: -10px;
    background: #36baff;
  }
  .c-article{
    padding: 20px;
    word-break: break-all;
  }
</style>
