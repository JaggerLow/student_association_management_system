<template>
  <div v-if="newclubWindow.isShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">创建社团</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-newclub__form"
          :model="newclubWindow.form"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="社团名称">
            <el-input
              v-model="newclubWindow.form.name"
              placeholder="请输入社团名称">
            </el-input>
          </el-form-item>
          <el-form-item label="社团类型">
            <el-select
              class="s-select__form"
              v-model="newclubWindow.form.type"
              placeholder="请选择社团类型">
              <el-option
                v-for="(type, index) in clubType"
                :key="index"
                :label="type.label"
                :value="type.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="社团级别">
            <el-select
              class="s-select__form"
              v-model="newclubWindow.form.level"
              placeholder="请选择社团级别">
              <el-option
                v-for="(level, index) in clubLevel"
                :key="index"
                :label="level.label"
                :value="level.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="s-newclub__button">创建社团</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogNewclub',
  computed: {
    ...mapGetters({
      clubType: 'clubType',
      clubLevel: 'clubLevel',
      newclubWindow: 'viewsMyclubNewclub/newclubWindow'
    })
  },
  methods: {
    ...mapActions({
      updateNewclubWindow: 'viewsMyclubNewclub/updateNewclubWindow'
    }),

    /**
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.updateNewclubWindow({
        isShow: false,
        form: {
          name: '',
          type: '',
          level: ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-newclub {
    &__form {
      width: 400px;
    }
    &__button {
      background: $col-dark-blue;
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      font-size: $font-size-h2;
      line-height: 36px;
      margin: 16px 0;
      height: 36px;
      text-align: center;
      width: 100%;
      &:hover {
        background: $col-normal-blue;
      }
    }
  }
</style>
