import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Particles from "particles.vue";
import Home from "./views/Home";
import CreateProject from "@/views/CreateProject";
import Contacts from "@/views/Contacts";

Vue.use(Router);
Vue.prototype.$axios = axios;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Particles);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/createproject",
      name: "createProject",
      component: CreateProject,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')






