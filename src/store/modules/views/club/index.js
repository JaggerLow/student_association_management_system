let state = {
  club: {
    info: {
      name: '广州大学华软软件学院学生会',
      clubId: 100001,
      type: '团学组织',
      level: '校级组织',
      introduction: '这是社团简介，广州大学华软软件学院学生会',
      announcement: '这是社团公告',
      logo: '',
      isMember: false,
      activityList: [{
        type: '招新', // 活动类型 展示文案
        title: '快来加入学生会啦', // 活动标题
        startDate: '2018-02-24 8:00', // 开始时间
        endDate: '2018-02-24 8:00', // 结束时间
        place: '喷泉广场北边摊位', // 活动地点
        poster: '', // 活动海报
        description: '活动描述' // 活动描述
      }],
      albumList: [{
        url: '',
        id: ''
      },
      {
        url: '',
        id: ''
      },
      {
        url: '',
        id: ''
      }],
      memberList: [{
        image: '',
        username: '凉瓜牛肉饭',
        userId: 1234568
      },
      {
        image: '',
        username: 'cut picture boy',
        userId: 1234586
      }]
    }
  }
}

let getters = {
  club: state => state.club
}

let mutations = {}

let actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
