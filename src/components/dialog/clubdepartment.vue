<template>
  <div v-if="members.isClubdepartShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">分配部门</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-form"
          :model="members.clubdepartForm"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="部门名称">
            <el-select
              class="s-select__form"
              :class="[isEmpty ? 's-input__empty' : '']"
              v-model="members.clubdepartForm.id"
              @focus="clearCheck"
              placeholder="请选择部门">
              <el-option
                v-for="(clubDepartment, index) in members.clubDepartmentList"
                :key="index"
                :label="clubDepartment.name"
                :value="clubDepartment.id">
              </el-option>
            </el-select>
            <div v-if="isEmpty" class="s-form__empty">请分配部门</div>
          </el-form-item>
        </el-form>
        <div class="s-clubdepartment__button" @click.stop="submit">确定</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogClubdepartment',
  data () {
    return {
      isEmpty: false
    }
  },
  computed: {
    ...mapGetters({
      members: 'viewsManageclubMembers/members'
    })
  },
  methods: {
    ...mapActions({
      updateMembers: 'viewsManageclubMembers/updateMembers',
      getMemberList: 'viewsManageclubMembers/getMemberList'
    }),

    /**
     * 清空校验
     */
    clearCheck () {
      let self = this
      self.isEmpty = false
    },

    /**
     * 部门提交
     */
    async submit () {
      let self = this
      if (self.members.clubdepartForm.id === '') {
        self.isEmpty = true
      }
      if (!self.isEmpty) {
        let packageData = {
          clubId: self.members.clubId,
          userId: self.members.memberId,
          id: self.members.clubdepartForm.id
        }
        let data = await self.$wPost('/deal/club/distributeDepartment.do', packageData)
        if (data.data) {
          self.$message({
            message: '操作成功！',
            type: 'success'
          })
          await self.getMemberList()
          self.closeWindow()
        }
      }
    },

    /**
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.isEmpty = false
      self.updateMembers({
        isClubdepartShow: false,
        memberId: '',
        clubdepartForm: {
          id: ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-clubdepartment {
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
