<template>
  <div class="s-box__context">
    <div class="s-box__header">
      创建活动
    </div>
    <div class="s-newactivity">
      <el-form
        ref="form"
        class="s-form s-newactivity__form"
        :model="newactivity.form"
        label-width="80px"
        label-position="left"
        style="margin-top: 30px;">
        <el-form-item label="活动类型">
          <el-select
            class="s-select__form"
            v-model="newactivity.form.type"
            placeholder="请选择活动类型">
            <el-option
              v-for="(type, index) in activityType"
              :key="index"
              :label="type.label"
              :value="type.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动标题">
          <el-input
            v-model="newactivity.form.title"
            placeholder="请输入活动标题">
          </el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            class="s-short-datepicker"
            v-model="newactivity.form.startDate"
            type="date"
            placeholder="请选择开始日期">
          </el-date-picker>
          <el-select
            class="s-select__form--short"
            v-model="newactivity.form.startTime"
            placeholder="请选择活动时间">
            <el-option
              v-for="(type, index) in activityType"
              :key="index"
              :label="type.label"
              :value="type.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            class="s-short-datepicker"
            v-model="newactivity.form.endDate"
            type="date"
            placeholder="请选择结束日期">
          </el-date-picker>
          <el-select
            class="s-select__form--short"
            v-model="newactivity.form.endTime"
            placeholder="请选择活动时间">
            <el-option
              v-for="(type, index) in activityType"
              :key="index"
              :label="type.label"
              :value="type.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动地点">
          <el-input
            v-model="newactivity.form.place"
            placeholder="请输入活动地点">
          </el-input>
        </el-form-item>
        <el-form-item label="活动海报">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="举办单位">
          <el-input
            v-model="newactivity.form.club"
            placeholder="请输入举办单位"
            disabled>
          </el-input>
        </el-form-item>
        <el-form-item label="活动描述">
          <el-input
            v-model="newactivity.form.description"
            type="textarea"
            :autosize="{ minRows: 2 }"
            placeholder="请对活动进行描述...">
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">创建活动</el-button>
        </el-form-item>
      </el-form>
      <div class="s-newactivity__image">
        海报预览
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Newactivity',
  computed: {
    ...mapGetters({
      activityType: 'activityType',
      newactivity: 'viewsManageclubNewactivity/newactivity'
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
  .s-newactivity {
    min-height: 500px;
    overflow: hidden;
    width: 100%;
    &__form {
      float: left;
      margin-left: 30px;
    }
    &__image {
      background: #eee;
      float: right;
      height: 400px;
      margin-right: 200px;
      margin-top: 30px;
      width: 300px;
      z-index: 100;
    }
  }
</style>
