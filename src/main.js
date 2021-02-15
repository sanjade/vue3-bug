import { createApp } from "vue"
import App from "./App.vue"
import ComponentRenderer from "./components/ComponentRenderer"
import store from "./store"

const app = createApp(App)
app.use(store)
app.component("component-renderer", ComponentRenderer)
app.mount("#app")
