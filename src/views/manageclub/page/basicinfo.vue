<template>
  <div class="s-basicinfo">
    <el-form
      ref="form"
      class="s-form"
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
          placeholder="请输入社团简介...">
        </el-input>
      </el-form-item>
      <el-form-item label="社团公告">
        <el-input
          v-model="info.form.announcement"
          type="textarea"
          placeholder="请输入社团公告...">
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
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-basicinfo {
    width: 100%;
    &__form {
      width: 400px;
    }
  }
</style>
