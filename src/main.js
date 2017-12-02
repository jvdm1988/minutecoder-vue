import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/App.vue';
import axios from 'axios';
import hljs from 'highlight.js';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import 'vuetify/dist/vuetify.min.css';

import router from 'modules/router/router';
import store from 'store';

Vue.use(VueRouter);
Vue.use (Vuetify);
Vue.use (VeeValidate);

axios.defaults.baseURL = 'https://minute-coder.firebaseio.com';

Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value;
      }
      hljs.highlightBlock(target)
    });
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    });
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
