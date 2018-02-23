<template>
  <div class="s-architecture">
    <div class="s-architecture__box">
      <div class="s-architecture__box--header">
        <span>部门架构</span>
        <el-button
          class="s-architecture__box--button"
          type="primary"
          size="small"
          @click.stop="openDepartWindow">
          新建部门
        </el-button>
      </div>
      <div class="s-architecture__box--list">
        <div
          v-for="(department, index) in architecture.clubDepartment"
          class="s-architecture__box--card"
          :key="index">
          <span>{{ department.name }}</span><i class="fa fa-close"></i>
        </div>
      </div>
    </div>
    <div class="s-architecture__box">
      <div class="s-architecture__box--header">
        <span>职位架构</span>
        <el-button
          class="s-architecture__box--button"
          type="primary"
          size="small"
          @click.stop="openPositionWindow">
          新建职位
        </el-button>
      </div>
      <div class="s-architecture__box--list">
        <div
          v-for="(position, index) in architecture.position"
          class="s-architecture__box--card"
          :key="index">
          <span>{{ position.name }}</span><i class="fa fa-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Architecture',
  computed: {
    ...mapGetters({
      architecture: 'viewsManageclubArchitecture/architecture'
    })
  },
  methods: {
    ...mapActions({
      updateArchitecture: 'viewsManageclubArchitecture/updateArchitecture'
    }),

    /**
     * 打开新建部门窗口
     */
    openDepartWindow () {
      let self = this
      self.updateArchitecture({
        isDepartShow: true
      })
    },

    /**
     * 打开新建职位窗口
     */
    openPositionWindow () {
      let self = this
      self.updateArchitecture({
        isPositionShow: true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-architecture {
    border: 1px solid $col-border;
    min-height: 500px;
    padding: 0 20px;
    width: 100%;
    &__box {
      min-height: 250px;
      width: 100%;
      &--card {
        background: $col-lighter-blue;
        border: 1px solid $col-border-blue;
        border-radius: 4px;
        float: left;
        height: 30px;
        line-height: 28px;
        margin-right: 16px;
        min-width: 80px;
        span {
          color: $col-dark-blue;
          font-size: 10px;
          margin-left: 10px;
        }
        i {
          color: $col-dark-blue;
          cursor: pointer;
          float: right;
          font-size: 10px;
          height: 100%;
          line-height: 28px;
          margin-left: 10px;
          text-align: center;
          width: 20px;
          &:hover {
            color: $col-normal-blue;
          }
        }
      }
      &--header {
        border-bottom: 1px solid $col-border;
        height: 60px;
        line-height: 60px;
        width: 100%;
        span {
          color: $col-dark-blue;
          font-size: 16px;
          margin-left: 10px;
        }
      }
      &--button {
        float: right;
        margin-top: 15px;
        margin-right: 10px;
      }
      &--list {
        min-height: 60px;
        padding: 10px;
        width: 100%;
      }
    }
  }
</style>
