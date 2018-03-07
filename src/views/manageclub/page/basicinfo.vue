<template>
  <div
    v-loading="info.loading"
    class="s-box__manage">
    <el-form
      ref="form"
      class="s-form s-basicinfo__form"
      :model="info.form"
      label-width="80px"
      label-position="right">
      <el-form-item label="社团名称" required>
        <el-input
          :class="[!info.mustProp.name ? 's-input__empty' : '']"
          v-model="info.form.name"
          @focus="clearCheck('name')"
          placeholder="请输入社团名称">
        </el-input>
        <div v-if="!info.mustProp.name" class="s-form__empty">请填写 社团名称</div>
      </el-form-item>
      <el-form-item label="社团类型" required>
        <el-select
          :class="[!info.mustProp.type ? 's-input__empty' : '']"
          class="s-select__form"
          @focus="clearCheck('type')"
          v-model="info.form.type"
          placeholder="请选择社团类型">
          <el-option
            v-for="(type, index) in clubType"
            :key="index"
            :label="type.label"
            :value="type.value">
          </el-option>
        </el-select>
        <div v-if="!info.mustProp.type" class="s-form__empty">请选择 社团类型</div>
      </el-form-item>
      <el-form-item label="社团级别" required>
        <el-select
          :class="[!info.mustProp.level ? 's-input__empty' : '']"
          class="s-select__form"
          @focus="clearCheck('level')"
          v-model="info.form.level"
          placeholder="请选择社团级别">
          <el-option
            v-for="(level, index) in clubLevel"
            :key="index"
            :label="level.label"
            :value="level.value">
          </el-option>
        </el-select>
        <div v-if="!info.mustProp.level" class="s-form__empty">请选择 社团级别</div>
      </el-form-item>
      <el-form-item label="社团规模">
        <el-input
          v-model="info.form.scale"
          disabled
          placeholder="请输入社团规模">
        </el-input>
      </el-form-item>
      <el-form-item label="社团简介">
        <el-input
          v-model="info.form.introduction"
          type="textarea"
          :autosize="{ minRows: 2 }"
          placeholder="请输入社团简介...">
        </el-input>
      </el-form-item>
      <el-form-item label="社团公告">
        <el-input
          v-model="info.form.announcement"
          type="textarea"
          :autosize="{ minRows: 2 }"
          placeholder="请输入社团公告...">
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click.stop="updateForm">保 存</el-button>
        <el-button @click.stop="getBasicinfo">重置信息</el-button>
      </el-form-item>
    </el-form>
    <div class="s-basicinfo__logo">
      <div class="s-basicinfo__logo--image"></div>
      <div class="s-basicinfo__logo--button" @click.stop="uploadImage">上传图片</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'Basicinfo',
  computed: {
    ...mapGetters({
      clubType: 'clubType',
      clubLevel: 'clubLevel',
      info: 'viewsManageclubBasicinfo/info'
    })
  },
  methods: {
    ...mapActions({
      updateBasicinfo: 'viewsManageclubBasicinfo/updateBasicinfo',
      getBasicinfo: 'viewsManageclubBasicinfo/getBasicinfo'
    }),

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updateBasicinfo({
        clubId: '',
        loading: false,
        form: {
          name: '',
          type: '',
          level: '',
          scale: '',
          introduction: '',
          announcement: '',
          logo: ''
        },
        isUploadShow: false,
        mustProp: {
          name: true,
          type: true,
          level: true
        },
        packageData: {}
      })
    },

    /**
     * 上传数据打包
     */
    packageData () {
      let self = this
      let packageData = {}
      let data = cloneDeep(self.info.form)
      for (let prop in data) {
        if (prop !== 'scale') {
          if (data[prop] === null) {
            packageData[prop] = ''
          } else {
            packageData[prop] = data[prop]
          }
        }
      }
      packageData.clubId = self.info.clubId
      self.updateBasicinfo({
        packageData: packageData
      })
    },

    /**
     * 清除校验结果
     */
    clearCheck (prop) {
      let self = this
      self.info.mustProp[prop] = true
    },

    /**
     * 格式校验
     */
    checkFormat () {
      let self = this
      let check = cloneDeep(self.info.mustProp)
      for (let prop in check) {
        if ([null, ''].indexOf(self.info.form[prop]) > -1) {
          check[prop] = false
        } else {
          check[prop] = true
        }
      }
      self.updateBasicinfo({
        mustProp: check
      })
    },

    /**
     * 保存社团基本信息
     */
    async updateForm () {
      let self = this
      let isEmpty = false
      self.checkFormat()
      for (let item in self.info.mustProp) {
        if (!self.info.mustProp[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        self.packageData()
        let data = await self.$wPost('/deal/club/submit.do', self.info.packageData)
        if (data.data) {
          self.$message({
            message: '修改成功！',
            type: 'success'
          })
          self.updateBasicinfo({
            packageData: {}
          })
          self.getBasicinfo()
        }
      } else {
        self.$message.error('请完善必填信息')
      }
    },

    /**
     * 打开上传头像弹框
     */
    uploadImage () {
      let self = this
      self.updateBasicinfo({
        isUploadShow: true
      })
    }
  },
  mounted () {
    let self = this
    let clubId = Number(self.$route.query.id)
    self.updateBasicinfo({
      clubId: clubId
    })
    self.getBasicinfo()
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-basicinfo {
    width: 100%;
    &__form {
      float: left;
    }
    &__logo {
      float: left;
      height: 300px;
      margin-left: 200px;
      width: 200px;
      &--button {
        border: 1px solid $col-button-border;
        border-radius: 4px;
        cursor: pointer;
        color: $col-deepest-gray;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100%;
        &:hover {
          border-color: $col-normal-blue;
          color: $col-dark-blue
        }
      }
      &--image {
        background: #eee;
        border: 1px solid $col-border;
        height: 200px;
        margin-bottom: 20px;
        width: 100%;
      }
    }
  }
</style>
