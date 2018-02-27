<template>
  <div id="app">
    <s-header></s-header>
    <div class="s-wrapper">
      <router-view/>
    </div>
    <s-footer></s-footer>

    <!-- 各视图自定义的弹框 -->
    <div>
      <s-dialog-login></s-dialog-login>
      <s-dialog-newclub></s-dialog-newclub>
      <s-dialog-newdepartment></s-dialog-newdepartment>
      <s-dialog-newposition></s-dialog-newposition>
      <s-dialog-clubdepartment></s-dialog-clubdepartment>
      <s-dialog-clubposition></s-dialog-clubposition>
      <s-dialog-clubpermit></s-dialog-clubpermit>
      <s-dialog-userinfo></s-dialog-userinfo>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./styles/core/var";

  * {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
    min-width: 1200px;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: $col-white;
    color: $col-deep-black;
    font: #{$font-size-base}/#{$line-height} #{$font-family};
    margin: 0;
    overflow-x: hidden;
  }
  .s-wrapper {
    padding-top: 60px;
    min-width: 1200px;
  }
</style>
