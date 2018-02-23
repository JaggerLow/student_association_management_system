<template>
  <div class="s-box__manage">
    <div class="s-box__manage--header">
      <span class="s-box__manage--title">活动列表</span>
      <el-button
        class="s-box__manage--button"
        type="primary"
        size="small"
        @click.stop="linkToNewactivity">
        创建活动
      </el-button>
    </div>
    <el-table
      :data="activity.table"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="活动名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="startDate"
        label="开始时间"
        width="140">
      </el-table-column>
      <el-table-column
        prop="endDate"
        label="结束时间"
        width="140">
      </el-table-column>
      <el-table-column
        prop="place"
        label="地点"
        width="400">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <div class="s-table__operate">
            <div>
              <span class="s-table__operate--delete">删除活动</span>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <s-pagefooter
      v-if="activity.count > 1"
      v-model="activity.search.page"
      :count="activity.count"
      @changePage="changePage">
    </s-pagefooter>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Activity',
  computed: {
    ...mapGetters({
      activity: 'viewsManageclubActivity/activity'
    })
  },
  methods: {
    ...mapActions({
    }),

    /**
     * 翻页触发事件
     */
    changePage (val) {
      console.log(val)
    },

    /**
     * 跳转创建活动
     */
    linkToNewactivity () {
      let self = this
      self.$router.push('/manageclub/newactivity')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-activity {
    width: 100%;
    &__button {
      float: right;
      margin-top: 5px;
      margin-right: 10px;
    }
  }
</style>
