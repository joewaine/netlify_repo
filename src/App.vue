<script>
import Nav from './components/Nav.vue'


export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
<style lang="scss">
@import "./styles/main";
</style>
<template>
  <div id="app">
  <Nav />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
