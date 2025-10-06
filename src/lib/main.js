import { createApp } from 'vue'
import App from '@/App/App.vue'
import router from '@/router'
import vuetify from '#/settings/vuetify/vuetify.js'

createApp(App).use(vuetify).use(router).mount('#app')
