<template>
  <div class="s-header">
    <div class="s-header__main">
      <div
        class="s-header__main--box"
        @click.stop="linkTo('/home')">
        <div style="height: 100%; width: 100%; background: #ddd;"></div>
      </div>
      <ul class="s-header__main--nav">
        <li
          v-for="(nav, index) in headerNav"
           :class="[nav.focus? 's-header__main--activecolor' : '']"
          :key="index"
          @click.stop="linkTo(nav.link)">
          <span>{{ nav.name }}</span>
          <div class="s-header__main--navline" :class="[nav.focus? 's-header__main--navbottom' : '']"></div>
        </li>
      </ul>
      <div class="s-header__main--box" style="float: right;">
        <div class="s-header__main--icon"></div>
        <div class="s-header__main--info">
          <!-- <div>
            <span @click.stop="login">登录</span> / <span @click.stop="linkTo('/registered')">注册</span>
          </div> -->
          <div class="s-header__operate">
            凉瓜牛肉饭
            <div>
              <ul>
                <li><span @click.stop="linkTo('/info')">个人信息</span></li>
                <li><span @click.stop="linkTo('/myclub')">我的社团</span></li>
                <li><span>修改密码</span></li>
                <li><span>退出</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SHeader',
  components: {
  },
  computed: {
    ...mapGetters({
      headerNav: 'headerNav'
    })
  },
  methods: {
    ...mapActions({
      setHeaderNav: 'setHeaderNav',
      updateLoginWindow: 'sLogin/updateLoginWindow'
    }),

    /**
     * 显示登录弹窗
     */
    login () {
      let self = this
      self.updateLoginWindow({
        isShow: true
      })
    },

    /**
     * 导航跳转
     */
    linkTo (url) {
      let self = this
      self.$router.push(url)
    }
  },
  async mounted () {
  }
}
</script>
