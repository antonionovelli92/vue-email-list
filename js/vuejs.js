console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            mail: []

        }
    },
    mounted() {

    }
});

app.mount('#root');
