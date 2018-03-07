<template>
  <div v-if="architecture.isPositionShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">新建职位</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-form"
          :model="architecture.positionForm"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="职位名称">
            <el-input
              :class="[isEmpty ? 's-input__empty' : '']"
              @focus="clearCheck"
              v-model="architecture.positionForm.name"
              placeholder="请输入职位名称">
            </el-input>
            <div
              v-if="isEmpty && architecture.positionForm.name === ''"
              class="s-form__empty">
              请填写 职位名称
            </div>
            <div
              v-if="isEmpty && architecture.positionForm.name !== ''"
              class="s-form__empty">
              该职位已存在
            </div>
          </el-form-item>
        </el-form>
        <div class="s-newposition__button" @click.stop="submitData">确定</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogNewposition',
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
      getPosition: 'viewsManageclubArchitecture/getPosition',
      updateArchitecture: 'viewsManageclubArchitecture/updateArchitecture'
    }),

    /**
     * 关闭新建职位弹窗
     */
    closeWindow () {
      let self = this
      self.isEmpty = false
      self.updateArchitecture({
        isPositionShow: false,
        positionForm: {
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
     * 新建职位提交
     */
    async submitData () {
      let self = this
      if ([null, ''].indexOf(self.architecture.positionForm.name) > -1) {
        self.isEmpty = true
      }
      for (let item of self.architecture.position) {
        if (item.name === self.architecture.positionForm.name) {
          self.isEmpty = true
          break
        }
      }
      if (!self.isEmpty) {
        let packageData = {
          name: self.architecture.positionForm.name,
          clubId: self.architecture.clubId
        }
        let data = await self.$wPost('/deal/club/submitPosition.do', packageData)
        if (data.data) {
          self.$message({
            message: '新建成功！',
            type: 'success'
          })
          await self.getPosition()
          self.closeWindow()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-newposition {
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
