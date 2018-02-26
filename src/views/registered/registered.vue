<template>
  <div class="s-registered">
    <div class="s-registered__box">
      <div class="s-dialog__box--title">用户注册</div>
      <el-form
        ref="form"
        :model="registered.form"
        label-width="80px"
        label-position="left"
        style="margin-top: 30px;">
        <el-form-item label="用户名">
          <el-input
            :class="[!registered.mustProp.username ? 's-input__empty' : '']"
            v-model="registered.form.username"
            @focus="clearCheck('username')"
            placeholder="请输入用户名">
          </el-input>
          <div v-if="!registered.mustProp.username" class="s-form__empty">请填写 用户名</div>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            :class="[!registered.mustProp.email ? 's-input__empty' : '']"
            @focus="clearCheck('email')"
            v-model="registered.form.email"
            placeholder="请输入邮箱">
          </el-input>
          <div v-if="!registered.mustProp.email && registered.form.email === ''" class="s-form__empty">请填写 邮箱</div>
          <div v-if="!registered.mustProp.email && registered.form.email !== ''" class="s-form__empty">请正确填写 邮箱</div>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            :class="[!registered.mustProp.password ? 's-input__empty' : '']"
            @focus="clearCheck('password')"
            type="password"
            v-model="registered.form.password"
            placeholder="请输入密码">
          </el-input>
          <div v-if="!registered.mustProp.password" class="s-form__empty">请填写 密码</div>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            :class="[!registered.mustProp.checkpassword ? 's-input__empty' : '']"
            v-model="registered.form.checkpassword"
            type="password"
            @focus="clearCheck('checkpassword')"
            placeholder="请再次输入密码">
          </el-input>
          <div v-if="!registered.mustProp.checkpassword && registered.form.checkpassword === ''" class="s-form__empty">请填写 确认密码</div>
          <div v-if="!registered.mustProp.checkpassword && registered.form.checkpassword !== ''" class="s-form__empty">密码不一致</div>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input
            class="s-registered__code"
            @focus="clearCheck('code')"
            :class="[!registered.mustProp.code ? 's-input__empty' : '']"
            v-model="registered.form.code"
            placeholder="验证码">
          </el-input>
          <div
            class="s-registered__codebutton"
            @click.stop="getCode">
            获取验证码
          </div>
          <div v-if="!registered.mustProp.code && registered.form.code === ''" class="s-form__empty">请填写 验证码</div>
          <div v-if="!registered.mustProp.code && registered.form.code !== ''" class="s-form__empty">验证码错误</div>
        </el-form-item>
        <div class="s-registered__bottom" @click.stop="submitRegistered">注 册</div>
        <div class="s-registered__return"><span @click.stop="turnHome">返回首页</span></div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'Registered',
  computed: {
    ...mapGetters({
      registered: 'viewsRegistered/registered'
    })
  },
  methods: {
    ...mapActions({
      updateRegistered: 'viewsRegistered/updateRegistered'
    }),

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updateRegistered({
        form: {
          username: '',
          email: '',
          password: '',
          checkpassword: '',
          code: ''
        },
        mustProp: {
          username: true,
          email: true,
          password: true,
          checkpassword: true,
          code: true
        },
        packageData: {}
      })
    },

    /**
     * 清除校验结果
     */
    clearCheck (prop) {
      let self = this
      self.registered.mustProp[prop] = true
    },

    /**
     * 格式校验
     */
    async checkFormat () {
      let self = this
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      let check = cloneDeep(self.registered.mustProp)
      for (let prop in check) {
        if ([null, ''].indexOf(self.registered.form[prop]) > -1) {
          check[prop] = false
        } else {
          if (prop === 'email') {
            if (!reg.test(self.registered.form[prop])) {
              check[prop] = false
            } else {
              check[prop] = true
            }
          } else if (prop === 'checkpassword') {
            if (self.registered.form[prop] !== self.registered.form.password) {
              check[prop] = false
            } else {
              check[prop] = true
            }
          } else if (prop === 'code') {
            let data = {
              code: 200,
              data: true
            }
            if (data.data) {
              check[prop] = true
            } else {
              check[prop] = false
            }
          } else {
            check[prop] = true
          }
        }
      }
      self.updateRegistered({
        mustProp: check
      })
    },

    /**
     * 获取验证码
     */
    getCode () {
      let self = this
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if ([null, ''].indexOf(self.registered.form.email) > -1) {
        self.$message.error('请输入邮箱')
      } else if (!reg.test(self.registered.form.email)) {
        self.$message.error('请输入正确的邮箱地址')
      } else {
        console.log(1)
      }
    },

    /**
     * 上传数据打包
     */
    packageData () {
      let self = this
      let packageData = {}
      let data = cloneDeep(self.registered.form)
      for (let prop in data) {
        if (prop !== 'checkpassword') {
          packageData[prop] = data[prop]
        }
      }
      self.updateRegistered({
        packageData: packageData
      })
    },

    /**
     * 用户注册
     */
    submitRegistered () {
      let self = this
      let isEmpty = false
      self.checkFormat()
      for (let item in self.registered.mustProp) {
        if (!self.registered.mustProp[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        self.packageData()
        console.log(self.registered.packageData)
      } else {
        self.$message.error('请完善注册信息')
      }
    },

    /**
     * 跳转回首页
     */
    turnHome () {
      let self = this
      self.$router.push('/home')
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

  .s-registered {
    background: #999;
    height: 900px;
    width: 100%;
    &__bottom {
      background: $col-dark-blue;
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      font-size: $font-size-h2;
      line-height: 36px;
      height: 36px;
      text-align: center;
      width: 100%;
      &:hover {
        background: $col-normal-blue;
      }
    }
    &__box {
      background: #fff;
      border-radius: 4px;
      cursor: default;
      min-height: 410px;
      left: 50%;
      opacity: .85;
      padding: 20px 30px;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
      width: 400px;
    }
    &__code {
      float: left;
      width: 120px;
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
    &__return {
      color: $col-deeper-gray;
      font-size: 12px;
      line-height: 20px;
      margin-top: 10px;
      height: 20px;
      span {
        cursor: pointer;
        float: right;
        &:hover {
          color: $col-deepest-gray;
        }
      }
    }
  }
</style>
