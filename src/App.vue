<script>
import Nav from './components/Nav.vue'
import DownloadSlider from './components/DownloadSlider.vue'


export default {
  name: 'app',
  components: {
    Nav,
    DownloadSlider
  }
}
</script>
<style lang="scss">
@import "./styles/main";
</style>
<template>
  <div id="app">
  <DownloadSlider />
  <Nav />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
