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
                v-model="forgetpwd.emailForm.email"
                placeholder="请输入邮箱">
              </el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input
                class="s-forgetpwd__code"
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
            </el-form-item>
          </el-form>
          <div class="s-forgetpwd__buttom" @click.stop="firstNext">下一步</div>
        </div>
        <div
          v-if="forgetpwd.active === 1">
          第二步
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
        }
      })
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
    firstNext () {
      let self = this
      self.updateForgetpwd({
        active: 1
      })
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
    &__buttom {
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
