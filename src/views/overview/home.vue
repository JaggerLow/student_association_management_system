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
                @mouseover="changeShow(1)"
                @mouseout="startRoll"
                class="s-home__news--item">
                <div class="s-home__news--title">
                  <span class="s-home__news--titletext">
                    SAMS学生社团管理系统上线啦！！
                  </span>
                  <span>2017-11-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    第十届社团文化节：交织社团情，幻化青春梦！
                  </span>
                  <span>2018-03-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    高校联盟，携手护肝
                  </span>
                  <span>2018-03-20</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    社团招新季来了，你们准备好了么！！
                  </span>
                  <span>2018-03-09</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    春暖花开日，温情社工周
                  </span>
                  <span>2018-03-08</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    新学期，新征程，新挑战！
                  </span>
                  <span>2018-03-07</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    做最开放自由的的系统，办最和谐有趣的社团。
                  </span>
                  <span>2017-11-28</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    加入学生社团，充实校园生活。
                  </span>
                  <span>2017-11-28</span>
                </div>
              </div>
              <div
                v-show="showPage === 2"
                @mouseover="changeShow(2)"
                @mouseout="startRoll"
                class="s-home__news--item">
                <div class="s-home__news--title">
                  <span class="s-home__news--titletext">
                    修复头像上传问题
                  </span>
                  <span>2018-03-25</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    对部分系统bug的修改
                  </span>
                  <span>2018-03-09</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    学生社团管理系统基本框架已完成
                  </span>
                  <span>2018-03-09</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    系统各接口联调均已完成
                  </span>
                  <span>2018-03-07</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    忘记密码功能以上线
                  </span>
                  <span>2018-03-06</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    确定系统产品logo
                  </span>
                  <span>2018-03-05</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    个人信息编辑接口联调
                  </span>
                  <span>2018-03-05</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    登录注册板块已完成
                  </span>
                  <span>2018-03-04</span>
                </div>
              </div>
              <div
                v-show="showPage === 3"
                @mouseover="changeShow(3)"
                @mouseout="startRoll"
                class="s-home__news--item">
                <div class="s-home__news--title">
                  <span class="s-home__news--titletext">
                    【十万奖金】“梦娃”故事征文、形象设计大赛
                  </span>
                  <span>2018-03-18</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    2018年第二届全国大学生预防艾滋病知识竞赛
                  </span>
                  <span>2018-03-15</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    “我为校园添光彩”团组织
                  </span>
                  <span>2017-12-06</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    “大学有我，共铸辉煌”团组织
                  </span>
                  <span>2017-12-04</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    “梦想与现实”学习交流会
                  </span>
                  <span>2017-12-03</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    大学生8人制足球联赛
                  </span>
                  <span>2017-12-02</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    五子棋挑战赛
                  </span>
                  <span>2017-12-01</span>
                </div>
                <div class="s-home__news--normaltitle">
                  <span class="s-home__news--normaltext">
                    三对三篮球赛
                  </span>
                  <span>2017-11-30</span>
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
