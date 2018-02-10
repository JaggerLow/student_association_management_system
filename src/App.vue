<template>
  <div id="app">
    <s-header></s-header>
    <router-view/>
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
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: $col-white;
    color: $col-deep-black;
    font: #{$font-size-base}/#{$line-height} #{$font-family};
    margin: 0;
    overflow-x: hidden;
  }
</style>
