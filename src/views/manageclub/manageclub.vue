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
          <el-menu-item index="6">
            <span slot="title">社团相册</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="s-manageclub__box">
        <basicinfo v-if="showPage === '1'"></basicinfo>
        <members v-if="showPage === '2'"></members>
        <apply v-if="showPage === '3'"></apply>
        <architecture v-if="showPage === '4'"></architecture>
        <activity v-if="showPage === '5'"></activity>
      </div>
    </div>
  </div>
</template>
<script>
import Basicinfo from './page/basicinfo'
import Members from './page/members'
import Apply from './page/apply'
import Architecture from './page/architecture'
import Activity from './page/activity'
export default {
  name: 'Manageclub',
  data () {
    return {
      showPage: '1'
    }
  },
  components: {
    Basicinfo,
    Members,
    Apply,
    Architecture,
    Activity
  },
  methods: {

    /**
     * 菜单选择
     */
    selectMenu (path) {
      let self = this
      self.showPage = path
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-manageclub {
    &__box {
      cursor: default;
      float: left;
      min-height: 700px;
      padding: 20px 40px;
      width: 90%;
    }
    &__main {
      cursor: default;
      margin: 20px 0;
      min-height: 600px;
      overflow: hidden;
    }
    &__sidebar {
      float: left;
      width: 10%;
    }
  }
</style>
