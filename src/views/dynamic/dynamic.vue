<template>
  <div class="s-dynamic">
    <div class="s-dynamic__news">
      <div class="s-dynamic__box">
        <el-carousel height="640px">
          <el-carousel-item>
            <img src="../../assets/qingjingju.jpg" alt="公告图片">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/huihua.jpg" alt="公告图片">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/manhua.jpg" alt="公告图片">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="s-dynamic__list">
      <div class="s-box__context s-dynamic__box">
        <div class="s-box__header">
          社团列表
          <div class="s-box__header--sort">
            <div>
              <span
                :class="[dynamic.clubSearch.sort === '' ? 's-box__header--focus' : '']"
                @click.stop="changeClubSort('')">
                社团级别
              </span>
            </div>
            <div>
              <span
                :class="[dynamic.clubSearch.sort === '1' ? 's-box__header--focus' : '']"
                @click.stop="changeClubSort('1')">
                创建时间
              </span>
            </div>
            <div>
              <span
                :class="[dynamic.clubSearch.sort === '2' ? 's-box__header--focus' : '']"
                @click.stop="changeClubSort('2')">
                社团人数
              </span>
            </div>
          </div>
        </div>
        <div
          v-loading="dynamic.loading"
          class="s-dynamic__main">
          <div
            v-for="(club, index) in dynamic.clubList"
            class="s-box__club--card"
            @click.stop="linkToClub(club.clubId)"
            :key="index">
            <div
              class="s-box__club--logo">
              <img
                v-if="[null, ''].indexOf(club.logo) > -1"
                src="../../assets/default_club.jpg">
              <img
                v-else
                :src="club.logo">
            </div>
            <div class="s-box__club--info">
              <div class="s-box__club--name">
                <span>{{ club.name }}</span>
              </div>
              <div class="s-box__club--introduction">
                {{ club.introduction }}
              </div>
            </div>
            <div class="s-box__club--operate s-box__club--data">
              <div>创建时间：{{ club.createDate }}</div>
              <div>社团级别：{{ clubLevel[club.level].label }}</div>
              <div>社团人数：{{ club.scale }} 人</div>
            </div>
          </div>
          <s-pagefooter
            v-if="dynamic.clubCount > 1"
            v-model="dynamic.clubSearch.page"
            :count="dynamic.clubCount"
            @changePage="changePage">
          </s-pagefooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Dynamic',
  computed: {
    ...mapGetters({
      clubLevel: 'clubLevel',
      dynamic: 'viewsDynamic/dynamic'
    })
  },
  methods: {
    ...mapActions({
      updataDynamic: 'viewsDynamic/updataDynamic',
      updateClubSearch: 'viewsDynamic/updateClubSearch',
      getClubList: 'viewsDynamic/getClubList'
    }),

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updataDynamic({
        loading: false,
        clubSearch: {
          page: 1,
          sort: ''
        },
        clubList: [],
        clubCount: 1
      })
    },

    /**
     * 修改社团列表排序
     */
    changeClubSort (sort) {
      let self = this
      if (self.dynamic.clubSearch.sort !== sort) {
        self.updateClubSearch({
          sort: sort
        })
        self.getClubList()
      }
    },

    /**
     * 跳转社团首页
     */
    linkToClub (id) {
      let self = this
      self.$router.push(`/club?id=${id}`)
    },

    /**
     * 翻页触发事件
     */
    changePage (val) {
      let self = this
      self.updateClubSearch({
        page: val
      })
      self.getClubList()
    }
  },
  mounted () {
    let self = this
    self.getClubList()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';

  .s-dynamic {
    &__box {
      margin: 0 auto;
      width: 1200px;
      img {
        display: block;
        height: 640px;
        width: 1200px;
      }
    }
    &__news {
      background: $col-lighter-blue;
      min-height: 400px;
      min-width: 1200px;
    }
    &__list {
      min-height: 500px;
      min-width: 1200px;
    }
    &__box {
      min-height: 500px;
    }
    &__main {
      cursor: default;
    }
  }
</style>
