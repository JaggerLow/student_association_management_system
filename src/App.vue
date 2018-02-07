<template>
  <div id="app">
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
