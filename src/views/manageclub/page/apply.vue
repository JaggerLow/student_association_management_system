<template>
  <div class="s-box__manage">
    <div class="s-box__manage--header">
      <el-input
        class="s-input__search"
        v-model="apply.search.name"
        size="small"
        placeholder="请输入成员名称"
        @keyup.native.enter="searchTable">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click.stop="searchTable">
        </el-button>
      </el-input>
    </div>
    <el-table
      :data="apply.table"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="88">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="60">
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
        prop="weixin"
        label="微信"
        width="160">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <div class="s-table__operate">
            <div>
              <span class="s-table__operate--agree">同意</span>
            </div>
            <div>
              <span class="s-table__operate--delete">拒绝</span>
            </div>
            <div>
              <span class="s-table__operate--default">查看</span>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <s-pagefooter
      v-if="apply.count > 1"
      v-model="apply.search.page"
      :count="apply.count"
      @changePage="changePage">
    </s-pagefooter>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Apply',
  computed: {
    ...mapGetters({
      apply: 'viewsManageclubApply/apply'
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
