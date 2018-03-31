<template>
  <div class="s-header">
    <div class="s-header__main">
      <div
        class="s-header__main--box"
        @click.stop="linkTo('/home')">
        <div class="s-header__main--logo"></div>
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
      <div v-if="isShowInfo" class="s-header__main--box" style="float: right;">
        <div class="s-header__main--icon">
          <img v-if="['', null].indexOf(userInfo.image) > -1" src="../../assets/default_img.jpg" alt="默认头像">
          <img v-else :src="userInfo.image" alt="SAMS头像">
        </div>
        <div class="s-header__main--info">
          <div v-if="!userInfo.isLogin">
            <span @click.stop="login">登录</span> / <span @click.stop="linkTo('/registered')">注册</span>
          </div>
          <div v-if="userInfo.isLogin" class="s-header__operate">
            <p>{{ userInfo.username }}</p>
            <div>
              <ul>
                <li v-if="!userInfo.isMaster"><span @click.stop="linkTo('/info')">个人信息</span></li>
                <li><span @click.stop="linkTo('/myclub')">{{ userInfo.isMaster ? '社团管理' : '我的社团' }}</span></li>
                <!-- <li><span>修改密码</span></li> -->
                <li><span @click.stop="loginOut()">退出登录</span></li>
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
      headerNav: 'headerNav',
      userInfo: 'userInfo',
      isShowInfo: 'isShowInfo'
    })
  },
  methods: {
    ...mapActions({
      setHeaderNav: 'setHeaderNav',
      updateUserInfo: 'updateUserInfo',
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
    },

    /**
     * 退出登录
     */
    async loginOut () {
      let self = this
      let data = await self.$wGet('/logout.do')
      if (data.data) {
        let userInfo = {
          username: '',
          userId: '',
          image: '',
          isMaster: false,
          isLogin: false
        }
        self.updateUserInfo(userInfo)
        self.$message({
          message: '退出登录',
          type: 'success'
        })
        self.$router.push('/home')
      }
    }
  },
  async mounted () {
  }
}
</script>
