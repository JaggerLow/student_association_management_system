<template>
  <div>
    <full-calendar :events="fcEvents" lang="zh">
      <template slot="fc-header-left">
        <div class="left-title">我的考勤</div>
      </template>
      <template slot="fc-body-card">
        <div class="tips">注: <span class="fa fa-clock-o"></span> 表示该流程正在审批</div>
      </template>
    </full-calendar>
  </div>
</template>
<script>
import fullCalendar from 'vue-fullcalendar'
import moment from 'moment'
let demoEvents = [{
  title: '旷工: 上午',
  start: '2018-1-25',
  end: '2018-1-25',
  cssClass: 'red'
},
{
  title: '外出: 9:30-12:00',
  start: '2018-1-25',
  end: '2018-1-25',
  cssClass: 'normal'
},
{
  title: '加班: 20:00-22:50',
  start: '2018-1-25',
  end: '2018-1-25',
  cssClass: 'blue'
},
{
  title: '加班: 20:00-22:50',
  start: '2018-1-26',
  end: '2018-1-26',
  cssClass: 'blue'
},
{
  title: '出差: 下午',
  start: '2018-1-25',
  end: '2018-1-25',
  cssClass: 'normal'
},
{
  title: '迟到: 09:05',
  start: '2018-1-25',
  end: '2018-1-25',
  cssClass: 'red'
},
{
  title: '哺乳假: 09:00-10:00',
  start: '2018-1-29',
  end: '2018-1-29',
  cssClass: 'normal'
},
{
  title: '签退:18:23',
  start: '2018-1-29',
  end: '2018-1-29',
  cssClass: 'gray'
},
{
  title: '签到: 09:00',
  start: '2018-1-29',
  end: '2018-1-29',
  cssClass: 'gray'
}]

export default {
  name: 'DateTest',
  data () {
    return {
      fcEvents: demoEvents
    }
  },
  components: {
    fullCalendar
  },
  methods: {

    /**
     * 返回当前月
     */
    returnNow () {
      let self = this
      let newMonth = moment(new Date())
      self.$emit('change', newMonth)
    }
  }
}

</script>
<style lang="scss" scoped>
.return-now {
  cursor: pointer;
  color: #29cc29;
  &:hover {
    color: #26b31e;
  }
}
.left-title {
  color: #333;
  cursor: default;
  font-size: 16px;
}
.tips {
  color: #333;
  cursor: default;
  line-height: 40px;
  font-size: 12px;
  text-align: left;
}
</style>
