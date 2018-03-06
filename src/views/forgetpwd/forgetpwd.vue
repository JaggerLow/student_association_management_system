<template>
  <div class="s-forgetpwd">
    <div class="s-box__context">
      <div class="s-forgetpwd__box">
        <div class="s-box__header" style="margin-top: 0;">
          忘记密码
        </div>
        <el-steps
          class="s-forgetpwd__steps"
          :active="forgetpwd.active"
          finish-status="success"
          align-center>
          <el-step title="填写邮箱"></el-step>
          <el-step title="修改密码"></el-step>
          <el-step title="修改成功"></el-step>
        </el-steps>
        <div
          v-if="forgetpwd.active === 0"
          class="s-forgetpwd__form">
          <el-form
            ref="emailForm"
            :model="forgetpwd.emailForm"
            label-width="80px"
            label-position="left"
            style="margin-top: 30px;">
            <el-form-item label="邮箱">
              <el-input
                :class="[!forgetpwd.checkEForm.email ? 's-input__empty' : '']"
                @focus="clearCheck('checkEForm', 'email')"
                v-model="forgetpwd.emailForm.email"
                placeholder="请输入邮箱">
              </el-input>
              <div v-if="!forgetpwd.checkEForm.email && forgetpwd.emailForm.email === ''" class="s-form__empty">请填写 邮箱</div>
              <div v-if="!forgetpwd.checkEForm.email && forgetpwd.emailForm.email !== ''" class="s-form__empty">请正确填写 邮箱</div>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input
                class="s-forgetpwd__code"
                :class="[!forgetpwd.checkEForm.code ? 's-input__empty' : '']"
                @focus="clearCheck('checkEForm', 'code')"
                v-model="forgetpwd.emailForm.code"
                placeholder="请输入验证码">
              </el-input>
              <div
                v-if="!forgetpwd.waitCode"
                class="s-forgetpwd__codebutton"
                @click.stop="getCode">
                获取验证码
              </div>
              <div
                v-if="forgetpwd.waitCode"
                class="s-forgetpwd__codebutton s-forgetpwd_waitcode">
                {{ forgetpwd.waitTime }} 获取验证码
              </div>
              <div v-if="!forgetpwd.checkEForm.code && forgetpwd.emailForm.code === ''" class="s-form__empty">请填写 验证码</div>
              <div v-if="!forgetpwd.checkEForm.code && forgetpwd.emailForm.code !== ''" class="s-form__empty">验证码错误</div>
            </el-form-item>
          </el-form>
          <div class="s-forgetpwd__button" @click.stop="firstNext">下一步</div>
        </div>
        <div
          v-if="forgetpwd.active === 1"
          class="s-forgetpwd__form">
          <el-form
            ref="emailForm"
            :model="forgetpwd.newpassword"
            label-width="80px"
            label-position="left"
            style="margin-top: 30px;">
            <el-form-item label="新密码">
              <el-input
                :class="[!forgetpwd.checkNPassword.password ? 's-input__empty' : '']"
                v-model="forgetpwd.newpassword.password"
                @focus="clearCheck('checkNPassword', 'password')"
                type="password"
                placeholder="请输入新密码">
              </el-input>
              <div v-if="!forgetpwd.checkNPassword.password" class="s-form__empty">请填写 密码</div>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input
                :class="[!forgetpwd.checkNPassword.checkpassword ? 's-input__empty' : '']"
                v-model="forgetpwd.newpassword.checkpassword"
                type="password"
                @focus="clearCheck('checkNPassword', 'checkpassword')"
                placeholder="请输入确认密码">
              </el-input>
              <div
                v-if="!forgetpwd.checkNPassword.checkpassword && forgetpwd.newpassword.checkpassword === ''"
                class="s-form__empty">
                请填写 确认密码
              </div>
              <div
                v-if="!forgetpwd.checkNPassword.checkpassword && forgetpwd.newpassword.checkpassword !== ''"
                class="s-form__empty">
                密码不一致
              </div>
            </el-form-item>
          </el-form>
          <div class="s-forgetpwd__button" @click.stop="secondNext">下一步</div>
        </div>
        <div
          v-if="forgetpwd.active === 2"
          class="s-forgetpwd__success">
          <div class="s-forgetpwd__success--tips">修改成功，返回首页登录</div>
          <div
            class="s-forgetpwd__success--button"
            @click.stop="returnHome">
            返回首页
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'Forgetpwd',
  computed: {
    ...mapGetters({
      forgetpwd: 'viewsForgetpwd/forgetpwd'
    })
  },
  methods: {
    ...mapActions({
      updateForgetpwd: 'viewsForgetpwd/updateForgetpwd'
    }),

    /**
     * 返回首页
     */
    returnHome () {
      let self = this
      self.$router.push('/home')
    },

    /**
     * 清除校验结果
     */
    clearCheck (checkArr, prop) {
      let self = this
      self.forgetpwd[checkArr][prop] = true
    },

    /**
     * 数据初始化
     */
    initData () {
      let self = this
      self.updateForgetpwd({
        active: 0,
        waitCode: false,
        waitTime: 60,
        emailForm: {
          email: '',
          code: ''
        },
        checkEForm: {
          email: true,
          code: true
        },
        newpassword: {
          password: '',
          checkpassword: ''
        },
        checkNPassword: {
          password: true,
          checkpassword: true
        }
      })
    },

    /**
     * 格式校验
     */
    async checkFormat (arr, checkarr) {
      let self = this
      let check = cloneDeep(self.forgetpwd[checkarr])
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      for (let prop in check) {
        if ([null, ''].indexOf(self.forgetpwd[arr][prop]) > -1) {
          check[prop] = false
        } else {
          if (prop === 'email') {
            if (!reg.test(self.forgetpwd[arr][prop])) {
              check[prop] = false
            } else {
              check[prop] = true
            }
          } else if (prop === 'code') {
            if (self.forgetpwd[arr].email !== '' && reg.test(self.forgetpwd[arr].email)) {
              let checkEmail = {
                email: self.forgetpwd[arr].email,
                code: self.forgetpwd[arr][prop],
                type: 2
              }
              let data = await self.$wPost('/checkCode.do', checkEmail)
              if (data.data === 1) {
                check[prop] = true
              } else {
                check[prop] = false
              }
            }
          } else if (prop === 'checkpassword') {
            if (self.forgetpwd[arr][prop] !== self.forgetpwd[arr].password) {
              check[prop] = false
            } else {
              check[prop] = true
            }
          } else {
            check[prop] = true
          }
        }
        let checkReturn = {}
        checkReturn[checkarr] = check
        self.updateForgetpwd(checkReturn)
      }
    },

    /**
     * 获取验证码时间倒数
     */
    setWaitTime () {
      let self = this
      let timer = setTimeout(() => {
        if (self.forgetpwd.waitTime === 0) {
          clearTimeout(timer)
          self.updateForgetpwd({
            waitCode: false,
            waitTime: 60
          })
        } else {
          let waitTime = cloneDeep(self.forgetpwd.waitTime)
          waitTime--
          self.updateForgetpwd({
            waitTime: waitTime
          })
          self.setWaitTime()
        }
      }, 1000)
    },

    /**
     * 获取验证码
     */
    async getCode () {
      let self = this
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if ([null, ''].indexOf(self.forgetpwd.emailForm.email) > -1) {
        self.$message.error('请输入邮箱')
      } else if (!reg.test(self.forgetpwd.emailForm.email)) {
        self.$message.error('请输入正确的邮箱地址')
      } else {
        let data = await self.$wPost('/sendResetPwdCode.do', {email: self.forgetpwd.emailForm.email})
        if (data.data) {
          self.$message({
            message: '验证码已发送，请在30分钟内进行验证！',
            type: 'success'
          })
          self.updateForgetpwd({
            waitCode: true
          })
          self.setWaitTime()
        }
      }
    },

    /**
     * 验证邮箱下一步
     */
    async firstNext () {
      let self = this
      await self.checkFormat('emailForm', 'checkEForm')
      let isEmpty = false
      for (let item in self.forgetpwd.checkEForm) {
        if (!self.forgetpwd.checkEForm[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        self.updateForgetpwd({
          active: 1
        })
      }
    },

    /**
     * 修改密码下一步
     */
    async secondNext () {
      let self = this
      self.checkFormat('newpassword', 'checkNPassword')
      let isEmpty = false
      for (let item in self.forgetpwd.checkNPassword) {
        if (!self.forgetpwd.checkNPassword[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        let packageData = {
          email: self.forgetpwd.emailForm.email,
          password: self.forgetpwd.newpassword.password,
          code: self.forgetpwd.emailForm.code
        }
        let data = await self.$wPost('/resetPwdByCode.do', packageData)
        if (data.data) {
          self.updateForgetpwd({
            active: 2
          })
        }
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-forgetpwd {
    background: #f2f2f2;
    height: 900px;
    overflow: hidden;
    width: 100%;
    &__box {
      background: #fff;
      border-radius: 4px;
      cursor: default;
      min-height: 400px;
      left: 50%;
      opacity: .85;
      padding: 20px 30px;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
      width: 900px;
    }
    &__steps {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    &__success {
      height:200px;
      width: 100%;
      &--tips {
        color: $col-dark-blue;
        font-size: 18px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        width: 100%;
      }
      &--button {
        background: $col-dark-blue;
        border-radius: 4px;
        color: $col-white;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        margin: 20px auto;
        text-align: center;
        width: 200px;
        &:hover {
          background: $col-normal-blue;
        }
      }
    }
    &__button {
      background: $col-dark-blue;
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      margin: 40px 0;
      text-align: center;
      width: 100%;
      &:hover {
        background: $col-normal-blue;
      }
    }
    &__form {
      margin: 0 auto;
      min-height: 200px;
      width: 400px;
    }
    &__code {
      float: left;
      width: 180px;
    }
    &__codebutton {
      border: 1px solid $col-border;
      border-radius: 4px;
      color: $col-deepest-gray;
      cursor: pointer;
      float: left;
      height: 40px;
      line-height: 40px;
      margin-left: 20px;
      text-align: center;
      width: 120px;
      &:hover {
        border-color: $col-dark-blue;
        color: $col-dark-blue;
      }
    }
    &__waitcode {
      cursor: default !important;
      &:hover {
        border-color: $col-border !important;
        color: $col-deepest-gray !important;
      }
    }
  }
</style>
