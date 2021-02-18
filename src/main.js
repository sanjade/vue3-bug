import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import ComponentRenderer from "./components/component-renderer"

const app = createApp(App)
app.use(store)
app.component("component-renderer", ComponentRenderer)
app.mount("#app")
