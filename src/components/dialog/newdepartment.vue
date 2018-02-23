<template>
  <div v-if="architecture.isDepartShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">新建部门</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-form"
          :model="architecture.departForm"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="部门名称">
            <el-input
              v-model="architecture.departForm.name"
              placeholder="请输入部门名称">
            </el-input>
          </el-form-item>
        </el-form>
        <div class="s-newdepartment__button">确定</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogNewdepartment',
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
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.updateArchitecture({
        isDepartShow: false,
        departForm: {
          name: ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-newdepartment {
    &__button {
      color: $col-white;
      background: $col-dark-blue;
      border-radius: 4px;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: 100%;
      &:hover {
        background: $col-normal-blue;
      }
    }
  }
</style>
