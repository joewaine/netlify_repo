<script>
import Nav from './components/Nav.vue'
import DownloadSlider from './components/DownloadSlider.vue'
import FeedbackSlider from './components/FeedbackSlider.vue'
import ShareSlider from './components/ShareSlider.vue'



export default {
  name: 'app',
  components: {
    Nav,
    DownloadSlider,
    ShareSlider,
    FeedbackSlider

  }
}
</script>
<style lang="scss">
@import "./styles/main";
</style>
<template>
  <div id="app">
    <DownloadSlider />
    <ShareSlider />
    <FeedbackSlider />


  <Nav />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
