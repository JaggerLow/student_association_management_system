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
              :class="[isEmpty ? 's-input__empty' : '']"
              @focus="clearCheck"
              v-model="architecture.departForm.name"
              placeholder="请输入部门名称">
            </el-input>
            <div
              v-if="isEmpty && architecture.departForm.name === ''"
              class="s-form__empty">
              请填写 部门名称
            </div>
            <div
              v-if="isEmpty && architecture.departForm.name !== ''"
              class="s-form__empty">
              该部门已存在
            </div>
          </el-form-item>
        </el-form>
        <div class="s-newdepartment__button" @click.stop="submitData">确定</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogNewdepartment',
  data () {
    return {
      isEmpty: false
    }
  },
  computed: {
    ...mapGetters({
      architecture: 'viewsManageclubArchitecture/architecture'
    })
  },
  methods: {
    ...mapActions({
      getClubDepartment: 'viewsManageclubArchitecture/getClubDepartment',
      updateArchitecture: 'viewsManageclubArchitecture/updateArchitecture'
    }),

    /**
     * 关闭新建部门弹窗
     */
    closeWindow () {
      let self = this
      self.isEmpty = false
      self.updateArchitecture({
        isDepartShow: false,
        departForm: {
          name: ''
        }
      })
    },

    /**
     * 清除校验
     */
    clearCheck () {
      let self = this
      self.isEmpty = false
    },

    /**
     * 新建部门提交
     */
    async submitData () {
      let self = this
      if ([null, ''].indexOf(self.architecture.departForm.name) > -1) {
        self.isEmpty = true
      }
      for (let item of self.architecture.clubDepartment) {
        if (item.name === self.architecture.departForm.name) {
          self.isEmpty = true
          break
        }
      }
      if (!self.isEmpty) {
        let packageData = {
          name: self.architecture.departForm.name,
          clubId: self.architecture.clubId
        }
        let data = await self.$wPost('/deal/club/submitDepartment.do', packageData)
        if (data.data) {
          self.$message({
            message: '新建成功！',
            type: 'success'
          })
          await self.getClubDepartment()
          self.closeWindow()
        }
      }
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
