export default Vue.defineComponent({
    template: `
    <div>
        <div>App</div>
        <div>
            <button @click="increase">Count: {{count}}</button>
        </div>
    </div>
    `,
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increase() {
            this.count++
        },
    },
})
