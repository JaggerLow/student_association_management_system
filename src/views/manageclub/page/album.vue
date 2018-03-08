<template>
  <div class="s-box__manage">
    <div class="s-box__manage--header">
      <span class="s-box__manage--title">社团相册</span>
      <el-upload
        name="uploadFile"
        class="upload-demo s-box__manage--button"
        :action="`/deal/clubPhoto/uploadPhoto.do?clubId=${album.clubId}`"
        :show-file-list="false"
        :on-success="uploadAlbum">
        <el-button size="small" type="primary">上传图片</el-button>
      </el-upload>
    </div>
    <div class="s-album__main">
      <div
        v-if="album.imageList.length === 0"
        class="s-album__listempty">
        该社团暂无照片
      </div>
      <div
        v-for="(image, index) in album.imageList"
        :key="index"
        class="s-album__main--box">
        <img :src="image.url" alt="社团相册">
        <div
          class="s-album__main--delete"
          @click.stop="deleteImg(image.id)">
          <i class="fa fa-times"></i>
        </div>
      </div>
    </div>
    <s-pagefooter
      v-if="album.count > 1"
      v-model="album.page"
      :count="album.count"
      @changePage="changePage">
    </s-pagefooter>
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
      updateAlbum: 'viewsManageclubAlbum/updateAlbum',
      getAlbumList: 'viewsManageclubAlbum/getAlbumList'
    }),

    /**
     * 页面数据初始化
     */
    initData () {
      let self = this
      self.updateAlbum({
        clubId: '',
        page: 1,
        count: 1,
        imageList: []
      })
    },

    /**
     * 翻页触发事件
     */
    changePage (val) {
      self.updateAlbum({
        page: val
      })
      self.getAlbumList()
    },

    /**
     * 上传相片
     */
    async uploadAlbum (response, file, fileList) {
      let self = this
      self.$message({
        message: '上传成功！',
        type: 'success'
      })
      self.getAlbumList()
    },

    /**
     * 删除图片
     */
    async deleteImg (id) {
      let self = this
      let packageData = {
        clubId: self.album.clubId,
        id: id
      }
      let data = await self.$wPost('/deal/clubPhoto/delete.do', packageData)
      if (data.data) {
        self.$message({
          message: '操作成功！',
          type: 'success'
        })
        self.getAlbumList()
      }
    }
  },
  mounted () {
    let self = this
    let clubId = Number(self.$route.query.id)
    if (clubId) {
      self.updateAlbum({
        clubId: clubId
      })
      self.getAlbumList()
    }
  },
  beforeDestroy () {
    let self = this
    self.initData()
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../styles/core/var';
  .s-album {
    &__listempty {
      color: $col-deepest-gray;
      font-size: 30px;
      height: 400px;
      line-height: 400px;
      text-align: center;
      width: 100%;
    }
    &__main {
      margin-top: 20px;
      min-height: 400px;
      width: 100%;
      &--box {
        background: $col-light-gray;
        float: left;
        height: 173px;
        margin: 0 10px 20px 10px;
        overflow: hidden;
        position: relative;
        width: 230px;
        img {
          max-height: 173px;
          max-width: 230px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 50;
        }
        &:hover {
          .s-album__main--delete {
            display: block !important;
          }
        }
      }
      &--delete {
        background: $col-light-gray;
        border-radius: 50%;
        color: $col-deepest-gray;
        cursor: pointer;
        display: none;
        height: 30px;
        line-height: 30px;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        width: 30px;
        z-index: 100;
      }
    }
  }
</style>
