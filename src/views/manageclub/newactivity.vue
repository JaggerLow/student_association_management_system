<template>
  <div class="s-box__context">
    <div class="s-box__header">
      创建活动
    </div>
    <div class="s-newactivity">
      <el-form
        ref="form"
        class="s-form s-newactivity__form"
        :model="newactivity.form"
        label-width="80px"
        label-position="right"
        style="margin-top: 30px;">
        <el-form-item label="活动类型" required>
          <el-select
            class="s-select__form"
            :class="[!newactivity.mustProp.type ? 's-input__empty' : '']"
            @focus="clearCheck('type')"
            v-model="newactivity.form.type"
            placeholder="请选择活动类型">
            <el-option
              v-for="(type, index) in activityType"
              :key="index"
              :label="type.label"
              :value="type.value">
            </el-option>
          </el-select>
          <div v-if="!newactivity.mustProp.type" class="s-form__empty">请选择 活动类型</div>
        </el-form-item>
        <el-form-item label="活动标题" required>
          <el-input
            v-model="newactivity.form.title"
            @focus="clearCheck('title')"
            :class="[!newactivity.mustProp.title ? 's-input__empty' : '']"
            placeholder="请输入活动标题">
          </el-input>
          <div v-if="!newactivity.mustProp.title" class="s-form__empty">请填写 活动标题</div>
        </el-form-item>
        <el-form-item label="开始时间" required>
          <el-date-picker
            class="s-short-datepicker"
            @focus="clearCheck('startDate')"
            v-model="newactivity.form.startDate"
            :class="[!newactivity.mustProp.startDate ? 's-input__empty' : '']"
            type="date"
            placeholder="请选择开始日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-select
            class="s-select__form--short"
            @focus="clearCheck('startTime')"
            v-model="newactivity.form.startTime"
            :class="[!newactivity.mustProp.startTime ? 's-input__empty' : '']"
            placeholder="请选择开始时间">
            <el-option
              v-for="(time, index) in newactivity.timeList"
              :key="index"
              :label="time"
              :value="time">
            </el-option>
          </el-select>
          <div v-if="!newactivity.mustProp.startDate || !newactivity.mustProp.startTime" class="s-form__empty">请选择 开始时间</div>
        </el-form-item>
        <el-form-item label="结束时间" required>
          <el-date-picker
            class="s-short-datepicker"
            :class="[!newactivity.mustProp.endDate ? 's-input__empty' : '']"
            @focus="clearCheck('endDate')"
            v-model="newactivity.form.endDate"
            type="date"
            placeholder="请选择结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-select
            class="s-select__form--short"
            :class="[!newactivity.mustProp.endTime ? 's-input__empty' : '']"
            @focus="clearCheck('endTime')"
            v-model="newactivity.form.endTime"
            placeholder="请选择结束时间">
            <el-option
              v-for="(time, index) in newactivity.timeList"
              :key="index"
              :label="time"
              :value="time">
            </el-option>
          </el-select>
          <div v-if="!newactivity.mustProp.endDate || !newactivity.mustProp.endTime" class="s-form__empty">请选择 结束时间</div>
        </el-form-item>
        <el-form-item label="活动地点" required>
          <el-input
            @focus="clearCheck('place')"
            :class="[!newactivity.mustProp.place ? 's-input__empty' : '']"
            v-model="newactivity.form.place"
            placeholder="请输入活动地点">
          </el-input>
          <div v-if="!newactivity.mustProp.place" class="s-form__empty">请填写 活动地点</div>
        </el-form-item>
        <el-form-item label="活动海报" required>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="举办单位">
          <el-input
            v-model="newactivity.form.club"
            placeholder="请输入举办单位"
            disabled>
          </el-input>
        </el-form-item>
        <el-form-item label="活动描述" required>
          <el-input
            :class="[!newactivity.mustProp.description ? 's-input__empty' : '']"
            v-model="newactivity.form.description"
            @focus="clearCheck('description')"
            type="textarea"
            :autosize="{ minRows: 2 }"
            placeholder="请对活动进行描述...">
          </el-input>
          <div v-if="!newactivity.mustProp.description" class="s-form__empty">请填写 活动描述</div>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click.stop="updateForm">创建活动</el-button>
        </el-form-item>
      </el-form>
      <div class="s-newactivity__image">
        海报预览
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'Newactivity',
  computed: {
    ...mapGetters({
      activityType: 'activityType',
      newactivity: 'viewsManageclubNewactivity/newactivity'
    })
  },
  methods: {
    ...mapActions({
      updateNewactivity: 'viewsManageclubNewactivity/updateNewactivity'
    }),

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updateNewactivity({
        form: {
          type: '',
          title: '',
          startDate: '',
          startTime: '',
          endDate: '',
          endTime: '',
          poster: '',
          place: '',
          club: '',
          description: ''
        },
        mustProp: {
          type: true,
          title: true,
          startDate: true,
          startTime: true,
          endDate: true,
          endTime: true,
          // poster: true,
          place: true,
          description: true
        },
        timeList: [
          '00:00',
          '00:30',
          '01:00'
        ],
        packageData: {}
      })
    },

    /**
     * 清除校验结果
     */
    clearCheck (prop) {
      let self = this
      self.newactivity.mustProp[prop] = true
    },

    /**
     * 上传数据打包
     */
    packageData () {
      let self = this
      let packageData = {}
      let data = cloneDeep(self.newactivity.form)
      for (let prop in data) {
        if (['startDate', 'startTime', 'endDate', 'endTime'].indexOf(prop) === -1) {
          packageData[prop] = data[prop]
        }
      }
      packageData.startDate = `${data.startDate} ${data.startTime}`
      packageData.endDate = `${data.endDate} ${data.endTime}`
      self.updateNewactivity({
        packageData: packageData
      })
    },

    /**
     * 格式校验
     */
    checkFormat () {
      let self = this
      let check = cloneDeep(self.newactivity.mustProp)
      for (let prop in check) {
        if ([null, ''].indexOf(self.newactivity.form[prop]) > -1) {
          check[prop] = false
        } else {
          check[prop] = true
        }
      }
      self.updateNewactivity({
        mustProp: check
      })
    },

    /**
     * 提交创建活动
     */
    updateForm () {
      let self = this
      let isEmpty = false
      self.checkFormat()
      for (let item in self.newactivity.mustProp) {
        if (!self.newactivity.mustProp[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        self.packageData()
        console.log(self.newactivity.packageData)
      } else {
        self.$message.error('请完善必填信息')
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/core/var';
  .s-newactivity {
    min-height: 500px;
    overflow: hidden;
    width: 100%;
    &__form {
      float: left;
      margin-left: 30px;
    }
    &__image {
      background: #eee;
      float: right;
      height: 400px;
      margin-right: 200px;
      margin-top: 30px;
      width: 300px;
      z-index: 100;
    }
  }
</style>
