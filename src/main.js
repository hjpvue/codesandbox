import "../src/assets/css/space.css";
import "../src/assets/css/master.css";
import "../src/assets/css/spinner.css";
import "../src/assets/css/less-space.scss";
import "../src/assets/css/master-space.scss";
import '../node_modules/@fullcalendar/core/main.css';
import '../node_modules/@fullcalendar/daygrid/main.css';
import Vue from "vue";
import App from "./App.vue";



Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
