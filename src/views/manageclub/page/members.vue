<template>
  <div>
    <div class="s-box__manage">
      <div class="s-box__manage--header">
        <el-select
          class="s-select__search"
          v-model="members.search.clubDepartment"
          size="small"
          @change="searchTable"
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
          @change="searchTable"
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
          v-model="members.search.keyword"
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
          prop="actualName"
          label="姓名"
          width="88">
        </el-table-column>
        <el-table-column
          prop="clubDepartmentName"
          label="部门"
          width="120">
        </el-table-column>
        <el-table-column
          prop="positionName"
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
          <template slot-scope="scope">
            <div class="s-table__operate">
              <div>
                <span
                  v-if="mamageclub.premit === 1 || mamageclub.premit !== scope.row.permit || scope.row.userId === userInfo.userId"
                  class="s-table__operate--default" @click.stop="openClubDepart(scope.row)">部门
                </span>
                <span
                  v-else>
                  部门
                </span>
              </div>
              <div>
                <span
                  v-if="mamageclub.premit === 1 || mamageclub.premit !== scope.row.permit || scope.row.userId === userInfo.userId"
                  class="s-table__operate--default" @click.stop="openClubPosition(scope.row)">
                  职位
                </span>
                <span
                  v-else>
                  职位
                </span>
              </div>
              <div>
                <span
                  v-if="mamageclub.premit === 1 && scope.row.permit !== 1"
                  class="s-table__operate--default" @click.stop="openClubPermit(scope.row)">
                  权限
                </span>
                <span
                  v-else>
                  权限
                </span>
              </div>
              <div>
                <span
                  v-if="(mamageclub.premit === 1 || mamageclub.premit !== scope.row.permit) && scope.row.userId !== userInfo.userId && scope.row.permit !== 1"
                  class="s-table__operate--delete" @click.stop="openDeleteMember(scope.row)">
                  删除
                </span>
                <span
                  v-else>
                  删除
                </span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <s-pagefooter
        v-if="members.count > 1"
        v-model="members.search.page"
        :count="members.count"
        @changePage="changePage">
      </s-pagefooter>
    </div>
    <s-dialog-deletewarning
      v-if="members.deleteMember.isShow"
      :title="'删除成员'"
      :text="'您确定要删除该成员么？'"
      :action="'/deal/club/deleteMember.do'"
      :deletetype="2"
      :clubId="members.deleteMember.clubId"
      :id="members.deleteMember.userId"
      @close="closeDeleteMember"
      @refresh="getMemberList">
    </s-dialog-deletewarning>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'Members',
  computed: {
    ...mapGetters({
      userInfo: 'userInfo',
      members: 'viewsManageclubMembers/members',
      mamageclub: 'viewsManageclub/mamageclub'
    })
  },
  methods: {
    ...mapActions({
      updateMembers: 'viewsManageclubMembers/updateMembers',
      getMemberList: 'viewsManageclubMembers/getMemberList',
      getClubDepart: 'viewsManageclubMembers/getClubDepart',
      getPosition: 'viewsManageclubMembers/getPosition'
    }),

    /**
     * 初始化页面数据
     */
    initData () {
      let self = this
      self.updateMembers({
        clubId: '',
        search: {
          clubDepartment: '',
          position: '',
          keyword: '',
          page: 1
        },
        count: 1,
        table: [],
        clubDepartmentList: [],
        positionList: [],
        isClubdepartShow: false,
        memberId: '',
        clubdepartForm: {
          id: ''
        },
        isPositionShow: false,
        positionForm: {
          id: ''
        },
        isPermitShow: false,
        permitForm: {
          permit: ''
        },
        deleteMember: {
          isShow: false,
          clubId: '',
          userId: ''
        }
      })
    },

    /**
     * 打开删除成员弹框
     */
    openDeleteMember (row) {
      let self = this
      self.updateMembers({
        deleteMember: {
          isShow: true,
          clubId: self.members.clubId,
          userId: row.userId
        }
      })
    },

    /**
     * 关闭删除成员弹框
     */
    closeDeleteMember () {
      let self = this
      self.updateMembers({
        deleteMember: {
          isShow: false,
          clubId: '',
          userId: ''
        }
      })
    },

    /**
     * 打开分配部门弹框
     */
    openClubDepart (row) {
      let self = this
      self.updateMembers({
        isClubdepartShow: true,
        memberId: row.userId,
        clubdepartForm: {
          id: String(row.clubDepartment)
        }
      })
    },

    /**
     * 打开分配职位弹框
     */
    openClubPosition (row) {
      let self = this
      self.updateMembers({
        isPositionShow: true,
        memberId: row.userId,
        positionForm: {
          id: String(row.position)
        }
      })
    },

    /**
     * 打开权限职位弹框
     */
    openClubPermit (row) {
      let self = this
      self.updateMembers({
        isPermitShow: true,
        memberId: row.userId,
        permitForm: {
          permit: String(row.permit)
        }
      })
    },

    /**
     * 表单筛选
     */
    searchTable () {
      let self = this
      let searchData = cloneDeep(self.members.search)
      searchData.page = 1
      self.updateMembers({
        search: searchData
      })
      self.getMemberList()
    },

    /**
     * 翻页触发事件
     */
    changePage (val) {
      let self = this
      let searchData = cloneDeep(self.members.search)
      searchData.page = val
      self.updateMembers({
        search: searchData
      })
      self.getMemberList()
    }
  },
  mounted () {
    let self = this
    let clubId = Number(self.$route.query.id)
    if (clubId) {
      self.updateMembers({
        clubId: clubId
      })
      self.getClubDepart()
      self.getPosition()
      self.getMemberList()
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
