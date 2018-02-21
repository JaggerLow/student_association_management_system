<template>
  <div class="s-box__context">
    <div class="s-box__header">
      社团管理
    </div>
    <div class="s-manageclub__main">
      <div class="s-manageclub__sidebar">
        <el-menu
          default-active="1"
          @select="selectMenu"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <span slot="title">基本信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">社团成员</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">申请列表</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">社团架构</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">社团活动</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Manageclub',
  methods: {

    /**
     * 菜单选择
     */
    selectMenu (path) {
      console.log(path)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-manageclub {
    &__main {
      cursor: default;
      margin: 20px 0;
      min-height: 600px;
    }
    &__sidebar {
      float: left;
      min-height: 600px;
      width: 10%;
    }
  }
</style>
