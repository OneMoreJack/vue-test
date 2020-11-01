<template>
  <div>
    another
  </div>
</template>

<script>
export default {
  name: 'Another',

  mounted() {
    console.log('this', this)
    console.log('$router', this.$router || this.$attrs._router)
  }
}
</script>

<style>

</style>