<template>
  <div v-if="userinfo.isShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">个人信息</div>
      <div class="s-dialog__main">
        <div class="s-userinfo">
          <div class="s-userinfo__basic">
            <div class="s-userinfo__left">
              <div class="s-userinfo__left--item">
                <div class="s-userinfo__left--label">用户名：</div>
                <div class="s-userinfo__left--text">{{ userinfo.form.username }}</div>
              </div>
              <div class="s-userinfo__left--item">
                <div class="s-userinfo__left--label">真实姓名：</div>
                <div class="s-userinfo__left--text">{{ userinfo.form.actualName }}</div>
              </div>
              <div class="s-userinfo__left--item">
                <div class="s-userinfo__left--label">性别：</div>
                <div class="s-userinfo__left--text">{{ userinfo.form.gender }}</div>
              </div>
              <div class="s-userinfo__left--item">
                <div class="s-userinfo__left--label">出生日期：</div>
                <div class="s-userinfo__left--text">{{ userinfo.form.birthday }}</div>
              </div>
              <div class="s-userinfo__left--item">
                <div class="s-userinfo__left--label">入学年份：</div>
                <div class="s-userinfo__left--text">{{ userinfo.form.startYear }}</div>
              </div>
            </div>
            <div class="s-userinfo__right"></div>
          </div>
          <div class="s-userinfo__info">
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">系别：</div>
              <div class="s-userinfo__info--text">{{ userinfo.form.department }}</div>
            </div>
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">专业：</div>
              <div class="s-userinfo__info--text">{{ userinfo.form.profession }}</div>
            </div>
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">班级：</div>
              <div class="s-userinfo__info--text">{{ userinfo.form.grade }}</div>
            </div>
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">电话：</div>
              <div class="s-userinfo__info--text">{{ userinfo.form.phone }}</div>
            </div>
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">Q Q：</div>
              <div class="s-userinfo__info--text">{{ userinfo.form.qq }}</div>
            </div>
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">爱好：</div>
              <div class="s-userinfo__info--text">{{ userinfo.form.hobbies }}</div>
            </div>
          </div>
          <div class="s-userinfo__info" style="margin-bottom: 10px;">
            <div class="s-userinfo__info--item">
              <div class="s-userinfo__info--label">自我介绍：</div>
              <el-scrollbar
                wrap-class="s-scrollbar__wrap"
                view-class="s-scrollbar__list"
                class="s-userinfo__info--textarea">
                {{ userinfo.form.selIntroduction }}
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogUserinfo',
  computed: {
    ...mapGetters({
      userinfo: 'sUserinfo/userinfo'
    })
  },
  methods: {
    ...mapActions({
      updateUserinfo: 'sUserinfo/updateUserinfo'
    }),

    /**
     * 关闭个人信息弹窗
     */
    closeWindow () {
      let self = this
      self.updateUserinfo({
        isShow: false,
        userId: ''
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-userinfo {
    min-height: 200px;
    overflow: hidden;
    width: 400px;
    &__basic {
      min-height: 100px;
      overflow: hidden;
      width: 100%;
    }
    &__left {
      float: left;
      min-height: 100px;
      width: 220px;
      &--item {
        line-height: 30px;
        min-height: 30px;
      }
      &--label {
        float: left;
        width: 80px;
      }
      &--text {
        float: left;
        overflow: hidden;
        width: 140px;
        word-break: break-all;
      }
    }
    &__right {
      background: #ddd;
      float: left;
      height: 150px;
      margin-left: 30px;
      width: 150px;
    }
    &__info {
      margin-top: 10px;
      max-height: 150px;
      overflow: hidden;
      width: 100%;
      &--item {
        line-height: 30px;
        min-height: 30px;
        width: 400px;
      }
      &--label {
        float: left;
        width: 80px;
      }
      &--text {
        float: left;
        overflow: hidden;
        width: 320px;
        word-break: break-all;
      }
    }
  }
</style>
