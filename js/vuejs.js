console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            number:10,
            isLoading: false,
            mails: [],
            mailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        // creo una mail random
        getRandomMail() {
            this.isLoading = true;
            axios.get(this.mailUrl)
                .then((response) => {
                    this.mails.push(response.data.response);
                }).catch(error => {
                    
                }).then(() => {
                    this.isLoading = false;

                });
        },
        getLength() {
            const wait = setInterval(() => {
                        if(this.mails.length === this.number){
                            this.isLoading = false;
                            clearInterval(alt);
                        }
                    }, 10)
        }

    },
    mounted() {
        // creo un ciclo per le 10 mail
        for (let i = 0; i < 10; i++) {
            this.getRandomMail();
        }
    }
});

app.mount('#root');
