<template>
  <div class="s-club">
    <div class="s-box__context">
      <div class="s-club__wrap">
        <div class="s-club__topcard">
          <div class="s-club__info flex">
            <div class="s-club__header">
              <img
                v-if="[null, ''].indexOf(club.info.logo) > -1"
                src="../../assets/default_club.jpg">
              <img
                v-else
                :src="club.info.logo">
            </div>
            <div class="s-club__name">
              {{ club.info.name }}
            </div>
            <div class="s-club__num">社团号：{{ club.info.clubId }}</div>
          </div>
        </div>
        <div class="clearfix">
          <div class="s-club__content">
            <div class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团公告
              </div>
              <div class="s-club__announcement">
                <div
                  v-if="[null, ''].indexOf(club.info.announcement) > -1"
                  class="s-club__announcement--empty">
                  暂无公告
                </div>
                <span>{{ club.info.announcement }}</span>
              </div>
            </div>
            <div class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团活动
              </div>
              <div class="s-club__activity">
                <div
                  v-if="club.info.activityList.length === 0"
                  class="s-club__activity--empty">
                  暂无活动
                </div>
                <div
                  v-for="(activity, index) in club.info.activityList"
                  class="s-club__activity--card"
                  :key="index">
                  <div class="s-club__activity--poster">
                    <div
                      v-if="[null, ''].indexOf(activity.poster) > -1"
                      class="s-club__activity--posterempty">
                      无活动图片
                    </div>
                    <img
                      v-if="[null, ''].indexOf(activity.poster) === -1"
                      :src="activity.poster"
                      alt="活动图片">
                  </div>
                  <div class="s-club__activity--info">
                    <div class="s-club__activity--title">{{ activity.title }}</div>
                    <div class="s-club__activity--item">
                      <div class="s-club__activity--label">活动类型：</div>
                      <div class="s-club__activity--text">{{ activityType[activity.type - 1].label }}</div>
                    </div>
                    <div class="s-club__activity--item">
                      <div class="s-club__activity--label">开始时间：</div>
                      <div class="s-club__activity--text">{{ activity.startDate }}</div>
                    </div>
                    <div class="s-club__activity--item">
                      <div class="s-club__activity--label">结束时间：</div>
                      <div class="s-club__activity--text">{{ activity.endDate }}</div>
                    </div>
                    <div class="s-club__activity--item">
                      <div class="s-club__activity--label">活动地点：</div>
                      <div class="s-club__activity--text">{{ activity.place }}</div>
                    </div>
                    <div class="s-club__activity--item">
                      <div class="s-club__activity--label">活动描述：</div>
                      <div class="s-club__activity--text">{{ activity.description }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="s-club__sidebar">
            <div class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团资料
                <el-button
                  v-if="!club.info.isMember && !userInfo.isMaster && userInfo.isLogin"
                  class="s-club__button"
                  type="primary"
                  size="mini"
                  @click.stop="applyJoin">
                  申请加入
                </el-button>
              </div>
              <div class="s-club__article">
                <div class="s-club__article--prop">
                  <span>社团级别：</span><p v-if="club.info.level !== ''">{{ clubLevel[club.info.level].label }}</p>
                </div>
                <div class="s-club__article--prop">
                  <span>社团类型：</span><p v-if="club.info.type !== ''">{{ clubType[club.info.type].label }}</p>
                </div>
                <div class="s-club__article--prop">
                  <span>社团介绍：</span><p class="s-club__article--introduction">{{ club.info.introduction }}</p>
                </div>
              </div>
            </div>
            <div class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团相册
                <span
                  v-if="club.info.albumList.length !== 0"
                  class="s-club__more">
                  更多图片
                </span>
              </div>
              <div class="s-club__article">
                <div
                  v-if="club.info.albumList.length === 0"
                  class="s-club__article--empty">
                  暂无图片
                </div>
                <div
                  v-for="(img, index) in club.info.albumList"
                  class="s-club__article--img"
                  :key="index">
                  <img :src="img.url" alt="社团相册">
                </div>
              </div>
            </div>
            <div
              v-if="club.info.isMember || userInfo.isMaster"
              class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团成员
              </div>
              <div class="s-club__article">
                <div
                  v-for="(member, index) in club.info.memberList"
                  class="s-club__article--membercard"
                  :key="index">
                  <div class="s-club__article--memberimg">
                    <img v-if="['', null].indexOf(member.image) > -1" src="../../assets/default_img.jpg">
                    <img v-else :src="member.image">
                  </div>
                  <div class="s-club__article--username" @click.stop="memberDetail(member)">
                    <span>{{ member.username }}</span>
                  </div>
                </div>
              </div>
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
  name: 'Club',
  computed: {
    ...mapGetters({
      activityType: 'activityType',
      userInfo: 'userInfo',
      clubType: 'clubType',
      clubLevel: 'clubLevel',
      club: 'viewsClub/club'
    })
  },
  methods: {
    ...mapActions({
      getUserInfo: 'sUserinfo/getUserInfo',
      updateUserinfo: 'sUserinfo/updateUserinfo',
      updateClub: 'viewsClub/updateClub',
      getClub: 'viewsClub/getClub'
    }),

    /**
     * 页面初始化
     */
    initData () {
      let self = this
      self.updateClub({
        clubId: '',
        info: {
          name: '',
          clubId: '',
          type: '',
          level: '',
          introduction: '',
          announcement: '',
          logo: '',
          isMember: false,
          activityList: [],
          albumList: [],
          memberList: []
        }
      })
    },

    /**
     * 申请加入社团
     */
    async applyJoin () {
      let self = this
      let data = await self.$wPost('/deal/clubApply/apply.do', {
        clubId: self.club.clubId
      })
      if (data.data) {
        self.$message({
          message: '申请已提交，请等待社团管理员审批',
          type: 'success'
        })
      }
    },

    /**
     * 查看申请人个人信息
     */
    async memberDetail (row) {
      let self = this
      await self.getUserInfo(row.userId)
      self.updateUserinfo({
        isShow: true,
        userId: row.userId
      })
    }
  },
  mounted () {
    let self = this
    let clubId = Number(self.$route.query.id)
    if (clubId) {
      self.updateClub({
        clubId: clubId
      })
      self.getClub()
    } else {
      self.$message.error('无效访问方式！')
      self.$router.push('/dynamic')
    }
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-club {
    background: $col-background;
    overflow: hidden;
    min-width: 1200px;
    &__article, &__activity, &__announcement {
      color: $col-normal-black;
      font-size: $font-size-base;
      overflow: hidden;
    }
    &__announcement {
      padding: 10px 20px;
      min-height: 150px;
      word-break: break-all;
      &--empty {
        color: $col-deepest-gray;
        font-size: 25px;
        height: 150px;
        line-height: 150px;
        text-align: center;
        width: 100%;
      }
    }
    &__article {
      padding: 10px 20px;
      min-height: 100px;
      word-break: break-all;
      &--empty {
        color: $col-deepest-gray;
        font-size: 25px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        width: 100%;
      }
      &--prop {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        width: 100%;
        span {
          color: $col-deep-black;
          float: left;
        }
        p {
          float: left;
          min-height: 30px;
          line-height: 30px;
          margin-left: 20px;
          max-width: 270px;
          word-break: break-all;
        }
      }
      &--img {
        float: left;
        background: $col-light-gray;
        height: 110px;
        margin: 5px 9px;
        position: relative;
        width: 110px;
        img {
          max-height: 110px;
          left: 50%;
          position: absolute;
          max-width: 110px;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 50;
        }
      }
      &--membercard {
        float: left;
        height: 110px;
        margin: 5px 9px;
        width: 110px;
      }
      &--memberimg {
        background: #ddd;
        border-radius: 50%;
        height: 80px;
        margin: 0 auto;
        overflow: hidden;
        width: 80px;
        img {
          display: block;
          height: 80px;
          width: 80px;
        }
      }
      &--username {
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        padding: 0 10px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        span {
          cursor: pointer;
          color: $col-deepest-gray;
          &:hover {
            color: $col-dark-blue;
          }
        }
      }
    }
    &__activity {
      padding: 20px;
      min-height: 400px;
      word-break: break-all;
      &--card {
        border: 1px solid $col-border;
        border-radius: 4px;
        min-height: 200px;
        overflow: hidden;
        padding: 10px 20px;
        width: 100%;
      }
      &--empty {
        color: $col-deepest-gray;
        font-size: 25px;
        height: 400px;
        line-height: 400px;
        text-align: center;
        width: 100%;
      }
      &--info {
        float: left;
        min-height: 200px;
        margin-left: 20px;
        width: 406px;
      }
      &--poster {
        background: $col-light-gray;
        float: left;
        height: 200px;
        position: relative;
        width: 150px;
        img {
          left: 50%;
          max-height: 200px;
          max-width: 150px;
          position: absolute;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
      &--posterempty {
        color: $col-deepest-gray;
        font-size: 20px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        width: 100%;
      }
      &--title {
        border-bottom: 1px solid $col-border;
        color: $col-dark-blue;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
      }
      &--item {
        min-height: 30px;
        line-height: 30px;
        overflow: hidden;
      }
      &--label {
        float: left;
        width: 80px;
      }
      &--text {
        float: left;
        min-height: 30px;
        width: 326px;
        word-break: break-all;
      }
    }
    &__button {
      float: right;
      margin-top: 11px;
    }
    &__content {
      float: left;
      width: 660px;
    }
    &__topcard {
      padding: 0 50px;
    }
    &__info {
      background: url('../../assets/club_bg.jpg');
      border: 1px solid $col-border;
      border-radius: 4px;
      box-shadow: 0 1px 3px #ccc;
      margin-bottom: 10px;
      text-align: center;
      width: 100%;
    }
    &__item {
      background: $col-white;
      border: 1px solid $col-border;
      border-radius: 4px;
      box-shadow: 0 1px 3px #ccc;
      margin-bottom: 10px;
      min-height: 100px;
      width: 100%;
    }
    &__header {
      margin-top: 20px;
      overflow: hidden;
      img {
        border: 4px solid $col-border;
        border-radius: 100%;
        display: block;
        height: 120px;
        margin: 0 auto;
        -moz-border-radius: 100%;
        width: 120px;
        -webkit-border-radius: 100%;
      }
    }
    &__name {
      color: $col-deeper-gray;
      font-size: $font-size-h1;
      margin-top: 12px;
      text-align: center;
    }
    &__more {
      color: $col-deepest-gray;
      cursor: pointer;
      float: right;
      font-size: $font-size-secondary;
      &:hover {
        color: $col-dark-blue;
      }
    }
    &__num {
      color: $col-light-black;
      font-size: $font-size-base;
      line-height: 1;
      margin-top: 12px;
      margin-bottom: 20px;
      text-align: center;
    }
    &__span {
      background: $col-dark-blue;
      display: block;
      height: 20px;
      left: -20px;
      margin-top: -10px;
      top: 50%;
      position: absolute;
      width: 4px;
    }
    &__sidebar {
      float: right;
      width: 430px;
    }
    &__title {
      border-bottom: 1px solid $col-border;
      color: $col-dark-blue;
      font-size: $font-size-h2;
      height: 49px;
      line-height: 49px;
      margin: 0 20px;
      position: relative;
    }
    &__wrap {
      border: {
        color: #d3d3d3;
      }
      cursor: default;
      margin: 30px 0;
      min-height: 900px;
    }
  }
  .clearfix {
    cursor: default;
    overflow: auto;
    padding: 0 50px;
    width: 100%;
    zoom: 1;
  }
  .flex {
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
