<template>
  <div class="s-box__manage">
    <div class="s-box__manage--header">
      <el-select
        class="s-select__search"
        v-model="members.search.clubDepartment"
        size="small"
        placeholder="请选择部门">
        <el-option
          v-for="(clubDepartment, index) in members.clubDepartmentList"
          :key="index"
          :label="clubDepartment.name"
          :value="clubDepartment.id">
        </el-option>
      </el-select>
      <el-select
        class="s-select__search"
        v-model="members.search.position"
        size="small"
        placeholder="请选择职位">
        <el-option
          v-for="(position, index) in members.positionList"
          :key="index"
          :label="position.name"
          :value="position.id">
        </el-option>
      </el-select>
      <el-input
        class="s-input__search"
        v-model="members.search.name"
        placeholder="请输入成员名称"
        size="small"
        @keyup.native.enter="searchTable">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click.stop="searchTable">
        </el-button>
      </el-input>
    </div>
    <el-table
      :data="members.table"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="88">
      </el-table-column>
      <el-table-column
        prop="clubDepartment"
        label="部门"
        width="120">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="88">
      </el-table-column>
      <el-table-column
        prop="department"
        label="系别"
        width="160"
        align="center">
      </el-table-column>
      <el-table-column
        prop="startYear"
        label="年级"
        width="88">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="160">
      </el-table-column>
      <el-table-column
        prop="qq"
        label="Q Q"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作">
      </el-table-column>
    </el-table>
    <s-pagefooter
      v-if="members.count > 1"
      v-model="members.search.page"
      :count="members.count"
      @changePage="changePage">
    </s-pagefooter>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Members',
  computed: {
    ...mapGetters({
      members: 'viewsManageclubMembers/members'
    })
  },
  methods: {
    ...mapActions({
    }),

    /**
     * 表单筛选
     */
    searchTable () {
      console.log(1)
    },

    /**
     * 翻页触发事件
     */
    changePage (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
</style>
