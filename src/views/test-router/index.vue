<template>
  <div>
    <el-button @click="handleClick">点击</el-button>
    <another />
    <h2>---</h2>
    <more-another></more-another>
  </div>
</template>

<script>
import Another from './another.vue'
import MoreAnother from './more-another.vue'
export default {
  components: {
    Another,
    MoreAnother
  },
  methods: {
    handleClick() {
      const h = this.$createElement
      console.log(this.$msgbox)
      this.$msgbox({
        title: '提示',
        message: h('div', null, [
          h('p', null, '以下信息，确定执行该操作吗'),
          h(Another, {
            attrs: {
              '_router': this.$router
            }
          }, '')
        ])
      })
    }
  }
}
</script>

<style>

</style>