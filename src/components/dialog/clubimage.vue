<template>
  <div v-show="image.show" class="s-dialog s-dialog__imageShow">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__imageclose fa fa-times" @click="closeimage"></div>
    <div
      v-if="image.index !== 0"
      class="s-dialog__imageleft el-icon-arrow-left"
      @click="changeLeftPic">
    </div>
    <div
      v-if="image.index !== image.list.length - 1"
      class="s-dialog__imageright el-icon-arrow-right"
      @click="changeRightPic">
    </div>
    <img :src="image.url" id="openPicture" ref="imageShow">
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SDialogClubimage',
  computed: {
    ...mapGetters({
      image: 'viewsClub/image'
    })
  },
  methods: {
    ...mapActions({
      updateImage: 'viewsClub/updateImage'
    }),

    /**
     * 关闭相簿
     */
    closeimage () {
      let self = this
      self.updateImage({
        show: false,
        index: 0,
        url: ''
      })
    },

    /**
     * 左滑图片
     */
    changeLeftPic () {
      let self = this
      let index = self.image.index
      if (index > 0) {
        index--
        self.updateImage({
          index: index,
          url: self.image.list[index].url
        })
      }
    },

    /**
     * 右滑图片
     */
    changeRightPic () {
      let self = this
      let index = self.image.index
      if (index < self.image.list.length) {
        index++
        self.updateImage({
          index: index,
          url: self.image.list[index].url
        })
      }
    }
  }
}
</script>
