<template>
  <div class="s-header">
    <div class="s-header__main">
      <div class="s-header__main--box">
        <div style="height: 100%; width: 100%; background: #ddd;"></div>
      </div>
      <ul class="s-header__main--nav">
        <li
          v-for="(nav, index) in headerNav"
          :key="index">
          <span>{{ nav.name }}</span>
          <div class="s-header__main--navline" :class="[nav.focus? 's-header__main--navbottom' : '']"></div>
        </li>
      </ul>
      <div class="s-header__main--box" style="float: right;">
        <div class="s-header__main--icon"></div>
        <div class="s-header__main--info">
          <div>
            <span>登陆</span> / <span>注册</span>
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
      setHeaderNav: 'setHeaderNav'
    })
  },
  async mounted () {
    let self = this
    let nowPath = self.$route.path
    nowPath = nowPath.split('/')
    nowPath = nowPath[1]
    self.setHeaderNav(nowPath)
  }
}
</script>
