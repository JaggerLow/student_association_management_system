<template>
  <div class="s-box__context">
    <div class="s-box__header">
      个人信息
    </div>
    <el-form
      ref="form"
      class="s-info__form"
      :model="form"
      label-width="80px"
      label-position="left"
      style="margin-top: 30px;">
      <el-form-item label="用户名">
        <el-input
          v-model="form.name"
          placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input
          v-model="form.actualName"
          placeholder="请输入真实姓名">
        </el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.gender" label="0">男</el-radio>
        <el-radio v-model="form.gender" label="1">女</el-radio>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="请选择出生日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input
          v-model="form.nativePlace"
          placeholder="请输入籍贯">
        </el-input>
      </el-form-item>
      <el-form-item label="系别">
        <el-input
          v-model="form.department"
          placeholder="请输入系别">
        </el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input
          v-model="form.profession"
          placeholder="请输入专业">
        </el-input>
      </el-form-item>
      <el-form-item label="班级">
        <el-input
          v-model="form.class"
          placeholder="请输入班级">
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="form.email"
          disabled
          placeholder="请输入邮箱">
        </el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input
          v-model="form.phone"
          placeholder="请输入电话">
        </el-input>
      </el-form-item>
      <el-form-item label="入学年份">
        <el-date-picker
          v-model="form.startYear"
          type="year"
          placeholder="请选择入学年份">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Q Q">
        <el-input
          v-model="form.qq"
          placeholder="请输入QQ号">
        </el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input
          v-model="form.weixin"
          placeholder="请输入微信号">
        </el-input>
      </el-form-item>
      <el-form-item label="爱好">
        <el-input
          v-model="form.hobbies"
          placeholder="请输入爱好">
        </el-input>
      </el-form-item>
      <el-form-item label="自我介绍">
        <el-input
          v-model="form.selIntroduction"
          type="textarea"
          placeholder="请简单的自我介绍...">
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">保 存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Info',
  computed: {
    ...mapGetters({
      form: 'viewsInfo/form'
    })
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-info {
    &__form {
      margin-bottom: 30px;
      width: 400px;
    }
  }
</style>
