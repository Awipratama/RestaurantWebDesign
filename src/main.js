import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
const app = createApp(App);

app.use(router);
app.use(BootstrapIconsPlugin);
app.mount("#app");
