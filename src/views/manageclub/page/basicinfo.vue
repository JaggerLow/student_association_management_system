<template>
  <div class="s-box__manage">
    <el-form
      ref="form"
      class="s-form s-basicinfo__form"
      :model="info.form"
      label-width="80px"
      label-position="left">
      <el-form-item label="社团名称">
        <el-input
          v-model="info.form.name"
          placeholder="请输入社团名称">
        </el-input>
      </el-form-item>
      <el-form-item label="社团类型">
        <el-select
          class="s-select__form"
          v-model="info.form.type"
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
          v-model="info.form.level"
          placeholder="请选择社团级别">
          <el-option
            v-for="(level, index) in clubLevel"
            :key="index"
            :label="level.label"
            :value="level.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="社团规模">
        <el-input
          v-model="info.form.scale"
          disabled
          placeholder="请输入社团规模">
        </el-input>
      </el-form-item>
      <el-form-item label="社团简介">
        <el-input
          v-model="info.form.introduction"
          type="textarea"
          :autosize="{ minRows: 2 }"
          placeholder="请输入社团简介...">
        </el-input>
      </el-form-item>
      <el-form-item label="社团公告">
        <el-input
          v-model="info.form.announcement"
          type="textarea"
          :autosize="{ minRows: 2 }"
          placeholder="请输入社团公告...">
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">保 存</el-button>
      </el-form-item>
    </el-form>
    <div class="s-basicinfo__logo">
      <div class="s-basicinfo__logo--image"></div>
      <div class="s-basicinfo__logo--button" @click.stop="uploadImage">上传图片</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Basicinfo',
  computed: {
    ...mapGetters({
      clubType: 'clubType',
      clubLevel: 'clubLevel',
      info: 'viewsManageclubBasicinfo/info'
    })
  },
  methods: {
    ...mapActions({
      updateBasicinfo: 'viewsManageclubBasicinfo/updateBasicinfo'
    }),

    /**
     * 打开上传头像弹框
     */
    uploadImage () {
      let self = this
      self.updateBasicinfo({
        isUploadShow: true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-basicinfo {
    width: 100%;
    &__form {
      float: left;
    }
    &__logo {
      float: left;
      height: 300px;
      margin-left: 200px;
      width: 200px;
      &--button {
        border: 1px solid $col-button-border;
        border-radius: 4px;
        cursor: pointer;
        color: $col-deepest-gray;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100%;
        &:hover {
          border-color: $col-normal-blue;
          color: $col-dark-blue
        }
      }
      &--image {
        background: #eee;
        border: 1px solid $col-border;
        height: 200px;
        margin-bottom: 20px;
        width: 100%;
      }
    }
  }
</style>
