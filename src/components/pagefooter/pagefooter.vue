<template>
  <div class="s-pagefooter">
    <div class="s-pagefooter__page">
      <div class="s-pagefooter__page--click">
        <i class="fa fa-chevron-circle-left" @click.stop="pageLeft"></i>
      </div>
      <div class="s-pagefooter__page--input">
        <input type="number" v-model="inputValue" @change="pageNumber"><span>/{{ count }}</span>
      </div>
      <div class="s-pagefooter__page--click">
        <i class="fa fa-chevron-circle-right" @click.stop="pageRight"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SPagefooter',
  data () {
    return {
      inputValue: 1
    }
  },
  props: {
    count: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    /**
     * 翻页
     */
    pageLeft () {
      let self = this
      let noticePage = self.inputValue
      noticePage--
      if (noticePage > 0) {
        self.inputValue = noticePage
        self.$emit('changePage', self.inputValue)
      } else {
        self.inputValue = 1
      }
    },
    pageRight () {
      let self = this
      let noticePage = self.inputValue
      noticePage++
      if (noticePage <= self.count) {
        self.inputValue = noticePage
        self.$emit('changePage', self.inputValue)
      } else {
        self.inputValue = self.count
      }
    },
    pageNumber (e) {
      let self = this
      let noticePage = e.target.value
      if (noticePage > self.count) {
        self.inputValue = self.count
      } else if (noticePage < 1) {
        self.inputValue = 1
      } else {
        self.inputValue = Number(noticePage)
      }
      self.$emit('changePage', self.inputValue)
    }
  },
  mounted () {
    let self = this
    self.inputValue = self.value
  }
}
</script>
