import { createStore } from "vuex"

export default createStore({
    state: {
        vars: {}
    },
    mutations: {
        set(state) {
            state.vars.items = new Array(10).fill(10).map((x, i) => i)
        }
    },
    actions: {
        fetch({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("set")
                    resolve()
                }, 5000)
            })
        }
    }
})
