<template>
  <div>
    <header>
      <Menu />
    </header>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './menu.vue'
export default {
  name: 'Layout',

  components: {
    Menu
  }
}
</script>

<style>

</style>