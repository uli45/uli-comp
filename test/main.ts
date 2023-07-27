import { createApp } from "vue";
import App from "./app.vue";
import uliComp from "@uli-comp/components";
const app = createApp(App);
app.use(uliComp);
app.mount("#app");