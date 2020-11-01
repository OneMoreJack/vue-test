<template>
  <div>
    <router-link 
      v-for="menu in menuList" 
      :key="menu.name"
      :to="menu.path">
      menu.label
    </router-link>
  </div>
</template>

<script>
import { menuRoutes } from '@/router/routes'
export default {
  name: 'Menu',

  data() {
    return {
      menuList: [...menuRoutes[0].children]
    }
  }
}
</script>

<style>

</style>