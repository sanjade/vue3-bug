<template>
    <component-renderer :items="$store.state.vars.items"></component-renderer>
</template>

<script>
import { useStore } from "vuex"
export default {
    name: "App",
    setup() {
        const store = useStore()
        setTimeout(() => {
            store.commit("set")
        }, 2000)
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
