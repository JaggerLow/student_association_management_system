<template>
  <div class="s-box__context">
    <div class="s-box__header">
      我的社团
      <el-button class="s-myclub__header--button" type="primary">创建社团</el-button>
    </div>
    <div class="s-myclub__main">
      <div class="s-myclub__main--card">
        <div class="s-myclub__main--logo">
        </div>
        <div class="s-myclub__main--info">
          <div class="s-myclub__main--name">社团名称</div>
          <div class="s-myclub__main--introduction">
            该社团暂无任何介绍~~
          </div>
        </div>
        <div class="s-myclub__main--operate">
          <div class="s-myclub__main--button button-bgcolor__normal">退出社团</div>
          <div class="s-myclub__main--button button-bgcolor__normal">管理社团</div>
          <div class="s-myclub__main--button button-bgcolor__red">解散社团</div>
        </div>
      </div>
      <s-pagefooter
        v-model="page"
        :count="count"
        @changePage="changePage">
      </s-pagefooter>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Myclub',
  data () {
    return {
      page: 1,
      count: 2
    }
  },
  methods: {

    /**
     * 翻页触发事件
     */
    changePage (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/core/var';
.s-myclub {
  &__header {
    &--button {
      float: right;
      margin-top: 10px;
    }
  }
  &__main {
    cursor: default;
    margin: 20px 0;
    min-height: 600px;
    &--button {
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      margin: 10px auto;
      text-align: center;
      width: 100px;
    }
    &--card {
      border: 1px solid $col-border;
      border-radius: 4px;
      height: 150px;
      margin-bottom: 10px;
      padding: 10px 25px;
      width: 100%;
    }
    &--info {
      float: left;
      height: 100%;
      margin-left: 30px;
      width: 800px;
    }
    &--introduction {
      color: $col-deeper-gray;
      font-size: 16px;
      height: 100px;
      line-height: 30px;
      word-break: break-all;
      width: 100%;
    }
    &--logo {
      background: #999;
      float: left;
      height: 100%;
      width: 130px;
    }
    &--name {
      color: $col-deep-black;
      font-size: 22px;
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    &--operate {
      float: left;
      margin-left: 10px;
      height: 100%;
      width: 170px;
    }
  }
}
</style>
