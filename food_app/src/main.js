import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import router from './router';
import store from './store';

Vue.use(VueMaterial);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
