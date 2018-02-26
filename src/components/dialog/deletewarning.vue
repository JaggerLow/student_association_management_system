<template>
  <div class="s-dialog">
    <div class="s-dialog__bak"></div>
    <div class="s-dialog__box">
      <div class="s-dialog__box--title">{{ title }}</div>
      <div class="s-dialog__main s-deletewarning">
        <div class="s-deletewarning__icon el-icon-warning"></div>
        <div class="s-deletewarning__text">{{ text }}</div>
      </div>
      <div class="s-deletewarning__footer">
        <div class="s-deletewarning__footer--button" @click.stop="submit">确定</div>
        <div class="s-deletewarning__footer--button s-deletewarning__footer--close" @click.stop="closeWindow">取消</div>
      </div>
      <div class="s-dialog__close fa fa-times" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SDialogDeletewarning',
  props: {
    value: String,
    title: {
      type: String,
      default: '删除弹框'
    },
    text: {
      type: String,
      default: '确定要删除该角色么?'
    },
    deletetype: Number,
    clubId: Number,
    id: Number
  },
  methods: {

    /**
     * 提交
     */
    submit () {
      let self = this
      self.$emit('close')
    },

    /**
     * 关闭弹窗
     */
    closeWindow () {
      let self = this
      self.$emit('close')
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/core/var";
  .s-deletewarning {
    height: 50px;
    overflow: hidden;
    width: 320px;
    &__icon {
      color: $col-noraml-yellow;
      float: left;
      font-size: 50px;
      line-height: 50px;
    }
    &__footer {
      align-items: center;
      display: flex;
      display: -webkit-flex;
      height: 36px;
      margin-top: 30px;
      justify-content: center;
      &--button {
        border: 1px solid $col-border;
        border-radius: 4px;
        color: $col-deepest-gray;
        cursor: pointer;
        height: 36px;
        line-height: 36px;
        text-align: center;
        width: 58px;
        &:hover {
          color: $col-dark-blue;
          border-color: $col-dark-blue;
        }
      }
      &--close {
        color: $col-dark-blue;
        border-color: $col-dark-blue;
        margin-left: 16px;
        &:hover {
          color: $col-white;
          background: $col-dark-blue;
          border-color: $col-dark-blue;
        }
      }
    }
    &__text {
      align-items: center;
      color: $col-deeper-gray;
      display: flex;
      display: -webkit-flex;
      float: left;
      font-size: 16px;
      height: 50px;
      margin-left: 30px;
      justify-content: left;
      width: 240px;
      word-break: break-all;
    }
  }
</style>
