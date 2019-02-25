<script>
import Nav from './components/Nav.vue';
import HeaderModule from './components/HeaderModule.vue';
export default {
  name: 'app',
  components: {
    Nav,
    HeaderModule
  }
}
</script>
<style lang="scss">
@import "./styles/main";
</style>
<template>
  <div id="app">
  <HeaderModule />
  <Nav />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
