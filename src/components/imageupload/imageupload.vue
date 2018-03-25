<template>
  <div class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">{{ title }}</div>
      <div class="s-dialog__main">
        <div class="image-upload__main">
          <div class="image-upload__main--cropper">
            <vue-cropper
              ref="cropper"
              :img="cropperConfig.img"
              :outputSize="cropperConfig.size"
              :outputType="cropperConfig.outputType"
              :info="cropperConfig.info"
              :canScale="cropperConfig.canScale"
              :autoCrop="cropperConfig.autoCrop"
              :autoCropWidth="cropperConfig.autoCropWidth"
              :autoCropHeight="cropperConfig.autoCropHeight"
              :fixed="cropperConfig.fixed"
              :fixedNumber="cropperConfig.fixedNumber"
              @realTime="realTime"
              :full="cropperConfig.full">
            </vue-cropper>
          </div>
          <div class="image-upload__main--operate">
            <label class="image-upload__main--upload" for="uploads">上传图片</label>
            <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event)">
            <div class="image-upload__main--tips">建议尺寸：<br>不小于640*640像素</div>
            <div class="image-upload__main--circleimg">
              <img v-if="sendImg && sendImg !== ''" :src="sendImg">
            </div>
            <div class="image-upload__main--squareimg">
              <img v-if="sendImg && sendImg !== ''" :src="sendImg">
            </div>
          </div>
        </div>
      </div>
      <div class="image-upload__footer">
        <el-button type="primary" @click.stop="apiUploadImg" :loading="loading">确定</el-button>
        <el-button @click.stop="closeWindow">取消</el-button>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
import vueCropper from 'vue-cropper'
import data2blob from './data2blob.js'
import mimes from './mimes.js'
export default {
  name: 'SImageUpload',
  data () {
    return {
      previews: {},
      cropperConfig: {
        img: '',
        info: false,
        size: 1,
        outputType: 'png',
        canScale: false,
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixed: true,
        fixedNumber: [1, 1],
        full: false
      },
      sendImg: '',
      apiImg: '',
      isEdit: false,
      loading: false,
      waitImage: false
    }
  },
  props: {
    value: String,
    action: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '上传图片'
    }
  },
  components: {
    vueCropper
  },
  computed: {
  },
  methods: {

    /**
     * 初始化
     */
    initUpload () {
      let self = this
      self.previews = {}
      self.cropperConfig = {
        img: '',
        info: false,
        size: 1,
        outputType: 'png',
        canScale: false,
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixed: true,
        fixedNumber: [1, 1],
        full: false
      }
      self.sendImg = ''
      self.apiImg = ''
      self.isEdit = false
      self.loading = false
      self.waitImage = false
    },

    /**
     * 关闭窗口
     */
    closeWindow () {
      let self = this
      self.$emit('close', false)
    },

    /**
     * 接口上传图片
     */
    async apiUploadImg () {
      let self = this
      self.cropperConfig.full = true
      self.loading = true
      await self.finish('base64')
      let timer = window.setInterval(() => {
        if (self.apiImg && self.apiImg !== '') {
          window.clearInterval(timer)
          self.cropperConfig.full = false
          let fmData = new FormData()
          fmData.append('uploadFile', data2blob(self.apiImg, mimes['png']), 'image.png')
          self.getApi(fmData)
        }
      }, 500)
    },

    /**
     * 请求接口
     */
    async getApi (parm) {
      let self = this
      let data = await self.$sPost(self.action, parm)
      if (data.data) {
        await self.$emit('input', data.data)
        self.loading = false
        self.$emit('close', false)
      }
    },

    /**
     * 生成图片
     */
    async finish (type, num) {
      let self = this
      if (type === 'blob') {
        await self.$refs.cropper.getCropBlob((data) => {
          if (num === 1) {
            self.sendImg = window.URL.createObjectURL(data)
          } else {
            self.apiImg = window.URL.createObjectURL(data)
          }
        })
      } else {
        await self.$refs.cropper.getCropData((data) => {
          if (num === 1) {
            self.sendImg = data
          } else {
            self.apiImg = data
          }
        })
      }
    },

    /**
     * 添加预览
     */
    realTime (data) {
      let self = this
      self.previews = data
      self.finish('base64', 1)
    },

    /**
     * 上传图片
     */
    async uploadImg (e) {
      let self = this
      let file = e.target.files[0] // 上传图片
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        // self.$message.error('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      let reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') { // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        self.cropperConfig.img = data
      }
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      await reader.readAsArrayBuffer(file)
    }
  },
  mounted () {
    let self = this
    self.initUpload() // 初始化上传组件
    self.cropperConfig.img = self.value
    if (self.value !== '') {
      self.isEdit = true
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
</style>
