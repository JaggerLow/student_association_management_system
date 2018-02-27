<template>
  <div class="s-club">
    <div class="s-box__context">
      <div class="s-club__wrap">
        <div class="s-club__topcard">
          <div class="s-club__info flex">
            <div class="s-club__header">
              <img/>
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
              <div class="s-club__announcement">{{ club.info.announcement }}</div>
            </div>
            <div class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团活动
              </div>
              <div class="s-club__activity">
                <div
                  v-for="(activity, index) in club.info.activityList"
                  class="s-club__activity--card"
                  :key="index">
                  <div class="s-club__activity--poster"></div>
                  <div class="s-club__activity--info">
                    <div class="s-club__activity--title">{{ activity.title }}</div>
                    <div class="s-club__activity--item">
                      <div class="s-club__activity--label">活动类型：</div>
                      <div class="s-club__activity--text">{{ activity.type }}</div>
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
                  v-if="!club.info.isMember"
                  class="s-club__button"
                  type="primary"
                  size="mini">
                  申请加入
                </el-button>
              </div>
              <div class="s-club__article">
                <div class="s-club__article--prop">
                  <span>社团级别：</span><p>{{ club.info.level }}</p>
                </div>
                <div class="s-club__article--prop">
                  <span>社团类型：</span><p>{{ club.info.type }}</p>
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
                <span class="s-club__more">更多图片</span>
              </div>
              <div class="s-club__article">
                <div
                  v-for="(img, index) in club.info.albumList"
                  class="s-club__article--img"
                  :key="index">
                </div>
              </div>
            </div>
            <div class="s-club__item">
              <div class="s-club__title">
                <span class="s-club__span"></span>
                社团成员
              </div>
              <div class="s-club__article">
                <div
                  v-for="(member, index) in club.info.memberList"
                  class="s-club__article--membercard"
                  :key="index">
                  <div class="s-club__article--memberimg"></div>
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
  components: {
  },
  computed: {
    ...mapGetters({
      club: 'viewsClub/club'
    })
  },
  methods: {
    ...mapActions({
      updateUserinfo: 'sUserinfo/updateUserinfo'
    }),

    /**
     * 查看申请人个人信息
     */
    memberDetail (row) {
      let self = this
      self.updateUserinfo({
        isShow: true,
        userId: row.userId
      })
    }
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
    }
    &__article {
      padding: 10px 20px;
      min-height: 100px;
      word-break: break-all;
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
        background: #999;
        height: 110px;
        margin: 5px 9px;
        width: 110px;
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
        width: 80px;
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
      &--info {
        float: left;
        min-height: 200px;
        margin-left: 20px;
        width: 406px;
      }
      &--poster {
        background: #ddd;
        float: left;
        height: 200px;
        width: 150px;
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
    padding: 20px 50px;
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
