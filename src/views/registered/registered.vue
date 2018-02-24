<template>
  <div class="s-registered">
    <div class="s-registered__box">
      <div class="s-dialog__box--title">用户注册</div>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        label-position="left"
        style="margin-top: 30px;">
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            v-model="form.email"
            placeholder="请输入邮箱">
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="form.checkpassword"
            placeholder="请再次输入密码">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input
            class="s-registered__code"
            v-model="form.code"
            placeholder="验证码">
          </el-input>
          <div
            class="s-registered__codebutton">
            获取验证码
          </div>
        </el-form-item>
        <div class="s-registered__bottom">注 册</div>
        <div class="s-registered__return"><span @click.stop="turnHome">返回首页</span></div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Registered',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        checkpassword: '',
        code: ''
      }
    }
  },
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    ...mapActions({
      setHeaderNav: 'setHeaderNav'
    }),

    /**
     * 跳转回首页
     */
    turnHome () {
      let self = this
      self.$router.push('/home')
    }
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
