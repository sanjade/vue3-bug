<template>
    <component-renderer :html="html"></component-renderer>
</template>

<script>
export default {
    setup(props, context) {
        const html = `
        <component-renderer :html="'<p>Navbar</p>'" @click="log('Test')"></component-renderer>
        <p>BODY</p>
        <button  @click="$store.state.count++">Add</button>
        <div v-for="a in $store.state.count">{{ a }}</div>
        `

        return {
            html
        }
    }
}
</script>

<style>

</style>