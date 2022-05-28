import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueGravatar from 'vue3-gravatar'
import VueTheMask from 'vue-the-mask';

const app = createApp(App);

app.use(VueTheMask)
app.use(VueGravatar);
app.use(VueToast);
app.use(VueLoading);
app.use(store);
app.use(router);
app.mount('#app');

