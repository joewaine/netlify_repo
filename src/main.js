import Vue from 'vue'
import VueRouter from 'vue-router'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(VueRouter);

import Home from './views/Home.vue';
import Overview from './views/Overview.vue';
import Stage1 from './views/Stage1.vue';
import Stage2 from './views/Stage2.vue';
import Stage3 from './views/Stage3.vue';
import Stage4 from './views/Stage4.vue';
import SalesStory from './views/SalesStory.vue';




const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/overview', component: Overview },
    { path: '/stage1', component: Stage1 },
    { path: '/stage2', component: Stage2 },
    { path: '/stage3', component: Stage3 },
    { path: '/stage4', component: Stage4 },
    { path: '/salesstory', component: SalesStory }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



