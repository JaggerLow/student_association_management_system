<template>
  <div>
    <div class="s-box__context">
      <div class="s-box__header">
        我的社团
        <el-button class="s-myclub__header--button" type="primary" @click.stop="openNewClub">创建社团</el-button>
      </div>
      <div class="s-myclub__main">
        <div
          v-for="(club, index) in myclub.list"
          class="s-myclub__main--card"
          :key="index">
          <div
            class="s-myclub__main--logo"
            @click.stop="linkToClub">
          </div>
          <div class="s-myclub__main--info">
            <div class="s-myclub__main--name">
              <span @click.stop="linkToClub">{{ club.name }}</span>
            </div>
            <div class="s-myclub__main--introduction">
              {{ club.introduction }}
            </div>
          </div>
          <div class="s-myclub__main--operate">
            <div class="s-myclub__main--button button-bgcolor__normal" @click.stop="openLeaveClub(club.clubId, club.premit)">退出社团</div>
            <div class="s-myclub__main--button button-bgcolor__normal" @click.stop="linkToManageclub">管理社团</div>
            <div class="s-myclub__main--button button-bgcolor__red" @click.stop="openDissolveClub(club.clubId)">解散社团</div>
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
      :clubId="myclub.leaveWindow.clubId"
      @close="closeLeaveClub">
    </s-dialog-deletewarning>
    <s-dialog-deletewarning
      v-if="myclub.dissolveWindow.isShow"
      :title="'解散社团'"
      :text="'您确定要解散社团么？'"
      :deletetype="1"
      :clubId="myclub.dissolveWindow.clubId"
      @close="closeDissolveClub">
    </s-dialog-deletewarning>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Myclub',
  computed: {
    ...mapGetters({
      myclub: 'viewsMyclub/myclub'
    })
  },
  methods: {
    ...mapActions({
      updateNewclubWindow: 'viewsMyclubNewclub/updateNewclubWindow',
      updateMyclub: 'viewsMyclub/updateMyclub'
    }),

    /**
     * 打开退出社团弹框
     */
    openLeaveClub (id, premit) {
      let self = this
      if (premit === '1') {
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
      console.log(val)
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
    linkToManageclub () {
      let self = this
      self.$router.push('/manageclub')
    }
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
    &__main {
      cursor: default;
      margin: 20px 0;
      min-height: 600px;
      &--button {
        border-radius: 4px;
        color: $col-white;
        cursor: pointer;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        margin: 10px auto;
        text-align: center;
        width: 100px;
      }
      &--card {
        border: 1px solid $col-border;
        border-radius: 4px;
        height: 150px;
        margin-bottom: 10px;
        padding: 10px 25px;
        width: 100%;
      }
      &--info {
        float: left;
        height: 100%;
        margin-left: 30px;
        width: 800px;
      }
      &--introduction {
        color: $col-deeper-gray;
        font-size: 16px;
        height: 100px;
        line-height: 30px;
        word-break: break-all;
        width: 100%;
      }
      &--logo {
        background: #999;
        cursor: pointer;
        float: left;
        height: 100%;
        width: 130px;
      }
      &--name {
        color: $col-deep-black;
        font-size: 22px;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        span {
          cursor: pointer;
          &:hover {
            color: $col-dark-blue;
          }
        }
      }
      &--operate {
        float: left;
        margin-left: 10px;
        height: 100%;
        width: 170px;
      }
    }
  }
</style>
