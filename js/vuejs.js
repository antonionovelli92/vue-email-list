console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            mails: [],
            mailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        getRandomMail() {
            axios.get(this.mailUrl)
                .then((response) => {
                    this.mails.push(response.data.response);
                    console.log(this.mails)
                })
        }

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getRandomMail();
        }
    }
});

app.mount('#root');
