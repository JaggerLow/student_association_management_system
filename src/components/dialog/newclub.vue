<template>
  <div v-if="newclubWindow.isShow" class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">创建社团</div>
      <div class="s-dialog__main">
        <el-form
          ref="form"
          class="s-newclub__form"
          :model="newclubWindow.form"
          label-width="80px"
          label-position="left"
          style="margin-top: 30px;">
          <el-form-item label="社团名称">
            <el-input
              :class="[!newclubWindow.mustProp.name ? 's-input__empty' : '']"
              v-model="newclubWindow.form.name"
              @focus="clearCheck('name')"
              placeholder="请输入社团名称">
            </el-input>
            <div v-if="!newclubWindow.mustProp.name" class="s-form__empty">请填写 社团名称</div>
          </el-form-item>
          <el-form-item label="社团类型">
            <el-select
              class="s-select__form"
              :class="[!newclubWindow.mustProp.type ? 's-input__empty' : '']"
              @focus="clearCheck('type')"
              v-model="newclubWindow.form.type"
              placeholder="请选择社团类型">
              <el-option
                v-for="(type, index) in clubType"
                :key="index"
                :label="type.label"
                :value="type.value">
              </el-option>
            </el-select>
            <div v-if="!newclubWindow.mustProp.type" class="s-form__empty">请选择 社团类型</div>
          </el-form-item>
          <el-form-item label="社团级别">
            <el-select
              class="s-select__form"
              :class="[!newclubWindow.mustProp.level ? 's-input__empty' : '']"
              v-model="newclubWindow.form.level"
              @focus="clearCheck('level')"
              placeholder="请选择社团级别">
              <el-option
                v-for="(level, index) in clubLevel"
                :key="index"
                :label="level.label"
                :value="level.value">
              </el-option>
            </el-select>
            <div v-if="!newclubWindow.mustProp.level" class="s-form__empty">请选择 社团级别</div>
          </el-form-item>
        </el-form>
        <div class="s-newclub__button" @click.stop="createClub">创建社团</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'SDialogNewclub',
  computed: {
    ...mapGetters({
      clubType: 'clubType',
      clubLevel: 'clubLevel',
      newclubWindow: 'viewsMyclubNewclub/newclubWindow'
    })
  },
  methods: {
    ...mapActions({
      updateNewclubWindow: 'viewsMyclubNewclub/updateNewclubWindow',
      updateMyclub: 'viewsMyclub/updateMyclub',
      getClubList: 'viewsMyclub/getClubList'
    }),

    /**
     * 清除校验结果
     */
    clearCheck (prop) {
      let self = this
      self.newclubWindow.mustProp[prop] = true
    },

    /**
     * 初始化页面信息
     */
    initData () {
      let self = this
      self.updateNewclubWindow({
        isShow: false,
        form: {
          name: '',
          type: '',
          level: ''
        },
        mustProp: {
          name: true,
          type: true,
          level: true
        },
        packageData: {}
      })
    },

    /**
     * 格式校验
     */
    checkFormat () {
      let self = this
      let check = cloneDeep(self.newclubWindow.mustProp)
      for (let prop in check) {
        if ([null, ''].indexOf(self.newclubWindow.form[prop]) > -1) {
          check[prop] = false
        } else {
          check[prop] = true
        }
      }
      self.updateNewclubWindow({
        mustProp: check
      })
    },

    /**
     * 上传数据打包
     */
    packageData () {
      let self = this
      let packageData = {}
      let data = cloneDeep(self.newclubWindow.form)
      for (let prop in data) {
        packageData[prop] = data[prop]
      }
      self.updateNewclubWindow({
        packageData: packageData
      })
    },

    /**
     * 关闭登录弹窗
     */
    closeWindow () {
      let self = this
      self.initData()
    },

    /**
     * 创建社团
     */
    async createClub () {
      let self = this
      let isEmpty = false
      self.checkFormat()
      for (let item in self.newclubWindow.mustProp) {
        if (!self.newclubWindow.mustProp[item]) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty) {
        self.packageData()
        let data = await self.$wPost('/deal/club/submit.do', self.newclubWindow.packageData)
        if (data.data) {
          self.$message({
            message: '创建成功',
            type: 'success'
          })
          self.updateMyclub({
            page: 1
          })
          self.getClubList()
          self.closeWindow()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-newclub {
    &__form {
      width: 400px;
    }
    &__button {
      background: $col-dark-blue;
      border-radius: 4px;
      color: $col-white;
      cursor: pointer;
      font-size: $font-size-h2;
      line-height: 36px;
      margin: 16px 0;
      height: 36px;
      text-align: center;
      width: 100%;
      &:hover {
        background: $col-normal-blue;
      }
    }
  }
</style>
