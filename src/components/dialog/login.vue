<template>
  <div v-if="loginWindow.isShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">登录</div>
      <div class="s-dialog__main">
        <div class="s-login__form">
          <el-input
            v-model="loginWindow.form.username"
            placeholder="手机 / 邮箱">
          </el-input>
          <el-input
            v-model="loginWindow.form.password"
            type="password"
            placeholder="密码"
            style="margin-top: 16px;">
          </el-input>
          <div class="s-login__choose">
            <el-checkbox v-model="loginWindow.form.remember">记住账号</el-checkbox>
            <span class="s-login__choose--forget">忘记密码</span>
          </div>
          <div class="s-login__bottom">登 录</div>
        </div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogLogin',
  computed: {
    ...mapGetters({
      loginWindow: 'sLogin/loginWindow'
    })
  },
  methods: {
    ...mapActions({
      updateLoginWindow: 'sLogin/updateLoginWindow'
    }),

    /**
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.updateLoginWindow({
        isShow: false,
        form: {
          username: '',
          password: '',
          remember: false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";

  .s-login {
    &__form {
      width: 320px;
    }
    &__choose {
      margin-top: 16px;
      width: 100%;
      &--forget {
        cursor: pointer;
        color: $col-deeper-gray;
        float: right;
        &:hover {
          color: $col-dark-blue;
        }
      }
    }
    &__bottom {
      background: $col-dark-blue;
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      font-size: 16px;
      line-height: 36px;
      margin: 16px 0;
      height: 36px;
      text-align: center;
      width: 100%;
      &:hover {
        background: $col-normal-blue;
      }
    }
  }
</style>
