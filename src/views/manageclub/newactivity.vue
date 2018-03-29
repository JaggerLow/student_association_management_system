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
        <el-form-item label="活动海报">
          <el-upload
            name="uploadFile"
            class="upload-demo"
            action="/uploadImage.do"
            :on-success="saveImage"
            :show-file-list="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
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
        <div
          v-if="[null, ''].indexOf(newactivity.form.poster) > -1"
          class="s-newactivity__image--empty">
          海报预览
        </div>
        <img
          v-if="[null, ''].indexOf(newactivity.form.poster) === -1"
          :src="newactivity.form.poster"
          alt="活动海报">
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
      newactivity: 'viewsManageclubNewactivity/newactivity',
      mamageclub: 'viewsManageclub/mamageclub'
    })
  },
  methods: {
    ...mapActions({
      updateNewactivity: 'viewsManageclubNewactivity/updateNewactivity',
      getManageclubPremit: 'viewsManageclubNewactivity/getManageclubPremit',
      getTimes: 'viewsManageclubNewactivity/getTimes',
      updateNewForm: 'viewsManageclubNewactivity/updateNewForm'
    }),

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updateNewactivity({
        name: '',
        premit: '',
        clubId: '',
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
          place: true,
          description: true
        },
        timeList: [],
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
     * 保存海报
     */
    saveImage (response, file, fileList) {
      let self = this
      self.updateNewForm({
        poster: file.response.data
      })
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
      packageData.clubId = self.newactivity.clubId
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
    async updateForm () {
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
        let data = await self.$wPost('/deal/clubActivity/submit.do', self.newactivity.packageData)
        if (data.data) {
          self.$message({
            message: '活动创建成功',
            type: 'success'
          })
          self.$router.push(`/manageclub?id=${self.newactivity.clubId}`)
        }
      } else {
        self.$message.error('请完善必填信息')
      }
    }
  },
  async mounted () {
    let self = this
    let clubId = Number(self.$route.query.id)
    if (clubId) {
      self.getTimes()
      self.updateNewactivity({
        clubId: clubId
      })
      await self.getManageclubPremit()
      if ([1, 2].indexOf(self.newactivity.premit) === -1) {
        self.$message.error('你没有管理本社团的权限！')
        self.$router.push('/myclub')
      }
    } else {
      self.$message.error('无效的访问方式！')
      self.$router.push('/myclub')
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
      position: relative;
      width: 300px;
      &--empty {
        color: $col-deepest-gray;
        font-size: 25px;
        line-height: 400px;
        text-align: center;
        width: 100%;
      }
      img {
        left: 50%;
        height: 400px;
        width: 300px;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
</style>
