<template>
  <div class="s-box__manage">
    <div class="s-box__manage--header">
      <el-input
        class="s-input__search"
        v-model="apply.search.keyword"
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
      v-loading="apply.loading"
      :data="apply.table"
      style="width: 100%">
      <el-table-column
        prop="actualName"
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
              <span class="s-table__operate--agree" @click.stop="operateApply(scope.row, true)">同意</span>
            </div>
            <div>
              <span class="s-table__operate--delete" @click.stop="operateApply(scope.row, false)">拒绝</span>
            </div>
            <div>
              <span class="s-table__operate--default" @click.stop="applyDetail(scope.row)">查看</span>
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
      getUserInfo: 'sUserinfo/getUserInfo',
      updateUserinfo: 'sUserinfo/updateUserinfo',
      updateApply: 'viewsManageclubApply/updateApply',
      getApplyList: 'viewsManageclubApply/getApplyList'
    }),

    /**
     * 页面数据初始化
     */
    initData () {
      let self = this
      self.updateApply({
        clubId: '',
        loading: false,
        search: {
          keyword: '',
          page: 1
        },
        table: [],
        count: 1
      })
    },

    /**
     * 操作
     */
    async operateApply (row, operate) {
      let self = this
      let packageData = {
        clubId: self.apply.clubId,
        userId: row.userId,
        isAgree: operate
      }
      let data = await self.$wPost('/deal/clubApply/audit.do', packageData)
      if (data.data) {
        self.$message({
          message: '操作成功',
          type: 'success'
        })
        self.updateApply({
          search: {
            keyword: '',
            page: 1
          }
        })
        self.getApplyList()
      }
    },

    /**
     * 查看申请人个人信息
     */
    async applyDetail (row) {
      let self = this
      await self.getUserInfo(row.userId)
      self.updateUserinfo({
        isShow: true,
        userId: row.userId
      })
    },

    /**
     * 表单筛选
     */
    searchTable () {
      let self = this
      self.updateApply({
        search: {
          keyword: self.apply.search.keyword,
          page: 1
        }
      })
      self.getApplyList()
    },

    /**
     * 翻页触发事件
     */
    changePage (val) {
      let self = this
      self.updateApply({
        search: {
          keyword: self.apply.search.keyword,
          page: val
        }
      })
      self.getApplyList()
    }
  },
  mounted () {
    let self = this
    let clubId = Number(self.$route.query.id)
    if (clubId) {
      self.updateApply({
        clubId: clubId
      })
      self.getApplyList()
    }
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
</style>
