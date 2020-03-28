var app = new Vue({
    el: '#app',
    data: {
        repo1: {
            html_url: '',
            name: '',
            description: '',
        },
        repo2: {
            html_url: '',
            name: '',
            description: '',
        },
        repo3: {
            html_url: '',
            name: '',
            description: '',
        },
        repo4: {
            html_url: '',
            name: '',
            description: '',
        },
        repo5: {
            html_url: '',
            name: '',
            description: '',
        },
        repo6: {
            html_url: '',
            name: '',
            description: '',
        },
    },
    methods: {},
    created: function() {
        this.$http.get('https://api.github.com/repos/Allan96/hackathon-anbima').then(response => {
            this.repo1 = response.body;
        }, response => {
            // error callback
        });

        this.$http.get('https://api.github.com/repos/Allan96/descubra').then(response => {
            this.repo2 = response.body;
        }, response => {
            // error callback
        });

        this.$http.get('https://api.github.com/repos/Allan96/EmailAPI').then(response => {
            this.repo3 = response.body;
        }, response => {
            // error callback
        });

        this.$http.get('https://api.github.com/repos/Allan96/chatbotVue').then(response => {
            this.repo4 = response.body;
        }, response => {
            // error callback
        });

        this.$http.get('https://api.github.com/repos/Allan96/Semana-OmniStack-10').then(response => {
            this.repo5 = response.body;
        }, response => {
            // error callback
        });
    }
});