<template>
  <div>
    <div class="s-box__context">
      <div class="s-box__header">
        我的社团
        <el-button class="s-myclub__header--button" type="primary" @click.stop="openNewClub">创建社团</el-button>
      </div>
      <div
        v-loading="myclub.loading"
        class="s-myclub__main">
        <div
          v-if="myclub.list.length === 0"
          class="s-myclub__listempty">
          你没有加入任何社团，快去加入社团充实校园生活吧~~
        </div>
        <div
          v-for="(club, index) in myclub.list"
          class="s-box__club--card"
          :key="index">
          <div
            class="s-box__club--logo"
            @click.stop="linkToClub">
          </div>
          <div class="s-box__club--info">
            <div class="s-box__club--name">
              <span @click.stop="linkToClub">{{ club.name }}</span>
            </div>
            <div class="s-box__club--introduction">
              <span v-if="[null, ''].indexOf(club.introduction) > -1">该社团暂无公告~~</span>
              <span>{{ club.introduction }}</span>
            </div>
          </div>
          <div class="s-box__club--operate">
            <div
              v-if="!userInfo.isMaster"
              class="s-box__club--button button-bgcolor__normal"
              @click.stop="openLeaveClub(club.clubId, club.premit)">
              退出社团
            </div>
            <div
              v-if="[1, 2].indexOf(club.premit) > -1"
              class="s-box__club--button button-bgcolor__normal"
              @click.stop="linkToManageclub(club.clubId)">
              管理社团
            </div>
            <div
              v-if="club.premit === 1 || userInfo.isMaster"
              class="s-box__club--button button-bgcolor__red"
              @click.stop="openDissolveClub(club.clubId)">
              解散社团
            </div>
          </div>
        </div>
        <s-pagefooter
          v-if="myclub.count > 1"
          v-model="myclub.page"
          :count="myclub.count"
          @changePage="changePage">
        </s-pagefooter>
      </div>
    </div>
    <s-dialog-deletewarning
      v-if="myclub.leaveWindow.isShow"
      :title="'退出社团'"
      :text="'您确定要退出社团么？'"
      :deletetype="1"
      :action="'/deal/club/quitClub.do'"
      :clubId="myclub.leaveWindow.clubId"
      @close="closeLeaveClub"
      @refresh="getClubList">
    </s-dialog-deletewarning>
    <s-dialog-deletewarning
      v-if="myclub.dissolveWindow.isShow"
      :title="'解散社团'"
      :text="'您确定要解散社团么？'"
      :deletetype="1"
      :action="'/deal/club/delete.do'"
      :clubId="myclub.dissolveWindow.clubId"
      @close="closeDissolveClub"
      @refresh="getClubList">
    </s-dialog-deletewarning>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Myclub',
  computed: {
    ...mapGetters({
      myclub: 'viewsMyclub/myclub',
      userInfo: 'userInfo'
    })
  },
  methods: {
    ...mapActions({
      updateNewclubWindow: 'viewsMyclubNewclub/updateNewclubWindow',
      updateMyclub: 'viewsMyclub/updateMyclub',
      getClubList: 'viewsMyclub/getClubList'
    }),

    /**
     * 页面信息初始化
     */
    initData () {
      let self = this
      self.updateMyclub({
        list: [],
        page: 1,
        count: 0,
        loading: false,
        leaveWindow: {
          isShow: false,
          clubId: ''
        },
        dissolveWindow: {
          isShow: false,
          clubId: ''
        }
      })
    },

    /**
     * 打开退出社团弹框
     */
    openLeaveClub (id, premit) {
      let self = this
      if (premit === 1) {
        self.$message.error('最高管理员需要进行权限交接后才能退出社团！')
      } else {
        self.updateMyclub({
          leaveWindow: {
            isShow: true,
            clubId: id
          }
        })
      }
    },

    /**
     * 关闭退出社团弹框
     */
    closeLeaveClub () {
      let self = this
      self.updateMyclub({
        leaveWindow: {
          isShow: false,
          clubId: ''
        }
      })
    },

    /**
     * 打开解散社团弹框
     */
    openDissolveClub (id) {
      let self = this
      self.updateMyclub({
        dissolveWindow: {
          isShow: true,
          clubId: id
        }
      })
    },

    /**
     * 关闭解散社团弹框
     */
    closeDissolveClub () {
      let self = this
      self.updateMyclub({
        dissolveWindow: {
          isShow: false,
          clubId: ''
        }
      })
    },

    /**
     * 打开创建社团弹窗
     */
    openNewClub () {
      let self = this
      self.updateNewclubWindow({
        isShow: true
      })
    },

    /**
     * 翻页触发事件
     */
    changePage (val) {
      self.updateMyclub({
        page: val
      })
      self.getClubList()
    },

    /**
     * 跳转社团首页
     */
    linkToClub () {
      let self = this
      self.$router.push('/club')
    },

    /**
     * 跳转社团管理页面
     */
    linkToManageclub (id) {
      let self = this
      self.$router.push(`/manageclub?id=${id}`)
    }
  },
  mounted () {
    let self = this
    self.getClubList()
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-myclub {
    &__header {
      &--button {
        float: right;
        margin-top: 10px;
      }
    }
    &__listempty {
      color: $col-deepest-gray;
      font-size: 30px;
      height: 600px;
      line-height: 500px;
      text-align: center;
      width: 100%;
    }
    &__main {
      cursor: default;
      margin: 20px 0;
      min-height: 600px;
    }
  }
</style>
