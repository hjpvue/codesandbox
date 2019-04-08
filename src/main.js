import "../src/assets/css/space.css";
import "../src/assets/css/master.css";
import "../src/assets/css/spinner.css";
import "../src/assets/css/less-space.scss";
import "../src/assets/css/master-space.scss";
import Vue from "vue";
import App from "./App.vue";



Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
