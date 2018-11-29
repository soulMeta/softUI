<template>
  <div id="app">
    <head-nav :now='now'></head-nav>
    <router-view/>
  </div>
</template>

<script>
// import './assets/css/base.css'
import headNav from './components/comon/headNav'
export default {
  name: 'App',
  components: {headNav},
  data(){
    return {
      now: 0
    }
  }
}
</script>

<style scoped>
</style>
