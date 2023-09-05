import './assets/main.css'
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import VueFeather from 'vue-feather';
import theme from './theme/tailwind';

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {pt: theme});


app.component(VueFeather.name, VueFeather);
app.mount('#app')
