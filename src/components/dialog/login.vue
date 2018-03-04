<template>
  <div v-if="loginWindow.isShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">登录</div>
      <div class="s-dialog__main">
        <div class="s-login__form">
          <el-input
            :class="[!loginWindow.mustProp.account ? 's-input__empty' : '']"
            @focus="clearCheck('account')"
            v-model="loginWindow.form.account"
            placeholder="邮箱">
          </el-input>
          <div v-if="!loginWindow.mustProp.account && loginWindow.form.account === ''" class="s-form__empty">请输入邮箱</div>
          <div v-if="!loginWindow.mustProp.account && loginWindow.form.account !== ''" class="s-form__empty">请输入正确邮箱</div>
          <el-input
            v-model="loginWindow.form.password"
            :class="[!loginWindow.mustProp.password ? 's-input__empty' : '']"
            @focus="clearCheck('password')"
            @keyup.native.enter="submitLogin"
            type="password"
            placeholder="密码"
            style="margin-top: 16px;">
          </el-input>
          <div v-if="!loginWindow.mustProp.password" class="s-form__empty">请输入密码</div>
          <div class="s-login__choose">
            <span @click.stop="linkToRegistered">注册账号</span>
            <span class="s-login__choose--forget">忘记密码</span>
          </div>
          <div class="s-login__bottom" @click.stop="submitLogin">登 录</div>
        </div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'SDialogLogin',
  computed: {
    ...mapGetters({
      loginWindow: 'sLogin/loginWindow'
    })
  },
  methods: {
    ...mapActions({
      updateUserInfo: 'updateUserInfo',
      updateLoginWindow: 'sLogin/updateLoginWindow'
    }),

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updateLoginWindow({
        isShow: false,
        form: {
          account: '',
          password: ''
        },
        checkProp: {
          account: true,
          password: true
        },
        packageData: {}
      })
    },

    /**
     * 清除校验结果
     */
    clearCheck (prop) {
      let self = this
      self.loginWindow.mustProp[prop] = true
    },

    /**
     * 跳转注册页面
     */
    linkToRegistered () {
      let self = this
      self.initData()
      self.$router.push('/registered')
    },

    /**
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.initData()
    },

    /**
     * 格式校验
     */
    checkFormat () {
      let self = this
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      let check = cloneDeep(self.loginWindow.mustProp)
      for (let prop in check) {
        if ([null, ''].indexOf(self.loginWindow.form[prop]) > -1) {
          check[prop] = false
        } else {
          if (prop === 'account') {
            if (!reg.test(self.loginWindow.form[prop])) {
              check[prop] = false
            } else {
              check[prop] = true
            }
          } else {
            check[prop] = true
          }
        }
      }
      self.updateLoginWindow({
        mustProp: check
      })
    },

    /**
     * 上传数据打包
     */
    packageData () {
      let self = this
      let packageData = {}
      let data = cloneDeep(self.loginWindow.form)
      for (let prop in data) {
        packageData[prop] = data[prop]
      }
      self.updateLoginWindow({
        packageData: packageData
      })
    },

    /**
     * 登陆提交
     */
    async submitLogin () {
      let self = this
      let isEmpty = false
      self.checkFormat()
      for (let item in self.loginWindow.mustProp) {
        if (!self.loginWindow.mustProp[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        self.packageData()
        let data = await self.$wPost('/login.do', self.loginWindow.packageData)
        if (data.data) {
          let userInfo = {
            username: data.data.username,
            userId: data.data.userId,
            isMaster: data.data.isMaster,
            isLogin: true
          }
          self.$message({
            message: '登陆成功！',
            type: 'success'
          })
          self.updateUserInfo(userInfo)
          self.initData()
        } else {
          self.$message.error('登录失败，账号或者密码错误！')
        }
      }
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
      span {
        cursor: pointer;
        color: $col-deeper-gray;
        &:hover {
          color: $col-dark-blue;
        }
      }
      &--forget {
        float: right;
      }
    }
    &__bottom {
      background: $col-dark-blue;
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      font-size: $font-size-h2;
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
