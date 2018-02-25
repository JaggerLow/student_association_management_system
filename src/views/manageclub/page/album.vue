<template>
  <div class="s-box__manage">
    <div class="s-box__manage--header">
      <span class="s-box__manage--title">社团相册</span>
      <el-upload
        class="upload-demo s-box__manage--button"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false">
        <el-button size="small" type="primary">上传图片</el-button>
      </el-upload>
    </div>
    <div class="s-album__main">
      <div
        v-for="(image, index) in album.imageList"
        :key="index"
        class="s-album__main--box">
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Album',
  computed: {
    ...mapGetters({
      album: 'viewsManageclubAlbum/album'
    })
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-album {
    &__main {
      margin-top: 20px;
      min-height: 400px;
      width: 100%;
      &--box {
        background: #ddd;
        float: left;
        height: 173px;
        margin: 0 10px 20px 10px;
        width: 230px;
      }
    }
  }
</style>
