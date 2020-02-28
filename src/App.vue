<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <greeting />
    <form-submitter />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Greeting from './components/Greeting.vue'
import FormSubmitter from './components/FormSubmitter'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Greeting,
    FormSubmitter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
