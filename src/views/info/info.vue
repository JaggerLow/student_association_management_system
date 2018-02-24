<template>
  <div>
    <div class="s-box__context">
      <div class="s-box__header">
        个人信息
      </div>
      <el-form
        ref="form"
        class="s-form s-info__form"
        :model="info.form"
        label-width="80px"
        label-position="left"
        style="margin-top: 30px;">
        <el-form-item label="用户名">
          <el-input
            v-model="info.form.name"
            placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input
            v-model="info.form.actualName"
            placeholder="请输入真实姓名">
          </el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="info.form.gender" label="0">男</el-radio>
          <el-radio v-model="info.form.gender" label="1">女</el-radio>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker
            class="s-datepicker"
            v-model="info.form.birthday"
            type="date"
            placeholder="请选择出生日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="籍贯">
          <el-input
            v-model="info.form.nativePlace"
            placeholder="请输入籍贯">
          </el-input>
        </el-form-item>
        <el-form-item label="系别">
          <el-input
            v-model="info.form.department"
            placeholder="请输入系别">
          </el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input
            v-model="info.form.profession"
            placeholder="请输入专业">
          </el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input
            v-model="info.form.grade"
            placeholder="请输入班级">
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            v-model="info.form.email"
            disabled
            placeholder="请输入邮箱">
          </el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input
            v-model="info.form.phone"
            placeholder="请输入电话">
          </el-input>
        </el-form-item>
        <el-form-item label="入学年份">
          <el-date-picker
            class="s-datepicker"
            v-model="info.form.startYear"
            type="year"
            placeholder="请选择入学年份">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Q Q">
          <el-input
            v-model="info.form.qq"
            placeholder="请输入QQ号">
          </el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input
            v-model="info.form.weixin"
            placeholder="请输入微信号">
          </el-input>
        </el-form-item>
        <el-form-item label="爱好">
          <el-input
            v-model="info.form.hobbies"
            placeholder="请输入爱好">
          </el-input>
        </el-form-item>
        <el-form-item label="自我介绍">
          <el-input
            v-model="info.form.selIntroduction"
            type="textarea"
            :autosize="{ minRows: 2 }"
            placeholder="请简单的自我介绍...">
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">保 存</el-button>
        </el-form-item>
      </el-form>
      <div class="s-info__avatar">
        <div class="s-info__avatar--image"></div>
        <div class="s-info__avatar--button" @click.stop="uploadImage">上传头像</div>
      </div>
    </div>
    <s-image-upload
      v-if="info.isUploadShow"
      v-model="info.form.image"
      @close="closeUpload">
    </s-image-upload>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Info',
  computed: {
    ...mapGetters({
      info: 'viewsInfo/info'
    })
  },
  methods: {
    ...mapActions({
      updateInfo: 'viewsInfo/updateInfo'
    }),

    /**
     * 打开上传头像弹框
     */
    uploadImage () {
      let self = this
      self.updateInfo({
        isUploadShow: true
      })
    },

    /**
     * 关闭上传组件
     */
    closeUpload (val) {
      let self = this
      self.updateInfo({
        isUploadShow: false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-info {
    &__form {
      float: left;
      margin-left: 30px;
    }
    &__avatar {
      float: left;
      height: 260px;
      margin-left: 200px;
      margin-top: 30px;
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
