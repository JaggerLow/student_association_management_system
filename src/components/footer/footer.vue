<template>
  <div class="s-footer">
    <div class="s-footer__box">
      <div class="s-footer__left">
        <div class="s-footer__icon"></div>
        <p>课题名称：学生社团管理系统</p>
        <p>技术栈：基于Vue2 + java + MySQL</p>
        <p>作者邮箱：645091114@qq.com</p>
      </div>
      <div class="s-footer__right">
        <div class="s-footer__icon">
          作者简介
        </div>
        <p>姓名：梁宇</p>
        <p>学校：广州大学华软软件学院</p>
        <p>github：<a href="https://github.com/ly645091114" target="_blank">github.com/ly645091114</a></p>
      </div>
    </div>
    <div class="s-footer__bottom">14届 嵌统2班 梁宇 毕业设计</div>
  </div>
</template>
<script>
export default {
  name: 'SFooter'
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";

  .s-footer {
    background: #333;
    color: $col-white;
    cursor: default;
    font-size: 12px;
    height: 300px;
    width: 100%;
    &__bottom {
      color: rgba(255,255,255,.72);
      font-size: 14px;
      line-height: 50px;
      text-align: center;
      width: 100%;
    }
    &__box {
      align-items: center;
      cursor: default;
      display: flex;
      display: -webkit-flex;
      height: 250px;
      justify-content: center;
      margin: 0 auto;
      padding: 40px 0;
      width: 1200px;
      p {
        color: rgba(255,255,255,.72);
        font-size: 14px;
        line-height: 22px;
        a:visited, a:link, a:active {
          text-decoration: none;
          color: rgba(255,255,255,.72);
        }
        a:hover {
          text-decoration: none;
          color: rgba(255,255,255,.52);
        }
      }
    }
    &__icon {
      font-size: 20px;
      line-height: 60px;
      margin-bottom: 20px;
      height: 60px;
      width: 140px;
    }
    &__left {
      flex: 3;
      float: left;
      height: 100%;
    }
    &__right {
      flex: 2;
      float: left;
      height: 100%;
    }
  }
</style>
