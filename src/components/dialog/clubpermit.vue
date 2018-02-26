<template>
  <div v-if="members.isPermitShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">分配权限</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-form"
          :model="members.permitForm"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="管理权限">
            <el-select
              class="s-select__form"
              v-model="members.permitForm.permit"
              placeholder="请选择管理权限">
              <el-option key="1" label="最高管理员" value="1"></el-option>
              <el-option key="2" label="普通管理员" value="2"></el-option>
              <el-option key="3" label="社团成员" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="s-clubpermit__button" @click.stop="submit">确定</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogClubpermit',
  computed: {
    ...mapGetters({
      members: 'viewsManageclubMembers/members'
    })
  },
  methods: {
    ...mapActions({
      updateMembers: 'viewsManageclubMembers/updateMembers'
    }),

    /**
     * 部门提交
     */
    submit () {
      let self = this
      let packageData = {
        clubId: 100001,
        userId: self.members.memberId,
        permit: self.members.permitForm.permit
      }
      console.log(packageData)
      self.closeWindow()
    },

    /**
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.updateMembers({
        isPermitShow: false,
        memberId: '',
        permitForm: {
          permit: ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-clubpermit {
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
