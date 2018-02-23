<template>
  <div v-if="members.isPositionShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">分配职位</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-form"
          :model="members.positionForm"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="职位名称">
            <el-select
              class="s-select__form"
              v-model="members.positionForm.id"
              placeholder="请选择职位">
              <el-option
                v-for="(position, index) in members.positionList"
                :key="index"
                :label="position.name"
                :value="position.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="s-clubposition__button">确定</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogClubposition',
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
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.updateMembers({
        isPositionShow: false,
        positionForm: {
          id: ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-clubposition {
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
