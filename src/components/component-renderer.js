import { defineComponent, compile, h } from "vue"

export default defineComponent({
    name: "t-builder",
    inheritAttrs: false,
    setup(_, ctx) {
        const html = "<p>{{ attrs.items || 'loading...' }}</p>"
        const toRender = defineComponent({
            name: "ComponentRenderer",
            inheritAttrs: false,
            emits: [],
            props: {
                attrs: {
                    type: Object
                }
            },
            render: compile(html)
        })

        return () =>
            h(toRender, {
                attrs: ctx.attrs
            })
    }
})
