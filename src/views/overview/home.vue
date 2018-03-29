<template>
  <div class="s-home">
    <div class="s-box">
      <div class="s-home__carousel">
        <div class="s-home__box">
          <el-carousel height="640px">
            <el-carousel-item>
              <img src="../../assets/zhaoxin.jpg" alt="公告图片">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/wenhuajie.jpg" alt="公告图片">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/aixinshelian.jpg" alt="公告图片">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="s-home__news">
        <div class="s-home__box">
          <div class="s-box__header">
            新闻公告
          </div>
          <div class="s-home__news--box">
            <ul class="s-home__news--leftside">
              <li
                class="s-home__news--button"
                :class="[showPage === 1 ? 's-home__showPage' : '']"
                @mouseover="changeShow(1)"
                @mouseout="startRoll">
                新闻
              </li>
              <li
                class="s-home__news--button"
                :class="[showPage === 2 ? 's-home__showPage' : '']"
                @mouseover="changeShow(2)"
                @mouseout="startRoll">
                公告
              </li>
              <li
                class="s-home__news--button"
                :class="[showPage === 3 ? 's-home__showPage' : '']"
                @mouseover="changeShow(3)"
                @mouseout="startRoll">
                活动
              </li>
            </ul>
            <div class="s-home__news--rightside">
              <div
                v-show="showPage === 1"
                class="s-home__news--item">
                <div class="s-home__news--title">
                  <span class="s-home__news--titletext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则新闻
                  </span>
                  <span>2018-03-28</span>
                </div>
              </div>
              <div
                v-show="showPage === 2"
                class="s-home__news--item">
                <div class="s-home__news--title">
                  <span class="s-home__news--titletext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则公告
                  </span>
                  <span>2018-03-28</span>
                </div>
              </div>
              <div
                v-show="showPage === 3"
                class="s-home__news--item">
                <div class="s-home__news--title">
                  <span class="s-home__news--titletext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    这是一则活动
                  </span>
                  <span>2018-03-28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="s-home__about">
        <div class="s-home__box">
          <div class="s-box__header">
            功能介绍
          </div>
          <div class="s-home__box--about">
            SAMS学生社团管理系统，以实现社区化管理为宗旨，提供严谨的社团管理服务。管理员通过卡片式社团管理，便于用户来管理自己社团事务；对于社团外部人员，开放社团风采，有助于游客更加容易了解社团内容。系统以：简约，青春的风格来设计本系统的主题样式统一改封闭式管理系统模式，对社区式管理系统模式进行尝试，使其更贴近青少年开放，张扬的个性。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      name: 5,
      showPage: 1,
      timer: ''
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    }),

    /**
     * 页面切换
     */
    changeShow (id) {
      let self = this
      self.showPage = id
      self.time = 5
      clearInterval(self.timer)
    },

    /**
     * 鼠标移开后开始
     */
    startRoll () {
      let self = this
      self.rollPage()
    },

    /**
     * 轮播新闻公告
     */
    rollPage () {
      let self = this
      self.timer = setInterval(() => {
        if (self.time > 0) {
          self.time--
        } else {
          if (self.showPage === 3) {
            self.showPage = 1
          } else {
            self.showPage++
          }
          self.time = 5
        }
      }, 1000)
    }
  },
  mounted () {
    let self = this
    self.rollPage()
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-home {
    &__box {
      margin: 0 auto;
      width: 1200px;
      img {
        display: block;
        height: 640px;
        width: 1200px;
      }
      &--about {
        align-items: center;
        display: flex;
        font-size: $font-size-h1;
        line-height: 30px;
        min-height: 150px;
        padding: 60px 70px;
        width: 100%;
      }
    }
    &__showPage {
      background: #ddd !important;
    }
    &__carousel {
      background: $col-lighter-blue;
      height: 640px;
      min-width: 1200px;
    }
    &__news {
      min-height: 400px;
      min-width: 1200px;
      &--box {
        border-radius: 4px;
        height: 390px;
        margin: 10px 0 0 0;
        width: 100%;
      }
      &--leftside {
        float: left;
        height: 100%;
        width: 250px;
        div:last-child {
          border-bottom: 0;
        }
      }
      &--rightside {
        background: $col-normal-gray;
        float: left;
        height: 100%;
        width: 950px;
      }
      &--button {
        background: $col-border;
        color: #999;
        cursor: default;
        font-size: 32px;
        height: 130px;
        line-height: 130px;
        list-style-type: none;
        text-align: center;
        width: 250px;
      }
      &--normaltitle {
        cursor: default;
        height: 40px;
        line-height: 40px;
        span {
          color: $col-normal-black;
          float: right;
          font-size: $font-size-base;
        }
      }
      &--normaltext {
        cursor: pointer !important;
        color: $col-deeper-gray !important;
        font-size: $font-size-base !important;
        float: left !important;
        &:hover {
          color: $col-deepest-gray !important;
        }
      }
      &--item {
        height: 100%;
        padding: 20px 70px;
        width: 100%;
      }
      &--title {
        border-bottom: 1px solid $col-deepest-gray;
        cursor: default;
        height: 60px;
        line-height: 60px;
        span {
          color: $col-normal-black;
          float: right;
          font-size: $font-size-h2;
        }
      }
      &--titletext {
        cursor: pointer !important;
        color: $col-deeper-gray !important;
        font-size: 24px !important;
        float: left !important;
        &:hover {
          color: $col-deepest-gray !important;
        }
      }
    }
    &__about {
      min-height: 150px;
      min-width: 1200px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 640px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
