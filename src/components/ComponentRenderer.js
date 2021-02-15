import { compile, defineComponent, h, onMounted } from "vue"

export default defineComponent({
    name: "component-renderer",
    props: {
        html: {
            type: String,
            required: false
        }
    },
    render(context) {
        const html = context.html || "<div></div>"
        const toRender = defineComponent({
            setup() {
                function log(t) {
                    console.log(t)
                }
                onMounted(() => {
                    console.log("onMounted()")
                })
                return {
                    log
                }
            },
            render: compile(html)
        })

        return h(toRender)
    }
})
